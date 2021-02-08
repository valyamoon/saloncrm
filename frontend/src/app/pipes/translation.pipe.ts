import { Pipe, PipeTransform } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { AvailableLanguages } from "../enums";
import { TranslationService } from "../services";

@Pipe({ name: "translate" })
export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(text: string, target: string) {
    if (target === AvailableLanguages.EN) {
      return of(text);
    }
    return this.translationService.translate(text, target).pipe(
      map((x) => {
        const [{ translatedText }] = x.data.translations;
        return translatedText;
      })
    );
  }
}
