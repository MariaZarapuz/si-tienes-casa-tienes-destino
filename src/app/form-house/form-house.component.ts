import { HouseService } from "./../house.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { House } from "../models/house";
import { ObservablesService } from "../observables.service";

@Component({
  selector: "app-form-house",
  templateUrl: "./form-house.component.html",
  styleUrls: ["./form-house.component.css"]
})
export class FormHouseComponent implements OnInit {
  form: FormGroup;
  arrServices: string[];
  arrInstallations: string[];
  arrPrimerFormulario: any[];
  arrSegundoFormulario: any[];
  firstDiv: boolean;
  secondDiv: boolean;
  thirdDiv: boolean;
  activo: boolean;
  objAddressHouse: any;

  constructor(
    private router: Router,
    private ObservableService: ObservablesService,
    private ngZone: NgZone,
    private houseService: HouseService
  ) {
    this.activo = false;
    this.firstDiv = true;
    this.secondDiv = false;
    this.thirdDiv = false;
    this.arrInstallations = [
      "ascensor",
      "parking",
      "piscina",
      "terraza",
      "balcon"
    ];
    this.arrServices = [
      "wifi",
      "aireAcondicionado",
      "calefaccion",
      "secador",
      "teleCable",
      "lavadora",
      "secadora",
      "plancha",
      "horno",
      "microondas",
      "lavavajillas",
      "tostador"
    ];
    this.form = new FormGroup({
      tipo: new FormControl("", [Validators.required]),
      pais: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required]),
      piso: new FormControl("", []),
      puerta: new FormControl("", []),
      poblacion: new FormControl("", [Validators.required]),
      cp: new FormControl("", [Validators.required]),
      provincia: new FormControl("", [Validators.required]),
      capacidad: new FormControl("", [Validators.required]),
      habitaciones: new FormControl("", [Validators.required]),
      camas: new FormControl("", [Validators.required]),
      banos: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      images: new FormControl("", [Validators.required]),
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

    this.arrPrimerFormulario = [
      this.form.controls.tipo,
      this.form.controls.pais,
      this.form.controls.direccion,
      this.form.controls.provincia,
      this.form.controls.cp,
      this.form.controls.poblacion
    ];

    this.arrSegundoFormulario = [
      this.form.controls.capacidad,
      this.form.controls.habitaciones,
      this.form.controls.camas,
      this.form.controls.banos,
      this.form.controls.descripcion,
      this.form.controls.fecha_entrada,
      this.form.controls.fecha_salida
    ];
  }

  ngOnInit() {
    this.ObservableService.addressSb.subscribe(res => {
      // console.log(res);
      this.objAddressHouse = res;
      this.form.controls.pais.setValue(this.objAddressHouse.pais);
      this.form.controls.direccion.setValue(this.objAddressHouse.direccion);
      this.form.controls.poblacion.setValue(this.objAddressHouse.poblacion);
      this.form.controls.provincia.setValue(this.objAddressHouse.provincia);
      this.form.controls.cp.setValue(this.objAddressHouse.cp);
      this.activo = res.activo;
    });
  }
  manejarEnvioDireccion($event) {
    // console.log("ENTRA!!!!!!");
    // Fuerza que la ejecucion se realice de manera asincrona sobre la aplicacion
    this.ngZone.run(() => {
      this.activo = true;
    });

    // console.log("ACTIVO", this.activo);
  }

  nextDiv($event) {
    // console.log($event.target.id);
    switch ($event.target.id) {
      case "1":
        this.firstDiv = false;
        this.secondDiv = true;
        console.log(this.secondDiv);
        break;
      case "2":
        this.secondDiv = false;
        this.thirdDiv = true;
        break;
      case "3":
        this.onSubmit();
        break;
    }
  }

  async onSubmit() {
    // console.log(this.form.value);
    const response = await this.houseService.addHouse(this.form.value);
    this.router.navigate(["/user"]);
  }

  behindDiv($event) {
    console.log($event.target.id);
    switch ($event.target.id) {
      case "-1":
        // this.router.navigate(["/user"]);
        break;
      case "-2":
        this.secondDiv = false;
        this.firstDiv = true;
        break;
      case "-3":
        this.thirdDiv = false;
        this.secondDiv = true;
        break;
    }
  }

  validarPrimerForm() {
    let result = false;
    let cont = 0;
    this.arrPrimerFormulario.forEach(control => {
      cont++;
      if (!control.valid) {
        result = true;
      }
    });
    // console.log(cont);
    return result;
  }

  validarSegundoForm() {
    let result = false;
    let cont = 0;
    this.arrSegundoFormulario.forEach(control => {
      cont++;
      if (!control.valid) {
        result = true;
      }
      // console.log("................", control.valid);
    });
    return result;
  }
}
