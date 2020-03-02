import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-salon-detail",
  templateUrl: "./salon-detail.component.html",
  styleUrls: ["./salon-detail.component.scss"]
})
export class SalonDetailComponent implements OnInit {
  salonDetailsData: any;
  averageRatings: any;
  salonAvailalbilityData: any;
  salonData: any;
  salonID: any;
  lng: any;
  lat: any;
  salonlat: any;
  salonlong: any;
  salonCategoriesData: any;

  constructor(
    private userServ: UsercommonserviceService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.salonData = JSON.parse(sessionStorage.getItem("salonDetails"));
    if (this.salonData) {
      this.salonID = this.salonData["_id"];
      this.salonlat = this.salonData["location"]["coordinates"][0];
      this.salonlong = this.salonData["location"]["coordinates"][1];

      this.getSalonDetails(this.salonID);
      this.getSalonCategories(this.salonID);
      this.getSalonWeeklyDays(this.salonID);
    }
  }

  findDirection() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
      window.open(
        "https://www.google.com/maps/dir/" +
          this.lat +
          "," +
          this.lng +
          "/" +
          this.salonlong +
          "," +
          this.salonlat +
          "/" +
          "@" +
          this.salonlong +
          "," +
          this.salonlat +
          "," +
          "6z",
        "_blank"
      );
    });
  }

  getSalonDetails(data) {
    let dataToPass = {
      salon_id: data
    };
    this.userServ.getSalonDetails(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonDetailsData = data["data"];

          this.averageRatings = this.salonDetailsData["avgRatings"];
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

  getSalonCategories(data) {
    let dataToPass = {
      salon_id: data
    };
    this.userServ.getSalonCategories(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonCategoriesData = data["data"];
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

  getSalonWeeklyDays(data) {
    let dataToPass = {
      salon_id: data
    };
    this.userServ.getSalonWeekDays(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.salonAvailalbilityData = data["data"];
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
