import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CreatepasswordRoutingModule } from "./createpassword-routing.module";
import { CreatepasswordComponent } from "./createpassword.component";
import { CpComponent } from "./cp/cp.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreatepasswordComponent, CpComponent],
  imports: [
    CommonModule,
    CreatepasswordRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatepasswordModule {}
