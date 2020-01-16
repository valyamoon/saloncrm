import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { MatPaginator } from "@angular/material/paginator";
import { Subscription, timer, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { ToastrService } from "ngx-toastr";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  SalonRequestList: any;
  displayedColumns = ["name", "salonaddress", "contact", "isactive", "action"];
  page: any;
  limit: any = 0;
  count: any = 5;
  subscription: Subscription;
  pageSize: any = 5;
  disabled: boolean = true;
  pageNumber: any;
  noRecordFound: boolean;
  ActiveSalonsCount: any = 0;
  ActiveUsersCount: any = 0;
  dataDefault: any;

  constructor(
    private adminServ: AdminServService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.getRequests();
    this.getActiveSalonsCount();
    this.getActiveUsersCount();
    //this.checkRequest();
    this.adminServ.setHeaderText("Salons Request");
    this.subscription = timer(0, 10000)
      .pipe(switchMap(() => this.adminServ.getSalonsRequest(this.dataDefault)))
      .subscribe(
        result => (
          (this.SalonRequestList = result["data"]["data"]),
          (this.limit = result["data"]["countNumber"])
        )
      );
  }

  /**
   * Function is use to Pay to get salon requests list
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  getRequests() {
    console.log("I AM CALLED");
    let dataToPass = {
      pageSize: this.pageSize,
      page: this.page
    };
    this.dataDefault = dataToPass;
    this.adminServ.getSalonsRequest(dataToPass).subscribe(
      data => {
        console.log("HERE DATA iS", data);
        if (data["code"] == 200) {
          this.SalonRequestList = data["data"]["data"];
          this.limit = data["data"]["countNumber"];
          this.toastServ.success("Salon Requests Fetched Successfully", "", {
            timeOut: 1000
          });
          if (this.limit == 0 || this.SalonRequestList.length === 0) {
            this.noRecordFound = true;
          }
        } else {
          this.toastServ.error("Failed To Fetch Salons Request", "", {
            timeOut: 1000
          });
        }

        console.log("COUNT", this.count, this.SalonRequestList);
      },
      error => {
        this.toastServ.error("Failed To Fetch Salons Request", error.error, {
          timeOut: 1000
        });
      }
    );
  }

  paginate(event) {
    console.log(event);
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getRequests();
  }

  /**
   * Function is use to Pay to Approve Salon Request
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  approveSalonRequest(data) {
    console.log("ApproveFor", data);
    let dataToPass = {
      salon_id: data._id
    };
    this.adminServ.approveSalonRequests(dataToPass).subscribe(
      data => {
        console.log("FFFF", data);
        if (data["code"] === 200) {
          this.toastServ.success("Salon Approved Successfully", "", {
            timeOut: 3000
          });
          this.getRequests();
          this.getActiveSalonsCount();
          this.getActiveUsersCount();
        } else {
          this.toastServ.error("Failed To Process", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastServ.error("Failed To Approve Salon", error.error, {
          timeOut: 3000
        });
      }
    );
  }

  /**
   * Function is use to fetch Number of Active Users
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  getActiveUsersCount() {
    let dataToPass = {
      type: "user"
    };
    this.adminServ.getActiveUsersCount(dataToPass).subscribe(
      data => {
        if (data["code"] == 200) {
          this.ActiveUsersCount = data["data"];
          console.log("ActiveUsersCount SALONS", this.ActiveUsersCount);
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error, {
          timeOut: 3000
        });
      }
    );
  }

  /**
   * Function is use to fetch Number of Active Users
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  getActiveSalonsCount() {
    let dataToPass = {
      type: "salon"
    };
    this.adminServ.getActiveSalonsCount(dataToPass).subscribe(
      data => {
        console.log("DATA", data);
        if (data["code"] == 200) {
          this.ActiveSalonsCount = data["data"];
          console.log("ACTIVE SALONS", this.ActiveSalonsCount);
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error, {
          timeOut: 3000
        });
      }
    );
  }

  /**
   * Function is use to Pay to Decline Salon Request
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  declineSalonRequest(data) {
    console.log("ApproveFor", data);
    let dataToPass = {
      salon_id: data._id
    };
    this.adminServ.declineSalonRequest(dataToPass).subscribe(
      data => {
        console.log("FFFF", data);
        if (data["code"] === 200) {
          this.toastServ.success("Salon Declined Successfully", "", {
            timeOut: 3000
          });
          this.getRequests();
          this.getActiveSalonsCount();
          this.getActiveUsersCount();
        } else {
          this.toastServ.error("Failed To Decline", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error, {
          timeOut: 3000
        });
      }
    );
  }
}
