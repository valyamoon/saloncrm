import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConfirmationComponent } from "../confirmation/confirmation.component";
import { SimpleModalService } from "ngx-simple-modal";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  noRecordsFound: boolean;
  action: any;
  isLoader: boolean = false;
  pageSize: any = 5;
  count: any = 5;
  adminCategoriesCount: any;
  page: any = 1;
  showDeleteDialog: boolean;
  displayedColumns = ["name", "action"];
  disabled: boolean = true;
  categoriesList: any;
  serviceID: any;
  serviceData: any;
  servicesList: any;
  servicesCount: any;
  addServiceModal: boolean;
  saveServiceForm: FormGroup;
  isShowUpdate: boolean;

  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService,
    private fb: FormBuilder,
    private SimpleModalService: SimpleModalService
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

  updateData(data) {
    this.isLoader = true;

    let dataToPass = {
      service_id: this.serviceID,
      name: data.name
    };

    this.adminServ.updateService(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.fetchAllServices();
          this.toastrServ.success(data["message"], "Sucess", {
            timeOut: 500
          });
          this.addServiceModal = false;
          this.isLoader = false;
          this.saveServiceForm.reset();
        } else if (data["code"] === 200) {
          this.toastrServ.error(data["message"], "Error", {
            timeOut: 500
          });
          this.isLoader = false;
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 500
        });
        this.isLoader = false;
      }
    );
  }

  updateService(data) {
    this.openAddServiceModal(data);
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
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 1000
        });
      }
    );
  }

  openAddServiceModal(data) {
    if (data) {
      this.serviceData = data;
      console.log("serviceData", this.serviceData);
      this.action = "Edit";
      this.isShowUpdate = true;
    } else if (data === "null") {
      this.action = "Add";
      this.isShowUpdate = false;
    }

    this.addServiceModal = true;
    this.serviceID = data["_id"];
    this.saveServiceForm.get("name").setValue(data.name);

    if (this.isShowUpdate === true) {
      this.saveServiceForm.get("category").setValidators(null);
      this.saveServiceForm.updateValueAndValidity();
    }
  }

  deleteService(data) {
    console.log(data);
    this.SimpleModalService.addModal(ConfirmationComponent, {
      title: "Warning",
      message: "Are you sure you want to delete?"
    }).subscribe(isConfirmed => {
      // Get modal result
      if (isConfirmed === true) {
        let dataToPass = {
          service_id: data._id
        };
        this.adminServ.removeServices(dataToPass).subscribe(
          (data: any) => {
            if (data["code"] == 200) {
              this.toastrServ.success("Service Deleted", "Success", {
                timeOut: 1000,
                progressAnimation: "decreasing"
              });
              this.fetchAllServices();
            } else {
              this.toastrServ.error("Failed To Delete", "Error", {
                timeOut: 1000,
                progressAnimation: "decreasing"
              });
            }
          },
          error => {
            this.toastrServ.error("Server Error", error.error, {
              timeOut: 1000,
              progressAnimation: "decreasing"
            });
          }
        );
      }
    });
  }

  addService(data) {
    this.isLoader = true;
    let dataToPass = {
      category_id: data.category,
      name: data.name
    };

    this.adminServ.addServices(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.toastrServ.success("Service Added", "Success", {
            timeOut: 1000,
            progressAnimation: "decreasing"
          });
          this.isLoader = false;
          this.addServiceModal = false;
          this.saveServiceForm.reset();
          this.fetchAllServices();
        } else {
          this.toastrServ.error("Failed To Add", "Error", {
            timeOut: 1000,
            progressAnimation: "decreasing"
          });
          this.isLoader = false;
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 1000,
          progressAnimation: "decreasing"
        });
        this.isLoader = false;
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
          // this.toastrServ.success("Fetched Services", "Success", {
          //   timeOut: 1000
          // });
        } else {
          this.toastrServ.error("Failed to fetch", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error, {
          timeOut: 1000
        });
      }
    );
  }
}
