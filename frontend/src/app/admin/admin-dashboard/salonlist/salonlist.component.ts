import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-salonlist",
  templateUrl: "./salonlist.component.html",
  styleUrls: ["./salonlist.component.scss"]
})
export class SalonlistComponent implements OnInit {
  activeSalons: any;
  noRecordsFound: boolean;
  isCountShow: boolean;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLoader: boolean;
  displayedColumns = [
    "name",
    "salonaddress",
    "contact",
    "opentime",
    "closetime",
    "action"
  ];

  limit: any = 0;
  count: any = 5;
  pageSize: any = 5;
  monthlyUserCount: any;
  page: any = 1;
  ActiveSalonsCount: any;
  disabled: boolean = true;
  salonDetails: any;
  showSalonDetail: boolean = false;
  salonEmail: any;
  dataSource: any;

  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService
  ) {}

  ngOnInit() {
    this.getActiveSalonsList();
    this.getActiveSalonsCount();
    this.adminServ.setHeaderText("Manage Salons");
  }

  /**
   * Function is use to Fetch Active salons list
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  getActiveSalonsList() {
    this.isLoader = true;
    let dataToPass = {
      type: "activesalons",
      pageSize: this.count,
      page: this.page
    };
    this.adminServ.getSalonsList(dataToPass).subscribe(
      data => {
        // console.log(data);
        // console.log("SalonsList", data["data"]);
        if (data["code"] === 200) {
          this.isLoader = false;
          this.activeSalons = data["data"];
          this.dataSource = new MatTableDataSource(this.activeSalons);
          this.dataSource.sort = this.sort;
          if (this.activeSalons.length == 0) {
            this.noRecordsFound = true;
          } else {
            this.noRecordsFound = false;
          }
        } else {
          this.isLoader = false;
          this.toastrServ.error("Failed To Fetch Salons", "Failed", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.success("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getActiveSalonsCount() {
    let dataToPass = {
      type: "salon"
    };
    this.adminServ.getActiveSalonsCount(dataToPass).subscribe(
      data => {
        //  console.log("DATA", data);
        if (data["code"] == 200) {
          this.ActiveSalonsCount = data["data"];
          //   console.log("ACTIVE SALONS COUNT", this.ActiveSalonsCount);
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  paginate(event) {
    //  console.log(event);
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getActiveSalonsList();
  }

  showSalonDetails(data) {
    this.isLoader = true;
    // console.log(data);
    let dataToPass = {
      salon_id: data._id
    };

    this.adminServ.getSalonDetails(dataToPass).subscribe((data: any) => {
      //  console.log("DSS", data);

      if (data["code"] === 200) {
        this.showSalonDetail = true;
        this.isLoader = false;
        this.salonDetails = data["data"]["salondetail"];
        this.salonEmail = data["data"]["email"];
        if (this.salonDetails["image"] === null) {
          this.salonDetails["image"] = "../../../assets/images/profilepic.png";
        }
      } else {
        this.isLoader = false;
        this.toastrServ.error("Failed To Fetch User Details", "Error", {
          timeOut: 1000
        });
      }
    });
  }

  closeSalonDetails() {
    this.showSalonDetail = false;
    this.isCountShow = false;
  }

  getMontlyUser(data) {
    if (data) {
      let dataToPass = { salon_id: data["_id"] };
      this.adminServ.getMonthlyUsersCount(dataToPass).subscribe(
        (data: any) => {
          if (data.code === 200) {
            this.monthlyUserCount = data.data;
            this.showSalonDetail = true;
            this.isCountShow = true;
          } else if (data.code == 400) {
            this.toastrServ.error(data.message, "", {
              timeOut: 1000
            });
          }
        },
        error => {
          this.toastrServ.error(error.message, "", { timeOut: 1000 });
        }
      );
    }
  }

  declineSalonRequest(data) {
    this.isLoader = true;
    // console.log("ApproveFor", data);
    let dataToPass = {
      salon_id: data._id
    };
    this.adminServ.declineSalonRequest(dataToPass).subscribe(
      data => {
        // console.log("FFFF", data);
        if (data["code"] === 200) {
          this.isLoader = false;
          this.toastrServ.success("Salon Declined Successfully", "", {
            timeOut: 3000
          });
          this.getActiveSalonsList();
          this.getActiveSalonsCount();
        } else {
          this.isLoader = false;
          this.toastrServ.error("Failed To Decline", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 3000
        });
      }
    );
  }
}
