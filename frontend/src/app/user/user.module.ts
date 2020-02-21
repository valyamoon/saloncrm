import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";
import { HeaderComponent } from "./home/mainpage/header/header.component";
import { FooterComponent } from "./home/mainpage/footer/footer.component";

import { UserloginComponent } from "./home/userlogin/userlogin.component";
import { SalonListComponent } from './home/salon-list/salon-list.component';
import { SalonDetailComponent } from './home/salon-detail/salon-detail.component';

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
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
