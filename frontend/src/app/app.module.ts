import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import{MatPaginatorModule,MatTableModule} from '@angular/material';


import {ToastrModule} from 'ngx-toastr';
import {} from 'googlemaps';
import { AgmCoreModule } from '@agm/core'; 
import LatLng = google.maps.LatLng;
 import {LocationPickerModule} from "ng-location-picker";


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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg'
    }),
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
