import { Component, OnInit } from "@angular/core";
import { countries } from "../../../admin/country";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "ngx-angular-social-login";
@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.scss"]
})
export class UserloginComponent implements OnInit {
  countrycodes: any;
  phoneNumber: any;
  code: any;
  loginForm: FormGroup;
  registerUserForm: FormGroup;
  otpVerificationForm: FormGroup;
  isOtpShow: boolean = false;
  showRegisterForm: boolean;
  constructor(
    private fb: FormBuilder,
    private userCommServ: UsercommonserviceService,
    private toastServ: ToastrService,
    private socialAuthService: AuthService
  ) {}

  ngOnInit() {
    this.countrycodes = countries;

    this.loginForm = this.fb.group({
      code: ["", Validators.required],
      phone: ["", Validators.required]
    });
    this.otpVerificationForm = this.fb.group({
      token: ["", Validators.required]
    });

    this.registerUserForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

  completeOtpVerification(data) {
    let dataToPass = {
      code: "+" + this.code,
      phone: this.phoneNumber,
      via: "sms",
      token: data.token
    };
    this.userCommServ.verifyOtp(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.registerUserForm
            .get("phone")
            .setValue(data["data"]["user"]["phone"]);
          this.registerUserForm.updateValueAndValidity();

          if (data["data"]["isVerified"] === true) {
            document.getElementById("otpForm").style.display = "none";
            this.showRegisterForm = true;
          } else {
            this.showRegisterForm = false;
          }

          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }

  getOtpOnCall() {
    let dataToPass = {
      code: "+" + this.code,
      phone: this.phoneNumber,
      via: "call"
    };
    this.userCommServ.getOtpForVerification(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.isOtpShow = true;
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }

  registerUser(data) {
    console.log(data);
  }

  getOtp(data) {
    this.phoneNumber = data.phone;
    this.code = data.code;
    let dataToPass = {
      code: "+" + data.code,
      phone: data.phone,
      via: "sms"
    };
    this.userCommServ.getOtpForVerification(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.isOtpShow = true;
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + " sign in data : ", userData);
      // Now sign-in with userData
    });
  }
}
