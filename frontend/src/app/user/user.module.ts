import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {} from "googlemaps";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatTabsModule } from "@angular/material/tabs";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { UserRoutingModule } from "./user-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainpageComponent } from "./home/mainpage/mainpage.component";
import { HeaderComponent } from "./home/mainpage/header/header.component";
import { FooterComponent } from "./home/mainpage/footer/footer.component";

import { UserloginComponent } from "./home/userlogin/userlogin.component";
import { SalonListComponent } from "./home/salon-list/salon-list.component";
import { SalonDetailComponent } from "./home/salon-detail/salon-detail.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "ngx-angular-social-login";

import {
  MatFormFieldModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { GooglesearchComponent } from "./home/mainpage/googlesearch/googlesearch.component";
import { NgxMaskModule } from "ngx-mask";
import { StarratingComponent } from "./home/starrating/starrating.component";
import { BookingsComponent } from "./home/bookings/bookings.component";
import { AboutComponent } from "./home/about/about.component";
import { DownloadComponent } from "./home/download/download.component";
import { TermsandconditionComponent } from "./home/termsandcondition/termsandcondition.component";
import { FaqComponent } from "./home/faq/faq.component";
import { CheckoutComponent } from "./home/checkout/checkout.component";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("981768045519868")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "274336154697-b3nbfgq6nono41e9qhjf8n36hjjj6rda.apps.googleusercontent.com"
      )
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    HomeComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    SalonListComponent,
    SalonDetailComponent,
    GooglesearchComponent,
    StarratingComponent,
    BookingsComponent,
    AboutComponent,
    DownloadComponent,
    TermsandconditionComponent,
    FaqComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    Ng2SearchPipeModule,
    SocialLoginModule,
    MatTabsModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class UserModule {}
