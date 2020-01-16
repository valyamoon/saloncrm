import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  isSelectorShown:boolean =true;
  constructor() { }

  ngOnInit() {
  }
  showSelection(data){
    this.isSelectorShown =  !this.isSelectorShown;

    //data.classList.toggle("change");

  }


}
