import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-createpassword",
  templateUrl: "./createpassword.component.html",
  styleUrls: ["./createpassword.component.css"]
})
export class CreatepasswordComponent implements OnInit {
  resetKey: any;
  constructor(private activatedRoutes: ActivatedRoute) {}

  ngOnInit() {}
}
