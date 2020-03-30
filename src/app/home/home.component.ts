import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slide: string;

  constructor(
    private router: Router
  ) {
    this.slide = 'slide1';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.slide === 'slide1') {
        this.slide = 'slide2';
      } else if (this.slide === 'slide2') {
        this.slide = 'slide3';
      } else if (this.slide === 'slide3') {
        this.slide = 'slide1';
      }
    }, 10000);
  }

  searchFilter(e) {
    if (e.keyCode === 13) {
      const filterValue = e.target.value;
      this.router.navigate(["/search", filterValue]);
    }
  }
}
