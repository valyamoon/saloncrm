import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  noRecordsFound: boolean;
  pageSize: any = 5;
  count: any = 5;
  adminCategoriesCount: any;
  page: any = 1;
  displayedColumns = ["name", "status", "action"];
  disabled: boolean = true;
  categoriesList: any;
  servicesList: any;
  servicesCount: any;
  addServiceModal: boolean;
  saveServiceForm: FormGroup;

  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.saveServiceForm = this.fb.group({
      category: ["", Validators.required],
      name: ["", Validators.required]
    });

    this.adminServ.setHeaderText("Manage Services");
    this.fetchCategoriesList();
    this.fetchAllServices();
  }
  fetchCategoriesList() {
    let dataToPass = {
      type: "admin-categories",
      pageSize: this.count,
      page: this.page
    };
    //  console.log(dataToPass);
    this.adminServ.getAdmincategoriesList(dataToPass).subscribe(
      data => {
        //  console.log(data);
        if (data["code"] === 200) {
          this.adminCategoriesCount = data["data"]["count"];
          this.categoriesList = data["data"]["data"];
          //   console.log("cate",this.categoriesList);
          if (this.categoriesList.length == 0) {
            this.noRecordsFound = true;
          }
        } else {
          this.toastrServ.error("Failed To Fetch", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  openAddServiceModal() {
    this.addServiceModal = true;
  }

  deleteService(data) {
    //console.log(data);
    let dataToPass = {
      service_id: data._id
    };

    this.adminServ.removeServices(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.toastrServ.success("Service Deleted", "Success", {
            timeOut: 2000,
            progressAnimation: "decreasing"
          });

          this.fetchAllServices();
        } else {
          this.toastrServ.error("Failed To Delete", "Error", {
            timeOut: 2000,
            progressAnimation: "decreasing"
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000,
          progressAnimation: "decreasing"
        });
      }
    );
  }

  addService(data) {
    let dataToPass = {
      category_id: data.category,
      name: data.name
    };

    this.adminServ.addServices(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.toastrServ.success("Service Added", "Success", {
            timeOut: 2000,
            progressAnimation: "decreasing"
          });
          this.addServiceModal = false;
          this.saveServiceForm.reset();
          this.fetchAllServices();
        } else {
          this.toastrServ.error("Failed To Add", "Error", {
            timeOut: 2000,
            progressAnimation: "decreasing"
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000,
          progressAnimation: "decreasing"
        });
      }
    );
  }
  dismissModal() {
    this.addServiceModal = false;
    this.saveServiceForm.reset();
  }
  paginate(event) {
    // console.log(event);
    this.page = event.pageIndex + 1;
    // console.log("c", this.count);
    // console.log("p", this.page);
    this.count = event.pageSize;
    this.fetchAllServices();
  }

  fetchAllServices() {
    let dataToPass = {
      type: "services",
      pageSize: this.count,
      page: this.page
    };
    this.adminServ.getServices(dataToPass).subscribe(
      (data: any) => {
        // console.log("Sevrices",data);
        if (data["code"] === 200) {
          this.servicesList = data["data"]["data"];
          // console.log("SERVICES", this.servicesList);
          this.servicesCount = data["data"]["count"];
          if (this.servicesList.length == 0) {
            this.noRecordsFound = true;
          }
          this.toastrServ.success("Fetched Services", "Success", {
            timeOut: 2000
          });
        } else {
          this.toastrServ.error("Failed to fetch", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }
}
