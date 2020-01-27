import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/salon/login/login.service";
import { AuthService } from "src/app/salon/auth.service";

@Component({
  selector: "app-manage-admin",
  templateUrl: "./manage-admin.component.html",
  styleUrls: ["./manage-admin.component.scss"]
})
export class ManageAdminComponent implements OnInit {
  isAddModal: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  modalHeaderText = "Register Admin";
  page: any;
  limit: any = 0;
  count: any = 5;
  toggle: boolean;
  noRecordsFound: boolean = false;
  disabled: boolean = true;
  displayedColumns = ["email", "isactive", "action"];
  adminCountTotal: any;
  adminList: any;
  pageSize: any = 5;
  registerAdminForm: FormGroup;
  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService,
    private fb: FormBuilder,
    private logServ: LoginService,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Manage Admin");
    this.fetchAllAdmins();
    this.registerAdminForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ["", Validators.required]
    });
  }

  openRegisterModal() {
    this.isAddModal = true;
  }
  paginate(event) {
    // console.log(event);
    this.page = event.pageIndex + 1;
    // console.log("c", this.count);
    //console.log("p", this.page);
    this.count = event.pageSize;
    this.fetchAllAdmins();
  }

  dismissModal() {
    this.isAddModal = false;
  }
  registerUser(data) {
    let dataToPass = {
      role: "admin",
      email: data.email,
      password: data.password
    };
    this.logServ.signUpSalon(dataToPass).subscribe(
      (res: any) => {
        if (res.code === 200) {
          this.toastrServ.success("Registered Successfully", "Please Login", {
            timeOut: 1000
          });
          this.fetchAllAdmins();
          this.isAddModal = false;
          this.authServ.sendToken(res.data.token);
        } else if (res.code === 201) {
          this.toastrServ.warning("User Already Exist", "Please Login", {
            timeOut: 1000
          });
          this.isAddModal = false;
        } else {
          this.toastrServ.error("Failed to register", "Please try again", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server - Error", error.error, {
          timeOut: 1000
        });
      }
    );
  }

  fetchAllAdmins() {
    let dataToPass = {
      type: "admin",
      pageSize: this.count,
      page: this.page
    };
    this.adminServ.fetchAllUsersCommon(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          //   console.log(data["data"]["data"]);
          this.adminList = data["data"]["data"];
          this.adminCountTotal = data["data"]["count"];
          if (this.adminList.length == 0) {
            this.noRecordsFound = true;
          }
          //    console.log("BEHERE", this.adminList, this.adminCountTotal);
        }
      },
      error => {
        this.toastrServ.error("Server - Error", error.error, {
          timeOut: 1000
        });
      }
    );
  }

  deleteAdmin(data) {
    //console.log(data);
  }
  onChange(data) {
    //console.log(this.toggle, data);
    // if (data["checked"] === true) {
    //   let dataToPass = {
    //     type: "admin"
    //     // _id:
    //   };
    //   //this.adminServ.activeUser()
    // } else if (e["checked"] === false) {
    // }
  }
}
