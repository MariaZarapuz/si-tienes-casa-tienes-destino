import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UsuariosService } from "./usuarios.service";
import { ObservablesService } from "./observables.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private usuariosService: UsuariosService,
    private observableService: ObservablesService,
    private router: Router
  ) { }

  ngOnInit() { }

  signOff() {
    //console.log("LLego");
    localStorage.clear();
    this.router.navigate(["/home"])
  }

  searchFilter(e) {
    if (e.keyCode === 13) {
      const filterValue = e.target.value;
      this.router.navigate(["/search", filterValue]);
    }
  }
}
