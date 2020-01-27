import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundtextComponent } from "../pagenotfound/pagenotfoundtext/pagenotfoundtext.component";
const routes: Routes = [{ path: "", component: PagenotfoundtextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagenotfoundRoutingModule {}
