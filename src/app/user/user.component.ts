import { async } from "@angular/core/testing";
import { UsuariosService } from "./../usuarios.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  showInputs: boolean;
  showParagraph: boolean;
  card1: boolean;
  card2: boolean;
  formEditUser: FormGroup;
  formEditHouse: FormGroup;
  user: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private usuarioService: UsuariosService
  ) {
    this.showInputs = true;
    this.showParagraph = false;
    this.card1 = true;
    this.card2 = false;
    this.formEditUser = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      fecha_nacimiento: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    });
    this.formEditHouse = new FormGroup({
      tipo: new FormControl("", [Validators.required]),
      pais: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required]),
      piso: new FormControl("", []),
      puerta: new FormControl("", []),
      poblacion: new FormControl("", [Validators.required]),
      codigo_postal: new FormControl("", [Validators.required]),
      provincia: new FormControl("", [Validators.required]),
      capacidad: new FormControl("", [Validators.required]),
      habitaciones: new FormControl("", [Validators.required]),
      camas: new FormControl("", [Validators.required]),
      banos: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      imagenes: new FormControl("", [Validators.required]),
      fecha_entrada: new FormControl("", [Validators.required]),
      fecha_salida: new FormControl("", [Validators.required]),
      lavadora: new FormControl(""),
      secadora: new FormControl(""),
      aireAcondicionado: new FormControl(""),
      calefaccion: new FormControl(""),
      teleCable: new FormControl(""),
      plancha: new FormControl(""),
      horno: new FormControl(""),
      wifi: new FormControl(""),
      microondas: new FormControl(""),
      lavavajillas: new FormControl(""),
      secador: new FormControl(""),
      tostador: new FormControl(""),
      ascensor: new FormControl(""),
      parking: new FormControl(""),
      piscina: new FormControl(""),
      terraza: new FormControl(""),
      balcon: new FormControl(""),
      latitud: new FormControl(""),
      longitud: new FormControl("")
    });
  }

  async ngOnInit() {
    this.user = await this.usuarioService.getUserId();
    this.user = this.user[0];
    console.log(this.user);
  }

  async onSubmit() {
    console.log(this.formEditUser.value);

    await this.usuarioService.updateUser(this.formEditUser.value);

    this.user = await this.usuarioService.getUserId();
    this.user = this.user[0];
    this.showInputs = true;
    this.showParagraph = false;
    console.log(this.user);
  }

  onSubmitHouse() {}

  editeInfo($event) {
    console.log($event.target.id);
    switch ($event.target.id) {
      case "1":
        this.showInputs = false;
        this.showParagraph = true;
        break;
      case "2":
        this.showInputs = true;
        this.showParagraph = false;
    }
  }

  changeCard($event) {
    console.log($event.target.id);
    switch ($event.target.id) {
      case "1":
        this.card1 = true;
        this.card2 = false;
        break;
      case "2":
        this.card1 = false;
        this.card2 = true;
        break;
    }
  }
}
