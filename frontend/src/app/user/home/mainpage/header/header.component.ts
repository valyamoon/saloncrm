import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AvailableLanguages } from "../../../../enums";
import { LanguagesService } from "../../../../services";
import { AuthServService } from "../../auth-serv.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean;
  userName: any;
  langList: string[] = Object.values(AvailableLanguages);
  currentLanguage: AvailableLanguages;
  currentLanguageSub: Subscription;

  constructor(
    private router: Router,
    private authServ: AuthServService,
    private languagesService: LanguagesService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("LoggedInUser")) {
      this.isUserLoggedIn = true;
      this.userName = sessionStorage.getItem("username");
    } else {
      this.isUserLoggedIn = false;
    }
    this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(
      (x) => (this.currentLanguage = x)
    );
  }

  ngOnDestroy() {
    this.currentLanguageSub.unsubscribe();
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
    localStorage.removeItem("LoggedInUser");
  }

  handleDropDown(event) {
    const { value } = event;
    this.languagesService.changeLanguage(value);
  }
}
