import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource, MatSort, MatSortHeader } from "@angular/material";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {
  salon_ID: any;
  dataSource: any;
  categoriesList: any;
  pageSize: any = 5;
  count: any = 5;
  totalCount: any;
  total: any;
  page: any = 1;
  displayedColumns = ["onDate", "status"];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  noRecordsFound: boolean;
  constructor(
    private commnServ: CommonService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.commnServ.getSalon_id().subscribe((data: any) => {
      sessionStorage.setItem("SalonID", data);
      this.salon_ID = sessionStorage.getItem("SalonID");
      this.getTransactionLists();
    });
  }

  paginate(event) {
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getTransactionLists();
  }

  getTransactionLists() {
    let dataToPass = {
      salon_id: this.salon_ID
    };
    this.commnServ.getTransactionsList(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.dataSource = data["data"]["data"];
          this.dataSource = new MatTableDataSource(this.dataSource);
          this.dataSource.sort = this.sort;
          this.totalCount = data["data"]["count"];
          if (this.dataSource.length == 0) {
            this.noRecordsFound = true;
          } else {
            this.noRecordsFound = false;
          }
        } else if (data["code"] === 400) {
          this.toastServ.error(data["message"], "", {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error(error.error["message"], "", {
          timeOut: 1000
        });
      }
    );
  }
}
