import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  showLogout: boolean;
  email: any;
  adminName: any;
  index: any;
  isShowSelection: boolean = true;

  constructor(
    private authServ: AuthService,
    private admnServ: AdminServService
  ) { }

  ngOnInit() {
    this.getAdminName();
  }
  showSelection() {


    this.isShowSelection = !this.isShowSelection;
    this.admnServ.setHeaderResponse(this.isShowSelection);
  }
  /**
   * Function is use to Pay to show logout button
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  showLogoutButton() {
    this.showLogout = true;
  }

  /**
   * Function is use to Pay to logout admin
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  logout() {
    this.authServ.logout();
  }

  getAdminName() {
    this.email = sessionStorage.getItem("userDetails");
    this.index = this.email.indexOf("@");
    this.adminName = this.email.substring(0, this.index).toUpperCase();
  }
}
