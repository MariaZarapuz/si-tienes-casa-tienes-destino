import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UsuariosService } from "./usuarios.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {}

  signOff() {
    console.log("LLego");
    localStorage.clear();
  }
}
