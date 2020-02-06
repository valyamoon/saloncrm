import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";

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

  constructor(
    private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog
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

    this.commServ.getEmployeeServList(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          this.employeeList = data["data"];
          this.employeeCount = data.responseStatus;

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
  getServiceList() {
    let postData = {
      user_id: this.user_id,
      salon_id: this.salonData._id
    };
    this.commServ.getSalonServicesList(postData).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          let serviceArr = [];
          data["data"].forEach(element => {
            //console.log("serviceList element", element);
            let serviceData = {
              id: element._id,
              name: element.servicename
            };
            serviceArr.push(serviceData);
          });
          this.serviceList = serviceArr;
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
    // console.log("dataToPass", dataToPass);
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
