import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { CommonService } from "../../../salon/dashboard/common.service";

@Component({
  selector: "app-other",
  templateUrl: "./other.component.html",
  styleUrls: ["./other.component.scss"]
})
export class OtherComponent implements OnInit {
  constructor(
    private adminServ: AdminServService,
    private common: CommonService
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Others");
  }
}
