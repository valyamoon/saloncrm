import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { CommonService } from "../../dashboard/common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-salon-header",
  templateUrl: "./salon-header.component.html",
  styleUrls: ["./salon-header.component.scss"]
})
export class SalonHeaderComponent implements OnInit {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   //   this.trigger.openMenu();
  // }
  showLogout: boolean;
  userId: any;
  salonData: any;
  constructor(
    private toastServ: ToastrService,
    private authServ: AuthService,
    private comService: CommonService
  ) {}
  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.getSalonData(this.userId);
  }
  showLogoutButton() {
    this.showLogout = true;
  }
    toggleHeader() {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("expanded");
  }

  getSalonData(userId) {
    let data = {
      user_id: userId
    };
    this.comService.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
        } else {
          this.toastServ.error("Invalid salon details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastServ.error("Failed to get salon data", error, {
          timeOut: 3000
        });
      }
    );
  }
  /**
   * Function is use to Pay to logout Salon
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  logout() {
    this.authServ.logout();
    sessionStorage.clear();
  }
}
