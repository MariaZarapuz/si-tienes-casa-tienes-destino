import { Injectable } from "@angular/core";
import { House } from "./models/house";

@Injectable({
  providedIn: "root"
})
export class HouseService {
  arrHouse: House[];
  constructor() {
    this.arrHouse = new Array();
  }

  addPost() {}
}
