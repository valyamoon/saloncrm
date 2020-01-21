import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { SalonRoutingModule } from "./salon-routing.module";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AgmCoreModule } from "@agm/core";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { ManageServiceComponent } from "./dashboard/manage-service/manage-service.component";
import { ManageEmployeeComponent } from "./dashboard/manage-employee/manage-employee.component";

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ManageServiceComponent,
    ManageEmployeeComponent
  ],
  imports: [
    CommonModule,
    SalonRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg"
    }),
    NgxMaterialTimepickerModule
  ]
})
export class SalonModule {}
