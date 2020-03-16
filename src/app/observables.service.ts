import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ObservablesService {
  public addressSb: Subject<any>;
  constructor() {
    this.addressSb = new Subject();
  }

  handleAdress(obj) {
    this.addressSb.next(obj);
  }
}
