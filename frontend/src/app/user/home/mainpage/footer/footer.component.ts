import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(data) {
    if (data === "facebook") {
      window.open("https://www.facebook.com", "_blank");
    }
    if (data === "linkedin") {
      window.open("https://www.linkedin.com", "_blank");
    }
    if (data === "google") {
      window.open("https://www.googleplus.com", "_blank");
    }
    if (data === "twitter") {
      window.open("https://www.twitter.com", "_blank");
    }
  }
}
