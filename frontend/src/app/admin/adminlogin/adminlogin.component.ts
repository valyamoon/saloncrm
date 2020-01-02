import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {AdminService} from './admin.service';
import{ToastrService} from 'ngx-toastr'
import {AuthService} from '../auth.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  adminLogin:FormGroup;
  

  constructor(private toastServ:ToastrService, private router:Router,private fb:FormBuilder, private adminServ:AdminService, private authServ:AuthService) { }

  ngOnInit() {

    this.adminLogin = this.fb.group({

      email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['',Validators.required]





    })


  }

  loginAdmin(data){
    this.adminServ.login(data).subscribe((data:any)=>{

      if(data.code === 200){
        
        this.toastServ.success('Logged In Successfully','',{
          timeOut:3000
        });
        console.log("data",data);
        this.authServ.sendToken(data.data.token);

        this.router.navigate(['admin/home'])
      }
      else{

        this.toastServ.error('Invalid Login details', '', {
          timeOut: 3000
        });

      }



    })
  }

}
