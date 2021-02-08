import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { TranslationResponse } from "../models";

@Injectable({ providedIn: "root" })
export class TranslationService {
  private url = environment.translationUrl;
  private key = environment.googleApiKey;

  constructor(private httpClient: HttpClient) {}

  translate(text: string, targetLanguage: string = "ru") {
    return this.httpClient.post<TranslationResponse>(
      `${this.url}?key=${this.key}`,
      { q: text, target: targetLanguage, format: "text" }
    );
  }
}
