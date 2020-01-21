import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: ""
  })
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  baseUrl = environment.backendBaseUrl + "/api";

  constructor(private http: HttpClient) {}

  loginSalon(data) {
    return this.http.post(this.baseUrl + "/login", data);
  }
  signUpSalon(data) {
    return this.http.post(this.baseUrl + "/register", data);
  }
}
