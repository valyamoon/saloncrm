import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreatepasswordRoutingModule } from "./createpassword-routing.module";
import { CreatepasswordComponent } from "./createpassword.component";
import { CpComponent } from "./cp/cp.component";

@NgModule({
  declarations: [CreatepasswordComponent, CpComponent],
  imports: [CommonModule, CreatepasswordRoutingModule]
})
export class CreatepasswordModule {}
