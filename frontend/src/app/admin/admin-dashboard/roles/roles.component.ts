import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ConfirmationComponent } from "../confirmation/confirmation.component";
import { ToastrService } from "ngx-toastr";
import {
  MatDialog,
  MatTableDataSource,
  MatSortHeader,
  MatSort
} from "@angular/material";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-roles",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.scss"]
})
export class RolesComponent implements OnInit {
  rolesList: any;
  noRecordsFound: boolean;
  rolesCount: any;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isAddModal: boolean = false;
  isAddButton: boolean;
  roleForm: FormGroup;
  categoriesList: any;
  pageSize: any = 5;
  count: any = 5;
  adminCategoriesCount: any;
  page: any = 1;
  displayedColumns = ["name", "action"];
  disabled: boolean = true;
  modalHeaderText: any;
  isAdd: boolean;
  role_id: any;
  result: any;
  public popoverTitle: string = "Popover title";
  public popoverMessage: string = "Popover description";
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  isDeleteDialog: boolean = false;
  isConfirm: any;
  dataToDelete: any;
  isLoader: boolean;
  dataSource: any;

  constructor(
    private admnServ: AdminServService,
    private toastrServ: ToastrService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.roleForm = this.fb.group({
      name: ["", Validators.required]
    });

    this.fetchRoles();
    this.admnServ.setHeaderText("Manage Roles");
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginate(event) {
    // console.log(event);
    this.page = event.pageIndex + 1;
    // console.log("c", this.count);
    // console.log("p", this.page);
    this.count = event.pageSize;
    this.fetchRoles();
  }

  confirm(data) {
    this.isConfirm = data;
  }
  reject(data) {
    //console.log(data);
    this.isConfirm = data;
    // console.log(this.isConfirm);
    this.isDeleteDialog = false;
  }

  fetchRoles() {
    this.isLoader = true;
    let dataToPass = {
      type: "roles",
      pageSize: this.count,
      page: this.page
    };
    this.admnServ.getRolesList(dataToPass).subscribe(
      (data: any) => {
        //   console.log(data);
        if (data["code"] == 200) {
          this.isLoader = false;
          this.rolesList = data["data"]["data"];
          this.dataSource = new MatTableDataSource(this.rolesList);
          this.dataSource.sort = this.sort;
          this.rolesCount = data["data"]["count"];
          if (this.rolesList.length == 0) {
            this.noRecordsFound = true;
          }
        } else {
          this.isLoader = false;
          this.noRecordsFound = false;
          this.toastrServ.error("Failed To Fetch Roles", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
  openAddRolesModal(data) {
    if (data === "add") {
      this.modalHeaderText = "Add Role";
      this.isAdd = true;
    } else {
      this.roleForm.get("name").setValue(data.name);
      this.role_id = data._id;
      this.modalHeaderText = "Edit Role";
      this.isAdd = false;
    }
    // console.log(data);
    this.isAddModal = true;
  }

  deleteRole(data): void {
    let dataToPass = {
      role_id: data._id
    };

    this.admnServ.deleteRoles(dataToPass).subscribe(
      data => {
        //    console.log("INS ERE", data);
        if (data["code"] === 200) {
          this.toastrServ.success("Role Deleted", "Success", {
            timeOut: 1000
          });

          this.fetchRoles();
        } else {
          this.toastrServ.error("Failed To Delete", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  dismissModal() {
    this.isAddModal = false;
    this.roleForm.reset();
  }
  saveRole(data) {
    let dataToPass = {
      role: data.name
    };
    this.admnServ.addRoles(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isAddModal = false;
          this.roleForm.reset();
          this.toastrServ.success("Role Added", "Success", {
            timeOut: 1000
          });
          this.roleForm.reset();
          this.fetchRoles();
        } else {
          this.isAddModal = true;
          this.toastrServ.error("Failed To Add", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  updateRole(data) {
    //   console.log("N ", data);
    let dataToPass = {
      name: data.name,
      _id: this.role_id
    };
    // console.log(dataToPass);
    this.admnServ.updateRoles(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isAddModal = false;
          this.toastrServ.success("Role Updated", "Success", {
            timeOut: 1000
          });
          this.roleForm.reset();
          this.fetchRoles();
        } else {
          this.isAddModal = true;
          this.toastrServ.error("Failed To Update", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        //   console.log(error.error);
        this.toastrServ.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
}
