import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  isAddModal: boolean = false;
  categoryForm: FormGroup;
  categoriesList: any;
  pageSize: any = 5;
  count: any = 5;
  adminCategoriesCount: any;
  page: any = 1;
  displayedColumns = ["catname", "isactive", "action"];
  noRecordsFound: boolean;
  noArchivedRecordsFound:boolean = false;
  disabled: true;
  archivedCategoriesList: any;
  archivedCategoriesCount: any;
  showArchived:boolean = false;
  constructor(
    private adminServ: AdminServService,
    private fb: FormBuilder,
    private toastrSev: ToastrService
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Manage Categories");
    this.categoryForm = this.fb.group({
      name: ["", Validators.required]
    });
    this.fetchCategoriesList();
  }

  openAddCategoryModal() {
    this.isAddModal = true;
    console.log(this.isAddModal);
  }
  dismissModal() {
    this.isAddModal = false;
    this.showArchived = false;
    this.categoryForm.reset();
  }

  paginate(event) {
    console.log(event);
    this.page = event.pageIndex + 1;
    console.log("c", this.count);
    console.log("p", this.page);
    this.count = event.pageSize;
    this.fetchCategoriesList();
  }

  addCategory(data) {
    console.log("ADD", data);
    let dataToPass = {
      catname: data.name
    };
    this.adminServ.addCategories(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.isAddModal = false;
          this.toastrSev.success("Catgory Added", "Success", {
            timeOut: 2000
          });
          this.fetchCategoriesList();
        } else {
          this.isAddModal = true;
          this.toastrSev.error("Failed To Added", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.isAddModal = false;
        this.toastrSev.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  fetchCategoriesList() {
  
    let dataToPass = {
      type: "admin-categories",
      pageSize: this.count,
      page: this.page
    };
    console.log(dataToPass);
    this.adminServ.getAdmincategoriesList(dataToPass).subscribe(
      data => {
        console.log(data);
        if (data["code"] === 200) {
          this.adminCategoriesCount = data["data"]["count"];
          this.categoriesList = data["data"]["data"];
          if (this.categoriesList.length == 0) {
            this.noRecordsFound = true;
          }

          this.toastrSev.success("Catgories Fetched", "Success", {
            timeOut: 2000
          });
        } else {
          this.toastrSev.error("Failed To Fetch", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrSev.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }
  deleteCategory(data) {
    let dataToPass = {
      category_id: data._id
    };
    this.adminServ.deleteCategories(dataToPass).subscribe(
      data => {
        if (data["code"] === 200) {
          this.fetchCategoriesList();
          this.toastrSev.success("Catgories Deleted", "Success", {
            timeOut: 2000
          });
          this.fetchArchivedCategoryList();
        } else {
          this.toastrSev.error("Failed To Delete", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrSev.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }

  fetchArchivedCategoryList() {
      this.showArchived = true;
    let dataToPass = {
      type: "archive-categories"
    };
    console.log(dataToPass);
    this.adminServ.getArchivedCategories(dataToPass).subscribe(
      data => {
        console.log(data);
        if (data["code"] === 200) {
        
          console.log("archivedCategoriesCount",this.archivedCategoriesCount)
         
          this.archivedCategoriesList = data["data"];
             this.archivedCategoriesCount =this.archivedCategoriesList.length;
          if (this.archivedCategoriesList.length == 0) {
            this.noArchivedRecordsFound = true;
          }

          this.toastrSev.success("Archive Catgories Fetched", "Success", {
            timeOut: 2000
          });
        } else {
          this.toastrSev.error("Failed To Fetch", "Error", {
            timeOut: 2000
          });
        }
      },
      error => {
        this.toastrSev.error("Server Error", error.error, {
          timeOut: 2000
        });
      }
    );
  }
awakeCategory(data){
  console.log(data)
    let dataToPass = {
      _id: data._id
    };
    this.adminServ.awakeCategories(dataToPass).subscribe((data:any)=>{
      if (data["code"] === 200) {
        
       
        this.fetchArchivedCategoryList();
        this.fetchCategoriesList();
         this.showArchived = false;
          this.toastrSev.success("Awake Catgory", "Success", {
            timeOut: 2000
          });
        } else {
          this.toastrSev.error("Failed To Awake", "Error", {
            timeOut: 2000
          });
        }





    },error=>{

 this.toastrSev.error("Server Error", error.error, {
            timeOut: 2000
          });


    })
}




}
