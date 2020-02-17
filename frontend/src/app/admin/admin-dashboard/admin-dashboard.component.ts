import { Component, OnInit } from "@angular/core";
import { AdminServService } from "./admin-serv.service";
import { AuthService } from "../../salon/auth.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
  isSelectorShown: boolean = true;
  email: any;
  index: any;
  adminName: any;
  constructor(
    private adminServ: AdminServService,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.adminServ.getHeaderResponse().subscribe((data: any) => {
      this.isSelectorShown = !data;

      this.isSelectorShown = !this.isSelectorShown;
    });
    this.getAdminName();
  }

  getAdminName() {
    this.email = sessionStorage.getItem("userDetails");
    this.index = this.email.indexOf("@");
    this.adminName = this.email.substring(0, this.index).toUpperCase();
  }
  logout() {
    this.authServ.logout();
  }
  hideMenu() {
    this.isSelectorShown = true;
  }
  // this.adminServ.g(data){
  //   this.isSelectorShown =  !this.isSelectorShown;

  //   //data.classList.toggle("change");

  // }
}
