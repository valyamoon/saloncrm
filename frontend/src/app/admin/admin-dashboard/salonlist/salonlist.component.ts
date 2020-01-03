import { Component, OnInit } from '@angular/core';
import {AdminServService} from '../admin-serv.service';

@Component({
  selector: 'app-salonlist',
  templateUrl: './salonlist.component.html',
  styleUrls: ['./salonlist.component.css']
})
export class SalonlistComponent implements OnInit {

  constructor(private adminServ:AdminServService) { }

  ngOnInit() {
    this.getActiveSalonsList();
  }


  getActiveSalonsList(){
    this.adminServ.getSalonsList().subscribe((data)=>{

      console.log("Hiiiiiiiiiiiiiiii",data['data']['data']);



    })
  }


}
