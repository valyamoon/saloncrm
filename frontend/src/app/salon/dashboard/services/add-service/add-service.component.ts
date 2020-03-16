import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
import { CommonService } from "../../common.service";
import { AuthService } from "../../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-service",
  templateUrl: "./add-service.component.html",
  styleUrls: ["./add-service.component.scss"]
})
export class AddServiceComponent implements OnInit {
  serviceForm: FormGroup;
  user_id: any;
  categoryList: any = [];
  salonData: any;
  noRecordsFound: boolean;
  servicesList: any;
  service_id = new FormControl();

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.serviceForm = this.fb.group({
      category_id: ["", Validators.required],
      services: this.fb.array([this.createService()])
    });
  }

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData();
    this.getCategotyList();
  }
  get serviceArray() {
    return <FormArray>this.serviceForm.get("services");
  }
  addNewService() {
    this.serviceArray.push(this.createService());
  }
  createService() {
    return this.fb.group({
      service_id: [],
      price: [],
      duration: []
    });
  }

  resetForm() {
    this.router.navigate(["salon/home/profile"]);
  }
  getSalonData() {
    let data = {
      user_id: this.user_id
    };
    this.commServ.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
        } else {
          this.toastrServ.error("Invalid salon details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastrServ.error("Failed to get salon data", error, {
          timeOut: 3000
        });
      }
    );
  }
  getCategotyList() {
    let postData = {
      type: "categories"
    };

    this.commServ.getCategories(postData).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.categoryList = data["data"];
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Categories", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  getServiceList($event) {
    let postData = {
      category_id: $event.value
    };
    this.commServ.getServices(postData).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          let serviceArr = [];
          data["data"].forEach(element => {
            let serviceData = {
              id: element._id,
              name: element.name
            };
            serviceArr.push(serviceData);
          });
          this.servicesList = serviceArr;
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Services", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  saveService(dataToPass) {
    dataToPass.salon_id = this.salonData._id;

    this.commServ.addEmpService(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.toastrServ.success("Service Added", "Success", {
            timeOut: 2000
          });
          this.router.navigate(["salon/home/profile"]);
        } else {
          // this.isAddModal = true;
          this.toastrServ.error("Failed To Add", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  removeField(index) {
    if (this.serviceArray.length == 1) return false;
    else this.serviceArray.removeAt(index);
  }
}
