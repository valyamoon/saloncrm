import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { UserRoutingModule } from "./user-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";
import { HeaderComponent } from "./home/mainpage/header/header.component";
import { FooterComponent } from "./home/mainpage/footer/footer.component";

import { UserloginComponent } from "./home/userlogin/userlogin.component";
import { SalonListComponent } from "./home/salon-list/salon-list.component";
import { SalonDetailComponent } from "./home/salon-detail/salon-detail.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule, MatNativeDateModule } from "@angular/material";

@NgModule({
  declarations: [
    HomeComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    SalonListComponent,
    SalonDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class UserModule {}
