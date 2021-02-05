import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AllservService {
  private currentRoute = new BehaviorSubject<string>("");
  private previousRoute = new BehaviorSubject<string>("");

  constructor() {}

  setRoute(data: string) {
    // Fire the update event with the new data
    this.currentRoute.next(data);
  }

  getRoute(): Observable<string> {
    return this.currentRoute.asObservable();
  }

  setPrevRoute(data: string) {
    // Fire the update event with the new data
    this.previousRoute.next(data);
  }

  getPrevRoute(): Observable<string> {
    return this.previousRoute.asObservable();
  }
}
