import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../../salon/login/login.service";
import { AuthService } from "../../../salon/auth.service";
import { MatTableDataSource } from "@angular/material";

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
  displayedColumns = ["email", "action"];
  adminCountTotal: any;
  adminList: any;
  pageSize: any = 5;
  registerAdminForm: FormGroup;
  isLoader: boolean;
  dataSource: any;
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
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ])
      ]
    });
  }

  get email() {
    return this.registerAdminForm.get("email");
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  get password() {
    return this.registerAdminForm.get("password");
  }

  openRegisterModal() {
    this.isAddModal = true;
  }
  paginate(event) {
    this.page = event.pageIndex + 1;

    this.count = event.pageSize;
    this.fetchAllAdmins();
  }

  dismissModal() {
    this.isAddModal = false;
  }
  registerUser(data) {
    this.isLoader = true;
    let dataToPass = {
      role: "admin",
      email: data.email,
      password: data.password
    };
    this.logServ.signUpSalon(dataToPass).subscribe(
      (res: any) => {
        if (res.code === 200) {
          this.isLoader = false;
          this.toastrServ.success("Registered Successfully", "Please Login", {
            timeOut: 1000
          });
          this.fetchAllAdmins();
          this.registerAdminForm.reset();
          this.isAddModal = false;
          this.authServ.sendToken(res.data.token);
        } else if (res.code === 201) {
          this.toastrServ.warning("User Already Exist", "Please Login", {
            timeOut: 1000
          });
          this.isLoader = false;
          this.isAddModal = false;
        } else {
          this.isLoader = false;
          this.toastrServ.error("Failed to register", "Please try again", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.error("Server - Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  fetchAllAdmins() {
    this.isLoader = true;
    let dataToPass = {
      type: "admin",
      pageSize: this.count,
      page: this.page
    };
    this.adminServ.fetchAllUsersCommon(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.isLoader = false;
          //   console.log(data["data"]["data"]);
          this.adminList = data["data"]["data"];
          this.dataSource = new MatTableDataSource(this.adminList);
          this.adminCountTotal = data["data"]["count"];
          if (this.adminList.length == 0) {
            this.noRecordsFound = true;
          }
          //    console.log("BEHERE", this.adminList, this.adminCountTotal);
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.error("Server - Error", error.error["message"], {
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
