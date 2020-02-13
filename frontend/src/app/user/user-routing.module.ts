import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "home", component: MainpageComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
