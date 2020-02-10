import { Component, OnInit } from "@angular/core";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  value = 50;
  color: ThemePalette = "accent";
  mode: ProgressSpinnerMode = "indeterminate";

  constructor() {}

  ngOnInit() {}
}
