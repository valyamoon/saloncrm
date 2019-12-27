import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {AdminService} from './admin.service';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  adminLogin:FormGroup;
  

  constructor(private router:Router,private fb:FormBuilder, private adminServ:AdminService,private notifier:NotifierService) { }

  ngOnInit() {

    this.adminLogin = this.fb.group({

      email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['',Validators.required]





    })


  }

  loginAdmin(data){
    this.adminServ.login(data).subscribe((data:any)=>{

      if(data){

        this.notifier.notify("success", "You are awesome! I mean it!");
        this.router.navigate([''])

      }



    })
  }

}
