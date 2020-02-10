import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../../common.service";
import { AuthService } from "../../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.scss"]
})
export class AddEmployeeComponent implements OnInit {
  user_id: any;
  noRecordsFound: boolean;

  categoryList: any = [];
  categoryCount: number;
  category_id: any;
  serviceList: any = [];
  employeeForm: FormGroup;

  salonData: any;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData(this.user_id);
    this.employeeForm = this.fb.group({
      name: ["", Validators.compose([Validators.required])]
    });
  }

  get name() {
    return this.employeeForm.get("name");
  }

  getSalonData(userId) {
    // console.log("GetUser ID ", userId);
    let data = {
      user_id: userId
    };
    this.commServ.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
          // console.log("sss", this.salonData);
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

  resetForm() {
    this.router.navigate(["salon/home/profile"]);
  }
  saveEmployee(data) {
    let dataToPass = {
      name: data.name,
      salon_id: this.salonData._id
    };
    console.log("DATA", data);
    this.commServ.addEmployee(dataToPass).subscribe(
      data => {
        console.log("DATA", data);
        if (data["code"] === 200) {
          this.toastrServ.success("Employee Added", "Success", {
            timeOut: 2000
          });
          this.employeeForm.reset();
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
}
