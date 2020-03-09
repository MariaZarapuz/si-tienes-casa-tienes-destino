import { Component, OnInit } from '@angular/core';
import {Casa} from '../models/casas.model';
import {HausesService} from '../hauses.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-hause',
  templateUrl: './search-hause.component.html',
  styleUrls: ['./search-hause.component.css']
})

export class SearchHauseComponent implements OnInit {

  arrCasas: Casa[];

  constructor(private hausesService: HausesService, private router: Router) {
    this.arrCasas=[
      new Casa(1,'','','','','')
    ]
   }

 async ngOnInit() {
  this.arrCasas = await this.hausesService.getAll();
  console.log(this.arrCasas);
  }

}
