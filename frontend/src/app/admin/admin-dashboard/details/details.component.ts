import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { countries } from "../../country";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  adminDetailsForm: FormGroup;
  countriesData: any = countries;
  adminDataToPass: any;
  adminDetails: any;
  isModal: boolean = false;
  user_id: any;
  isAdd: boolean;
  isAddCompleted: boolean = true;
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.adminDataToPass = {
      type: "admin"
    };
    this.getAdminDetails(this.adminDataToPass);
    this.user_id = sessionStorage.getItem("userId");

    this.adminServ.setHeaderText("Manage Admin Details");
    this.adminDetailsForm = this.fb.group({
      phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11)
        ])
      ],
      code: ["", Validators.required],
      about: [""]
    });
  }

  get phone() {
    return this.adminDetailsForm.get("phone");
  }
  openAddCategoryModal(data) {
    this.isModal = true;
    if (data === "add") {
      this.isAdd = true;
    } else if (data === "edit") {
      this.adminDetailsForm.get("phone").setValue(this.adminDetails.phone);
      this.adminDetailsForm.get("code").setValue(this.adminDetails.code);
      this.adminDetailsForm.get("about").setValue(this.adminDetails.about);
      this.isAdd = false;
    }
  }
  addDetail(data) {
    let dataToPass = {
      admin_id: this.user_id,
      phone: data.phone,
      code: data.code,
      about: data.about
    };
    this.adminServ.addAdminDetails(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getAdminDetails(this.adminDataToPass);
          this.adminDetailsForm.reset();
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
  updateDetails(data) {
    // console.log(data);
    let dataToPass = {
      admin_id: this.user_id,
      phone: data.phone,
      code: data.code,
      about: data.about
    };

    this.adminServ.updateAdminDetails(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getAdminDetails(this.adminDataToPass);
          this.isModal = false;
          this.adminDetailsForm.reset();
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  getAdminDetails(data) {
    let dataToPass = {
      type: "admin"
    };
    this.adminServ.getAdminDetails(dataToPass).subscribe(
      (data: any) => {
        console.log(data["data"].length);
        if (data["code"] === 200) {
          this.adminDetails = data["data"];

          if (this.adminDetails !== null) {
            this.isAddCompleted = false;
          } else {
            this.isAddCompleted = true;
          }
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  dismissModal() {
    this.isModal = false;
  }
}
