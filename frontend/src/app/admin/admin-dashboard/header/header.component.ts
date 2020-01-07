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
/**
 * Function is use to Pay to show logout button
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
  showLogoutButton(){
    this.showLogout =  true;
  }

  /**
 * Function is use to Pay to logout admin
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
  logout(){
    this.authServ.logout();
  }


}
