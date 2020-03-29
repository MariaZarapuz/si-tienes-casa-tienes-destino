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
  marker: any = []
  lat: any
  lng: any

  constructor(
    private houseService: HouseService,
    private activatedRoute: ActivatedRoute
  ) {
    this.listHouses = new Array();

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params)
      this.filterVillage = { poblacion: params.ciudad };
      const arrayHouses = await this.houseService.getByFilter(
        this.filterVillage

      );
      this.listHouses = arrayHouses;
      console.log(this.listHouses);

      this.lat = this.listHouses[0].latitud;
      this.lng = this.listHouses[0].longitud;
      //   this.marker = [
      //     { lat: 40.4165000, lng: -3.7025600 },
      //     { lat: 40.54147, lng: -73.935242 },
      //     { lat: 35.6894989, lng: 139.6917114 }
      //   ]
    });
    // this.marker = [
    //   { lat: 40.4165000, lng: -3.7025600 },
    //   { lat: 40.54147, lng: -73.935242 },
    //   { lat: 35.6894989, lng: 139.6917114 }
    // ]




  }
}
