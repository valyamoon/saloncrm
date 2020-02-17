import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";
import { ConfirmationComponent } from "../confirmation/confirmation.component";
import { SimpleModalService } from "ngx-simple-modal";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  isAddModal: boolean = false;
  categoryForm: FormGroup;
  isLoader: boolean;
  categoriesList: any;
  pageSize: any = 5;
  count: any = 5;
  adminCategoriesCount: any;
  page: any = 1;
  displayedColumns = ["catname", "action"];
  noRecordsFound: boolean;
  noArchivedRecordsFound: boolean = false;
  disabled: boolean = true;

  categoryID: any;
  archivedCategoriesCount: any;
  showArchived: boolean = false;
  isShowUpdate: boolean = false;
  dataSource: any;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private toastrSev: ToastrService,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Manage Categories");
    this.categoryForm = this.fb.group({
      name: ["", Validators.required]
    });
    this.fetchCategoriesList();
  }

  openAddCategoryModal(data) {
    if (data === "add") {
      this.isAddModal = true;
      this.isShowUpdate = false;
    } else {
      this.categoryForm.get("name").setValue(data.catname);
      this.categoryID = data._id;
      this.isAddModal = true;
      this.isShowUpdate = true;
    }

    // if (data) {
    // } else if (data === "null") {
    //   this.isAddModal = true;
    // }

    //console.log(this.isAddModal);
  }
  dismissModal() {
    this.isAddModal = false;
    this.showArchived = false;
    this.categoryForm.reset();
  }

  paginate(event) {
    //console.log(event);
    this.page = event.pageIndex + 1;
    //  console.log("c", this.count);
    // console.log("p", this.page);
    this.count = event.pageSize;
    this.fetchCategoriesList();
  }

  update(data) {
    //console.log(data);
    this.isLoader = true;
    let dataToPass = {
      category_id: this.categoryID,
      catname: data.name
    };
    this.adminServ.updateCategory(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.isLoader = false;
          this.isAddModal = false;
          this.fetchCategoriesList();
        } else if (data["code"] === 400) {
          this.isLoader = false;
          this.toastrSev.error("Failed", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.isAddModal = false;
        this.toastrSev.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  addCategory(data) {
    // console.log("ADD", data);
    this.isLoader = true;
    let dataToPass = {
      catname: data.name
    };
    this.adminServ.addCategories(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isAddModal = false;
          this.isLoader = false;
          this.categoryForm.reset();
          this.toastrSev.success("Catgory Added", "Success", {
            timeOut: 1000
          });
          this.fetchCategoriesList();
        } else {
          this.isLoader = false;
          this.isAddModal = true;
          this.toastrSev.error("Failed To Added", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.isAddModal = false;
        this.toastrSev.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }

  fetchCategoriesList() {
    this.isLoader = true;
    let dataToPass = {
      type: "admin-categories",
      pageSize: this.count,
      page: this.page
    };
    //console.log(dataToPass);
    this.adminServ.getAdmincategoriesList(dataToPass).subscribe(
      data => {
        //   console.log(data);
        if (data["code"] === 200) {
          this.isLoader = false;
          this.adminCategoriesCount = data["data"]["count"];
          this.categoriesList = data["data"]["data"];
          this.dataSource = new MatTableDataSource(this.categoriesList);
          this.dataSource.sort = this.sort;
          if (this.categoriesList.length == 0) {
            this.noRecordsFound = true;
          } else {
            this.noRecordsFound = false;
          }
        } else {
          this.isLoader = false;
          this.toastrSev.error("Failed To Fetch", "Error", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.isLoader = false;
        this.toastrSev.error("Server Error", error.error["message"], {
          timeOut: 1000
        });
      }
    );
  }
  deleteCategory(data) {
    this.SimpleModalService.addModal(ConfirmationComponent, {
      title: "Warning",
      message: "Are you sure you want to delete?"
    }).subscribe(isConfirmed => {
      if (isConfirmed === true) {
        this.isLoader = true;
        let dataToPass = {
          category_id: data._id
        };
        this.adminServ.deleteCategories(dataToPass).subscribe(
          data => {
            if (data["code"] === 200) {
              this.isLoader = false;
              this.fetchCategoriesList();
              this.toastrSev.success("Catgories Deleted", "Success", {
                timeOut: 1000
              });
            } else {
              this.isLoader = false;
              this.toastrSev.error("Failed To Delete", "Error", {
                timeOut: 1000
              });
            }
          },
          error => {
            this.isLoader = false;
            this.toastrSev.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          }
        );
      }
    });
  }

  updateCategory(data) {
    this.openAddCategoryModal(data);
    this.isShowUpdate = true;
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
