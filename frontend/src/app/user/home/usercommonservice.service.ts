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
const httpOptionss = {
  headers: {
    skip: "true"
  }
};

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

  private userPrefrence = new BehaviorSubject<Object>({});

  setUserPrefrence(data: Object) {
    this.userPrefrence.next(data);
  }
  getUserPrefrence(): Observable<Object> {
    return this.userPrefrence.asObservable();
  }
  getCategoriesList() {
    let dataToPass = {
      type: "categories"
    };
    return this.http.post(
      this.baseUrl + "/categories",
      dataToPass,
      httpOptionss
    );
  }
  getSalonsList(data) {
    return this.http.post(this.baseUrl + "/searchsalon", data);
  }
  getOtpForVerification(data) {
    return this.http.post(this.baseUrl + "/getotp", data);
  }
  verifyOtp(data) {
    return this.http.post(this.baseUrl + "/verifyotp", data);
  }
  registerUser(data) {
    return this.http.post(this.baseUrl + "/register", data);
  }
  loginUser(data) {
    return this.http.post(this.baseUrl + "/login", data);
  }
  addReviewAndRatings(data) {
    return this.http.post(this.baseUrl + "/addreviewrating", data);
  }
  getUserDetails(data) {
    return this.http.post(this.baseUrl + "/user-detail", data);
  }
  payForService(data) {
    return this.http.post(this.baseUrl + "/charge", data);
  }
  getUserBookings(data) {
    return this.http.post(this.baseUrl + "/users-booking", data);
  }
  getSalonDays(data) {
    return this.http.post(this.baseUrl + "/salon-days", data);
  }
  checkPromoCodeValidity(data) {
    return this.http.post(this.baseUrl + "/validate-promocode", data);
  }
  getAdminDetails(data) {
    return this.http.post(this.baseUrl + "/get-admin-detail", data);
  }
  getReviewRatings(data) {
    return this.http.post(this.baseUrl + "/reviewsratings", data);
  }
  getSalonCategories(data) {
    return this.http.post(this.baseUrl + "/saloncategories", data);
  }
  getSalonDetails(data) {
    return this.http.post(this.baseUrl + "/salon", data);
  }
  getSalonWeekDays(data) {
    return this.http.post(this.baseUrl + "/salon-days", data);
  }
  getPromocodes(data) {
    return this.http.post(this.baseUrl + "/promocodes", data);
  }
  getStripeToken(data) {
    return this.http.post(this.baseUrl + "/get-stripe-token", data);
  }
  getWalletAmount(data) {
    return this.http.post(this.baseUrl + "/users-wallet", data);
  }
}
