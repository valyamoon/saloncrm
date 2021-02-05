import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { countries } from "../../../admin/country";
import { PhoneValidator } from "../../../validators";
import { BehaviorSubject, Subject } from "rxjs";
import {
  getCorrectPhone,
  getCountryCode,
  getNationalNumber,
} from "../../../helpers";
import { GeocoderService } from "../../../services";

@Component({
  selector: "app-editsalon",
  templateUrl: "./editsalon.component.html",
  styleUrls: ["./editsalon.component.scss"],
})
export class EditsalonComponent implements OnInit {
  submitSalonDetails: FormGroup;
  closetime: any;
  opentime: any;
  countriesData: any = countries;
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
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject<string>("");
  location: Subject<string> = new Subject<string>();

  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;
  salonDetailsData: any;
  userid: any;
  salonid: any;
  constructor(
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
  }
  ngOnInit() {
    sessionStorage.setItem("isReload", JSON.stringify(true));
    this.user_id = sessionStorage.getItem("userId");
    this.userid = this.user_id;

    this.submitSalonDetails = this.fb.group({
      name: ["", [Validators.required]],
      contact: ["", [Validators.required]],
      code: ["", [Validators.required]],
      location: ["", [Validators.required]],
      image: null,
      opentime: ["", [Validators.required]],
      closetime: ["", [Validators.required]],
      lat: [""],
      long: [""],
    });

    this.getsalonsData(this.userid);

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
    //this.editSalonDetailsShow();
  }

  handleCountryCode(code: string) {
    const { char } = countries.find((x) => x.code == code);
    this.selectedCountry.next(char);
  }

  get contact() {
    return this.submitSalonDetails.get("contact");
  }
  openTime(data) {}
  closeTime(data) {}
  timeChanged(data) {}

  onOpenTimeSelect(event) {}

  onCloseTimeSelect(event) {}

  cancelSalonUpdate() {
    this.submitSalonDetails.reset();
    this.router.navigate(["/salon/home/profile"]);
  }
  uploadImage(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.submitSalonDetails.patchValue({ image: file });
    this.submitSalonDetails.get("image").updateValueAndValidity();
  }

  getsalonsData(data) {
    let dataToPass = {
      user_id: data,
    };
    this.commServ.getSalonDetailsData(dataToPass).subscribe(
      async (data: any) => {
        if (data["code"] === 200) {
          this.salonDetailsData = data["data"];
          this.salonid = data["data"]._id;
          const [longitude, latitude] = data.data.location.coordinates;
          this.lat = latitude;
          this.lng = longitude;
          let location = await this.geocoder.getLocationByCoords(
            latitude,
            longitude
          );

          this.submitSalonDetails
            .get("name")
            .setValue(this.salonDetailsData.name);
          this.submitSalonDetails
            .get("code")
            .setValue(
              countries.find(
                (x) =>
                  x.code ==
                  String(getCountryCode(this.salonDetailsData.contact))
              ).code
            );
          this.submitSalonDetails
            .get("contact")
            .setValue(String(getNationalNumber(this.salonDetailsData.contact)));
          this.submitSalonDetails.get("location").setValue(location);
          this.submitSalonDetails
            .get("opentime")
            .setValue(this.salonDetailsData.opentime);
          this.submitSalonDetails
            .get("closetime")
            .setValue(this.salonDetailsData.closetime);
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

  getAddress(place: Object) {
    var address = place;
    //console.log(address);
    this.lat = place["geometry"].location.lat();
    this.lng = place["geometry"].location.lng();

    this.submitSalonDetails.get("lat").setValue(this.lat);

    this.submitSalonDetails.updateValueAndValidity();

    this.submitSalonDetails.get("long").setValue(this.lng);

    this.submitSalonDetails.updateValueAndValidity();
  }
  // editSalonDetailsShow() {
  //   this.submitSalonDetails.get("name").setValue(this.salonDetailsData.name);
  //   this.submitSalonDetails
  //     .get("contact")
  //     .setValue(this.salonDetailsData.contact);
  //   this.submitSalonDetails
  //     .get("location")
  //     .setValue(this.salonDetailsData.location);
  //   this.submitSalonDetails
  //     .get("opentime")
  //     .setValue(this.salonDetailsData.opentime);
  //   this.submitSalonDetails
  //     .get("closetime")
  //     .setValue(this.salonDetailsData.closetime);
  // }

  updatetSalon(data) {
    let dataToPass = {
      salon_id: this.salonid,
      name: data.name,
      location: data.location,
      contact: data.contact,
      code: data.code,
      image: data.image,
      opentime: data.opentime,
      closetime: data.closetime,
      lat: this.lat,
      long: this.lng,
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
    postData.append("code", dataToPass.code);
    postData.append("salon_id", dataToPass.salon_id);
    postData.append("lat", dataToPass.lat);
    postData.append("long", dataToPass.long);

    var options = { content: postData };

    this.commServ.updateSalonDetails(postData).subscribe(
      (data) => {
        if (data["code"] === 200) {
          this.router.navigate(["/salon/home/profile"]);
          this.toastrServ.success(
            "Salon Details Updated Successfully",
            "Success",
            {
              timeOut: 2000,
            }
          );

          if (JSON.parse(sessionStorage.getItem("isReload"))) {
            window.location.reload();
            sessionStorage.setItem("isReload", JSON.stringify(false));
          }
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

  async getCurrentLocation() {
    try {
      const { lat, long } = await this.geocoder.getCurrentPosition();
      this.lat = lat;
      this.lng = long;

      const location = await this.geocoder.getLocationByCoords(
        this.lat,
        this.lng
      );

      this.location.next(location);
    } catch (err) {}
  }
}
