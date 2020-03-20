import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showInputs: boolean;
  showParagraph: boolean;
  card1: boolean;
  card2: boolean;
  formEditUser: FormGroup;
  formEditHouse: FormGroup;

  constructor() {
    this.showInputs = true;
    this.showParagraph = false;
    this.card1 = true;
    this.card2 = false;
    this.formEditUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      dateBirth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.formEditHouse = new FormGroup({
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
      ascensor: new FormControl(""),
      parking: new FormControl(""),
      piscina: new FormControl(""),
      terraza: new FormControl(""),
      balcon: new FormControl(""),
      latitud: new FormControl(""),
      longitud: new FormControl("")
    })
  };

  ngOnInit() {
  };


  onSubmit() {
  };

  onSubmitHouse() {

  }

  editeInfo($event) {
    console.log($event.target.id)
    switch ($event.target.id) {
      case '1':
        this.showInputs = false;
        this.showParagraph = true;
        break;
      case '2':
        this.showInputs = true;
        this.showParagraph = false;
    }
  };

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
  };
}

