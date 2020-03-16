import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelTitle
} from "@angular/material";

@Component({
  selector: "app-promcode",
  templateUrl: "./promcode.component.html",
  styleUrls: ["./promcode.component.scss"]
})
export class PromcodeComponent implements OnInit {
  salon_id: any;
  promocodesListing: any;
  showAddPromocode: boolean;
  noRecordsFound: boolean;
  addPromocodeForm: FormGroup;
  constructor(
    private commonServ: CommonService,
    private toastServ: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.commonServ.getSalon_id().subscribe((data: any) => {
      this.salon_id = data;
    });
    this.getPromocodes(this.salon_id);
    this.addPromocodeForm = this.fb.group({
      name: ["", Validators.required],
      termsAndCondition: ["", Validators.required],
      value: ["", Validators.required],
      description: ["", Validators.required]
    });
  }
  showAddModal() {
    this.showAddPromocode = true;
  }

  addPromocodes(data) {
    let dataToPass = {
      name: data.name,
      value: data.value,
      description: data.description,
      termsAndCondition: data.termsAndCondition,
      salon_id: this.salon_id
    };
    this.commonServ.addPromocodes(dataToPass).subscribe((data: any) => {
      if (data["code"] === 200) {
        this.showAddPromocode = false;
        this.addPromocodeForm.reset();
        this.getPromocodes(this.salon_id);
        this.toastServ.success("Added Promocode", "Success", {
          timeOut: 1000
        });
      } else if (data["code"] === 400) {
        this.toastServ.error("Failed to Add", data["message"], {
          timeOut: 1000
        });
      } else {
      }
    });
  }
  getPromocodes(data) {
    let dataToPass = {
      salon_id: data
    };
    this.commonServ.getPromocode(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.promocodesListing = data["data"];
          if (this.promocodesListing.length === 0) {
            this.noRecordsFound = true;
          } else {
            this.noRecordsFound = false;
          }
        } else if (data["code"] === 400) {
          this.toastServ.error("Failed to fetch", data["message"], {
            timeOut: 1000
          });
        } else {
        }
      },
      error => {
        this.toastServ.error("Server - Error", "", {
          timeOut: 1000
        });
      }
    );
  }
  deletePromocode(data) {
    let dataToPass = {
      promocode_id: data["_id"]
    };
    this.commonServ.deletePromocodes(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.toastServ.success("Promocode Deleted", "Success", {
            timeOut: 1000
          });
          this.getPromocodes(this.salon_id);
        } else if (data["code"] === 400) {
          this.toastServ.error("Failed to Delete", data["message"], {
            timeOut: 1000
          });
        } else {
        }
      },
      error => {
        this.toastServ.error("Server - Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
}
