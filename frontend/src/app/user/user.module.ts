import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './home/mainpage/mainpage.component';
import { HeaderComponent } from './home/mainpage/header/header.component';
import { FooterComponent } from './home/mainpage/footer/footer.component';


@NgModule({
  declarations: [HomeComponent, MainpageComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
