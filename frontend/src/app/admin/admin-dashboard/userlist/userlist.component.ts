import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  activeUsersList: any;
  activeSalons: any;
  noRecordsFound: boolean = false;
  userDetails: any;
  userDetailHeaderText: any = "User Details";
  showUserDetails: boolean;

  displayedColumns = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "isactive",
    "action"
  ];
  page: any;
  limit: any = 0;
  count: any = 5;
  pageSize: any = 5;
  ActiveUsersCount: any;
  disabled: boolean = true;
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
    let dataToPass = {
      type: "user"
    };
    this.adminServ.getActiveUsersList(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.activeUsersList = data["data"];
          if (this.activeUsersList.length == 0) {
            this.noRecordsFound = true;
          }
          console.log(this.activeUsersList);
          this.toastrServ.success("Users Fetched Successfully", "Success", {
            timeOut: 2000
          });
        } else {
          this.toastrServ.error("Failed To Fetch Users List", "", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 2000
        });
      }
    );
  }
  closeUserDetail() {
    this.showUserDetails = false;
    this.userDetails = null;
  }

  viewUserDetails(data) {
    let dataToPass = {
      user_id: data._id
    };

    this.adminServ.getUserDetails(dataToPass).subscribe((data: any) => {
      if (data["code"] === 200) {
        this.showUserDetails = true;
        this.userDetails = data["data"];
        if (this.userDetails["profilepic"] === null) {
          this.userDetails.profilepic = "../../../assets/images/profilepic.png";
        }
      } else {
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
        this.toastrServ.error("Server Error", error, {
          timeOut: 3000
        });
      }
    );
  }

  paginate(event) {
    // console.log(event);
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getActiveUsersList();
  }
}
