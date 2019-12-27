import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NotifierModule } from "angular-notifier";
//import {CoreModule} from '../app/core/core.module';

import { SalonComponent } from './salon/salon.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import{RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SalonComponent,
    UserComponent,
    AdminComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
