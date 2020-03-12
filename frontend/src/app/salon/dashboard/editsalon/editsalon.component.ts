import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { countries } from "../../../admin/country";

@Component({
  selector: "app-editsalon",
  templateUrl: "./editsalon.component.html",
  styleUrls: ["./editsalon.component.scss"]
})
export class EditsalonComponent implements OnInit {
  submitSalonDetails: FormGroup;
  closetime: any;
  opentime: any;
  countriesData: any = countries;
  showNow: boolean = false;
  numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
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

  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;
  salonDetailsData: any;
  userid: any;
  salonid: any;
  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    private router: Router
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  ngOnInit() {
    sessionStorage.setItem("isReload", JSON.stringify(true));
    this.user_id = sessionStorage.getItem("userId");
    this.userid = this.user_id;

    this.getsalonsData(this.userid);
    this.submitSalonDetails = this.fb.group({
      name: ["", Validators.required],
      contact: [
        "",
        [Validators.required, Validators.pattern(this.numberPattern)]
      ],
      code: ["", Validators.required],
      salonaddress: ["", Validators.required],
      image: null,
      opentime: ["", Validators.required],
      closetime: ["", Validators.required],
      lat: [""],
      long: [""]
    });
    //this.editSalonDetailsShow();
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
      user_id: data
    };
    this.commServ.getSalonDetailsData(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonDetailsData = data["data"];
          this.salonid = data["data"]._id;

          this.submitSalonDetails
            .get("name")
            .setValue(this.salonDetailsData.name);
          this.submitSalonDetails
            .get("code")
            .setValue(this.salonDetailsData.code);
          this.submitSalonDetails
            .get("contact")
            .setValue(this.salonDetailsData.contact);
          this.submitSalonDetails
            .get("salonaddress")
            .setValue(this.salonDetailsData.salonaddress);
          this.submitSalonDetails
            .get("opentime")
            .setValue(this.salonDetailsData.opentime);
          this.submitSalonDetails
            .get("closetime")
            .setValue(this.salonDetailsData.closetime);
        } else {
          this.toastrServ.error("Failed to fetch salon details", "error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 1000
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
  //     .get("salonaddress")
  //     .setValue(this.salonDetailsData.salonaddress);
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
      salonaddress: data.salonaddress,
      contact: data.contact,
      code: data.code,
      image: data.image,
      opentime: data.opentime,
      closetime: data.closetime,
      lat: this.lat,
      long: this.lng
    };

    const postData = new FormData();
    postData.append("name", dataToPass.name);
    postData.append("image", dataToPass.image);
    postData.append("salonaddress", dataToPass.salonaddress);
    postData.append("opentime", dataToPass.opentime);
    postData.append("closetime", dataToPass.closetime);
    postData.append("contact", dataToPass.contact);
    postData.append("code", dataToPass.code);
    postData.append("salon_id", dataToPass.salon_id);
    postData.append("lat", dataToPass.lat);
    postData.append("long", dataToPass.long);

    var options = { content: postData };

    this.commServ.updateSalonDetails(postData).subscribe(
      data => {
        if (data["code"] === 200) {
          this.router.navigate(["/salon/home/profile"]);
          this.toastrServ.success(
            "Salon Details Updated Successfully",
            "Success",
            {
              timeOut: 2000
            }
          );

          if (JSON.parse(sessionStorage.getItem("isReload"))) {
            window.location.reload();
            sessionStorage.setItem("isReload", JSON.stringify(false));
          }
        } else {
          this.showPendingApproval = false;
          this.toastrServ.error("Failed To Update Salon Details", "", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 2000
        });
      }
    );
  }
}
