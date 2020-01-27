import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

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
  saveSalonDetails(data) {
    console.log("AAA", data);
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

  getSalonData(data) {
    return this.http.post(this.baseUrl + "/salondatabyuser", data, httpOptions);
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

  updateSalonDetails(data) {
    return this.http.post(this.baseUrl + "/update-salon", data);
  }

  getSalonDetailsData(data) {
    return this.http.post(this.baseUrl + "/get-salon", data);
  }
}
