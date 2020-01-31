import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-salondetails",
  templateUrl: "./salondetails.component.html",
  styleUrls: ["./salondetails.component.scss"]
})
export class SalondetailsComponent implements OnInit {
  submitSalonDetails: FormGroup;
  closetime: any;
  opentime: any;
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
  editSalonDetails: boolean = false;
  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;
  salonDetailsData: any;
  userid: any;
  salonid: any;

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
        console.log("DDD", this.lat, this.lng);
      });
    }
  }

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.userid = this.user_id;

    this.getsalonsData(this.userid);
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

    console.log(this.user_id);
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

  onOpenTimeSelect(event) {
    console.log("event", event);
  }

  onCloseTimeSelect(event) {
    console.log("event", event);
  }

  uploadImage(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.submitSalonDetails.patchValue({ image: file });
    this.submitSalonDetails.get("image").updateValueAndValidity();
  }

  checkIsApprovedProfile() {
    this.checkIsApproved = JSON.parse(sessionStorage.getItem("isApproved"));
    console.log(this.checkIsApproved);
  }

  submitSalon(data) {
    console.log("INSIDE DATA", JSON.stringify(data));
    console.log(this.user_id);
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

    console.log("POSTDATA", postData);

    var options = { content: postData };
    console.log(options);

    console.log("DATATOPASS", dataToPass);
    this.commServ.saveSalonDetails(postData).subscribe(
      data => {
        if (data["code"] === 200) {
          this.showPendingApproval = true;
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

  openTime(data) {
    console.log(data);
  }
  closeTime(data) {
    console.log(data);
  }
  timeChanged(data) {
    console.log(data);
  }
  cancelSalonUpdate() {
    this.editSalonDetails = false;
  }

  getsalonsData(data) {
    let dataToPass = {
      user_id: data
    };
    this.commServ.getSalonDetailsData(dataToPass).subscribe(
      (data: any) => {
        console.log(data);
        if (data["code"] === 200) {
          this.salonDetailsData = data["data"];
          this.salonid = data["data"]._id;
          console.log(this.salonid);
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

  editSalonDetailsShow() {
    console.log("this.salonDetailsData", this.salonDetailsData);
    this.editSalonDetails = true;
    this.submitSalonDetails.get("name").setValue(this.salonDetailsData.name);
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
  }

  updatetSalon(data) {
    console.log("ASSSSSAAAA", data);
    let dataToPass = {
      salon_id: this.salonid,
      name: data.name,
      salonaddress: data.salonaddress,
      contact: data.contact,
      image: data.image,
      opentime: data.opentime,
      closetime: data.closetime
    };

    const postData = new FormData();
    postData.append("name", dataToPass.name);
    postData.append("image", dataToPass.image);
    postData.append("salonaddress", dataToPass.salonaddress);
    postData.append("opentime", dataToPass.opentime);
    postData.append("closetime", dataToPass.closetime);
    postData.append("contact", dataToPass.contact);
    postData.append("salon_id", dataToPass.salon_id);

    var options = { content: postData };

    this.commServ.updateSalonDetails(postData).subscribe(
      data => {
        if (data["code"] === 200) {
          this.editSalonDetails = false;
          this.toastrServ.success(
            "Salon Details Updated Successfully",
            "Success",
            {
              timeOut: 2000
            }
          );
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
