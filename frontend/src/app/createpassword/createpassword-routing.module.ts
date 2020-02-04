import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CpComponent } from "./cp/cp.component";

const routes: Routes = [{ path: "/:id", component: CpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepasswordRoutingModule {}
