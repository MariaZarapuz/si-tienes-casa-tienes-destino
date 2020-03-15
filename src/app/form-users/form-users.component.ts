import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-users",
  templateUrl: "./form-users.component.html",
  styleUrls: ["./form-users.component.css"]
})
export class FormUsersComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup(
      {
        name: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        surNames: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        dateBirth: new FormControl("", [Validators.required]),
        email: new FormControl("", [
          Validators.required,
          Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,6}$/)
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9]+.*)(?=.*[A-zA-Z]+.*)[0-9a-zA-Z]{6,10}$/
          )
        ]),
        checkPassword: new FormControl("", [Validators.required])
      },
      [this.passwordValidator]
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit() {}

  passwordValidator(form) {
    const passwordValue = form.controls.password.value;

    const repitePasswordValue = form.controls.checkPassword.value;
    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }
}
