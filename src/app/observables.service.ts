import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ObservablesService {
  public addressSb: Subject<any>;
  public filterSb: Subject<string>;

  constructor() {
    this.addressSb = new Subject();
    this.filterSb = new Subject();
  }

  handleAdress(obj) {
    this.addressSb.next(obj);
  }
}
