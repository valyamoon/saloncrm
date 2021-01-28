// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  env: "local",
  production: false,
  apiUrl: "http://localhost:4001",
  baseUrl: "http://localhost:4001",
  backendBaseUrl: "http://localhost:4001",
  translationUrl: "https://translation.googleapis.com/language/translate/v2",
  googleApiKey: "AIzaSyDaakGHke7OFoCbNcD141a0cVPJQrGkXXc"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
