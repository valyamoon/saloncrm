import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  activeUsersList: any;
  activeSalons: any;
  isLoader: boolean;
  noRecordsFound: boolean = false;
  userDetails: any;
  userDetailHeaderText: any = "User Details";
  showUserDetails: boolean;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = ["firstName", "lastName", "email", "phone", "action"];
  limit: any = 0;
  count: any = 5;
  pageSize: any = 5;
  page: any = 1;
  ActiveUsersCount: any;
  disabled: boolean = true;
  dataSource: any;
  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService
  ) {}

  ngOnInit() {
    this.getActiveUsersList();
    this.getActiveUsersCount();
    this.adminServ.setHeaderText("Manage Users");
  }

  getActiveUsersList() {
    this.isLoader = true;
    let dataToPass = {
      type: "user",
      pageSize: this.count,
      page: this.page
    };
    this.adminServ.getActiveUsersList(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isLoader = false;
          this.activeUsersList = data["data"];
          this.dataSource = new MatTableDataSource(this.activeUsersList);
          this.dataSource.sort = this.sort;
          if (this.activeUsersList.length == 0) {
            this.noRecordsFound = true;
          } else {
            this.noRecordsFound = false;
          }
        } else {
          this.isLoader = false;
          this.toastrServ.error("Failed To Fetch Users List", "", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 2000
        });
      }
    );
  }
  closeUserDetail() {
    this.showUserDetails = false;
    this.userDetails = null;
  }
  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewUserDetails(data) {
    this.isLoader = true;
    let dataToPass = {
      user_id: data._id
    };

    this.adminServ.getUserDetails(dataToPass).subscribe((data: any) => {
      if (data["code"] === 200) {
        this.isLoader = false;
        this.showUserDetails = true;
        this.userDetails = data["data"];
        if (this.userDetails["profilepic"] === null) {
          this.userDetails.profilepic = "../../../assets/images/profilepic.png";
        }
      } else {
        this.isLoader = false;
        this.toastrServ.error("Failed To Fetch User Details", "Error", {
          timeOut: 2000
        });
      }
    });
  }

  getActiveUsersCount() {
    let dataToPass = {
      type: "user"
    };
    this.adminServ.getActiveUsersCount(dataToPass).subscribe(
      data => {
        //   console.log("DATA", data);
        if (data["code"] == 200) {
          this.ActiveUsersCount = data["data"];
          //   console.log("ACTIVE USERS COUNT", this.ActiveUsersCount);
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 3000
        });
      }
    );
  }

  paginate(event) {
    //  console.log(event);
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getActiveUsersList();
  }
}
