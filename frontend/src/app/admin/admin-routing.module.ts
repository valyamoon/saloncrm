import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminloginComponent } from "./adminlogin/adminlogin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthService } from "../admin/auth.service";
import { AuthGuard } from "../admin/auth.guard";
import { SalonlistComponent } from "./admin-dashboard/salonlist/salonlist.component";
import { UserlistComponent } from "./admin-dashboard/userlist/userlist.component";
import { DashboardComponent } from "./admin-dashboard/dashboard/dashboard.component";
import { CategoriesComponent } from "./admin-dashboard/categories/categories.component";
import { ServicesComponent } from "./admin-dashboard/services/services.component";
import { RolesComponent } from "./admin-dashboard/roles/roles.component";
import { ManageAdminComponent } from "./admin-dashboard/manage-admin/manage-admin.component";
import { ConfirmationComponent } from "./admin-dashboard/confirmation/confirmation.component";
import { ManageplanComponent } from "./admin-dashboard/manageplan/manageplan.component";
import { SubcriptionsListComponent } from "./admin-dashboard/subcriptions-list/subcriptions-list.component";
import { DetailsComponent } from "./admin-dashboard/details/details.component";
import { BookingDetailsComponent } from "./admin-dashboard/booking-details/booking-details.component";

// const routes: Routes = [{path:'',component:AdminloginComponent},

// {path:'home',component:AdminDashboardComponent,canActivate:[AuthGuard],children: [{path:'userlist',loadChildren:() => import('../admin/admin-dashboard/users-list/users-list.module').then(m=>m.UsersListModule)},
// {path:'salonlist',loadChildren:() => import('../admin/admin-dashboard/salons-list/salons-list.module').then(m=>m.SalonsListModule)},
// {path:'',redirectTo:'salonlist',pathMatch:'full'}]}

// ];
const routes: Routes = [
  { path: "", component: AdminloginComponent },

  {
    path: "home",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "salons", component: SalonlistComponent },
      { path: "users", component: UserlistComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "services", component: ServicesComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "roles", component: RolesComponent },
      { path: "detail", component: DetailsComponent },
      { path: "manage-plan", component: ManageplanComponent },
      { path: "bookings", component: BookingDetailsComponent },
      { path: "subscribed-salons", component: SubcriptionsListComponent },
      // { path: "location", component: ConfirmationComponent },
      { path: "manage-admin", component: ManageAdminComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
