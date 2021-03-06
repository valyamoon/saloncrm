import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";
import { ToastrService } from "ngx-toastr";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { environment } from "../../../../environments/environment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { GeocoderService, LanguagesService } from "../../../services";
import { Subject, Subscription } from "rxjs";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"],
})
export class MainpageComponent implements OnInit, OnDestroy {
  constructor(
    private userCommServ: UsercommonserviceService,
    private toastServ: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private languagesService: LanguagesService,
    private geocoder: GeocoderService
  ) {}
  myDateValue: Date;
  today = new Date();
  errorMsg: any;
  isModal: boolean = false;
  location: Subject<string> = new Subject<string>();
  service_id: any;
  pageSize: any = 10;
  page: any = 1;

  lat: number;
  long: number;

  searchSalonForm: FormGroup;

  minDate: Date;
  maxDate: Date;
  categoriesList: any;
  serviceName: any;
  searchTerm: any;
  serviceIdSelected: any;
  categoriesForm: FormGroup;

  currentLanguage: string;
  currentLanguageSub: Subscription;

  ngOnInit() {
    console.log(environment.env);

    if (environment.env === "prod") {
      console.log(location.protocol);
      window.console.log = function () {};
      if (window) {
        window.console.log = function () {};
      }

      if (location.protocol === "http:") {
        console.log(":");
        window.location.href = location.href.replace("http", "https");
        console.log(window.location);
      }
    }

    this.minDate = new Date();
    this.myDateValue = new Date();
    this.fetchCategories();
    this.categoriesForm = this.fb.group({
      service: ["", Validators.required],
    });

    this.searchSalonForm = this.fb.group({
      service_id: ["", Validators.required],
      date: ["", Validators.required],
      location: ["", Validators.required],
    });

    this.location.subscribe((x) => {
      this.searchSalonForm.get("location").setValue(x);
      this.searchSalonForm.get("location").updateValueAndValidity();
    });

    this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(
      (x) => (this.currentLanguage = x)
    );
  }

  ngOnDestroy() {
    this.currentLanguageSub.unsubscribe();
  }

  onDateChange(event) {
    let date = new Date(event).toISOString();
    this.searchSalonForm.get("date").setValue(date);
    this.searchSalonForm.updateValueAndValidity();
  }
  openServiceModal() {
    this.isModal = true;
  }
  dismissModal() {
    this.isModal = false;
  }
  searchSalons(data) {
    if (data.date && data.service_id && this.lat & this.long) {
      data.lat = this.lat;
      data.long = this.long;
      this.errorMsg = null;
      sessionStorage.setItem("userprefrence", JSON.stringify(data));
      this.userCommServ.setUserPrefrence(data);
      this.router.navigate(["/list"]);
    } else {
      this.errorMsg = "Please fill the required fileds";
    }
  }

  fetchCategories() {
    this.userCommServ.getCategoriesList().subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.categoriesList = data["data"];
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000,
          });
        }
      },
      (error) => {
        this.toastServ.error("Server-Error", error.error["message"], {
          timeOut: 1000,
        });
      }
    );
  }

  selectedService(data) {
    this.service_id = data["service"]["_id"];
    this.serviceName = data["service"]["name"];
    this.searchSalonForm.get("service_id").setValue(this.service_id);
    this.searchSalonForm.updateValueAndValidity();
    this.isModal = false;
  }
  async getAddress(place: Object) {
    this.lat = place["geometry"].location.lat();
    this.long = place["geometry"].location.lng();

    const location = await this.geocoder.getLocationByCoords(
      this.lat,
      this.long
    );
    this.location.next(location);
  }

  async getCurrentLocation() {
    try {
      const { lat, long } = await this.geocoder.getCurrentPosition();
      this.lat = lat;
      this.long = long;

      const location = await this.geocoder.getLocationByCoords(lat, long);

      this.location.next(location);
    } catch (err) {}
  }
}
