import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalonRoutingModule } from './salon-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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



@NgModule({
  declarations: [SignupComponent, LoginComponent, DashboardComponent, ServicesComponent, ProfileComponent, TimeComponent, BookingsComponent, PaymentComponent, AccountComponent, CancelledBookingsComponent, RatingsComponent, NotificationsComponent, GatewayComponent],
  imports: [
    CommonModule,
    SalonRoutingModule
  ]
})
export class SalonModule { }
