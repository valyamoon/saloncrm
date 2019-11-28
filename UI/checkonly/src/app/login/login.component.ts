import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser,
  GoogleLoginProvider
} from "angularx-social-login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  countries: any;
  loginForm: FormGroup;
  registerUser: FormGroup;
  showOTP: boolean;
  userDetails: any = [];
  loggedInVia: any;
  socialUserDetails: any = [];
  verifyNumber: FormGroup;
  countryCodes: any;
  showOtherDetails: boolean;
  messageToShow: any;
  isVerified: boolean;
  userDataToPass: any;
  showMobileNumber: boolean;

  constructor(
    private fb: FormBuilder,
    private comSer: CommonService,
    private router: Router,
    private authService: AuthService
  ) {}

  setAuthCheck(loggedInVia) {
    console.log(loggedInVia);
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
      this.userDetails = this.user;
      console.log("this", this.userDetails);
      this.socialUserDetails = {
        firstName: this.userDetails["firstName"],
        lastName: this.userDetails["lastName"],
        socialId: this.userDetails["id"],
        email: this.userDetails["email"],
        loggedInVia: loggedInVia,
        isVerified: true
      };
      let dataToPass = this.socialUserDetails;
      this.comSer.verifyNumber(dataToPass).subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            console.log("SOCALLLLLLLLLLLLLLLLLLLLLLLLL");
            this.showMobileNumber = true;
            console.log("this.showMobileNumber", this.showMobileNumber);
            this.registerUser.get("phone").setValidators([Validators.required]);
            this.showOtherDetails = true;
            this.registerUser.get("firstName").setValue(data.firstName);
            this.registerUser.get("lastName").setValue(data.lastName);
            this.registerUser.get("email").setValue(data.email);
          }
          if (data["isalreadyexist"] == false) {
            this.isVerified = true;
            this.showOtherDetails = true;
          }

          // this.messageToShow = data["sucess"];
          if (data.hasOwnProperty("error")) {
            this.messageToShow = data["error"];
          }
        },
        error => {
          this.messageToShow = error["error"];
          console.log(error);
        }
      );
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      mobileNumber: [
        "",
        [
          Validators.required,
          Validators.pattern("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$")
        ]
      ],
      countryCode: ["", Validators.required]
    });
    this.verifyNumber = this.fb.group({
      otp: ["", Validators.required]
    });
    this.registerUser = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required],
      dob: ["", Validators.required],
      phone: [""]
    });

    this.getCodes();
  }

  get forms() {
    return this.loginForm.controls;
  }

  check(er) {
    console.log(er);
  }

  getCodes() {
    this.comSer.getCodes().subscribe(
      (data: any) => {
        this.countryCodes = data.data;
        console.log(this.countryCodes);
      },
      error => {
        console.log(error);
      }
    );
  }
  submitNumber(data) {
    this.userDetails = data;
    this.loggedInVia = "mobileNumber";
    console.log(this.userDetails);
    let dataToPass = {
      phone: data.mobileNumber,
      code: data.countryCode,
      via: "sms"
    };
    this.comSer.submitNumber(dataToPass).subscribe(
      data => {
        console.log(data);
        if (data.hasOwnProperty("message")) {
          this.messageToShow = data["message"];
        }

        if (data.hasOwnProperty("success")) {
          this.showOTP = true;
          this.messageToShow = data["success"];
        }
        if (data.hasOwnProperty("error")) {
          this.showOTP = false;
          this.messageToShow = data["error"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  verify(data) {
    console.log(data);

    let dataToPass = {
      phone: this.userDetails.mobileNumber,
      code: this.userDetails.countryCode,
      token: data.otp
    };

    this.comSer.verifyNumber(dataToPass).subscribe(
      (data: any) => {
        console.log(data);

        if (data.code == 200) {
          this.isVerified = true;
          this.showOtherDetails = true;
        }

        // this.messageToShow = data["sucess"];
        if (data.hasOwnProperty("error")) {
          this.messageToShow = data["error"];
        }
      },
      error => {
        this.messageToShow = data["error"];
        console.log(error);
      }
    );
  }

  register(data) {
    console.log("thissssssssssss", this.loggedInVia);
    if (this.loggedInVia == "mobileNumber") {
      this.userDataToPass = {
        phone: this.userDetails.mobileNumber,
        code: this.userDetails.countryCode,
        loggedInVia: this.loggedInVia,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        lat: "",
        long: "",
        isVerified: this.isVerified,
        dob: data.dob,
        role: 'ObjectId("5ddf6a4c8d9df1071d86a17e")'
      };
    }
    if (this.loggedInVia != "mobileNumber") {
      console.log("FACEBOOK GOOGLE");
      this.registerUser.updateValueAndValidity();
      this.userDataToPass = {
        phone: data.phone,
        code: "",
        loggedInVia: this.socialUserDetails.loggedInVia,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        lat: "",
        long: "",
        isVerified: this.socialUserDetails.isVerified,
        dob: data.dob,
        role: 'ObjectId("5ddf6a4c8d9df1071d86a17e")'
      };
    }

    console.log(data);

    console.log(this.userDataToPass);

    this.comSer.addUser(this.userDataToPass).subscribe(
      (data: any) => {
        console.log(data);
        if (data.registered == true) {
          this.router.navigate(["location"]);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  resendOTP(data) {
    console.log(this.userDetails);
    let dataToPass = {
      phone: this.userDetails.mobileNumber,
      code: this.userDetails.countryCode,
      via: data
    };
    this.comSer.submitNumber(dataToPass).subscribe(
      data => {
        console.log(data);
        if (data.hasOwnProperty("message")) {
          this.messageToShow = data["message"];
        }

        if (data.hasOwnProperty("success")) {
          this.showOTP = true;
          this.messageToShow = data["success"];
        }
        if (data.hasOwnProperty("error")) {
          this.showOTP = false;
          this.messageToShow = data["error"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  signInWithFB(data): void {
    this.loggedInVia = data;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.setAuthCheck(this.loggedInVia);
  }
  signInWithGoogle(data): void {
    this.loggedInVia = data;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.setAuthCheck(this.loggedInVia);
  }
}
