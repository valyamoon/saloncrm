import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLogout:boolean;

  constructor(private authServ:AuthService) { }

  ngOnInit() {
  }

  showLogoutButton(){
    this.showLogout =  true;
  }
  logout(){
    this.authServ.logout();
  }


}
