import { Component, OnInit } from "@angular/core";
import { UsercommonserviceService } from "../usercommonservice.service";

@Component({
  selector: "app-termsandcondition",
  templateUrl: "./termsandcondition.component.html",
  styleUrls: ["./termsandcondition.component.scss"]
})
export class TermsandconditionComponent implements OnInit {
  constructor(private commonServ: UsercommonserviceService) {}
  termsAndConditionText: any;
  ngOnInit() {
    this.getTcText();
  }
  getTcText() {
    let dataToPass = {
      type: "tc"
    };
    this.commonServ.getTCText(dataToPass).subscribe((data: any) => {
      if (data.code === 200) {
        this.termsAndConditionText = data.data;
      }
    });
  }
}
