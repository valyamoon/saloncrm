import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angularx-social-login";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LocationComponent } from "./location/location.component";
import { SalonAddComponent } from "./salon-add/salon-add.component";

// const config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("981768045519868")
//   },
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("AIzaSyAeQw1pIo89YFuKSeDn1ltXLdI03T63KyY")
//   }
// ]);

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "274336154697-b3nbfgq6nono41e9qhjf8n36hjjj6rda.apps.googleusercontent.com"
    )
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("981768045519868")
  }
]);

export function provideConfig() {
  return config;
}

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
      apiKey: "AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg"
    }),
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
