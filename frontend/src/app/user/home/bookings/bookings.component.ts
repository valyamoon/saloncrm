import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  userID: any;
  bookingListData: any;
  selectedTab: any = "upcoming";
  constructor(
    private userServ: UsercommonserviceService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.userID = sessionStorage.getItem("userID");

    this.getBookingList(this.selectedTab);
  }

  getBookingList(data) {
    let dataToPass = {
      user_id: this.userID,
      type: data
    };
    this.userServ.getUserBookings(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.bookingListData = data["data"];
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 100
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 100
        });
      }
    );
  }
  tabChanged(event) {
    if (event.index === 0) {
      this.selectedTab = "upcoming";
      this.getBookingList(this.selectedTab);
    } else if (event.index === 1) {
      this.selectedTab = "completed";
      this.getBookingList(this.selectedTab);
    }
  }
}
