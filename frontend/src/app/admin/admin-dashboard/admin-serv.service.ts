import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminServService {
  baseUrl = environment.backendBaseUrl+"/api";

  constructor(private http:HttpClient) { }


  getSalonsList(){
    let data = {"type":"activesalons"}
    return  this.http.post(this.baseUrl+"/activesalons",data)
  }

  getSalonsRequest(data){
    return this.http.post(this.baseUrl+"/salonsrequest",data);
  }
  approveSalonRequests(data){
    return this.http.post(this.baseUrl+ "/acceptrequest",data);
  }

  getActiveSalonsCount(data){
    return this.http.post(this.baseUrl+"/salonscount",data)
  }
  getActiveUsersCount(data){
    return this.http.post(this.baseUrl+"/userscount",data)
  }
  
  declineSalonRequest(data){
    return this.http.post(this.baseUrl+"/suspendsalon",data)
  }
  getActiveUsersList(data){
    return this.http.post(this.baseUrl+"/userslist",data)
  }

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message|| "Server Error");
  // }



}
