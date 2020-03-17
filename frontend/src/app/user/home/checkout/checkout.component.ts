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
  walletAmount: any;
  useWallet: boolean = false;
  isUseWallet: boolean;
  isPayable: boolean;
  isWalletAmountUsed: boolean;
  walletAmountUsed: any;
  showUseWalletCheckBox: boolean;
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

    this.onDate = JSON.parse(sessionStorage.getItem("userprefrence"))["date"];
    this.startTime = JSON.parse(sessionStorage.getItem("bookingData"))["stime"];
    this.totalPrice = this.checkoutData["price"];
    this.getWalletBalance();
  }

  checkPaymentMode(event) {
    this.paymentMode = event.target["defaultValue"];
    if (event.target["defaultValue"] === "cash") {
      this.isCardDetailsRequired = true;
      this.useWallet = false;
      this.cardNum = "";
      this.expDate = "";
      this.cvc = "";
      this.enableMakePaymentButton = false;
      this.showUseWalletCheckBox = false;
    } else if (event.target["defaultValue"] === "card") {
      this.isCardDetailsRequired = false;
      this.enableMakePaymentButton = true;

      if (this.walletAmount > 0) {
        this.showUseWalletCheckBox = true;
        this.isPayable = true;

        if (this.totalPrice > this.walletAmount) {
          this.isCardDetailsRequired = false;
        } else if (this.totalPrice < this.walletAmount) {
          this.isCardDetailsRequired = true;
          this.enableMakePaymentButton = true;
        }
      } else if (this.walletAmount <= 0) {
        this.isPayable = false;
        this.showUseWalletCheckBox = false;
      }

      this.toastServ.success("Please enter card details", "", {
        timeOut: 1000
      });
    }
  }
  keyPress(event) {}
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
          this.promocodeDetails = result;

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
      if (this.isUseWallet === false) {
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
              stripeEmail: this.stripeEmail,
              isWalletUsed: false,
              walletAmountUsed: null
            };

            this.userServ.payForService(dataToPass).subscribe(
              (data: any) => {
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
      } else if (this.isUseWallet === true) {
        if (this.expDate && this.cardNum && this.cvc) {
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
                stripeEmail: this.stripeEmail,
                isWalletUsed: true,
                walletAmountUsed: this.walletAmount
              };

              this.userServ.payForService(dataToPass).subscribe(
                (data: any) => {
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
        } else {
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
            stripeToken: null,
            stripeEmail: null,
            isWalletUsed: true,
            walletAmountUsed: this.walletAmount
          };

          this.userServ.payForService(dataToPass).subscribe(
            (data: any) => {
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
        }
      }
    }
  }
  goToBookings() {
    this.router.navigate(["/booking"]);
  }
  goToHome() {
    this.router.navigate(["/home"]);
    sessionStorage.removeItem("userprefrence");
  }
  modelChanged(event) {}

  getWalletBalance() {
    let dataToPass = {
      user_id: this.userID
    };

    this.userServ.getWalletAmount(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.walletAmount = data["data"].amount;
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
  checkIsWallet(data) {
    if (data === false) {
      this.isUseWallet = true;
      this.cardNum = "";
      this.expDate = "";
      this.cvc = "";
      this.enableMakePaymentButton = false;
    } else if (data === true) {
      this.isUseWallet = false;
    }

    // if (data === false) {
    //   this.isUseWallet = true;
    //   if (this.isUseWallet === true) {
    //     this.enableMakePaymentButton = false;
    //     if (this.walletAmount > this.totalPrice) {
    //       this.isCardDetailsRequired = true;
    //     } else if (this.walletAmount <= this.totalPrice) {
    //       this.isCardDetailsRequired = false;
    //     }
    //   }
    // } else if (data === true) {
    //   this.isUseWallet = false;
    //   if (this.isUseWallet === false) {
    //     this.enableMakePaymentButton = false;
    //     if (this.walletAmount > this.totalPrice) {
    //       this.isCardDetailsRequired = false;
    //     } else if (this.walletAmount <= this.totalPrice) {
    //       this.isCardDetailsRequired = false;
    //     }
    //   }
    // }
  }
  goToList() {
    this.router.navigate(['/list  '])
  }
}
