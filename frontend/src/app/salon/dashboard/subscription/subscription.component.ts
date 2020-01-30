import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
  salon_id: any;
  subscriptionDetails: any;
  subscriptionDate: any;
  expirationDate: any;

  constructor(
    private commnServ: CommonService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.commnServ.getSalon_id().subscribe((data: any) => {
      this.salon_id = data;

      this.getSalonSubscriptionDetails(this.salon_id);
    });
  }

  getSalonSubscriptionDetails(data) {
    let dataToPass = {
      salon_id: data
    };

    this.commnServ.getSalonSubscriptionDetail(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.subscriptionDetails = data["data"][0];

          var months_arr = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ];

          var expiryDate = new Date(
            this.subscriptionDetails.expiry_date * 1000
          );
          var expiry_year = expiryDate.getFullYear();
          var expiry_month = months_arr[expiryDate.getMonth()];
          var expiry_date = expiryDate.getDate();
          this.expirationDate =
            expiry_date + "-" + expiry_month + "-" + expiry_year;
          var susbcribedDate = new Date(
            this.subscriptionDetails.created_on * 1000
          );
          var subscribe_year = susbcribedDate.getFullYear();
          var subscribe_month = months_arr[susbcribedDate.getMonth()];
          var subscribe_date = susbcribedDate.getDate();
          this.subscriptionDate =
            subscribe_date + "-" + subscribe_month + "-" + subscribe_year;
        } else if (data["code"] === 400) {
          this.toastServ.error("Failed to fetch", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server-Error", error.error, {
          timeOut: 1000
        });
      }
    );
  }
}
