import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog, throwToolbarMixedModesError } from "@angular/material";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  bokingList: any = [];
  ascend: any = 1;
  type: any;
  dataSource: any;
  pageSize: any = 5;
  count: any = 5;
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
      console.log(dataToPass);

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
      console.log("here", dataToPass);
      this.getUpcomingBookingData(dataToPass);
    }
  }
  getDetails(data) {
    console.log(data);
  }
  completeAppointment(data) {
    console.log(data);
  }

  paginate(event) {
    this.page = event.pageIndex + 1;
    console.log(this.page);
    this.count = event.pageSize;
    console.log(this.count);
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
    console.log("IN", data);
    this.commServ.getAppointmentList(data).subscribe((data: any) => {
      console.log(data);
      this.dataSource = data["data"]["data"];
      console.log(this.dataSource);
      this.bookingCount = data["data"]["count"];
      console.log(this.bookingCount);
    });
  }
  changeBooking(element) {
    // console.log("element", element)
  }
}
