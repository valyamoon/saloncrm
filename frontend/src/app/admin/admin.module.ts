import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NotifierModule } from "angular-notifier";
import { SimpleModalModule } from "ngx-simple-modal";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminloginComponent } from "./adminlogin/adminlogin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { UserlistComponent } from "./admin-dashboard/userlist/userlist.component";
import { SalonlistComponent } from "./admin-dashboard/salonlist/salonlist.component";
import { HeaderComponent } from "./admin-dashboard/header/header.component";
import { DashboardComponent } from "./admin-dashboard/dashboard/dashboard.component";
import {
  MatPaginatorModule,
  MatTableModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSortModule
} from "@angular/material";
import { CategoriesComponent } from "./admin-dashboard/categories/categories.component";
import { ServicesComponent } from "./admin-dashboard/services/services.component";
import { RolesComponent } from "./admin-dashboard/roles/roles.component";
import { HeaderTextComponent } from "./admin-dashboard/header-text/header-text.component";
import { ConfirmationComponent } from "./admin-dashboard/confirmation/confirmation.component";
import { ManageAdminComponent } from "./admin-dashboard/manage-admin/manage-admin.component";
import { ManageplanComponent } from "./admin-dashboard/manageplan/manageplan.component";
import { SubcriptionsListComponent } from "./admin-dashboard/subcriptions-list/subcriptions-list.component";
import { LoaderComponent } from "./admin-dashboard/loader/loader.component";
import { DeleteDialogComponent } from "./admin-dashboard/delete-dialog/delete-dialog.component";
import { DetailsComponent } from "./admin-dashboard/details/details.component";
import { BookingDetailsComponent } from "./admin-dashboard/booking-details/booking-details.component";

@NgModule({
  declarations: [
    AdminloginComponent,
    AdminDashboardComponent,
    UserlistComponent,
    SalonlistComponent,
    HeaderComponent,
    DashboardComponent,
    CategoriesComponent,
    ServicesComponent,
    RolesComponent,
    HeaderTextComponent,
    ConfirmationComponent,
    ManageAdminComponent,
    ManageplanComponent,
    SubcriptionsListComponent,
    LoaderComponent,
    DeleteDialogComponent,
    DetailsComponent,
    BookingDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    SimpleModalModule.forRoot({ container: "modal-container" }),
    MatSortModule
  ],
  entryComponents: [ConfirmationComponent]
})
export class AdminModule {}
