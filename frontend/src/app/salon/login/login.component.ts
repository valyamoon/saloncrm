import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  salonLoginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  headerText: any = "Login";
  isLogin: boolean = true;
  userData: any;

  constructor(
    private toastServ: ToastrService,
    private authServ: AuthService,
    private router: Router,
    private logServ: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.salonLoginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ["", Validators.required]
    });
  }

  /**
   * Function is use to go to signup page
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  goToSignUp() {
    this.isLogin = false;
    this.headerText = "Sign up";
  }

  /**
   * Function is use go to login page
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  goToLogin() {
    this.isLogin = true;
    this.headerText = "Login";
  }
  /**
   * Function is use to login salon
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  salonLogin(data) {
    let dataToPass= {
      email:data.email,
      password:data.password,
      role:"salon"
    }
    this.logServ.loginSalon(dataToPass).subscribe((data: any) => {
      if (data.code === 200) {
        this.toastServ.success("Logged In Successfully", "", {
          timeOut: 3000
        });
        this.userData = data.data;
        this.authServ.sendIdS(data.data["userInfo"]["_id"]);
        //(data.data['userInfo']['_id']);

        this.authServ.sendToken(data.data.token);
        this.router.navigate(["salon/home"]);
      } else {
        this.toastServ.error("Invalid Login details", "", {
          timeOut: 3000
        });
      }
    },error=>{
      this.toastServ.error("Failed to login", error, {
        timeOut: 3000
      });

    });
  }
  /**
   * Function is use to register salon
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  salonRegister(data) {
    let dataToPass = {
      role: "salon",
      email: data.email,
      password: data.password
    };
    this.logServ.signUpSalon(dataToPass).subscribe((res: any) => {
      if (res.code === 200) {
        this.toastServ.success("Registered Successfully", "Please Login", {
          timeOut: 3000
        });

        this.authServ.sendToken(res.data.token);
      } else if (res.code === 201) {
        this.toastServ.warning("User Already Exist", "Please Login", {
          timeOut: 3000
        });
      } else {
        this.toastServ.error("Failed to register", "Please try again", {
          timeOut: 3000
        });
      }
    });
  }
}
