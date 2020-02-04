import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ForgetpasswordRoutingModule } from "./forgetpassword-routing.module";
import { FpComponent } from "./fp/fp.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FpComponent],
  imports: [
    CommonModule,
    ForgetpasswordRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ForgetpasswordModule {}
