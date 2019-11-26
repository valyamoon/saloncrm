import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CommonService } from '../common.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  countries:any;
  loginForm:FormGroup;
  registerUser:FormGroup;
  showOTP:boolean;
  numberDetails:any=[];
  verifyNumber:FormGroup;
  countryCodes:any;
  showOtherDetails:boolean;
  messageToShow:any;
  isVerified:boolean;

  constructor(private fb:FormBuilder, private comSer:CommonService, private router:Router) { }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      mobileNumber:['',[Validators.required,Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]],
      countryCode:['',Validators.required]
    })
    this.verifyNumber = this.fb.group({
        otp:['',Validators.required]
    })
    this.registerUser = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required]

    });

    this.getCodes();
  }

  get forms(){
    return this.loginForm.controls;
  }

  check(er){
    console.log(er)
  }

  getCodes(){
      this.comSer.getCodes().subscribe((data:any)=>{
        this.countryCodes =  data;
        console.log(this.countryCodes);
      },error=>{
        console.log(error);
      })
  }
  submitNumber(data){
    this.numberDetails =  data;
    console.log(this.numberDetails);
    let dataToPass = {
      phone:data.mobileNumber,
      code:data.countryCode,
      via:"sms"
    }
    this.comSer.submitNumber(dataToPass).subscribe((data)=>{
    console.log(data);
    if(data.hasOwnProperty('message')){
      this.messageToShow =  data['message'];
    }

    if(data.hasOwnProperty('success')){
        this.showOTP = true;
        this.messageToShow =  data['success'];
    }
    if(data.hasOwnProperty('error')){
      this.showOTP = false;
      this.messageToShow =  data['error'];
  }

  },error=>{
    console.log(error);
  })
  }
  verify(data){
    console.log(data);

    let dataToPass = {
      phone:this.numberDetails.mobileNumber,
      code:this.numberDetails.countryCode,
      token:data.otp
    }

    this.comSer.verifyNumber(dataToPass).subscribe((data:any)=>{
      console.log(data);
      if(data['success']== true){
        this.isVerified =  true;
        this.showOtherDetails = true;
      }
      this.messageToShow = data['sucess'];
      if(data.hasOwnProperty('error')){
        this.messageToShow =  data['error'];
      }
    },error=>{
      this.messageToShow =  data['error'];
      console.log(error);
    })


  }

  register(data){

      console.log(data);
      let dataToPass = {
        phone:this.numberDetails.mobileNumber,
        code:this.numberDetails.countryCode,
        loggedInVia:'mobilenumber',
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        address:data.address,
        lat:'',
        long:'',
        isVerified:this.isVerified,
        dob:data.dob
      }
  console.log(dataToPass);

    this.comSer.addUser(dataToPass).subscribe((data:any)=>{
      
      console.log(data);
      if(data.registered ==  true){
        this.router.navigate(['location']);
      }
       


    },error=>{
      console.log(error);
    })



  }

  resendOTP(data){
  
    console.log(this.numberDetails);
    let dataToPass = {
      phone:this.numberDetails.mobileNumber,
      code:this.numberDetails.countryCode,
      via:data
    }
    this.comSer.submitNumber(dataToPass).subscribe((data)=>{
    console.log(data);
    if(data.hasOwnProperty('message')){
      this.messageToShow =  data['message'];
    }

    if(data.hasOwnProperty('success')){
        this.showOTP = true;
        this.messageToShow =  data['success'];
    }
    if(data.hasOwnProperty('error')){
      this.showOTP = false;
      this.messageToShow =  data['error'];
  }

  },error=>{
    console.log(error);
  })
  }

}
