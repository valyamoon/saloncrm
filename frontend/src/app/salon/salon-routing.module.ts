import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TimeComponent } from './dashboard/time/time.component';
import { BookingsComponent } from './dashboard/bookings/bookings.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { AccountComponent } from './dashboard/account/account.component';
import { CancelledBookingsComponent } from './dashboard/cancelled-bookings/cancelled-bookings.component';
import { RatingsComponent } from './dashboard/ratings/ratings.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { GatewayComponent } from './dashboard/gateway/gateway.component';



const routes: Routes = [{path:'', redirectTo:'signup'},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'home',component:DashboardComponent},
{path:'services',component:ServicesComponent},
{path:'profile',component:ProfileComponent},
{path:'time',component:TimeComponent},
{path:'booking',component:BookingsComponent},
{path:'payment',component:PaymentComponent},
{path:'account',component:AccountComponent},
{path:'cancelled',component:CancelledBookingsComponent},
{path:'ratings',component:RatingsComponent},
{path:'notification',component:NotificationsComponent},
{path:'gateway',component:GatewayComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonRoutingModule { }
