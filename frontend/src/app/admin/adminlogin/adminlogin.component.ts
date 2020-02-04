import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from "./admin.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../auth.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-adminlogin",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.scss"]
})
export class AdminloginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  adminLogin: FormGroup;

  constructor(
    private toastServ: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.adminLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ["", Validators.required]
    });
  }

  resetPassword() {
    this.router.navigate(["forget-password"]);
  }

  /**
   * Function is use to login Admin
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  loginAdmin(data) {
    let dataToPass = {
      email: data.email,
      password: data.password,
      role: "admin"
    };
    this.adminServ.login(dataToPass).subscribe(
      (data: any) => {
        if (data.code === 200) {
          this.toastServ.success("Logged In Successfully", "", {
            timeOut: 3000
          });
          console.log("DATA", data);
          sessionStorage.setItem("userDetails", data["data"]["userInfo"].email);

          this.authServ.sendToken(data.data.token);

          this.router.navigate(["admin/home"]);
        } else {
          this.toastServ.error("Invalid Login details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastServ.error("Failed to Login", error, {
          timeOut: 3000
        });
      }
    );
  }
}
