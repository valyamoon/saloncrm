import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bokingList: any = [];
  pageSize: any = 5;
  count: any = 5;
  page: any = 1;
  displayedColumns = ['bookingid', 'name', 'date', 'service', 'action'];
  bookingCount: number;
  noRecordsFound: boolean;
  user_id: any;
  constructor(private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getBookingData();
  }
  paginate(event) {
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getBookingData();
  }
  getBookingData() {
    let Data = {
      user_id: this.user_id
    }
    this.noRecordsFound = false;

  }
  changeBooking(element) {
    // console.log("element", element)
  }

}
