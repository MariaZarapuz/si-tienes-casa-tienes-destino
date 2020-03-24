import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(""),
      contraseña: new FormControl("")
    });
  }

  ngOnInit() { }

  async onSubmit() {
    /* console.log(this.formulario.value) */
    try {
      let response = await this.usuariosService.loginUsuario(
        this.formulario.value
      );
      console.log(response);
      response = response["success"];
      this.usuariosService.postLocalStore("token", response);

    } catch (err) {
      console.log(err);
    }
    this.router.navigate(["/home"]);
  }
}
