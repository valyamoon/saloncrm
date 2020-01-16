import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dropdownVisible = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    document.getElementsByTagName( 'body' )[0].classList.toggle('sidenav-toggled');
  }
  toggleDropdown(){
    this.dropdownVisible = !this.dropdownVisible;
  }

}



// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { environment } from "../../../environments/environment";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json",
//     Authorization: ""
//   })
// };
// export class SalonService {
//   baseUrl = environment.backendBaseUrl + "/api";

//   constructor(private http: HttpClient) {}
//   serviceList(){
//     return  this.http.post(this.baseUrl + "/servicelist", httpOptions);
//   }
// }
