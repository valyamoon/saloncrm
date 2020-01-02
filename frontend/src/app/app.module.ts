import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

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
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
