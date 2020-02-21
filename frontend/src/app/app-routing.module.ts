import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {} from "../app/user/user.module";
const routes: Routes = [
  {
    path: "salon",
    loadChildren: () =>
      import("../app/salon/salon.module").then(m => m.SalonModule)
  },
  {
    path: "admin",
    loadChildren: () =>
      import("../app/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "forget-password",
    loadChildren: () =>
      import("../app/forgetpassword/forgetpassword.module").then(
        m => m.ForgetpasswordModule
      )
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/user/user.module").then(m => m.UserModule)
  },
  {
    path: "create-password/:id",
    loadChildren: () =>
      import("../app/createpassword/createpassword.module").then(
        m => m.CreatepasswordModule
      )
  },
  {
    path: "pagenotfound",
    loadChildren: () =>
      import("../app/pagenotfound/pagenotfound.module").then(
        m => m.PagenotfoundModule
      )
  },
  { path: "", redirectTo: "", pathMatch: "full" },

  { path: "**", redirectTo: "pagenotfound", pathMatch: "full" }
];

//{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
