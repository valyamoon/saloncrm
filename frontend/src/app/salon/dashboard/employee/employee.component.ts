import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { SimpleModalService } from "ngx-simple-modal";
import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  employeeList: any = [];
  pageSize: any = 5;
  count: any = 5;
  page: any = 1;
  displayedColumns = ["name", "servicename", "action"];
  employeeCount: number;
  noRecordsFound: boolean;
  user_id: any;
  modalHeaderText: any;
  isAdd: boolean;
  salonData: any;
  isAddModal: boolean = false;
  isDeleteDialog: boolean = false;
  isConfirm: any;
  dataToDelete: any;
  serviceList: any;
  assignServiceForm: FormGroup;
  employeeData: any;
  public popoverTitle: string = "Popover title";
  public popoverMessage: string = "Popover description";
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  isEMployeeModal: boolean = false;
  editEmployeeData: any;
  dataSource: any;

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog,
    private SimpleModalService: SimpleModalService
  ) {
    this.assignServiceForm = this.fb.group({
      service_id: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData(this.user_id);
    this.getEmployeeService();
  }
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  getSalonData(userId) {
    let data = {
      user_id: userId
    };
    this.commServ.getSalonData(data).subscribe(
      (responce: any) => {
        if (responce.code === 200) {
          this.salonData = responce.data;
          this.getServiceList();
        } else {
          this.toastrServ.error("Invalid salon details", "", {
            timeOut: 3000
          });
        }
      },
      error => {
        this.toastrServ.error("Failed to get salon data", error, {
          timeOut: 3000
        });
      }
    );
  }
  paginate(event) {
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getEmployeeService();
  }

  confirm(data) {
    this.isConfirm = data;
  }
  reject(data) {
    this.isConfirm = data;

    this.isDeleteDialog = false;
  }
  getEmployeeService() {
    let dataToPass = {
      user_id: this.user_id,
      pageSize: this.count,
      page: this.page
    };
    console.log("dataToPass", dataToPass);

    this.commServ.getEmployeeServList(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          // console.log("data[data]", data["data"]); //return;
          this.employeeList = data["data"].employeeData;
          this.employeeCount = data["data"].employeeCount;
          this.dataSource = new MatTableDataSource(this.employeeList);
          this.dataSource.sort = this.sort;
          if (this.employeeList.length == 0) {
            this.noRecordsFound = true;
          }
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Employee", "Error", {
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
  openEditEmployeeModal(element) {
    // console.log("Edit element", element);
    this.isEMployeeModal = true;
    this.editEmployeeData = element;
  }
  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getServiceList() {
    let postData = {
      user_id: this.user_id,
      salon_id: this.salonData._id
    };
    this.commServ.getSalonServicesList(postData).subscribe(
      (data: any) => {
        // console.log("serviceList element --------->", data["data"].serviceList);
        if (data["code"] == 200) {
          let serviceArr = [];
          data["data"].serviceList.forEach(element => {

            let serviceData = {
              id: element._id,
              name: element.servicename
            };
            serviceArr.push(serviceData);
          });
          this.serviceList = serviceArr;
          // this.dataSource = new MatTableDataSource(this.serviceList);
          // this.dataSource.sort = this.sort;
          //console.log("serviceList", this.serviceList);
        } else {
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Services List", "Error", {
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

  options = this.serviceList;
  selectedOptions = [];

  selected = this.selectedOptions;
  showError = false;
  errorMessage = "";
  multiSelect: any;
  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  getSelectedOptions(selected) {
    this.selected = selected;
  }

  onResetSelection(salon_service_id) {
    this.selectedOptions = salon_service_id;
  }

  openAssignServieModal(data) {
    this.onResetSelection(data.salon_service_id);
    this.isAddModal = true;
    this.employeeData = data;
  }
  dismissModal() {
    this.isAddModal = false;
    this.assignServiceForm.reset();
  }
  updateEmpService() {
    let dataToPass = {
      employee_id: this.employeeData._id,
      salonservices_id: this.selected
    }
    // console.log("dataToPass", dataToPass); //return;
    this.commServ.assignEmpService(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isAddModal = false;
          this.toastrServ.success("Service Assigned", "Success", {
            timeOut: 2000
          });
          this.assignServiceForm.reset();
          this.dismissModal();
          this.getEmployeeService();
        } else {
          this.isAddModal = true;
          this.toastrServ.error("Failed To Add", "Error", {
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
  deleteEmployee(dataToPass) {
    // this.SimpleModalService.addModal(ConfirmationDialogComponent, {
    //   title: 'Warning',
    //   message: 'Are you sure you want to delete?'
    // }).subscribe(isConfirmed => {
    //   console.log(isConfirmed);
    // })
    this.SimpleModalService.addModal(ConfirmationDialogComponent, {
      title: "Warning",
      message: "Are you sure you want to delete?"
    }).subscribe(isConfirmed => {
      if (isConfirmed === true) {
        dataToPass.salon_id = this.salonData._id;
        // console.log("dataToPass", dataToPass)
        this.commServ.removeEmpService(dataToPass).subscribe(
          data => {
            if (data["code"] === 200) {
              this.isAddModal = false;
              this.toastrServ.success("Employee Removed", "Success", {
                timeOut: 2000
              });
              this.assignServiceForm.reset();
              this.dismissModal();
              this.getEmployeeService();
            } else {
              this.isAddModal = true;
              this.toastrServ.error("Failed To Add", "Error", {
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
  }
  updateEmpployee(updateData) {

    let dataToPass = {
      id: updateData._id,
      name: updateData.name
    }
    console.log("dataToPass", dataToPass);
    this.commServ.updateEployee(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isEMployeeModal = false;
          this.toastrServ.success("Employee Updated", "Success", {
            timeOut: 2000
          });
          this.assignServiceForm.reset();
          this.dismissModal();
          this.getEmployeeService();
        } else {
          this.isEMployeeModal = true;
          this.toastrServ.error("Failed To update", "Error", {
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
  dismissEmpModal() {
    this.isEMployeeModal = false;

  }
  openEditServiceModal(element) {
    // console.log("element", element);
    this.isEMployeeModal = true;
    this.editEmployeeData = element;
  }

}
