import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  mostrarError: boolean;
  id: any;
  mostraInput: boolean;
  email: any;
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required])
    });
    this.mostrarError = false;
  }

  ngOnInit() {
    this.mostraInput = false;
  }

  async onSubmit() {

    try {
      let response = await this.usuariosService.loginUsuario(
        this.formulario.value
      );

      this.id = response.id;
      response = response.success;
      this.usuariosService.postLocalStore('token', response);
      this.usuariosService.postLocalStore('id', this.id);

      this.router.navigate(['/home']);
    } catch (err) {
      this.mostrarError = true;
      console.log(err);
    }
  }
  manejarClick($event) {
    console.log($event.target.id);
    if ($event.target.id !== 1) {
      this.mostraInput = true;
      console.log(this.mostraInput);

    }
  }
  async recogerEmail() {
    console.log(this.email);
    this.usuariosService.postLocalStore('email', this.email);


  }
}
