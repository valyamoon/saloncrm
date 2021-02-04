import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  Input,
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";
@Component({
  selector: "app-google-searc",
  templateUrl: "./google-searc.component.html",
  styleUrls: ["./google-searc.component.css"],
})
export class GoogleSearcComponent implements OnInit, AfterViewInit {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild("addresstext", { static: false }) addresstext: any;
  @Input() autocompleteInput: string;
  queryWait: boolean;

  constructor(private mapsAPILoader: MapsAPILoader) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    this.mapsAPILoader.load().then((res) => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.addresstext.nativeElement,
        {
          types: [this.adressType], // 'establishment' / 'address' / 'geocode'
        }
      );
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
        this.autocompleteInput = autocomplete.getPlace().formatted_address;
      });
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
