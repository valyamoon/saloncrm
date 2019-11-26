import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { SalonAddComponent } from './salon-add/salon-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationComponent,
    SalonAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
