import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/users";
  }

  loginUsuario(formValue): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue).toPromise();
  }

  createUsuario(formValue): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValue).toPromise();
  }

  postLocalStore(clave, data) {
    localStorage.setItem(clave, data);
  }

  getLocalStore(clave) {
    return localStorage.getItem(clave);
  }
}
