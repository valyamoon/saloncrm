import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"]
})
export class MainpageComponent implements OnInit {
  constructor(
    private userCommServ: UsercommonserviceService,
    private toastServ: ToastrService,
    private fb: FormBuilder
  ) {}
  myDateValue: Date;
  today = new Date();
  isModal: boolean = false;
  minDate: Date;
  maxDate: Date;
  categoriesList: any;
  serviceName: any;
  searchTerm: any;
  serviceIdSelected: any;
  categoriesForm: FormGroup;

  ngOnInit() {
    this.minDate = new Date();
    this.myDateValue = new Date();
    this.fetchCategories();
    this.categoriesForm = this.fb.group({
      service: ["", Validators.required]
    });
  }
  onDateChange(myDateValue: Date) {
    console.log(this.myDateValue);
  }
  openServiceModal() {
    this.isModal = true;
  }
  dismissModal() {
    this.isModal = false;
  }

  fetchCategories() {
    this.userCommServ.getCategoriesList().subscribe(
      (data: any) => {
        console.log("data", data);
        if (data["code"] === 200) {
          this.categoriesList = data["data"];
          console.log(this.categoriesList);
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
    this.serviceIdSelected = data["service"]["_id"];
    this.serviceName = data["service"]["name"];
    console.log(this.serviceIdSelected);
    this.isModal = false;
  }
}
