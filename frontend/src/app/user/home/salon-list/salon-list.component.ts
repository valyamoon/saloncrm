import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";

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
    private userCommnServ: UsercommonserviceService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.userPrefrence = JSON.parse(sessionStorage.getItem("userprefrence"));

    if (!this.userPrefrence) {
      this.router.navigate(["/home"]);
    } else {
      this.getSalonsList(this.userPrefrence);
    }

    // this.userCommnServ.getUserPrefrence().subscribe((data: any) => {
    //   this.userPrefrence = data;
    //   console.log(this.userPrefrence);
    //   this.getSalonsList(this.userPrefrence);
    // });
  }

  getSalonsList(data) {
    let dataToPass = {
      service_id: data.service_id ? data.service_id : "",
      date: data.date,
      lat: data.lat,
      long: data.long,
      pageSize: this.pageSize,
      page: this.page
    };
    this.userCommnServ.getSalonsList(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.salonListingData = data["data"];
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }

  goToFilter() {
    this.router.navigate(["/home"]);
  }

  showSalonDetails(data) {
    console.log("salonDAta", data);
    sessionStorage.setItem("salonDetails", JSON.stringify(data));
    this.router.navigate(["/detail"]);
  }
}
