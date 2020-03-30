import { ContactService } from './../contact.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { UsuariosService } from './../usuarios.service';
import { ActivatedRoute } from '@angular/router';

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
  ArrayPhotos: Array<any>;
  srcPrincipal: any;
  house: any;
  user: any;
  comentario: string;
  src1: any;
  src2: any;
  src3: any;
  src4: any;
  src5: any;

  constructor(
    private houseService: HouseService,
    private usuariosService: UsuariosService,
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) {
    this.card1 = true;
    this.card2 = false;
    this.card3 = false;
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.houseService.getByFk(params.fk_usuarios);
      this.house = response;
      this.src1 = this.house.imagen1;
      this.src2 = this.house.imagen2;
      this.src3 = this.house.imagen3;
      this.src4 = this.house.imagen4;
      this.src5 = this.house.imagen5;
      console.log(this.src5);
      this.ArrayPhotos = [
        {
          id: 1,
          src: this.src1
        },
        {
          id: 2,
          src: this.src2
        },
        {
          id: 3,
          src: this.src3
        },
        {
          id: 4,
          src: this.src4
        },
        {
          id: 5,
          src: this.src5
        }
      ];
      console.log(this.ArrayPhotos);
      this.srcPrincipal = this.ArrayPhotos[0].src;
      this.user = await this.usuariosService.getById(params.fk_usuarios);
      // console.log(this.user);
      this.user = this.user[0];
    });
  }

  changeImage(e) {
    console.log(e.target.src);
    this.srcPrincipal = e.target.src;
  }

  async save(recep, emi, nombre) {
    emi = this.usuariosService.getLocalStore('id');
    nombre = this.usuariosService.getLocalStore('nombre');

    recep = this.house.fk_usuarios;
    console.log(this.comentario, recep, emi);
    await this.contactService.insertComent(this.comentario, recep, emi, nombre);
  }

  changeCard($event) {
    switch ($event.target.id) {
      case '1':
        this.card1 = true;
        this.card2 = false;
        break;
      case '2':
        this.card1 = false;
        this.card2 = true;
        break;
    }
  }
}
