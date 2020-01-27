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
  showNow: boolean = false;
  numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  isSubmitted: boolean = false;
  lat: any;
  lng: any;
  user_id: any;
  selectedFile: File;
  checkIsApproved: boolean = true;
  tempUrl: string | ArrayBuffer;
  public url = <any>'';
  salonData: any;
  showPendingApproval: boolean = false;
  checkInitialApprovalStatus: boolean;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,

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
      image: null
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

  uploadImage(event) {
    console.log("++++event", event);
    if (event.target.files && event.target.files[0]) {
      console.log("files", event.target.files);
      console.log("file", event.target.files);
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {// called once readAsDataURL is completed
        this.url = false;
        console.log("event", event.target);
        console.log("event2", event);
        this.tempUrl = (<FileReader>event.target).result;// read file as data url
        console.log("temoURL", this.tempUrl);
      }
      reader.readAsDataURL(event.target.files[0]);
      let file = <File>event.target.files[0];
      console.log("======files======", file);
      // this.Adminservice.addService(file)
      //this.submitSalonDetails.get('image').setValue(file);
      const Image = this.submitSalonDetails.get('image');
      Image.setValue(file, event.target.files[0]);
      this.submitSalonDetails.updateValueAndValidity();

      console.log("======this.addServiceForm======", this.submitSalonDetails);
    }

  }

  checkIsApprovedProfile() {
    this.checkIsApproved = JSON.parse(sessionStorage.getItem("isApproved"));

  }

  submitSalon(data) {
    console.log("datais", data);
    //this.user_id = sessionStorage.getItem("userId");
    console.log(this.user_id);
    let dataToPass = {
      name: data.name,
      salonaddress: data.salonaddress,
      contact: data.contact,
      lat: this.lat,
      long: this.lng,
      user_id: this.user_id,
      image: data.image
    };
    console.log("DATATOPASS", dataToPass);
    this.commServ.saveSalonDetails(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.showPendingApproval = true;
          this.isSubmitted = true;
          sessionStorage.setItem("isSubmitted", JSON.stringify(this.isSubmitted));

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
