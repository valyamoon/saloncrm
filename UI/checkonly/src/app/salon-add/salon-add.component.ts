import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-salon-add',
  templateUrl: './salon-add.component.html',
  styleUrls: ['./salon-add.component.css']
})
export class SalonAddComponent implements OnInit {

  constructor(private commServ:CommonService, private fb:FormBuilder) { }
  salonForm:FormGroup;
  fileToUpload: File = null;

  ngOnInit() {
  this.salonForm = this.fb.group({
    name:['',Validators.required],
    lat:['',Validators.required],
    long:['',Validators.required],
    contact:['',Validators.required],
    services:['',Validators.required],
    image:['',Validators.required]

  });
  }

  saveSalonDetails(data){
    let dataToPass = {
      name:data.name,
    lat:data.lat,
    long:data.long,
    contact:data.contact,
    services:data.services,
    image:this.fileToUpload
    }

    this.commServ.addSalon(dataToPass).subscribe((data:any)=>{
      console.log(data);
    }, 
    error=>{
      console.log(error);
    })

  }

  handleFileInput(files:FileList){
    console.log("HIiiiiiiiiiiiiiiiiii",event);
    this.fileToUpload = event.target['value'];
    console.log("this.fileToUpload",this.fileToUpload);
  }

}
