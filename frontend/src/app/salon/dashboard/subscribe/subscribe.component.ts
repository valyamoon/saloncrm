import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// import * as stripe from "stripe";
// import * as elements from "elements";

import { AdminServService } from "../../../admin/admin-dashboard/admin-serv.service";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"]
})
export class SubscribeComponent implements OnInit {
  planListArray: any;
  noRecordsFound: boolean;
  card: any;
  month: any;
  plan_id: any;
  salon_id: any;
  loader: boolean = false;
  year: any;
  cardSave: FormGroup;
  error: string;
  customer_id: any;
  showEnterCardForm: boolean;
  expiryPattern: any = "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$";
  cardPattern: any =
    "/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11}|62[0-9]{14})$/";
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private commonServ: CommonService,
    private toastServ: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.commonServ.getCustomer_id().subscribe((data: any) => {
      this.customer_id = data;
    });
    this.commonServ.getSalon_id().subscribe((data: any) => {
      this.salon_id = data;
    });
    this.getplanDetails();
    this.cardSave = this.fb.group({
      cardnumber: ["", [Validators.required]],
      expiry: [
        "",
        [Validators.required, Validators.pattern(this.expiryPattern)]
      ],
      cvv: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(4),
          Validators.required
        ])
      ],
      name: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });
  }

  get cardnumber() {
    return this.cardSave.get("cardnumber");
  }
  get expiry() {
    return this.cardSave.get("expiry");
  }
  get cvv() {
    return this.cardSave.get("cvv");
  }
  get name() {
    return this.cardSave.get("name");
  }

  buy(data) {
    this.plan_id = data["plan_id"];

    this.showEnterCardForm = true;
  }
  pay(data) {
    this.loader = true;
    this.month = data.expiry.slice(0, 2);
    this.year = data["expiry"].slice(2);
    let dataToPass = {
      number: data.cardnumber,
      exp_month: this.month,
      exp_year: this.year,
      cvc: data.cvv,
      customer_id: this.customer_id,
      plan_id: this.plan_id,
      salon_id: this.salon_id
    };

    this.commonServ.createToken(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.loader = false;
          this.toastServ.success("Subscribed Successfully", "Success", {
            timeOut: 1000
          });
          this.router.navigate(["/salon/home/profile"]);
        } else if (data["code"] === 400) {
          this.loader = false;
          this.toastServ.error("Failed To Subscribe", data["message"], {
            timeOut: 1000
          });
        } else {
          this.loader = false;
          this.toastServ.error("Failed To Subscribe", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        this.loader = false;
        this.toastServ.error("Server -Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  getplanDetails() {
    let dataToPass = {
      type: "plans"
    };
    this.adminServ.getPlans(dataToPass).subscribe((data: any) => {
      if (data["code"] === 200) {
        this.planListArray = data["data"];
        if (this.planListArray.length === 0) {
          this.noRecordsFound = true;
        } else {
          this.noRecordsFound = false;
        }
      }
    });
  }
}
