import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AvailableLanguages } from "../../enums";
import { LanguagesService } from "../../services";

@Component({
  selector: "app-privacypolicy",
  templateUrl: "./privacypolicy.component.html",
  styleUrls: ["./privacypolicy.component.scss"],
})
export class PrivacypolicyComponent implements OnInit, OnDestroy {
  currentLanguage: AvailableLanguages;
  currentLanguageSub: Subscription;

  constructor(private languagesService: LanguagesService) {}

  ngOnInit(): void {
    this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(
      (x) => (this.currentLanguage = x)
    );
  }

  ngOnDestroy() {
    this.currentLanguageSub.unsubscribe();
  }
}
