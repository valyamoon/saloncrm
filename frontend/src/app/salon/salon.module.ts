import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SalonRoutingModule } from './salon-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core'; 
import { ProfileComponent } from './dashboard/profile/profile.component';



@NgModule({
  declarations: [ LoginComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    SalonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg'
    })
  ]
})
export class SalonModule { }
