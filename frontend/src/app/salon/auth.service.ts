import { Injectable } from '@angular/core';
import {Router} from'@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private idSource = new BehaviorSubject('');
  currentIds = this.idSource.asObservable();

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(['salon']);
  }

  sendIdS(data){
    this.idSource.next(data);
  }


}
