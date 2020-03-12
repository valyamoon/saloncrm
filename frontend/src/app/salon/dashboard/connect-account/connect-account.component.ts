import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-connect-account",
  templateUrl: "./connect-account.component.html",
  styleUrls: ["./connect-account.component.scss"]
})
export class ConnectAccountComponent implements OnInit {
  stripeCode: any;
  salon_id: any;
  isStripeConnected: boolean = false;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private commServ: CommonService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    sessionStorage.setItem("isReload", JSON.stringify(true));
    this.stripeCode = this.activatedRoutes.snapshot.queryParams["code"];
    if (this.stripeCode) {
      this.connectAccount();
    }
    this.checkISStripeConnected();
  }

  checkISStripeConnected() {
    this.commServ.getStripeConnectedStatus().subscribe((data: any) => {
      this.isStripeConnected = data;
    });
  }

  createStripeConnection() {
    window.open(
      "https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_GfIPk4k1EueVxsjqVIoutWNdiSSW8DbT&scope=read_write",
      "_self"
    );
  }
  connectAccount() {
    this.commServ.getSalon_id().subscribe((data: any) => {
      this.salon_id = data;
      if (this.salon_id) {
        let dataToPass = {
          salon_id: this.salon_id,
          code: this.stripeCode
        };

        this.commServ.connectStripeAccount(dataToPass).subscribe(
          (data: any) => {
            if (data["code"] === 200) {
              this.toastServ.success(data["message"], "Success", {
                timeOut: 1000
              });
              this.checkISStripeConnected();
              if (JSON.parse(sessionStorage.getItem("isReload"))) {
                window.location.reload();
                sessionStorage.setItem("isReload", JSON.stringify(false));
              }
            } else if (data["code"] === 400) {
              this.toastServ.error(data["message"], "Error", {
                timeOut: 1000
              });
            }
          },
          error => {
            this.toastServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          }
        );
      }
    });
  }
}
