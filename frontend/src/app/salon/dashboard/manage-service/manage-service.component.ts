import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
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
  userId : any;
  
  constructor(
    private toastServ: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private salonServ: CommonService
  ) { }

  ngOnInit() {
    
    this.manageServiceForm = this.fb.group({
        service_id: [''],
        price: [''],
        duration: ['']
    });
    this.userId = sessionStorage.getItem('userId');
    this.getServicesData();
   
  }
  // get sarviceForm() { return this.manageServiceForm.controls; }
  // get price() { return this.manageServiceForm.get('price'); }

  // get duration() { return this.manageServiceForm.get('duration'); }
  getServicesData(){
    
    let data =  {
      "user_id": "5e1eb3341f74d83ee3ec3346"
    }
    this.salonServ.serviceList(data).subscribe((result: any) => {
      if (result.code === 200) {
        result.data.count= result.data.length;
        var updateServiceArr = [];
        result.data.forEach(function (sreviceData) {
          if(sreviceData.salonserviceinfo.length > 0){
            let serviceObj = {
              "service_id" : sreviceData._id,
              "category_id" : sreviceData.category_id,
              "price": sreviceData.salonserviceinfo[0].price,
              "duration": sreviceData.salonserviceinfo[0].duration
             }
             updateServiceArr.push(serviceObj);
          }
        });
        this.tempServiceArr = updateServiceArr;
        this.servicesList = result.data;
      } 
    },error=>{
      this.toastServ.error("Unable to fetch record", error, {timeOut: 3000});
    });
  }
  sendRequest(serviceId,categoryId,isChecked,index){
    // console.log("index",index);
    if(isChecked){
     let serviceObj = {
      "service_id" : serviceId,
      "category_id" : categoryId,
      "price": '',
      "duration": ''
     }
     this.tempServiceArr.push(serviceObj);
     
    //  const price =  this.manageServiceForm.get('price').parent.value.price;
    //  console.log("price", price);
    // //  const duration = this.manageServiceForm.get('duration');
    //       price.setValidators([Validators.required]);
    // //       duration.setValidators([Validators.required]);
    //   this.manageServiceForm.updateValueAndValidity();
    // //   if(this.manageServiceForm.value){ 
        
    // //   }

     


    }else{
      console.log("Uncheck before now", this.tempServiceArr);
      let isExist = this.tempServiceArr.find(x => x.service_id === serviceId);
     // console.log("isExist", isExist);
      if(isExist){
        this.removeSalonServe(isExist);
        setTimeout (() => {
          this.getServicesData();
       }, 1000);
      }
    }
  }
  priceChange(event, service_id, index){
    let isExist = this.tempServiceArr.find(x => x.service_id === service_id);
    if(isExist){
      isExist.price = event.target.value;
    }else{
      this.toastServ.error("Please select Check box first", "", {
        timeOut: 3000
      });
      
      event.target.value = '';
      return false;
    }
    
  }
  durationChange(event, service_id,index){
    let isExist = this.tempServiceArr.find(x => x.service_id === service_id);
    if(isExist){
      isExist.duration = event.target.value;
    }else{
      this.toastServ.error("Please select Check box first", "", {
        timeOut: 3000
      });
      event.target.value = '';
      return false;
    }
   
  }

  updateSalonServe(){
    let user_id = sessionStorage.getItem("userId");
    let dataObject = {
      'user_id' : user_id,
      'salonService' : this.tempServiceArr
    };
    this.salonServ.addSalonService(dataObject).subscribe((result: any) => {
      if (result.code === 200) {
        this.toastServ.success("Service updated Successfully", "", {
          timeOut: 3000
        });
       // this.router.navigate(["manage-service"]);
       this.getServicesData();
      } 
    },error=>{
      this.toastServ.error("Unable to fetch record", error, {timeOut: 3000});
    });
  }
  removeSalonServe(element){
    let dataObject = {
      'user_id' : this.userId,
      'salonService' : element
    };
    console.log("dataObject", dataObject); //return;
    this.salonServ.removeSalonService(dataObject).subscribe((result: any) => {
      if (result.code === 200) {
        this.toastServ.success("Service remove Successfully", "", {
          timeOut: 3000
        });
        // this.router.navigate(["manage-service"]);

      } 
    },error=>{
      this.toastServ.error("Unable to fetch record", error, {timeOut: 3000});
    });
    // console.log("this.manageServiceForm", this.manageServiceForm.value);
  }


}
