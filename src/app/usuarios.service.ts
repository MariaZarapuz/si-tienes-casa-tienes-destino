import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/users";
  }

  getUserId(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "user-token": localStorage.getItem("token")
      })
    };
    return this.httpClient.get(this.baseUrl, httpOptions).toPromise();
  }

  loginUsuario(formValue): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue).toPromise();
  }

  updateToken(token): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/saveToken`, token).toPromise();
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
