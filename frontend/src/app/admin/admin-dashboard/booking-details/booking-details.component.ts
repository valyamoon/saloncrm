import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";

import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-booking-details",
  templateUrl: "./booking-details.component.html",
  styleUrls: ["./booking-details.component.scss"]
})
export class BookingDetailsComponent implements OnInit {
  constructor(
    private adminServ: AdminServService,
    private toastServ: ToastrService
  ) {}
  isLoader: boolean;
  dataSource: any;
  totalCount: any;
  categoriesList: any;
  pageSize: any = 5;

  count: any = 5;
  upcomingBookings: any;
  page: any = 1;
  displayedColumns = ["date", "salonname", "username", "orderid", "action"];
  noRecordsFound: boolean;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.getBookings();
    this.adminServ.setHeaderText("Bookings");
  }

  getBookings() {
    this.isLoader = true;
    let dataToPass = {
      type: "upcomings"
    };
    this.adminServ.getUpcomingBookings(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.isLoader = false;
          this.upcomingBookings = data["data"]["bookings"];
          this.dataSource = new MatTableDataSource(this.upcomingBookings);
          this.dataSource.sort = this.sort;
          this.totalCount = data["data"]["count"];
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginate(event) {
    this.page = event.pageIndex + 1;

    this.count = event.pageSize;
    this.getBookings();
  }
  cancelBooking(data) {
    let dataToPass = {
      booking_id: data["_id"]
    };
    this.adminServ.cancelBookings(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.isLoader = false;
          this.getBookings();
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }
}
