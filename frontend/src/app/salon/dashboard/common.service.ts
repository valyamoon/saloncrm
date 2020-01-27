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
    return this.http.post(this.baseUrl + "/addsalon", data);
  }
  updateSalonDetails(data) {
    return this.http.post(this.baseUrl + "/update-salon", data);
  }

  getSalonDetailsData(data) {
    return this.http.post(this.baseUrl + "/get-salon", data);
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
}
