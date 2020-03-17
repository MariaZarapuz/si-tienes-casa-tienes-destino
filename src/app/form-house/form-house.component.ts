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
  firstDiv: boolean;
  secondDiv: boolean;
  thirdDiv: boolean;
  arrPrimerFormulario: any[];
  arrSegundoFormulario: any[];
  activo: boolean;
  objAddressHouse: any;

  constructor(
    private router: Router,
    private ObservableService: ObservablesService,
    private ngZone: NgZone
  ) {
    this.activo = false;
    this.firstDiv = true;
    this.secondDiv = false;
    this.thirdDiv = false;
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
      "microhondas",
      "lavavajillas",
      "tostador"
    ];
    this.form = new FormGroup({
      type: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      floor: new FormControl("", []),
      letter: new FormControl("", []),
      village: new FormControl("", [Validators.required]),
      cp: new FormControl("", [Validators.required]),
      province: new FormControl("", [Validators.required]),
      capacity: new FormControl("", [Validators.required]),
      rooms: new FormControl("", [Validators.required]),
      beds: new FormControl("", [Validators.required]),
      baths: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      images: new FormControl("", [Validators.required]),
      datecheck: new FormControl("", [Validators.required]),
      datecheckOut: new FormControl("", [Validators.required]),
      lavadora: new FormControl(""),
      secadora: new FormControl(""),
      aireAcondicionado: new FormControl(""),
      calefaccion: new FormControl(""),
      teleCable: new FormControl(""),
      plancha: new FormControl(""),
      horno: new FormControl(""),
      wifi: new FormControl(""),
      microhondas: new FormControl(""),
      lavavajillas: new FormControl(""),
      secador: new FormControl(""),
      tostador: new FormControl(""),
      latitud: new FormControl(""),
      longitud: new FormControl("")
    });

    this.arrPrimerFormulario = [
      this.form.controls.type,
      this.form.controls.country,
      this.form.controls.address,
      this.form.controls.province,
      this.form.controls.cp,
      this.form.controls.village
    ];

    this.arrSegundoFormulario = [
      this.form.controls.capacity,
      this.form.controls.rooms,
      this.form.controls.beds,
      this.form.controls.baths,
      this.form.controls.description,
      this.form.controls.datecheck,
      this.form.controls.datecheckOut
    ];
  }

  ngOnInit() {
    this.ObservableService.addressSb.subscribe(res => {
      console.log(res);
      this.objAddressHouse = res;
      this.form.controls.country.setValue(this.objAddressHouse.pais);
      this.form.controls.address.setValue(this.objAddressHouse.direccion);
      this.form.controls.village.setValue(this.objAddressHouse.poblacion);
      this.form.controls.province.setValue(this.objAddressHouse.provincia);
      this.form.controls.cp.setValue(this.objAddressHouse.cp);
      this.activo = res.activo;
    });
  }
  manejarEnvioDireccion($event) {
    console.log("ENTRA!!!!!!");
    // Fuerza que la ejecucion se realize de manera asincrona sobre la aplicacion
    this.ngZone.run(() => {
      this.activo = true;
    });

    console.log("ACTIVO", this.activo);
  }

  nextDiv($event) {
    console.log($event.target.id);
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

  onSubmit() {
    console.log(this.form.value);
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
