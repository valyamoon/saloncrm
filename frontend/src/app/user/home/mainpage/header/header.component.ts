import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServService } from "../../auth-serv.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  userName: any;
  constructor(private router: Router, private authServ: AuthServService) {}

  ngOnInit() {
    if (localStorage.getItem("LoggedInUser")) {
      this.isUserLoggedIn = true;
      this.userName = sessionStorage.getItem("username");
    } else {
      this.isUserLoggedIn = false;
    }
  }
  toggleHeader() {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("expanded");
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }
  logout() {
    this.authServ.logout();
    this.router.navigate(["/home"]);
  }
}
