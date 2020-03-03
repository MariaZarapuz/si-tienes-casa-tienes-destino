import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surNames: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required]),
      dateBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      checkPassword: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit() {
  }

}
