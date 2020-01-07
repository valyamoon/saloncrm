import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  SalonRequestList: any;

  constructor(private adminServ: AdminServService) {}

  ngOnInit() {
    this.getRequests();
  }

  /**
 * Function is use to Pay to get salon requests list
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

  getRequests() {
    let data;
    this.adminServ.getSalonsRequest(data).subscribe(data => {
      this.SalonRequestList = data["data"]["data"];
    });
  }
}
