import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { MatPaginator } from "@angular/material/paginator";
import { Subscription, timer, Observable } from "rxjs";
import { switchMap, windowTime } from "rxjs/operators";

import { ToastrService } from "ngx-toastr";
import { MatTableDataSource } from "@angular/material/table";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  SalonRequestList: any;
  displayedColumns = ["name", "salonaddress", "contact", "isactive", "action"];
  page: any = 1;
  limit: any = 0;
  count: any = 5;
  showSalonDetail: boolean;
  subscription: Subscription;
  pageSize: any = 5;
  disabled: boolean = true;
  salonRequestDetails: any;
  pageNumber: any;
  noRecordFound: boolean;
  ActiveSalonsCount: any = 0;
  ActiveUsersCount: any = 0;
  dataDefault: any;
  salonEmail: any;

  constructor(
    private adminServ: AdminServService,
    private toastServ: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("isReload")) === true) {
      window.location.reload();
      sessionStorage.setItem("isReload", JSON.stringify(false));
    }

    let dataToPass = {
      pageSize: this.pageSize,
      page: this.page
    };
    this.dataDefault = dataToPass;

    this.getActiveSalonsCount();
    this.getActiveUsersCount();
    this.subscription = timer(0, 10000)
      .pipe(switchMap(() => this.adminServ.getSalonsRequest(this.dataDefault)))
      .subscribe(result => {
        this.SalonRequestList = result["data"]["data"];
        this.limit = result["data"]["countNumber"];
      });

    this.adminServ.setHeaderText("Salons Request");
  }

  /**
   * Function is use to Pay to get salon requests list
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  getRequests() {
    console.log("getreq0");
    let dataToPass = {
      pageSize: this.pageSize,
      page: this.page
    };
    this.adminServ.getSalonsRequest(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.SalonRequestList = data["data"]["data"];
          this.limit = data["data"]["countNumber"];

          if (this.limit == 0 || this.SalonRequestList.length === 0) {
            this.noRecordFound = true;
          } else {
            this.noRecordFound = false;
          }
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        console.log(error);
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }

  paginate(event) {
    //   console.log(event);
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
    // console.log("ApproveFor", data);
    let dataToPass = {
      salon_id: data._id
    };
    this.adminServ.approveSalonRequests(dataToPass).subscribe(
      data => {
        //    console.log("FFFF", data);
        if (data["code"] === 200) {
          this.toastServ.success("Salon Approved Successfully", "", {
            timeOut: 1000
          });
          this.getRequests();
          this.getActiveSalonsCount();
          this.getActiveUsersCount();
        } else if (data["code"] === 400) {
          this.toastServ.error("Failed", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        console.log(error);
        this.toastServ.error(
          "Failed To Approve Salon",
          error.error["message"],
          {
            timeOut: 1000
          }
        );
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
    console.log("sssssssssss");
    let dataToPass = {
      type: "user"
    };
    this.adminServ.getActiveUsersCount(dataToPass).subscribe(
      data => {
        if (data["code"] == 200) {
          this.ActiveUsersCount = data["data"];
          //   console.log("ActiveUsersCount SALONS", this.ActiveUsersCount);
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error["message"], {
          timeOut: 1000
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
    console.log("comnign");
    let dataToPass = {
      type: "salon"
    };
    this.adminServ.getActiveSalonsCount(dataToPass).subscribe(
      data => {
        //  console.log("DATA", data);
        if (data["code"] == 200) {
          this.ActiveSalonsCount = data["data"];
          //   console.log("ACTIVE SALONS", this.ActiveSalonsCount);
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  showSalonDetails(data) {
    // console.log(data);
    let dataToPass = {
      salon_id: data._id
    };

    this.adminServ.getSalonDetails(dataToPass).subscribe((data: any) => {
      //  console.log("DSS", data);

      if (data["code"] === 200) {
        this.showSalonDetail = true;
        this.salonRequestDetails = data["data"]["salondetail"];
        this.salonEmail = data["data"]["email"];
        if (this.salonRequestDetails["image"] === null) {
          this.salonRequestDetails["image"] =
            "../../../assets/images/profilepic.png";
        }
      } else {
        this.toastServ.error("Failed To Fetch User Details", "Error", {
          timeOut: 1000
        });
      }
    });
  }
  closeSalonDetails() {
    this.showSalonDetail = false;
  }

  /**
   * Function is use to Pay to Decline Salon Request
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  declineSalonRequest(data) {
    let dataToPass = {
      salon_id: data._id
    };
    this.adminServ.declineSalonRequest(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.toastServ.success("Salon Declined Successfully", "", {
            timeOut: 1000
          });
          this.getRequests();
          this.getActiveSalonsCount();
          this.getActiveUsersCount();
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
}
