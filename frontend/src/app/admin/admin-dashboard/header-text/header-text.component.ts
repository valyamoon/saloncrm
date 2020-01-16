import { Component, OnInit } from '@angular/core';
import {AdminServService} from '../admin-serv.service';
@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {

  headerTitle:any = "Home";

  constructor(private admServ:AdminServService) { }

  ngOnInit() {

    this.admServ.getHeaderText().subscribe((data:any)=>{
      this.headerTitle = data;
    })

  }

}
