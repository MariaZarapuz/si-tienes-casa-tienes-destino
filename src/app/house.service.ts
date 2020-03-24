import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { House } from "./models/house";

@Injectable({
  providedIn: "root"
})
export class HouseService {
  arrHouse: House[];
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.arrHouse = new Array();
    this.baseUrl = "http://localhost:3000/api/houses";
  }
  getAll() {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  addHouse(formValue) {
    return this.httpClient.post(this.baseUrl, formValue).toPromise();
  }
}
