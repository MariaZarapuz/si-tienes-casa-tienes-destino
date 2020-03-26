import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }


  // FORM USERS

  createUsuario(formValue): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValue).toPromise();
  }

  // USER
  getToken(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl, httpOptions).toPromise();
  }

  updateUser(formValue): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.put(`${this.baseUrl}/updateProfile`, formValue, httpOptions).toPromise();
  }

  deleteByToken(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }


  // LOGIN
  loginUsuario(formValue): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue).toPromise();
  }

  postLocalStore(clave, data) {
    localStorage.setItem(clave, data);
  }


  // APP
  getLocalStore(clave) {
    return localStorage.getItem(clave);
  }
}
