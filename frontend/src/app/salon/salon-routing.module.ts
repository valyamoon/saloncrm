import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from '../salon/auth.guard';
import { AuthService } from '../salon/auth.service';

import { BookingComponent } from './dashboard/booking/booking.component';
import { AddEmployeeComponent } from './dashboard/employee/add-employee/add-employee.component';
import { AddServiceComponent } from './dashboard/services/add-service/add-service.component';
import { TimingComponent } from './dashboard/timing/timing.component';
import { SalondetailsComponent } from './dashboard/salondetails/salondetails.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'booking', component: BookingComponent },
      { path: "details", component: SalondetailsComponent },
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'add-service', component: AddServiceComponent },
      { path: 'timing', component: TimingComponent },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class SalonRoutingModule { }
