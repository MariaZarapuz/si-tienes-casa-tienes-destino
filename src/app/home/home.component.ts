import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slide: string;
  showBtn: boolean;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
  ) {
    this.slide = 'slide1';
    this.showBtn = false;
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
    const token = this.usuariosService.getLocalStore('token')
    if (token == null) {
      this.showBtn = true;
    }
  }

  searchFilter(e) {
    if (e.keyCode === 13) {
      const filterValue = e.target.value;
      this.router.navigate(["/search", filterValue]);
    }
  }
}
