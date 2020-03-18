import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { environment } from "../../../../environments/environment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, Routes, ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';



@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"]
})
export class MainpageComponent implements OnInit {
  location:Location;
  constructor(
    private userCommServ: UsercommonserviceService,
    private toastServ: ToastrService,
    private fb: FormBuilder,
    private bsConfig: BsDatepickerConfig,
    private router: Router,
    private route: ActivatedRoute,
 
  ) {}
  myDateValue: Date;
  today = new Date();
  errorMsg: any;
  isModal: boolean = false;
  lat: any;
  long: any;
  service_id: any;
  pageSize: any = 10;
  page: any = 1;

  searchSalonForm: FormGroup;

  minDate: Date;
  maxDate: Date;
  categoriesList: any;
  serviceName: any;
  searchTerm: any;
  serviceIdSelected: any;
  categoriesForm: FormGroup;

  ngOnInit() {

    console.log(environment.env)

    if(environment.env === "prod"){
        console.log(location.protocol)

      if(location.protocol === "http:"){
        console.log(":")
       window.location.href = location.href.replace('http', 'https'); 
       console.log(window.location)
      }


    }
    
    this.minDate = new Date();
    this.myDateValue = new Date();
    this.fetchCategories();
    this.categoriesForm = this.fb.group({
      service: ["", Validators.required]
    });

    this.searchSalonForm = this.fb.group({
      service_id: ["", Validators.required],
      date: ["", Validators.required],
      lat: ["", Validators.required],
      long: ["", Validators.required]
    });
  }
  onDateChange(event) {
    let date = new Date(event).toISOString();
    this.searchSalonForm.get("date").setValue(date);
    this.searchSalonForm.updateValueAndValidity();
  }
  openServiceModal() {
    this.isModal = true;
  }
  dismissModal() {
    this.isModal = false;
  }
  searchSalons(data) {
    if (data.date && data.service_id && data.lat && data.long) {
      this.errorMsg = null;
      sessionStorage.setItem("userprefrence", JSON.stringify(data));
      this.userCommServ.setUserPrefrence(data);
      this.router.navigate(["/list"]);
    } else {
      this.errorMsg = "Please fill the required fileds";
    }
  }

  fetchCategories() {
    this.userCommServ.getCategoriesList().subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.categoriesList = data["data"];
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server-Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  selectedService(data) {
    this.service_id = data["service"]["_id"];
    this.serviceName = data["service"]["name"];
    this.searchSalonForm.get("service_id").setValue(this.service_id);
    this.searchSalonForm.updateValueAndValidity();
    this.isModal = false;
  }
  getAddress(place: Object) {
    var address = place;

    this.lat = place["geometry"].location.lat();
    this.long = place["geometry"].location.lng();

    this.searchSalonForm.get("lat").setValue(this.lat);

    this.searchSalonForm.updateValueAndValidity();

    this.searchSalonForm.get("long").setValue(this.long);

    this.searchSalonForm.updateValueAndValidity();
  }
  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(data => {
      this.lat = data["coords"].latitude;
      this.long = data["coords"].longitude;
      this.searchSalonForm.get("lat").setValue(this.lat);

      this.searchSalonForm.updateValueAndValidity();

      this.searchSalonForm.get("long").setValue(this.long);

      this.searchSalonForm.updateValueAndValidity();
    });
  }
}
