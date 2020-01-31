import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  submitSalonDetails: FormGroup;
  closetime: any;
  opentime: any;
  showNow: boolean = false;
  numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  isSubmitted: boolean = false;
  lat: any;
  min: any;
  lng: any;
  chosenTime: any;
  formVal: any;
  user_id: any;
  selectedFile: File;
  checkIsApproved: boolean = true;
  tempUrl: string | ArrayBuffer;
  public url = <any>"";
  salonData: any;
  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
    this.submitSalonDetails = this.fb.group({
      name: ["", Validators.required],
      contact: [
        "",
        [Validators.required, Validators.pattern(this.numberPattern)]
      ],
      salonaddress: ["", Validators.required],
      image: null,
      opentime: ["", Validators.required],
      closetime: ["", Validators.required]
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

  get contact() {
    return this.submitSalonDetails.get("contact");
  }

  onOpenTimeSelect(event) {}

  onCloseTimeSelect(event) {}

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
      salonaddress: data.salonaddress,
      contact: data.contact,
      lat: this.lat,
      long: this.lng,
      image: data.image,
      user_id: this.user_id,
      opentime: data.opentime,
      closetime: data.closetime
    };

    const postData = new FormData();
    postData.append("name", dataToPass.name);
    postData.append("image", dataToPass.image);
    postData.append("lat", dataToPass.lat);
    postData.append("long", dataToPass.long);
    postData.append("salonaddress", dataToPass.salonaddress);
    postData.append("opentime", dataToPass.opentime);
    postData.append("closetime", dataToPass.closetime);
    postData.append("contact", dataToPass.contact);
    postData.append("user_id", dataToPass.user_id);

    var options = { content: postData };

    this.commServ.saveSalonDetails(postData).subscribe(
      data => {
        if (data["code"] === 200) {
          this.showPendingApproval = true;
          this.isSubmitted = true;
          sessionStorage.setItem(
            "isSubmitted",
            JSON.stringify(this.isSubmitted)
          );

          this.toastrServ.success(
            "Salon Details Submitted Successfully",
            "Waiting For Admin Approval",
            {
              timeOut: 2000
            }
          );
        } else {
          this.showPendingApproval = false;
          this.toastrServ.error("Failed To Submit Salon Details", "", {
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
