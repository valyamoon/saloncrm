import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NotifierModule} from 'angular-notifier'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserlistComponent } from './admin-dashboard/userlist/userlist.component';
import { SalonlistComponent } from './admin-dashboard/salonlist/salonlist.component';
import { HeaderComponent } from './admin-dashboard/header/header.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';






@NgModule({
  declarations: [ AdminloginComponent, AdminDashboardComponent, UserlistComponent,SalonlistComponent, HeaderComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    RouterModule
    
  ]
})
export class AdminModule { }
