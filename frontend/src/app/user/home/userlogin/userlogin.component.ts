import { Component, OnInit, ViewChild } from "@angular/core";
import { countries } from "../../../admin/country";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";
import { AuthServService } from "../auth-serv.service";
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "ngx-angular-social-login";
import { Router } from "@angular/router";
import { AllservService } from "../../../allserv.service";
@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.scss"]
})
export class UserloginComponent implements OnInit {
  @ViewChild("mySelect", { static: false }) mySelect;
  phoneNumber: any;
  socialLoginID: any;
  countrycodes: any;

  searchterm: any;
  firstName: any;
  LastName: any;
  previousRoute: any = "/home";
  EmailID: any;
  loggedInVia: any;
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
    private socialAuthService: AuthService,
    private authServ: AuthServService,
    private router: Router,
    private allServ: AllservService
  ) {}

  ngOnInit() {
    this.countrycodes = countries;

    this.allServ.getPrevRoute().subscribe((data: any) => {
      this.previousRoute = data;
    });

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

  onFocus() {
    this.mySelect.open();
  }

  completeOtpVerification(data) {
    var dataToPass = {};
    if (data.token) {
      dataToPass = {
        code: "+" + this.code,
        phone: this.phoneNumber,
        via: "sms",
        token: data.token
      };

      this.userCommServ.verifyOtp(dataToPass).subscribe(
        (data: any) => {
          if (data["code"] === 200) {
            if (data["data"]["isalreadyexist"] === true) {
              this.authServ.sendToken(data["data"]["token"]);

              sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
              sessionStorage.setItem(
                "username",
                data["data"]["user"]["firstName"]
              );

              this.router.navigate([this.previousRoute]);
            } else if (data["data"]["isalreadyexist"] === false) {
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
          }
        },
        error => {
          this.toastServ.error(error.error["message"], "", {
            timeOut: 1000
          });
        }
      );
    } else if (data.socialLoginId) {
      dataToPass = {
        email: data.email,
        socialLoginId: data.socialLoginId
      };

      this.userCommServ.verifyOtp(dataToPass).subscribe(
        (data: any) => {
          if (data["code"] === 200) {
            if (data["data"]["isalreadyexist"] === true) {
              this.authServ.sendToken(data["data"]["token"]);

              sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
              sessionStorage.setItem("emailID", data["data"]["user"]["email"]);
              sessionStorage.setItem(
                "username",
                data["data"]["user"]["firstName"]
              );
              this.router.navigate([this.previousRoute]);
            } else if (data["data"]["isalreadyexist"] === false) {
              this.registerUserForm
                .get("phone")
                .setValue(data["data"]["user"]["phone"]);
              this.registerUserForm.updateValueAndValidity();

              if (data["data"]["isVerified"] === true) {
                //  document.getElementById("otpForm").style.display = "none";
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
          }
        },
        error => {
          this.toastServ.error(error.error["message"], "", {
            timeOut: 1000
          });
        }
      );
    }
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
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
    let dataToPass = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      role: "user",
      isVerified: true,
      socialLoginId: this.socialLoginID,
      loggedInVia: this.loggedInVia
    };

    this.userCommServ.registerUser(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });

          this.authServ.sendToken(data["data"]["token"]);
          sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
          sessionStorage.setItem("username", data["data"]["user"]["firstName"]);
          this.router.navigate(["/home"]);
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
      if (userData) {
        var fullName: any;
        fullName = userData["name"];
        fullName.split(" ", 2);
        this.firstName = fullName.split(" ", 2)[0];
        this.LastName = fullName.split(" ", 2)[1];
        this.EmailID = userData["email"];
        this.socialLoginID = userData["id"];
        this.loggedInVia = userData["provider"];

        this.registerUserForm.get("firstName").setValue(this.firstName);
        this.registerUserForm.get("lastName").setValue(this.LastName);
        this.registerUserForm.get("email").setValue(this.EmailID);
        this.registerUserForm.updateValueAndValidity();
        document.getElementById("mobileNoForm").style.display = "none";
        this.showRegisterForm = true;
      }

      let dataToPass = {
        email: this.EmailID,
        socialLoginId: this.socialLoginID
      };

      this.completeOtpVerification(dataToPass);

      // Now sign-in with userData
    });
  }
}
