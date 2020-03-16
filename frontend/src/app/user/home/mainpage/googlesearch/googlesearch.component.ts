import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  Input
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-googlesearch",
  templateUrl: "./googlesearch.component.html",
  styleUrls: ["./googlesearch.component.css"]
})
export class GooglesearchComponent implements OnInit, AfterViewInit {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild("addresstext", { static: false }) addresstext: any;
  autocompleteInput: string;
  queryWait: boolean;

  constructor(private mapsAPILoader: MapsAPILoader) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    this.mapsAPILoader.load().then(res => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.addresstext.nativeElement,
        {
          types: [this.adressType] // 'establishment' / 'address' / 'geocode'
        }
      );
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
      });
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
