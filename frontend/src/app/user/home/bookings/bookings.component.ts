import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  userID: any;
  bookingListData: any;
  selectedTab: any = "upcoming";
  constructor(private userServ: UsercommonserviceService) {}

  ngOnInit() {
    this.userID = sessionStorage.getItem("userID");
    console.log(this.userID);
    this.getBookingList(this.selectedTab);
  }

  getBookingList(data) {
    let dataToPass = {
      user_id: this.userID,
      type: data
    };
    this.userServ.getUserBookings(dataToPass).subscribe((data: any) => {
      console.log(data);
    });
  }
  tabChanged(event) {
    console.log(event.index);
    if (event.index === 0) {
      this.selectedTab = "upcoming";
      this.getBookingList(this.selectedTab);
    } else if (event.index === 1) {
      this.selectedTab = "completed";
      this.getBookingList(this.selectedTab);
    }
  }
}
