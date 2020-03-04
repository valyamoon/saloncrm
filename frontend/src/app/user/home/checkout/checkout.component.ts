import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  expDate: any;
  checkoutData: any;
  startTime: any;
  onDate: any;
  cardNum: any;
  cvc: any;
  constructor() {}

  ngOnInit() {
    this.checkoutData = JSON.parse(sessionStorage.getItem("bookingData"))[
      "data"
    ];
    this.onDate = JSON.parse(sessionStorage.getItem("userprefrence"))["date"];
    this.startTime = JSON.parse(sessionStorage.getItem("bookingData"))["stime"];
    console.log(this.checkoutData);
  }
}
