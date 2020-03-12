import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  bokingList: any = [];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  ascend: any = 1;
  type: any;
  isLoader: boolean;
  dataSource: any;
  pageSize: any = 5;
  count: any = 5;
  isModal: boolean = false;
  appointmentDetails: any;
  page: any = 1;
  salonId: any;
  displayedColumns = ["bookingid", "name", "status", "service", "action"];
  bookingCount: number;
  noRecordsFound: boolean;
  dataTp: any;
  user_id: any;
  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");

    this.commServ.getSalon_id().subscribe(data => {
      this.salonId = data;
      // console.log("HTIS>", this.salonId);
      this.ascend = 1;
      this.type = "upcoming";
      this.dataTp = {
        ascend: this.ascend,
        type: this.type,
        salon_id: this.salonId,
        pageSize: this.count,
        page: this.page
      };

      this.getUpcomingBookingData(this.dataTp);
      this.salonId = data;
    });
  }

  selectedIndexChange(data) {
    if (data === 0) {
      this.ascend = 1;
      this.type = "upcoming";
      let dataToPass = {
        ascend: this.ascend,
        type: this.type,
        salon_id: this.salonId,
        pageSize: this.count,
        page: this.page
      };
      //console.log(dataToPass);

      this.getUpcomingBookingData(dataToPass);
    } else if (data === 1) {
      this.ascend = -1;
      this.type = "completed";
      let dataToPass = {
        ascend: this.ascend,
        type: this.type,
        salon_id: this.salonId,
        pageSize: this.count,
        page: this.page
      };
      //   console.log("here", dataToPass);
      this.getUpcomingBookingData(dataToPass);
    }
  }
  getDetails(data) {
    this.isModal = true;
    // console.log(data);
    this.appointmentDetails = data;
  }
  completeAppointment(data) {
    console.log("DATA", data);
    let dataToPass = {
      booking_id: data._id
    };
    this.commServ.completeAppointment(dataToPass).subscribe(
      (data: any) => {
        console.log("data", data);
        if (data["code"] === 200) {
          console.log("datassss");
          this.toastrServ.success("Appointment Completed", "", {
            timeOut: 1000
          });
          this.getUpcomingBookingData(this.dataTp);
        } else if (data["code"] === 400) {
          this.toastrServ.error("Failed to Complete", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server-Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
  dismissModal() {
    this.isModal = false;
    this.appointmentDetails = [];
  }

  paginate(event) {
    this.page = event.pageIndex + 1;
    // console.log(this.page);
    this.count = event.pageSize;
    // console.log(this.count);
    let dataToPass = {
      ascend: this.ascend,
      type: this.type,
      salon_id: this.salonId,
      pageSize: this.count,
      page: this.page
    };
    this.getUpcomingBookingData(dataToPass);
  }
  getUpcomingBookingData(data) {
    this.isLoader = true;
    //  console.log("IN", data);
    this.commServ.getAppointmentList(data).subscribe((data: any) => {
      //   console.log(data);
      this.dataSource = data["data"]["data"];
      this.dataSource.sort = this.sort;
      this.isLoader = false;
      // console.log(this.dataSource);
      this.bookingCount = data["data"]["count"];
      // console.log(this.bookingCount);
    });
  }
  changeBooking(element) {
    // console.log("element", element)
  }
}
