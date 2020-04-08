import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private commonServ: UsercommonserviceService) {}
  aboutUsContent: any;
  ngOnInit() {
    this.getAboutData();
  }
  getAboutData() {
    let dataToPass = { type: "about" };
    this.commonServ.getAbout(dataToPass).subscribe((data: any) => {
      if (data.code === 200) {
        this.aboutUsContent = data.data;
      }
    });
  }
}
