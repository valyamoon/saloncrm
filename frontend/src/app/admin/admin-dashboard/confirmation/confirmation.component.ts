import { Component, OnInit ,Inject} from '@angular/core';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  title: string;
  message: string;
  isConfirm:boolean;
  constructor() { 



    }

  ngOnInit() {
  }
   onConfirm() {
    // Close the dialog, return true
   return this.isConfirm =  true;
   
  }
 
  onDismiss() {
    // Close the dialog, return false
   return this.isConfirm = false;
  }

}
