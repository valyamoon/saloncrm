import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AvailableLanguages } from "../../../../enums";
import { LanguagesService } from "../../../../services";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit, OnDestroy {
  currentLanguage: AvailableLanguages;
  currentLanguageSub: Subscription;

  constructor(
    private router: Router,
    private languagesService: LanguagesService
  ) {}

  ngOnInit() {
    this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(
      (x) => (this.currentLanguage = x)
    );
  }

  ngOnDestroy() {
    this.currentLanguageSub.unsubscribe();
  }

  goTo(data) {
    if (data === "facebook") {
      window.open("https://www.facebook.com", "_blank");
    }
    if (data === "linkedin") {
      window.open("https://www.linkedin.com", "_blank");
    }
    if (data === "google") {
      window.open("https://www.googleplus.com", "_blank");
    }
    if (data === "twitter") {
      window.open("https://www.twitter.com", "_blank");
    }
  }
}
