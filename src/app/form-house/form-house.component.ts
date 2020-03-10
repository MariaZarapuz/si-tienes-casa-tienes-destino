import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-house",
  templateUrl: "./form-house.component.html",
  styleUrls: ["./form-house.component.css"]
})
export class FormHouseComponent implements OnInit {
  arrUsers: any[];
  form: any;
  arrServices: string[];
  firstDiv: boolean;
  secondDiv: boolean;
  thirdDiv: boolean;
  arrPrimerFormulario: any[];
  constructor(private router: Router) {
    this.firstDiv = true;
    this.secondDiv = false;
    this.thirdDiv = false;
    this.arrServices = [
      "lavadora",
      "secadora",
      "aireAcondicionado",
      "calefaccion",
      "teleCable",
      "plancha",
      "horno",
      "wifi",
      "microhondas",
      "lavavajillas",
      "secador",
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
      availability: new FormControl("", [Validators.required]),
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
      tostador: new FormControl("")
    });

    this.arrPrimerFormulario = [
      this.form.controls.type,
      this.form.controls.country,
      this.form.controls.address,
      this.form.controls.province,
      this.form.controls.cp,
      this.form.controls.village
    ];
  }

  ngOnInit() {}
  nextDiv($event) {
    console.log($event.target.id);
    switch ($event.target.id) {
      case "1":
        this.firstDiv = false;
        this.secondDiv = true;
        console.log(this.form.country);
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

  onSubmit() {}

  behindDiv($event) {
    console.log($event.target.id);
    switch ($event.target.id) {
      case "-1":
        this.router.navigate(["/user"]);
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
    console.log(cont);
    return result;
  }
}
