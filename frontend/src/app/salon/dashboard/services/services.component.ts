import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customModal = false;
  customModal1 = false;

 openModal(){
 this.customModal = true;
 var elem = document.createElement('div');
 elem.className = 'custom-modal-overlay';
 elem.id = 'overlayID';
 document.body.appendChild(elem);
 
 var link = document.getElementById('overlayID');
 link.onclick = function() {
 closeModalInit();
 }
 const closeModalInit = () => {
 this.closeModal();
 };
 }
 
 closeModal(){
 this.customModal = false;
 var elem = document.getElementById("overlayID");
 	elem.parentNode.removeChild(elem);
 }


}
