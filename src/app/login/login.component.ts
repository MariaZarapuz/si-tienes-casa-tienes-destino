import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  mostrarError: boolean;
  id: any;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    });
    this.mostrarError = false;
  }

  ngOnInit() {}

  async onSubmit() {
    /* console.log(this.formulario.value) */
    try {
      let response = await this.usuariosService.loginUsuario(
        this.formulario.value
      );

      this.id = response.id;
      console.log(this.id);
      response = response["success"];
      this.usuariosService.postLocalStore("token", response);
      this.usuariosService.postLocalStore("id", this.id);

      this.router.navigate(["/home"]);
    } catch (err) {
      this.mostrarError = true;
      /* err = ('El usuario y/o la contraseña son incorrectos'); */
      console.log(err);
    }
  }
}
