import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: ""
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = environment.backendBaseUrl + "/api";

  
  constructor(private http:HttpClient) { }

  saveSalonDetails(data){

    return this.http.post(this.baseUrl+'/addsalon',data,httpOptions);

  }



}
