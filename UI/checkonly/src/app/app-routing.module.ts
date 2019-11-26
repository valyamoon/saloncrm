import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { SalonAddComponent } from './salon-add/salon-add.component';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'location',component:LocationComponent},{path:'salon',component:SalonAddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
