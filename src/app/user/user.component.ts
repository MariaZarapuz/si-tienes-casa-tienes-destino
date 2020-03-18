import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showInputs: boolean;
  showParagraph: boolean;


  constructor() {
    this.showInputs = true;
    this.showParagraph = false;
  }

  ngOnInit() {
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


}
