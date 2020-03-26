import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  getById(userId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${userId}`).toPromise()
  }

  addHouse(formValue) {
    return this.httpClient.post(this.baseUrl, formValue).toPromise();
  }



  deleteHousebyId(idHouse): Promise<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        studentId: idHouse
      }
    }
    return this.httpClient.delete(`${this.baseUrl}/:id`, httpOptions).toPromise()

  }


}
