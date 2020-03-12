import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { async } from "q";

@Component({
  selector: "app-starrating",
  templateUrl: "./starrating.component.html",
  styleUrls: ["./starrating.component.scss"]
})
export class StarratingComponent implements OnInit {
  isFavorite: boolean = false;
  totalRatings = 5;
  tempArray: any = [];
  tempArray1: any = [];
  @Input() ratings;
  constructor() {}

  ngOnInit() {
    for (var i = 0; i < this.ratings; i++) {
      this.tempArray.push({});
    }
  }
}
