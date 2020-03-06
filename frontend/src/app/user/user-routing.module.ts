import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";

import { UserloginComponent } from "./home/userlogin/userlogin.component";
import { SalonListComponent } from "./home/salon-list/salon-list.component";
import { SalonDetailComponent } from "./home/salon-detail/salon-detail.component";
import { BookingsComponent } from "./home/bookings/bookings.component";
import { AboutComponent } from "./home/about/about.component";
import { DownloadComponent } from "./home/download/download.component";
import { TermsandconditionComponent } from "./home/termsandcondition/termsandcondition.component";
import { FaqComponent } from "./home/faq/faq.component";
import { CheckoutComponent } from "./home/checkout/checkout.component";

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
      { path: "about", component: AboutComponent },
      { path: "download", component: DownloadComponent },
      { path: "termsandcondition", component: TermsandconditionComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "faq", component: FaqComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
