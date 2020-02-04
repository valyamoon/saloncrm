import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cp",
  templateUrl: "./cp.component.html",
  styleUrls: ["./cp.component.css"]
})
export class CpComponent implements OnInit {
  resetKey: any = "HIIIIIIIIIIIII";
  constructor(private activatedRoutes: ActivatedRoute) {}

  ngOnInit() {
    console.log("resetkey", this.resetKey);
  }
}
