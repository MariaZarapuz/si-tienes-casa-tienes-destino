import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-house',
  templateUrl: './form-house.component.html',
  styleUrls: ['./form-house.component.css']
})
export class FormHouseComponent implements OnInit {
  arrUsers: any[]
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      tipo: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      pisoPuerta: new FormControl('', []),
      poblacion: new FormControl('', [Validators.required]),
      cP: new FormControl('', [Validators.required]),
      provincia: new FormControl('', [Validators.required]),
      capacidad: new FormControl('', [Validators.required]),
      habitaciones: new FormControl('', [Validators.required]),
      baño: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagenes: new FormControl('', [Validators.required]),
      disponibilidad: new FormControl('', [Validators.required])

    })
  }



  ngOnInit() {
  }

}
