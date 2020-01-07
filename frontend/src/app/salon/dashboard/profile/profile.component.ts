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
  lat: any;
  lng: any;
  user_id: any;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService
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
      contact: ["", Validators.required],
      salonaddress: ["", Validators.required]
    });

    this.authServ.currentIds.subscribe(data => {
      localStorage.setItem("userId", JSON.stringify(data));
    });
  }
  uploadImage(event) {
    console.log("event", event);
  }
  submitSalon(data) {
    this.user_id = localStorage.getItem("userId");

    let dataToPass = {
      name: data.name,
      salonaddress: data.salonaddress,
      contact: data.contact,
      lat: this.lat,
      long: this.lng,
      user_id: this.user_id
    };
    this.commServ.saveSalonDetails(dataToPass).subscribe(data => {
      console.log("USERSAVED", data);
    });
  }
}
