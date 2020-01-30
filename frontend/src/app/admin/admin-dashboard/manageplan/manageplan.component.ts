import { Component, OnInit } from "@angular/core";

import { AdminServService } from "../admin-serv.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-manageplan",
  templateUrl: "./manageplan.component.html",
  styleUrls: ["./manageplan.component.scss"]
})
export class ManageplanComponent implements OnInit {
  plansList: any;
  headertext: any;
  planListArray: any = [];
  isEditPlan: boolean;
  savePlan: FormGroup;
  isAddPlan: boolean;
  noRecordsFound: boolean;
  intervals = [
    { key: "Annually", value: "year" },
    { key: "Monthly", value: "month" }
  ];
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Manage Plans");
    this.getplans();
    this.savePlan = this.fb.group({
      amount: ["", Validators.required],
      interval: ["", Validators.required],
      planname: ["", Validators.required],
      trialperiod: ["", Validators.required]
    });
  }

  openAddPlanPanel(data) {
    if (data === "add") {
      this.isAddPlan = true;
      this.isEditPlan = false;
      this.headertext = "Add Plan";
    } else if (data === "edit") {
      this.isEditPlan = true;
      this.headertext = "Edit Plan";
    }
  }
  deletePlan(data) {
    let dataToPass = {
      planid: data.plan_id,
      _id: data._id
    };
    this.adminServ.deletePlans(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getplans();
          this.isAddPlan = false;
          this.isEditPlan = false;
          this.savePlan.reset();
          this.toastServ.success("Plan Delete", "Success", {
            timeOut: 1000
          });
        } else {
          this.toastServ.error("Failed To Delete", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error, {
          timeOut: 1000
        });
      }
    );
  }
  close(data) {
    if (data === "add") {
      this.isAddPlan = false;
      this.savePlan.reset();
    } else if (data === "edit") {
      this.isEditPlan = false;
      this.savePlan.reset();
    }
  }
  add(data) {
    this.adminServ.addPlans(data).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getplans();
          this.isAddPlan = false;
          this.savePlan.reset();
          this.toastServ.success("Plan Added", "Success", {
            timeOut: 1000
          });
        } else {
          this.toastServ.error("Failed To Add", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error, {
          timeOut: 1000
        });
      }
    );
  }
  updatePlan(data) {
    this.isAddPlan = true;
    this.isEditPlan = true;

    this.savePlan.get("planname").setValue(data.id);
    this.savePlan.get("amount").setValue(data.amount);
    this.savePlan.get("interval").setValue(data.interval);
    this.savePlan.get("trialperiod").setValue(data.trial_period_days);
  }
  getplans() {
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
