import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { House } from "./models/house";

@Injectable({
  providedIn: "root"
})
export class HouseService {
  arrHouse: House[];
  baseUrl: string;
  baseUrlFilter: string;
  constructor(private httpClient: HttpClient) {
    this.arrHouse = new Array();
    this.baseUrl = "http://localhost:3000/api/houses";
    this.baseUrlFilter = "http://localhost:3000/api/houses/filter";
  }

  // USER

  getAll() {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  getByFk(fkUser): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${fkUser}`).toPromise();
  }

  //FORM-HOUSE

  addHouse(formValue) {
    return this.httpClient.post(this.baseUrl, formValue).toPromise();
  }

  deleteHousebyId(idHouse): Promise<any> {
    console.log("Hola");
    return this.httpClient.delete(`${this.baseUrl}/${idHouse}`).toPromise();
  }

  updateHouseById(idHouse, formValue): Promise<any> {
    console.log("estoy en el servicio");
    return this.httpClient
      .put(`${this.baseUrl}/${idHouse}`, formValue)
      .toPromise();
  }

  editImageById(idHouse, formValue): Promise<any> {
    return this.httpClient
      .put(`${this.baseUrl}/image1/${idHouse}`, formValue)
      .toPromise();
  }

  //SEARCH

  getByFilter(filter) {
    //console.log(filter);
    return this.httpClient.post(this.baseUrlFilter, filter).toPromise();
  }
}
