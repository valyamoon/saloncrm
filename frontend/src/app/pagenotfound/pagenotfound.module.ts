import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagenotfoundRoutingModule } from "./pagenotfound-routing.module";
import { PagenotfoundtextComponent } from "./pagenotfoundtext/pagenotfoundtext.component";

@NgModule({
  declarations: [PagenotfoundtextComponent],
  imports: [CommonModule, PagenotfoundRoutingModule]
})
export class PagenotfoundModule {}
