import { FacebookLoginProvider, SocialUser } from "ngx-angular-social-login";

declare let FB: any;

export class CustomFacebookLoginProvider extends FacebookLoginProvider {
  signIn(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      FB.login((response: any) => {
        if (response.authResponse) {
          const accessToken = FB.getAuthResponse()['accessToken'];
          FB.api('/me?fields=name,email,picture', (res: any) => {
            resolve(CustomFacebookLoginProvider.drawUser(Object.assign({}, {token: accessToken}, res)));
          });
        }
      }, { scope: 'email,public_profile' });
    });
  }
}