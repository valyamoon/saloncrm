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
  searchTerm: any;
  salonListingData: any;
  page: any = 1;
  readOnly: boolean = true;
  checkedcolor: "gold";
  uncheckedcolor: "gray";
  size: "24px";
  isShowFilterPopUp: boolean;
  value: 0;
  readonly: false;
  totalstars: 5;
  showNoRecords: boolean = false;

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

  openFilterModal() {
    this.isShowFilterPopUp = true;
  }

  sortByPrice() {
    this.isShowFilterPopUp = false;
    let dataToPass = {
      service_id: this.userPrefrence.service_id
        ? this.userPrefrence.service_id
        : "",
      date: this.userPrefrence.date,
      sort: "price",
      sortOrder: "asc",
      name: this.searchTerm,
      lat: this.userPrefrence.lat,
      long: this.userPrefrence.long,
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

  sortByDistance() {
    this.isShowFilterPopUp = false;
    let dataToPass = {
      service_id: this.userPrefrence.service_id
        ? this.userPrefrence.service_id
        : "",
      date: this.userPrefrence.date,
      sort: "distance",
      sortOrder: "asc",
      name: this.searchTerm,
      lat: this.userPrefrence.lat,
      long: this.userPrefrence.long,
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
    sessionStorage.setItem("salonDetails", JSON.stringify(data));
    this.router.navigate(["/detail"]);
  }
  bookSlot(data) {
    console.log(data);
  }
  clearFilter() {
    let dataToPass = {
      service_id: this.userPrefrence.service_id
        ? this.userPrefrence.service_id
        : "",
      date: this.userPrefrence.date,
      name: this.searchTerm,
      lat: this.userPrefrence.lat,
      long: this.userPrefrence.long,
      pageSize: this.pageSize,
      page: this.page
    };
    this.userCommnServ.getSalonsList(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.salonListingData = data["data"];
          if (data["data"].length === 0) {
            this.showNoRecords = true;
          } else if (data["data"].length > 0) {
            this.showNoRecords = false;
          }
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
}
