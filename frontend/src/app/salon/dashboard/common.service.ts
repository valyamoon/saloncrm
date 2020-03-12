import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
// const httpOpt = {
//   headers: new HttpHeaders({
//     "Content-Type": "multipart/form-data\n"
//   })
// };

@Injectable({
  providedIn: "root"
})
export class CommonService {
  baseUrl = environment.backendBaseUrl + "/api";

  constructor(private http: HttpClient) {}

  private customer_id = new BehaviorSubject<string>("");
  private salon_id = new BehaviorSubject<string>("");
  private stripeConnected = new BehaviorSubject<boolean>(false);

  setCustomer_id(data: string) {
    // Fire the update event with the new data
    this.customer_id.next(data);
  }

  getCustomer_id(): Observable<string> {
    return this.customer_id.asObservable();
  }

  setStripeConnectedStatus(data: boolean) {
    // Fire the update event with the new data
    this.stripeConnected.next(data);
  }

  getStripeConnectedStatus(): Observable<boolean> {
    return this.stripeConnected.asObservable();
  }

  setSalon_id(data: string) {
    // Fire the update event with the new data
    this.salon_id.next(data);
  }

  getSalon_id(): Observable<string> {
    return this.salon_id.asObservable();
  }

  saveSalonDetails(data) {
    return this.http.post(this.baseUrl + "/addsalon", data);
  }

  serviceList(data) {
    return this.http.post(this.baseUrl + "/servicelist", data, httpOptions);
  }

  addSalonService(data) {
    return this.http.post(
      this.baseUrl + "/addsalonservices",
      data,
      httpOptions
    );
  }

  removeSalonService(data) {
    return this.http.post(
      this.baseUrl + "/removesalonservice",
      data,
      httpOptions
    );
  }
  connectStripeAccount(data) {
    return this.http.post(this.baseUrl + "/connect-account", data);
  }
  getAppointmentList(data) {
    return this.http.post(this.baseUrl + "/upcoming-appointment", data);
  }

  completeAppointment(data) {
    return this.http.post(this.baseUrl + "/appointment-complete", data);
  }

  getSalonData(data) {
    return this.http.post(this.baseUrl + "/salondatabyuser", data, httpOptions);
  }
  createToken(data) {
    return this.http.post(this.baseUrl + "/create-token", data);
  }

  getSalonServicesList(data) {
    return this.http.post(
      this.baseUrl + "/salonservicelist",
      data,
      httpOptions
    );
  }
  getEmployeeServList(data) {
    return this.http.post(
      this.baseUrl + "/employeeservicelist",
      data,
      httpOptions
    );
  }
  getCategories(data) {
    return this.http.post(this.baseUrl + "/categories", data, httpOptions);
  }
  getServices(data) {
    return this.http.post(this.baseUrl + "/services", data, httpOptions);
  }

  addEmployee(data) {
    return this.http.post(this.baseUrl + "/addemployee", data, httpOptions);
  }
  assignEmpService(data) {
    return this.http.post(this.baseUrl + "/assignservice", data, httpOptions);
  }
  addEmpService(data) {
    return this.http.post(
      this.baseUrl + "/addsalonservices",
      data,
      httpOptions
    );
  }
  updateSalonService(data) {
    return this.http.post(
      this.baseUrl + "/updatesalonservices",
      data,
      httpOptions
    );
  }

  removeEmpService(data) {
    return this.http.post(this.baseUrl + "/removeemployee", data, httpOptions);
  }

  updateEployee(data) {
    return this.http.post(this.baseUrl + "/updateemployee", data, httpOptions);
  }

  addPromocodes(data) {
    return this.http.post(this.baseUrl + "/add-promocode", data);
  }

  getPromocode(data) {
    return this.http.post(this.baseUrl + "/promocodes", data);
  }
  deletePromocodes(data) {
    return this.http.post(this.baseUrl + "/delete-promocode", data);
  }

  updateSalonDetails(data) {
    return this.http.post(this.baseUrl + "/update-salon", data);
  }
  getTransactionsList(data) {
    console.log("dataaaa", data);
    return this.http.post(this.baseUrl + "/get-transactions", data);
  }

  getSalonDetailsData(data) {
    return this.http.post(this.baseUrl + "/get-salon", data);
  }

  addSalonTIming(data) {
    return this.http.post(
      this.baseUrl + "/addsalonweeklyslot",
      data,
      httpOptions
    );
  }
  getSalonTiming(data) {
    return this.http.post(this.baseUrl + "/salonweeklyslot", data, httpOptions);
  }

  getSalonSubscriptionDetail(data) {
    return this.http.post(this.baseUrl + "/salon-subscribe-detail", data);
  }
}
