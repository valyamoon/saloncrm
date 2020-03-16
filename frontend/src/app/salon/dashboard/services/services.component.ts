import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";
import { AgmBicyclingLayer } from "@agm/core";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { SimpleModalService } from "ngx-simple-modal";

import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  /**Used for salon service list */

  editServiceForm: FormGroup;
  salonServicesList: any = [];
  pageSize: any = 5;
  count: any = 5;
  page: any = 1;
  displayedColumns = [
    "categoryname",
    "servicename",
    "price",
    "duration",
    "is_active",
    "action"
  ];
  dataSource: any;
  salonServicesCount: number;
  noRecordsFound: boolean;
  user_id: any;
  public popoverTitle: string = "Popover title";
  public popoverMessage: string = "Popover description";
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  isDeleteDialog: boolean = false;
  isConfirm: any;
  dataToDelete: any;
  isAddModal: boolean = false;
  servcieData: any;
  edit_servie_id: any;
  sortBy: any;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog,
    private SimpleModalService: SimpleModalService
  ) {
    this.editServiceForm = this.fb.group({
      price: ["", [Validators.required]],
      duration: ["", [Validators.required]]
    });
  }
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonService();
  }

  paginate(event) {
    this.page = event.pageIndex + 1;

    this.count = event.pageSize;
    this.getSalonService();
  }

  confirm(data) {
    this.isConfirm = data;
  }
  reject(data) {
    this.isConfirm = data;

    this.isDeleteDialog = false;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getSalonService() {
    let dataToPass = {
      user_id: this.user_id,
      pageSize: this.count,
      page: this.page
    };

    this.commServ.getSalonServicesList(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.salonServicesList = data["data"].serviceList;
          this.salonServicesCount = data["data"].serviceCount;
          this.dataSource = new MatTableDataSource(this.salonServicesList);
          this.dataSource.sort = this.sort;
          if (this.salonServicesList.length == 0) {
            this.noRecordsFound = true;
          }
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Roles", "Error", {
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

  deleteService(element, type) {
    this.SimpleModalService.addModal(ConfirmationDialogComponent, {
      title: "Warning",
      message: "Are you sure you want to delete?"
    }).subscribe(isConfirmed => {
      if (isConfirmed === true) {
        let deletedData = {
          type: type,
          salonService: element
        };

        this.commServ.removeSalonService(deletedData).subscribe(
          (data: any) => {
            if (data["code"] == 200) {
              this.getSalonService();
              if (type == "restore") {
                this.toastrServ.success(
                  "One Service restore successfully",
                  "Success",
                  {
                    timeOut: 2000
                  }
                );
              } else {
                this.toastrServ.success(
                  "One Service remove successfully",
                  "Success",
                  {
                    timeOut: 2000
                  }
                );
              }
            } else {
              this.noRecordsFound = false;
              this.toastrServ.error("Failed To remove service", "Error", {
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
    });

    // this.getSalonService(this.user_id);
  }

  openEditServiceModal(element) {
    this.edit_servie_id = element._id;
    this.editServiceForm.get("price").setValue(element.price);
    this.editServiceForm.get("duration").setValue(element.duration);
    this.isAddModal = true;
    this.servcieData = element;
  }
  dismissModal() {
    this.isAddModal = false;
    this.editServiceForm.reset();
  }

  updateEmpService(data) {
    data.id = this.edit_servie_id;

    this.commServ.updateSalonService(data).subscribe(
      (result: any) => {
        if (result["code"] == 200) {
          this.getSalonService();
          this.isAddModal = false;
          this.toastrServ.success(
            "One Service updated successfully",
            "Success",
            {
              timeOut: 2000
            }
          );
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To update service", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error, {
          timeOut: 2000
        });
      }
    );
  }
}
