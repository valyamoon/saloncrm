import { Component, OnInit } from "@angular/core";
import { AdminServService } from "./admin-serv.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
  isSelectorShown: boolean = true;
  constructor(private adminServ: AdminServService) { }

  ngOnInit() {
    this.adminServ.getHeaderResponse().subscribe((data: any) => {

      this.isSelectorShown = !data;

      this.isSelectorShown = !this.isSelectorShown;

    });
  }

  hideMenu() {
    this.isSelectorShown = true;
  }
  // this.adminServ.g(data){
  //   this.isSelectorShown =  !this.isSelectorShown;

  //   //data.classList.toggle("change");

  // }
}
