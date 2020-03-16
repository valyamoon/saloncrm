import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { log } from "util";

@Component({
  selector: "app-timing",
  templateUrl: "./timing.component.html",
  styleUrls: ["./timing.component.css"]
})
export class TimingComponent implements OnInit {
  timingForm: FormGroup;
  min: any;
  user_id: string;
  salonData: any;
  salonTiming: any = [];
  noRecordsFound: boolean;
  ishowTable: boolean = false;
  allDaysData = [
    {
      days: "Monday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 1
    },
    {
      days: "Tuesday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 2
    },
    {
      days: "Wednesday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 3
    },
    {
      days: "Thursday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 4
    },
    {
      days: "Friday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 5
    },
    {
      days: "Saturday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 6
    },
    {
      days: "Sunday",
      opentime: "",
      closetime: "",
      status: false,
      order_sort: 7
    }
  ];

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) {
    // this.timingForm = this.fb.group({
    //   daysData: this.fb.array([this.AllDays()])
    // });
  }

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData();
  }

  onOpenTimeSelect(event) {}

  onCloseTimeSelect(event) {}

  getSalonData() {
    let data = {
      user_id: this.user_id
    };
    this.commServ.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
          this.getSalonTiming();
        } else {
          this.toastrServ.error("Invalid salon details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastrServ.error("Failed to get salon data", error, {
          timeOut: 3000
        });
      }
    );
  }
  saveTimingForm() {
    // debugger;

    let dataToPass = {
      salon_id: this.salonData._id,
      user_id: this.user_id,
      daysData: this.allDaysData
    };
    // dataToPass.salon_id =

    this.commServ.addSalonTIming(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.toastrServ.success("Salon timing Added", "Success", {
            timeOut: 2000
          });
          this.router.navigate(["salon/home/profile"]);
        } else {
          // this.isAddModal = true;
          this.toastrServ.error("Failed To Add", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  getSalonTiming() {
    let dataToPass = {
      salon_id: this.salonData._id,
      user_id: this.user_id
    };

    this.commServ.getSalonTiming(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          if (data["data"].length === 0) {
            this.allDaysData;
          } else {
            let slotsArr = [];
            data["data"].forEach(element => {
              let slots = {
                days: element.days,
                opentime: element.starttime,
                closetime: element.endtime,
                status: element.status,
                order_sort: element.order_sort
              };
              slotsArr.push(slots);
            });
            this.allDaysData = slotsArr;
          }
        } else {
          this.toastrServ.error("Failed To Fetch Services", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }
}
