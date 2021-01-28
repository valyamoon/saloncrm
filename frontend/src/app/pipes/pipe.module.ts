import { NgModule } from "@angular/core";
import { TranslationPipe } from "./translation.pipe";

@NgModule({
  declarations: [TranslationPipe],
  providers: [TranslationPipe],
  exports: [TranslationPipe],
})
export class PipeModule {}
