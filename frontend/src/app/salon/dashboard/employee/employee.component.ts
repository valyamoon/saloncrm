import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "../common.service";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: any = [];
  pageSize: any = 5;
  count: any = 5;
  page: any = 1;
  displayedColumns = ['name', 'servicename', 'action'];
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

  constructor(private authServ: AuthService,
    private fb: FormBuilder,
    private commServ: CommonService,
    private toastrServ: ToastrService,
    public dialog: MatDialog) {
    this.assignServiceForm = this.fb.group({
      service_id: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    this.user_id = sessionStorage.getItem("userId");
    this.getSalonData(this.user_id);
    this.getEmployeeService();


  }
  getSalonData(userId) {

    let data = {
      'user_id': userId

    }
    this.commServ.getSalonData(data).subscribe((responce: any) => {
      if (responce.code === 200) {
        this.salonData = responce.data;
        this.getServiceList();
      } else {
        this.toastrServ.error("Invalid salon details", "", {
          timeOut: 3000
        });
      }
    }, error => {
      this.toastrServ.error("Failed to get salon data", error, {
        timeOut: 3000
      });

    });
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
    console.log(data);
    this.isConfirm = data;
    console.log(this.isConfirm);
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
  openEditServiceModal(element) {
    console.log("Edit element", element);
  }
  getServiceList() {

    let postData = {
      'user_id': this.user_id,
      'salon_id': this.salonData._id
    }
    this.commServ.getSalonServicesList(postData).subscribe(
      (data: any) => {
        if (data["code"] == 200) {
          let serviceArr = [];
          data["data"].forEach(element => {
            //console.log("serviceList element", element);
            let serviceData = {
              "id": element._id,
              "name": element.servicename,
            }
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
  errorMessage = '';
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
    console.log("Data", data)
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
    console.log("dataToPass", dataToPass);
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

}
