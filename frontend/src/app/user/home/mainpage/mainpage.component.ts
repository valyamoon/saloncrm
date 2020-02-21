import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"]
})
export class MainpageComponent implements OnInit {
  constructor() {}
  isModal: boolean = false;

  ngOnInit() {}
  openServiceModal() {
    this.isModal = true;
  }
  dismissModal() {
    this.isModal = false;
  }
}
