import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: "app-salonlist",
  templateUrl: "./salonlist.component.html",
  styleUrls: ["./salonlist.component.css"]
})
export class SalonlistComponent implements OnInit {
  constructor(private adminServ: AdminServService) {}

  ngOnInit() {
    this.getActiveSalonsList();
  }

  /**
   * Function is use to Fetch Active salons list
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  getActiveSalonsList() {
    this.adminServ.getSalonsList().subscribe(data => {
      console.log("SalonsList", data["data"]["data"]);
    });
  }
}
