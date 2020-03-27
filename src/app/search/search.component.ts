import { HouseService } from "./../house.service";
import { Component, OnInit } from "@angular/core";
import { ObservablesService } from "../observables.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-hause",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  listHouses: any;
  filterVillage: any;

  constructor(
    private houseService: HouseService,
    private activatedRoute: ActivatedRoute
  ) {
    this.listHouses = new Array();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.filterVillage = { poblacion: params.ciudad };
      //console.log(this.filterVillage);
      const arrayHouses = await this.houseService.getByFilter(
        this.filterVillage
      );
      this.listHouses = arrayHouses;
    });

    //console.log(this.listHouses);
  }
}
