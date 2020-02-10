import { Component, OnInit } from "@angular/core";

import { AdminServService } from "../admin-serv.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ConfirmationComponent } from "../confirmation/confirmation.component";
import { SimpleModalService } from "ngx-simple-modal";

@Component({
  selector: "app-manageplan",
  templateUrl: "./manageplan.component.html",
  styleUrls: ["./manageplan.component.scss"]
})
export class ManageplanComponent implements OnInit {
  plansList: any;
  isLoader: boolean;
  headertext: any;
  planListArray: any = [];
  isEditPlan: boolean;
  planID: any;
  savePlan: FormGroup;
  isAddPlan: boolean;
  _idPlan: any;
  noRecordsFound: boolean;
  intervals = [{ key: "Monthly", value: "month" }];
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private toastServ: ToastrService,
    private SimpleModalService: SimpleModalService
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
      this.savePlan
        .get("interval")
        .patchValue({ key: "Monthly", value: "month" });
    } else if (data === "edit") {
      this.isEditPlan = true;
      this.headertext = "Edit Plan";
    }
  }
  deletePlan(data) {
    this.SimpleModalService.addModal(ConfirmationComponent, {
      title: "Warning",
      message: "Are you sure you want to delete?"
    }).subscribe(isConfirmed => {
      if (isConfirmed === true) {
        this.isLoader = true;
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
              this.isLoader = false;
              this.savePlan.reset();
              this.toastServ.success("Plan Delete", "Success", {
                timeOut: 1000
              });
            } else {
              this.isLoader = false;
              this.toastServ.error("Failed To Delete", "Error", {
                timeOut: 1000
              });
            }
          },
          error => {
            this.isLoader = false;
            this.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          }
        );
      }
    });
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
    this.isLoader = true;
    console.log("LOADER", this.isLoader);
    this.adminServ.addPlans(data).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getplans();
          this.isAddPlan = false;
          this.isLoader = false;
          this.savePlan.reset();
          this.toastServ.success("Plan Added", "Success", {
            timeOut: 1000
          });
        } else {
          this.isLoader = false;
          this.toastServ.error("Failed To Add", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server- Error", error.error["message"], {
          timeOut: 1000
        });
        this.isLoader = false;
      }
    );
  }
  updatePlan(data) {
    console.log(data);
    this.planID = data.plan_id;
    this._idPlan = data._id;
    this.isAddPlan = true;
    this.isEditPlan = true;
    this.savePlan.get("planname").setValue(data.id);
    this.savePlan.get("amount").setValue(data.amount);
    this.savePlan.get("interval").setValue(data.interval);
    this.savePlan.get("trialperiod").setValue(data.trial_period_days);
    console.log("OAL", this.planID);
  }
  update(data) {
    console.log(data);
    this.isLoader = true;
    let dataToPass = {
      plan_id: this.planID,
      trial_period_days: data.trialperiod,
      amount: data.amount,
      _id: this._idPlan,
      id: data.planname,
      interval: data.interval
    };
    console.log("DATATOPASS", dataToPass);
    this.adminServ.editPlans(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.getplans();
          this.isLoader = false;
          this.isAddPlan = false;
          this.isEditPlan = false;
          this.savePlan.reset();
          this.toastServ.success("Plan Updated", "Success", {
            timeOut: 1000
          });
        } else {
          this.isLoader = false;
          this.toastServ.error("Failed To Update", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastServ.error("Server- Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
  getplans() {
    this.isLoader = true;
    let dataToPass = {
      type: "plans"
    };
    this.adminServ.getPlans(dataToPass).subscribe((data: any) => {
      if (data["code"] === 200) {
        this.isLoader = false;
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
