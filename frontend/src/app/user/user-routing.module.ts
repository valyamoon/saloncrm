import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";

import { UserloginComponent } from "./home/userlogin/userlogin.component";
import { SalonListComponent } from "./home/salon-list/salon-list.component";
import { SalonDetailComponent } from "./home/salon-detail/salon-detail.component";
import { BookingsComponent } from "./home/bookings/bookings.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "home", component: MainpageComponent },
      { path: "login", component: UserloginComponent },
      { path: "list", component: SalonListComponent },
      { path: "detail", component: SalonDetailComponent },
      { path: "booking", component: BookingsComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
