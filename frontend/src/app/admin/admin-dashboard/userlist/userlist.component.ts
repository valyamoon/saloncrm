import { Component, OnInit } from '@angular/core';
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  activeUsersList:any;
  constructor(private adminServ: AdminServService,private toastrServ:ToastrService) {}

  ngOnInit() {
    this.getActiveUsersList();
  }



  getActiveUsersList(){
    let dataToPass = {
      type:"user"
    }
      this.adminServ.getActiveUsersList(dataToPass).subscribe((data)=>{

        if(data['code']===200){
          this.activeUsersList =  data['data'];
          console.log(this.activeUsersList);
          this.toastrServ.success("Users Fetched Successfully","Success",{
            timeOut:2000
          })

        }
        else{

          this.toastrServ.error("Failed To Fetch Users List","",{
            timeOut:2000
          })

        }


      },error=>{
        this.toastrServ.error("Server Error",error,{
          timeOut:2000
        })


      })


  }

}
