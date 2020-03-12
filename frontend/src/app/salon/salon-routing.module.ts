import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { AuthGuard } from "../salon/auth.guard";
import { AuthService } from "../salon/auth.service";

import { BookingComponent } from "./dashboard/booking/booking.component";
import { AddEmployeeComponent } from "./dashboard/employee/add-employee/add-employee.component";
import { AddServiceComponent } from "./dashboard/services/add-service/add-service.component";
import { TimingComponent } from "./dashboard/timing/timing.component";
import { SalondetailsComponent } from "./dashboard/salondetails/salondetails.component";
import { EditsalonComponent } from "./dashboard/editsalon/editsalon.component";
import { SubscribeComponent } from "./dashboard/subscribe/subscribe.component";
import { SubscriptionComponent } from "./dashboard/subscription/subscription.component";
import { PromcodeComponent } from "./dashboard/promcode/promcode.component";
import { ConnectAccountComponent } from "./dashboard/connect-account/connect-account.component";
import { TransactionsComponent } from "./dashboard/transactions/transactions.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "booking", component: BookingComponent },
      { path: "details", component: SalondetailsComponent },
      { path: "edit-salon", component: EditsalonComponent },
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "add-employee", component: AddEmployeeComponent },
      { path: "subscription", component: SubscriptionComponent },
      { path: "add-service", component: AddServiceComponent },
      { path: "timing", component: TimingComponent },
      { path: "promocode", component: PromcodeComponent },
      { path: "subscribe", component: SubscribeComponent },
      { path: "connect", component: ConnectAccountComponent },
      { path: "transactions", component: TransactionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class SalonRoutingModule {}
