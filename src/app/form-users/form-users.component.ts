import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {
  form: FormGroup;

  constructor( private usuarioService: UsuariosService) {
    this.form = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellidos: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        fecha_nacimiento: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,6}$/)
        ]),
        contraseña: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9]+.*)(?=.*[A-zA-Z]+.*)[0-9a-zA-Z]{6,10}$/
          )
        ]),
        repite_contraseña: new FormControl('', [Validators.required])
      },
      [this.passwordValidator]
    );
  }

async onSubmit() {
    // console.log(this.form.value);
    await this.usuarioService.createUsuario(this.form.value);

  }

  ngOnInit() {}

  passwordValidator(form) {
    const contraseñaValue = form.controls.contraseña.value;

    const repite_contraseñaValue = form.controls.repite_contraseña.value;
    if (contraseñaValue === repite_contraseñaValue) {
      return null;
    } else {
      return { contraseñavalidator: true };
    }
  }
}
