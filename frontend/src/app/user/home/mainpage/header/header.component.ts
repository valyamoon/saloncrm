import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  toggleHeader() {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("expanded");
  }
}
