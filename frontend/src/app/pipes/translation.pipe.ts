import { Pipe, PipeTransform } from "@angular/core";
import { map } from "rxjs/operators";
import { TranslationService } from "../services";

@Pipe({ name: "translate" })
export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(text: string, target: string) {
    return this.translationService.translate(text, target).pipe(
      map((x) => {
        const [{ translatedText }] = x.data.translations;
        return translatedText;
      })
    );
  }
}
