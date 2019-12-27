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
