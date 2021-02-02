import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AvailableLanguages } from "../../../enums";
import { LanguagesService } from "../../../services";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.scss"],
})
export class DownloadComponent implements OnInit, OnDestroy {
  currentLanguage: AvailableLanguages;
  currentLanguageSub: Subscription;

  constructor(private languagesService: LanguagesService) {}

  ngOnInit() {
    this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(
      (x) => (this.currentLanguage = x)
    );
  }

  ngOnDestroy() {
    this.currentLanguageSub.unsubscribe();
  }
}
