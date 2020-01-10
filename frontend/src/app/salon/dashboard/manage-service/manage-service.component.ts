import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import{CommonService} from '../common.service';


@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {
  servicesList : any =[];
  manageServiceForm: FormGroup;
  tempServiceObj: any = {};
  tempServiceArr : any = [];
  constructor(
    private toastServ: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private salonServ: CommonService
  ) { }

  ngOnInit() {
    this.getServicesData();
    this.manageServiceForm = this.fb.group({
      
        service_id: [''],
        price: [''],
        duration: ['']
     
  
    });
  }
  getServicesData(){
    this.salonServ.serviceList().subscribe((result: any) => {
      //console.log("result",result);
      if (result.code === 200) {
        // console.log("result.data.length",result.data.length);
        result.data.count= result.data.length;
        //console.log("result.data",result.data);
        this.servicesList = result.data;
        
      } 
    },error=>{
      this.toastServ.error("Unable to fetch record", error, {
        timeOut: 3000
      });
    });
  }
  sendRequest(data,isChecked){
    if(isChecked){
     let serviceObj = {
      "service_id" : data,
      "price": '',
      "duration": ''
     }
     this.tempServiceArr.push(serviceObj);
    }
  }
  priceChange(event, service_id, index){
    let isExist = this.tempServiceArr.find(x => x.service_id === service_id);
    if(isExist){
      isExist.price = event.target.value;
      //this.tempServiceArr.push(isExist);
    }else{
      alert("Please select Check box first");
      return false;
    }
    
  }
  durationChange(event, service_id,index){
    let isExist = this.tempServiceArr.find(x => x.service_id === service_id);
    if(isExist){
      isExist.duration = event.target.value;
      //this.tempServiceArr.push(isExist);
    }else{
      alert("Please select Check box first");
      event.target.value = '';
      return false;
    }
   
  }

  updateSalonServe(){
    console.log("this.tempServiceArr", this.tempServiceArr); 
    // console.log("this.manageServiceForm", this.manageServiceForm.value);
  }


}
