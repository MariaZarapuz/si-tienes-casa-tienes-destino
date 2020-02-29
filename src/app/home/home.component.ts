import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slide: string;

  constructor() {
    this.slide = 'slide1';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.slide === 'slide1') {
        this.slide = 'slide2'
      } else if (this.slide === 'slide2') {
        this.slide = 'slide3'
      } else if (this.slide === 'slide3') {
        this.slide = 'slide1'
      }
    }, 8000)
  }

}
