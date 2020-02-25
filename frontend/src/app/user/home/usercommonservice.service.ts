import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("LoggedInUser")
  })
};

@Injectable({
  providedIn: "root"
})
export class UsercommonserviceService {
  baseUrl = environment.backendBaseUrl + "/api";
  token: any;
  constructor(private http: HttpClient) {}

  getCategoriesList() {
    let dataToPass = {
      type: "categories"
    };
    return this.http.post(this.baseUrl + "/categories", dataToPass);
  }
}
