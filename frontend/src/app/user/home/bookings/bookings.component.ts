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
  adminDetails: any;
  isDetailShow: boolean;
  bookingDetails: any;
  salonDetails: any;
  isShowAddReview: boolean;
  isAddReviewModal: boolean;
  starRating: any = 1;
  comment: any;

  selectedTab: any = "upcoming";
  constructor(
    private userServ: UsercommonserviceService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.userID = sessionStorage.getItem("userID");

    this.getBookingList(this.selectedTab);
    this.getAdminDetail();
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
      this.isShowAddReview = false;
      this.getBookingList(this.selectedTab);
    } else if (event.index === 1) {
      this.selectedTab = "completed";
      this.isShowAddReview = true;
      this.getBookingList(this.selectedTab);
    }
  }
  getBookingDetails(data) {
    this.bookingDetails = data;

    let dataToPass = {
      salon_id: this.bookingDetails["salon_id"]
    };
    this.userServ.getSalonDetails(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonDetails = data["data"];
          this.isDetailShow = true;
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
  dismissModal() {
    this.isDetailShow = false;
    this.isAddReviewModal = false;
  }
  getAdminDetail() {
    let dataToPass = {
      type: "admin"
    };

    this.userServ.getAdminDetails(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.adminDetails = data["data"];
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

  addReview() {
    this.isAddReviewModal = true;
  }
  onRatingSet(event) {
    this.starRating = event;
  }
  submitStarRating() {
    let dataToPass = {
      ratings: this.starRating,
      comments: this.comment,
      user_id: this.userID,
      salon_id: this.bookingDetails["salon_id"]
    };
    this.userServ.addReviewAndRatings(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.toastServ.success("Submitted Successfully", "", {
            timeOut: 500
          });
          this.isAddReviewModal = false;
          this.isDetailShow = false;
          this.comment = "";
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
}
