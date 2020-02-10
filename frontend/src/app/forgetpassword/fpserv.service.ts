import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class FpservService {
  baseUrl = environment.backendBaseUrl + "/api";
  constructor(private http: HttpClient) { }

  forgotPassword(data) {

    return this.http.post(this.baseUrl + "/forgot-password", data);
  }
}
