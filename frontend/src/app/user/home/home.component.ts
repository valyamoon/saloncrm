import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  isShowServiceList: boolean;
  locationValue: any;
  ngOnInit() {
    // google.maps.event.addDomListener(window, "load", this.initialize);
  }

  // initialize() {
  //   var autoComplete = new google.maps.places.Autocomplete(
  //     document.getElementById("textInpt")
  //   );
  //   google.maps.event.AddListener(autoComplete, "plac_changed", function() {
  //     var places = autoComplete.getPlace();
  //     var location = "<b>Location:</b>" + places.formatted_address + "<br/>";
  //     location += "<b>Latitude:</b>" + places.geometry.location.A + "<br/>";
  //     location += "<b>Longitude:</b>" + places.geometry.location.F + "<br/>";
  //   });
  //   this.locationValue = location;
  // }

  showServicesList() {}
}
