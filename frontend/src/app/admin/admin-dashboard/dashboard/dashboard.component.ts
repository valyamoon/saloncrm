import { Component, OnInit,ViewChild } from '@angular/core';
import {AdminServService} from '../admin-serv.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  SalonRequestList:any;




  constructor(private adminServ:AdminServService) { }
 
  ngOnInit() {
    this.getRequests();
    
  }

  getRequests(){
    let data;
    this.adminServ.getSalonsRequest(data).subscribe((data)=>{
      console.log("BHIIIIIIIIIIIIIIIIIIIII",data['data'])
        this.SalonRequestList = data['data']['data'];
        console.log("thsss",this.SalonRequestList);
       
        
    })
  }

}
