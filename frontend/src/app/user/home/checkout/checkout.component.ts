import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AllservService } from "../../../allserv.service";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  cardForm: FormGroup;
  isBookingCompleted: any;
  userEmailID: any;
  expDate: any;
  checkoutData: any;
  isShowPromocode: boolean;
  salonData: any;
  paymentMode: any;
  totalPrice: any;
  isCardDetailsRequired: boolean = true;
  offerCodePrice: any;
  startTime: any;
  enableMakePaymentButton: boolean = true;
  currentRoute: any;
  isPromocodeApplied: boolean;
  promocodesList: any;
  onDate: any;
  stripeToken: any;
  stripeEmail: any;
  userID: any;
  promocodeDetails: any;
  isLoggedInCheck: any;
  promocodeAppliedText: any;
  cardNum: any;
  cvc: any;
  expiryPattern: any = "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$";
  noPromocode: boolean;
  month: any;
  year: any;
  constructor(
    private router: Router,
    private allserv: AllservService,
    private userServ: UsercommonserviceService,
    private toastServ: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userEmailID = sessionStorage.getItem("emailID");
    this.cardForm = this.fb.group({
      cardNum: ["", Validators.required],
      expDate: [
        "",
        Validators.required,
        Validators.pattern(this.expiryPattern)
      ],
      cvc: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(3)
        ])
      ]
    });

    this.salonData = JSON.parse(sessionStorage.getItem("bookingData"))["data"];
    console.log(this.salonData);
    this.userID = sessionStorage.getItem("userID");
    this.currentRoute = this.router.url;
    if (localStorage.getItem("LoggedInUser") !== null) {
      this.isLoggedInCheck = true;
    } else {
      this.isLoggedInCheck = false;
    }

    this.checkoutData = JSON.parse(sessionStorage.getItem("bookingData"))[
      "data"
    ]["service"];

    console.log("checkoutData", this.checkoutData);
    this.onDate = JSON.parse(sessionStorage.getItem("userprefrence"))["date"];
    this.startTime = JSON.parse(sessionStorage.getItem("bookingData"))["stime"];
    this.totalPrice = this.checkoutData["price"];
  }

  checkPaymentMode(event) {
    this.paymentMode = event.target["defaultValue"];
    if (event.target["defaultValue"] === "cash") {
      this.isCardDetailsRequired = true;
      this.cardNum = "";
      this.expDate = "";
      this.cvc = "";
      this.enableMakePaymentButton = false;
    } else if (event.target["defaultValue"] === "card") {
      this.isCardDetailsRequired = false;
      this.enableMakePaymentButton = true;

      this.toastServ.success("Please enter card details", "", {
        timeOut: 1000
      });
    }
  }
  keyPress(event) {
    console.log(event);
  }
  goToLogin() {
    this.allserv.setPrevRoute(this.currentRoute);
    this.router.navigate(["/login"]);
  }

  getPromocodeList() {
    let dataToPass = {
      salon_id: this.checkoutData["salon_id"]
    };
    this.userServ.getPromocodes(dataToPass).subscribe(
      (data: any) => {
        console.log(data);
        if (data["code"] === 200) {
          this.isShowPromocode = true;
          this.promocodesList = data["data"];
          // this.promocodesList = [];
          if (this.promocodesList.length === 0) {
            this.noPromocode = true;
          } else if (this.promocodesList.length > 0) {
            this.noPromocode = false;
          }
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
  dismissModal() {
    this.isShowPromocode = false;
  }
  validatePromocode(result, event) {
    let dataToPass = {
      promocode_id: result["_id"],
      salon_id: this.checkoutData["salon_id"],
      user_id: this.userID
    };
    this.userServ.checkPromoCodeValidity(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          console.log("data", data);

          this.promocodeDetails = result;
          console.log("promocodeDetails", this.promocodeDetails);

          this.offerCodePrice = this.promocodeDetails["value"];

          if (data["data"].status === true) {
            this.isPromocodeApplied = false;
            this.isShowPromocode = true;
          } else if (data["data"].status === false) {
            this.isPromocodeApplied = true;
            this.isShowPromocode = false;
          }

          if (this.isPromocodeApplied === true) {
            this.totalPrice = this.checkoutData["price"];
            this.totalPrice = this.totalPrice - this.offerCodePrice;
            console.log(this.totalPrice);
          } else if (this.isPromocodeApplied === false) {
            this.totalPrice = this.checkoutData["price"];
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

  makeUserPayment() {
    var promocodeID;
    if (this.promocodeDetails) {
      promocodeID = this.promocodeDetails["_id"];
    } else {
      promocodeID = null;
    }
    var dataToPass = {};

    if (this.paymentMode === "cash") {
      dataToPass = {
        payType: this.paymentMode,
        totalAmt: this.totalPrice,
        salon_id: this.salonData["_id"],
        user_id: this.userID,
        date: this.onDate,
        time: this.startTime,
        service_id: this.checkoutData["_id"],
        promocode_id: promocodeID,
        deviceToken: null,
        duration: this.checkoutData["duration"]
      };
      this.userServ.payForService(dataToPass).subscribe(
        (data: any) => {
          console.log("Afterpayment", data);
          if (data["code"] === 200) {
            this.isBookingCompleted = true;

            sessionStorage.removeItem("userprefrence");
            sessionStorage.removeItem("bookingData");
            setTimeout(() => this.router.navigate(["/home"]), 2500);
            // this.router.navigate(["/home"]);
          } else if (data["code"] === 400) {
            this.isBookingCompleted = false;
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
    } else if (this.paymentMode === "card") {
      this.month = this.expDate.slice(0, 2);
      this.year = this.expDate.slice(2);

      let cardData = {
        cardNum: this.cardNum,
        month: this.month,
        cvc: this.cvc,
        year: this.year
      };

      this.userServ.getStripeToken(cardData).subscribe((data: any) => {
        if (data["code"] === 200) {
          console.log(data["data"]);
          this.stripeToken = data["data"]["id"];
          this.stripeEmail = this.userEmailID;

          dataToPass = {
            payType: this.paymentMode,
            totalAmt: this.totalPrice,
            salon_id: this.salonData["_id"],
            user_id: this.userID,
            date: this.onDate,
            time: this.startTime,
            service_id: this.checkoutData["_id"],
            promocode_id: promocodeID,
            deviceToken: null,
            duration: this.checkoutData["duration"],
            stripeToken: this.stripeToken,
            stripeEmail: this.stripeEmail
          };

          this.userServ.payForService(dataToPass).subscribe(
            (data: any) => {
              console.log("Afterpayment", data);
              if (data["code"] === 200) {
                this.isBookingCompleted = true;

                sessionStorage.removeItem("userprefrence");
                sessionStorage.removeItem("bookingData");
                setTimeout(() => this.router.navigate(["/home"]), 2500);
                // this.router.navigate(["/home"]);
              } else if (data["code"] === 400) {
                this.isBookingCompleted = false;
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
        } else if (data["code"] === 400) {
          this.toastServ.error(data["data"]["raw"]["message"], "", {
            timeOut: 1000
          });
        }
      });
    }
  }
  goToBookings() {
    this.router.navigate(["/booking"]);
  }
  modelChanged(event) {}
}
