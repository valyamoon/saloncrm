import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsercommonserviceService } from "../usercommonservice.service";

@Component({
  selector: "app-salon-list",
  templateUrl: "./salon-list.component.html",
  styleUrls: ["./salon-list.component.scss"]
})
export class SalonListComponent implements OnInit {
  userPrefrence: any;
  pageSize: any = 10;
  salonListingData: any;
  page: any = 1;
  checkedcolor: "gold";
  uncheckedcolor: "gray";
  size: "24px";
  value: 0;
  readonly: false;
  totalstars: 5;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userCommnServ: UsercommonserviceService
  ) {}

  ngOnInit() {
    this.userPrefrence = JSON.parse(sessionStorage.getItem("userprefrence"));
    this.getSalonsList(this.userPrefrence);

    // this.userCommnServ.getUserPrefrence().subscribe((data: any) => {
    //   this.userPrefrence = data;
    //   console.log(this.userPrefrence);
    //   this.getSalonsList(this.userPrefrence);
    // });
  }

  getSalonsList(data) {
    let dataToPass = {
      service_id: data.service_id,
      date: data.date,
      lat: data.lat,
      long: data.long,
      pageSize: this.pageSize,
      page: this.page
    };
    this.userCommnServ.getSalonsList(dataToPass).subscribe(data => {
      if (data["code"] === 200) {
        this.salonListingData = data["data"];
        console.log("asdffff", this.salonListingData);
      }
    });
  }

  goToFilter() {
    this.router.navigate(["/home"]);
  }
}
