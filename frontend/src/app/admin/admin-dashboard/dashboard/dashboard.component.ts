import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import {MatPaginator} from '@angular/material/paginator';
import { ToastrService } from "ngx-toastr";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  SalonRequestList: any;
  displayedColumns   = ['name','salonaddress','contact','isactive', 'action'];
  page:any;
  limit: any;
  count:any = 5;
  pageSize: any = 5;
  disabled:boolean = true;
  pageNumber:any;
  noRecordFound:boolean;

  constructor(private adminServ: AdminServService,private toastServ:ToastrService) {}

  ngOnInit() {
    this.getRequests();
  }

  /**
   * Function is use to Pay to get salon requests list
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */

  getRequests() {
  
    let dataToPass = {
      pageSize: this.pageSize,
      page: this.page
    };
    this.adminServ.getSalonsRequest(dataToPass).subscribe(data => {
      console.log("HERE DATA iS", data);

      this.SalonRequestList = data["data"]["data"];
      this.limit = data["data"]["countNumber"];
      if(this.limit == 0 || this.SalonRequestList.length === 0){
        this.noRecordFound = true;
      }
      console.log("COUNT", this.count,this.SalonRequestList);
    });
  }

  paginate(event) {
    console.log(event);
    this.page = event.pageIndex + 1;
    this.count = event.pageSize;
    this.getRequests();
  }

  approveSalonRequest(data){

    console.log("ApproveFor",data);
    let dataToPass ={
      salon_id:data._id
    }
    this.adminServ.approveSalonRequests(dataToPass).subscribe((data)=>{
      console.log("FFFF",data);
      if(data['code'] === 200){
        this.toastServ.success("Salon Approved Successfully", "", {
          timeOut: 3000
        });
        this.getRequests();
      }
      else{
        this.toastServ.error("Failed", "", {
          timeOut: 3000
        });

      }
      
    },error=>{
      this.toastServ.error("Failed To Approve Salon", error, {
        timeOut: 3000
      });



    })
  }


}
