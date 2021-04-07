import { LoginProviderClass, SocialUser } from "ngx-angular-social-login";
import { BaseLoginProvider } from "ngx-angular-social-login/entities/base-login-provider";

declare let FB: any;

export class FacebookLoginProvider extends BaseLoginProvider {

  public static readonly PROVIDER_ID = 'facebook';
  public loginProviderObj: LoginProviderClass = new LoginProviderClass();

  constructor(private clientId: string) {
    super();
    this.loginProviderObj.id = clientId;
    this.loginProviderObj.name = 'facebook';
    this.loginProviderObj.url = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.1';
  }

  initialize(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      this.loadScript(this.loginProviderObj, () => {
          FB.init({
            appId: this.clientId,
            autoLogAppEvents: true,
            cookie: true,
            xfbml: true,
            version: 'v3.0'
          });
          FB.AppEvents.logPageView();

          FB.getLoginStatus(function (response: any) {
            if (response.status === 'connected') {
              const accessToken = FB.getAuthResponse()['accessToken'];
              FB.api('/me?fields=name,email,picture', (res: any) => {
                resolve(FacebookLoginProvider.drawUser(Object.assign({}, {token: accessToken}, res)));
              });
            }
          });
        });
    });
  }

  static drawUser(response: any): SocialUser {
    let user: SocialUser = new SocialUser();
    user.id = response.id;
    user.name = response.name;
    user.email = response.email;
    user.token = response.token;
    user.image = 'https://graph.facebook.com/' + response.id + '/picture?type=normal';
    return user;
  }

  signIn(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      FB.login((response: any) => {
        if (response.authResponse) {
          const accessToken = FB.getAuthResponse()['accessToken'];
          FB.api('/me?fields=name,email,picture', (res: any) => {
            resolve(FacebookLoginProvider.drawUser(Object.assign({}, {token: accessToken}, res)));
          });
        }
      }, { scope: 'email,public_profile' });
    });
  }

  signOut(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      FB.logout((response: any) => {
        resolve();
      });
    });
  }

}