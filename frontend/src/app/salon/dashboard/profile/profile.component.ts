import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  submitSalonDetails: FormGroup;
  numberPattern =/^(\+\d{1,3}[- ]?)?\d{10}$/;
  lat: any;
  lng: any;
 private user_id: any;
  selectedFile: File;
  url: any;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        console.log("DDD",this.lat,this.lng);
      });
    }
  }

  ngOnInit() {
    this.submitSalonDetails = this.fb.group({
      name: ["", Validators.required],
      contact: ["", [Validators.required, Validators.pattern(this.numberPattern)]],
      salonaddress: ["", Validators.required]
    });

  //   this.authServ.currentIds.subscribe(data => {
  //  //  sessionStorage.setItem("userId", data);
  //     this.user_id = data;
  //   });
  this.user_id = sessionStorage.getItem('userId');
  console.log(this.user_id);
  }

  get contact() { return this.submitSalonDetails.get('contact'); }




  uploadImage(event) {
    this.selectedFile = event.target.files;
    console.log("SelectedFile", this.selectedFile);
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = event => {
    };
  }
  submitSalon(data) {
    console.log("datais",data);
    //this.user_id = sessionStorage.getItem("userId");
    console.log(this.user_id);
    let dataToPass = {
      name: data.name,
      salonaddress: data.salonaddress,
      contact: data.contact,
      lat: this.lat,
      long: this.lng,
      user_id: this.user_id
    };
    console.log("DATATOPASS",dataToPass);
    this.commServ.saveSalonDetails(dataToPass).subscribe(data => {
      console.log("USERSAVED", data);
    });
  }

  



}
