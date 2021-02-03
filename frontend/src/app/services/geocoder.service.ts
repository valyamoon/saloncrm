import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GeocoderService {
  private geocoder;
  constructor() {
    this.geocoder = new google.maps.Geocoder();
  }

  async getLocationByCoords(lat: number, lng: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ location: { lat, lng } }, (result) => {
        const [locationName] = result;
        resolve(locationName.formatted_address);
      });
    });
  }

  async getCurrentPosition(): Promise<{ lat: number; long: number }> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          const lat = data.coords.latitude;
          const long = data.coords.longitude;
          resolve({ lat, long });
        },
        (err) => reject(err)
      );
    });
  }
}
