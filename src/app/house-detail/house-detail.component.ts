import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  card1: boolean;
  card2: boolean;
  card3: boolean;
  idImagen: number;


  constructor() {
    this.card1 = true;
    this.card2 = false;
    this.card3 = false;

  }

  ngOnInit() {
  }





  changeCard($event) {
    console.log($event.target.id)
    switch ($event.target.id) {
      case "1":
        this.card1 = true;
        this.card2 = false;
        this.card3 = false;
        break;
      case "2":
        this.card1 = false;
        this.card2 = true;
        this.card3 = false;
        break;
      case "3":
        this.card1 = false;
        this.card2 = false;
        this.card3 = true;
        break;
    }

  };

}
