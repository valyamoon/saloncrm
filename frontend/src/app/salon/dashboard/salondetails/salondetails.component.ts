import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { countries } from "../../../admin/country";
import { BehaviorSubject, Subject } from "rxjs";
import { PhoneValidator } from "../../../validators";
import { getCorrectPhone } from "../../../helpers";
import { GeocoderService } from "../../../services";

@Component({
  selector: "app-salondetails",
  templateUrl: "./salondetails.component.html",
  styleUrls: ["./salondetails.component.scss"],
})
export class SalondetailsComponent implements OnInit {
  submitSalonDetails: FormGroup;
  closetime: any;
  countriesData: any = countries;
  salonEmail: any;
  opentime: any;
  showNow: boolean = false;
  lat: any;
  lng: any;
  chosenTime: any;
  formVal: any;
  min: any;
  user_id: any;
  selectedFile: File;
  checkIsApproved: boolean = false;
  tempUrl: string | ArrayBuffer;
  imageTemp: any;
  public url = <any>"";
  editSalonDetails: boolean = false;
  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;
  salonDetailsData: any;
  userid: any;
  salonid: any;
  isApprovedStatus: boolean;
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject<string>("");
  location: Subject<string> = new Subject<string>();

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    private router: Router,
    private geocoder: GeocoderService
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    navigator.geolocation.getCurrentPosition((pos) => {});
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {});

    this.salonEmail = sessionStorage.getItem("email");
    this.user_id = sessionStorage.getItem("userId");
    this.userid = this.user_id;
    this.isApprovedStatus = JSON.parse(sessionStorage.getItem("isApproved"));

    this.chechIsApprovedStatus(this.isApprovedStatus);

    this.submitSalonDetails = this.fb.group({
      name: ["", Validators.required],
      contact: ["", [Validators.required]],
      code: ["", Validators.required],
      location: ["", Validators.required],
      image: null,
      opentime: ["", Validators.required],
      closetime: ["", Validators.required],
      timezonestring: [""],
      lat: [""],
      long: [""],
    });

    this.selectedCountry.subscribe((code) => {
      this.submitSalonDetails
        .get("contact")
        .setValidators(PhoneValidator(code));
      this.submitSalonDetails.get("contact").updateValueAndValidity();
    });

    this.location.subscribe((x) => {
      this.submitSalonDetails.get("location").setValue(x);
      this.submitSalonDetails.get("location").updateValueAndValidity();
    });

    this.checkIsApprovedProfile();
    this.user_id = sessionStorage.getItem("userId");

    this.checkInitialApprovalStatus = JSON.parse(
      sessionStorage.getItem("isSubmitted")
    );
    if (this.checkInitialApprovalStatus == true) {
      this.showPendingApproval = true;
    } else {
      this.showPendingApproval = false;
    }
  }

  handleCountryCode(code: string) {
    this.selectedCountry.next(code);
  }

  async getCurrentLocation() {
    try {
      const { lat, long } = await this.geocoder.getCurrentPosition();
      this.lat = lat;
      this.lng = long;

      if (this.lng && this.lat) {
        this.toastrServ.success("Got your location", "", {
          timeOut: 1000,
        });
      } else {
        this.toastrServ.error("Your location is not loaded", "", {
          timeOut: 1000,
        });
      }
      const location = await this.geocoder.getLocationByCoords(
        this.lat,
        this.lng
      );

      this.location.next(location);
    } catch (err) {}
  }

  getAddress(place) {
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();

    this.submitSalonDetails.get("lat").setValue(this.lat);

    this.submitSalonDetails.updateValueAndValidity();

    this.submitSalonDetails.get("long").setValue(this.lng);

    this.submitSalonDetails.updateValueAndValidity();
  }

  chechIsApprovedStatus(data) {
    if (data === true) {
      this.router.navigate(["/salon/home/profile"]);
    } else {
    }
  }

  get contact() {
    return this.submitSalonDetails.get("contact");
  }

  onOpenTimeSelect(event) {}

  onCloseTimeSelect(event) {}

  logout() {
    this.authServ.logout();
    sessionStorage.clear();
  }

  uploadImage(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.submitSalonDetails.patchValue({ image: file });
    this.submitSalonDetails.get("image").updateValueAndValidity();
  }

  checkIsApprovedProfile() {
    this.checkIsApproved = JSON.parse(sessionStorage.getItem("isApproved"));
  }

  submitSalon(data) {
    let dataToPass = {
      name: data.name,
      location: data.location,
      contact: data.contact,
      lat: this.lat,
      long: this.lng,
      image: data.image,
      timezonestring: Intl.DateTimeFormat().resolvedOptions().timeZone,
      user_id: this.user_id,
      opentime: data.opentime,
      closetime: data.closetime,
    };

    if (!this.lat && !this.lng) {
      this.toastrServ.warning("Please select your location", "", {
        timeOut: 1000,
      });
    } else {
      const postData = new FormData();
      postData.append("name", dataToPass.name);
      postData.append("image", dataToPass.image);
      postData.append("lat", dataToPass.lat);
      postData.append("long", dataToPass.long);
      postData.append("location", dataToPass.location);
      postData.append("opentime", dataToPass.opentime);
      postData.append("closetime", dataToPass.closetime);
      postData.append("timezonestring", dataToPass.timezonestring);
      postData.append(
        "contact",
        getCorrectPhone(dataToPass.contact, this.selectedCountry.getValue())
      );
      postData.append("user_id", dataToPass.user_id);
      postData.append("email", this.salonEmail);

      var options = { content: postData };

      this.commServ.saveSalonDetails(postData).subscribe(
        (data) => {
          if (data["code"] === 200) {
            this.showPendingApproval = true;
            this.toastrServ.success(
              "Salon Details Submitted Successfully",
              "Waiting For Admin Approval",
              {
                timeOut: 2000,
              }
            );
          } else {
            this.showPendingApproval = false;
            this.toastrServ.error("Failed To Submit Salon Details", "", {
              timeOut: 2000,
            });
          }
        },
        (error) => {
          this.toastrServ.error("Server Error", error, {
            timeOut: 2000,
          });
        }
      );
    }
  }

  openTime(data) {}
  closeTime(data) {}
  timeChanged(data) {}
  cancelSalonUpdate() {
    this.editSalonDetails = false;
  }

  getsalonsData(data) {
    let dataToPass = {
      user_id: data,
    };
    this.commServ.getSalonDetailsData(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonDetailsData = data["data"];
          this.salonid = data["data"]._id;
        } else {
          this.toastrServ.error("Failed to fetch salon details", "error", {
            timeOut: 1000,
          });
        }
      },
      (error) => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 1000,
        });
      }
    );
  }

  editSalonDetailsShow() {
    this.editSalonDetails = true;
    this.submitSalonDetails.get("name").setValue(this.salonDetailsData.name);
    this.submitSalonDetails
      .get("contact")
      .setValue(this.salonDetailsData.contact);
    this.submitSalonDetails
      .get("location")
      .setValue(this.salonDetailsData.location);
    this.submitSalonDetails
      .get("opentime")
      .setValue(this.salonDetailsData.opentime);
    this.submitSalonDetails
      .get("closetime")
      .setValue(this.salonDetailsData.closetime);
  }

  updatetSalon(data) {
    let dataToPass = {
      salon_id: this.salonid,
      name: data.name,
      location: data.location,
      contact: data.contact,
      image: data.image,
      opentime: data.opentime,
      closetime: data.closetime,
    };

    const postData = new FormData();
    postData.append("name", dataToPass.name);
    postData.append("image", dataToPass.image);
    postData.append("location", dataToPass.location);
    postData.append("opentime", dataToPass.opentime);
    postData.append("closetime", dataToPass.closetime);
    postData.append(
      "contact",
      getCorrectPhone(dataToPass.contact, this.selectedCountry.getValue())
    );
    postData.append("salon_id", dataToPass.salon_id);

    var options = { content: postData };

    this.commServ.updateSalonDetails(postData).subscribe(
      (data) => {
        if (data["code"] === 200) {
          this.editSalonDetails = false;
          this.toastrServ.success(
            "Salon Details Updated Successfully",
            "Success",
            {
              timeOut: 2000,
            }
          );
        } else {
          this.showPendingApproval = false;
          this.toastrServ.error("Failed To Update Salon Details", "", {
            timeOut: 2000,
          });
        }
      },
      (error) => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 2000,
        });
      }
    );
  }
}
