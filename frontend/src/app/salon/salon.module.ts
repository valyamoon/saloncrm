import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SalonRoutingModule } from "./salon-routing.module";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgxMaskModule } from "ngx-mask";
import { AgmCoreModule } from "@agm/core";
import { ProfileComponent } from "./dashboard/profile/profile.component";
// import { ManageServiceComponent } from './dashboard/manage-service/manage-service.component';
// import { ManageEmployeeComponent } from './dashboard/manage-employee/manage-employee.component';
import { ServicesComponent } from "./dashboard/services/services.component";
import { EmployeeComponent } from "./dashboard/employee/employee.component";

import { MatTabsModule } from "@angular/material/tabs";
import { SelectAutocompleteModule } from "mat-select-autocomplete";

import { FooterComponent } from "./dashboard/footer/footer.component";
import { SalonHeaderComponent } from "./dashboard/salon-header/salon-header.component";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { BookingComponent } from "./dashboard/booking/booking.component";
import { AddEmployeeComponent } from "./dashboard/employee/add-employee/add-employee.component";
import { AddServiceComponent } from "./dashboard/services/add-service/add-service.component";
import {
  MatPaginatorModule,
  MatTableModule,
  MatSlideToggleModule,
  MatExpansionModule
} from "@angular/material";
import { TimingComponent } from "./dashboard/timing/timing.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { SalondetailsComponent } from "./dashboard/salondetails/salondetails.component";
import { EditsalonComponent } from "./dashboard/editsalon/editsalon.component";
import { SubscribeComponent } from "./dashboard/subscribe/subscribe.component";
import { SubscriptionComponent } from "./dashboard/subscription/subscription.component";
import { PromcodeComponent } from "./dashboard/promcode/promcode.component";


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ServicesComponent,
    EmployeeComponent,
    FooterComponent,
    SalonHeaderComponent,
    BookingComponent,
    AddEmployeeComponent,
    AddServiceComponent,
    TimingComponent,
    SalondetailsComponent,
    EditsalonComponent,
    SubscribeComponent,
    SubscriptionComponent,
    PromcodeComponent
  ],
  imports: [
    CommonModule,
    SalonRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    SelectAutocompleteModule,
    MatTabsModule,
    MatSelectModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg"
    }),
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMaskModule.forRoot(),
    MatExpansionModule
  ]
})
export class SalonModule { }
