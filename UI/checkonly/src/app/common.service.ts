import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

const baseURL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getCodes() {
    return this.http.get(baseURL + "/api/codes");
  }

  submitNumber(countrycode) {
    return this.http.post(baseURL + "/api/getotp", countrycode, httpOptions);
  }

  verifyNumber(data) {
    return this.http.post(baseURL + "/api/verifyotp", data, httpOptions);
  }

  addUser(data) {
    return this.http.post(baseURL + "/api/registercustomer", data, httpOptions);
  }
  addSalon(data) {
    console.log("::", data);
    return this.http.post(baseURL + "/api/salon", data, httpOptions);
  }
}
