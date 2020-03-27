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
export class AdminServService {
  baseUrl = environment.backendBaseUrl + "/api";
  token: any;

  constructor(private http: HttpClient) {}

  private headerText = new BehaviorSubject<string>("");

  // Initialize with emtpy string
  private headerResponse = new BehaviorSubject<boolean>(true);

  setHeaderResponse(data: boolean) {
    // Fire the update event with the new data
    this.headerResponse.next(data);
  }

  getHeaderResponse(): Observable<boolean> {
    return this.headerResponse.asObservable();
  }

  setHeaderText(data: string) {
    // Fire the update event with the new data
    this.headerText.next(data);
  }

  getHeaderText(): Observable<string> {
    return this.headerText.asObservable();
  }

  getSalonsList(data) {
    return this.http.post(this.baseUrl + "/activesalons", data);
  }

  getSalonsRequest(data) {
    return this.http.post(this.baseUrl + "/salonsrequest", data, httpOptions);
  }
  approveSalonRequests(data) {
    return this.http.post(this.baseUrl + "/acceptrequest", data);
  }

  getActiveSalonsCount(data) {
    return this.http.post(this.baseUrl + "/salonscount", data, httpOptions);
  }
  getActiveUsersCount(data) {
    return this.http.post(this.baseUrl + "/userscount", data, httpOptions);
  }

  declineSalonRequest(data) {
    return this.http.post(this.baseUrl + "/suspendsalon", data);
  }
  getActiveUsersList(data) {
    return this.http.post(this.baseUrl + "/userslist", data);
  }

  getAdmincategoriesList(data) {
    return this.http.post(
      this.baseUrl + "/admin-categories",
      data,
      httpOptions
    );
  }

  addCategories(data) {
    return this.http.post(this.baseUrl + "/add-categories", data, httpOptions);
  }

  updateCategory(data) {
    return this.http.post(this.baseUrl + "/update-category", data, httpOptions);
  }
  updateService(data) {
    return this.http.post(this.baseUrl + "/update-service", data, httpOptions);
  }
  deleteCategories(data) {
    return this.http.post(
      this.baseUrl + "/remove-categories",
      data,
      httpOptions
    );
  }
  getArchivedCategories(data) {
    return this.http.post(
      this.baseUrl + "/archive-categories",
      data,
      httpOptions
    );
  }

  getRolesList(data) {
    return this.http.post(this.baseUrl + "/roles", data, httpOptions);
  }
  addRoles(data) {
    return this.http.post(this.baseUrl + "/add-role", data, httpOptions);
  }
  deleteRoles(data) {
    return this.http.post(this.baseUrl + "/remove-role", data, httpOptions);
  }
  updateRoles(data) {
    return this.http.post(this.baseUrl + "/edit-role", data, httpOptions);
  }

  awakeCategories(data) {
    return this.http.post(this.baseUrl + "/awake-category", data, httpOptions);
  }
  addServices(data) {
    return this.http.post(this.baseUrl + "/add-service", data, httpOptions);
  }
  removeServices(data) {
    return this.http.post(this.baseUrl + "/remove-service", data, httpOptions);
  }

  getServices(data) {
    return this.http.post(this.baseUrl + "/active-services", data, httpOptions);
  }
  fetchAllUsersCommon(data) {
    return this.http.post(this.baseUrl + "/all-users", data, httpOptions);
  }
  getUserDetails(data) {
    return this.http.post(this.baseUrl + "/user-detail", data, httpOptions);
  }
  getAdminDetails(data) {
    return this.http.post(
      this.baseUrl + "/get-admin-detail",
      data,
      httpOptions
    );
  }
  addAdminDetails(data) {
    return this.http.post(this.baseUrl + "/admin-detail", data, httpOptions);
  }

  getMonthlyUsersCount(data) {
    return this.http.post(this.baseUrl + "/get-analysis", data, httpOptions);
  }

  updateAdminDetails(data) {
    return this.http.post(this.baseUrl + "/update-admin", data, httpOptions);
  }

  getSalonDetails(data) {
    return this.http.post(this.baseUrl + "/view-salon", data, httpOptions);
  }

  addPlans(data) {
    return this.http.post(this.baseUrl + "/create-plan", data);
  }
  getPlans(data) {
    return this.http.post(this.baseUrl + "/get-plan", data);
  }
  editPlans(data) {
    return this.http.post(this.baseUrl + "/update-plan", data);
  }

  deletePlans(data) {
    return this.http.post(this.baseUrl + "/delete-plan", data);
  }

  activeUser(data) {
    return this.http.post(
      this.baseUrl + "/active-user-check",
      data,
      httpOptions
    );
  }
  deactiveUser(data) {
    return this.http.post(
      this.baseUrl + "/deactive-user-check",
      data,
      httpOptions
    );
  }

  getSalonSubscriptionList(data) {
    return this.http.post(this.baseUrl + "/get-subscriptions", data);
  }

  resetNewPassword(data) {
    return this.http.post(this.baseUrl + "/reset-password", data);
  }
  getUpcomingBookings(data) {
    return this.http.post(this.baseUrl + "/get-bookings-admin", data);
  }
  cancelBookings(data) {
    return this.http.post(this.baseUrl + "/cancel-booking", data);
  }

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message|| "Server Error");
  // }
}
