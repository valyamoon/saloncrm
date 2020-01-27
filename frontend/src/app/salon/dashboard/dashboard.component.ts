import { Component, OnInit } from "@angular/core";
import { CommonService } from "../dashboard/common.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  dropdownVisible = false;
  salonData: any;
  user_id: any;
  constructor(
    private commServ: CommonService,
    private toastrServ: ToastrService
  ) {}

  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData(this.user_id);
    // this.checkChanges(this.user_id);
  }

  // checkChanges(data) {
  //   setInterval(() => {
  //     this.getSalonData(data);
  //   }, 3000);
  // }

  toggleSidebar() {
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("sidenav-toggled");
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  getSalonData(userId) {
    let data = {
      user_id: userId
    };
    this.commServ.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
        } else {
          this.toastrServ.error("Invalid salon details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastrServ.error("Failed to get salon data", error, {
          timeOut: 3000
        });
      }
    );
  }
}

// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { environment } from "../../../environments/environment";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json",
//     Authorization: ""
//   })
// };
// export class SalonService {
//   baseUrl = environment.backendBaseUrl + "/api";

//   constructor(private http: HttpClient) {}
//   serviceList(){
//     return  this.http.post(this.baseUrl + "/servicelist", httpOptions);
//   }
// }
