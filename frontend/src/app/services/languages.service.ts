import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AvailableLanguages } from "../enums";

@Injectable({ providedIn: "root" })
export class LanguagesService {
  private currentLanguage = new BehaviorSubject(AvailableLanguages.EN);
  currentLanguage$ = this.currentLanguage.asObservable();

  changeLanguage(language: AvailableLanguages) {
    this.currentLanguage.next(language);
  }
}
