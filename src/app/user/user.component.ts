import { Component, OnInit } from '@angular/core';

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


  constructor() {
    this.showInputs = true;
    this.showParagraph = false;
    this.card1 = true;
    this.card2 = false;
  }

  ngOnInit() {
  }

  editeInfo($event) {
    console.log($event.target.id)
    switch ($event.target.id) {
      case "1":
        this.showInputs = false;
        this.showParagraph = true;
        break;
      case "2":
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
  }
}

