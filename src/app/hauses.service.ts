import { Injectable } from '@angular/core';
import {Casa} from '../app/models/casas.model';
import { resolve } from 'url';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HausesService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/'
   }


  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();

  }
}


