import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getCodes(){
    return this.http.get('http://localhost:3000/api/codes');
  }

  submitNumber(countrycode){
    return this.http.post('http://localhost:3000/api/getotp',countrycode,httpOptions)
  }

  verifyNumber(data){
    return this.http.post('http://localhost:3000/api/verifyotp',data,httpOptions);
  }

  addUser(data){
    return this.http.post('http://localhost:3000/api/registercustomer',data,httpOptions);
  }
  addSalon(data){
    console.log("::",data);
    return this.http.post('http://localhost:3000/api/salon',data,httpOptions);
  }
}
