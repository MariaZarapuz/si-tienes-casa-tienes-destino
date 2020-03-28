import { ContactService } from "./../contact.service";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HouseService } from "../house.service";
import { UsuariosService } from "./../usuarios.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-house-detail",
  templateUrl: "./house-detail.component.html",
  styleUrls: ["./house-detail.component.css"]
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

  constructor(
    private houseService: HouseService,
    private usuariosService: UsuariosService,
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) {
    this.card1 = true;
    this.card2 = false;
    this.card3 = false;
    this.ArrayPhotos = [
      {
        id: 1,
        src:
          "https://www.kvik.es/~/media/images/bath/hero-baths/mano-bath/c1-1334x1000px-spot-campslidemob-textimgslidemob/mano-1330x1000px.jpg?bc=White&as=1&h=832&w=1110&useCustomFunctions=1&centerCrop=1&hash=44ACC81E4303C963C948FAD508D4A5006D66FB01"
      },
      {
        id: 2,
        src:
          "https://www.tmagazine.es/app/uploads/2018/05/cocina_perfecta_03.jpg"
      },
      {
        id: 3,
        src:
          "https://decoracion2.com/imagenes/2019/03/ideas-para-convertir-tu-terraza-en-un-auntentico-oasis-15.jpg"
      },
      {
        id: 4,
        src:
          "https://odis.homeaway.com/odis/listing/a31268c2-cb75-4bd8-b039-4ff3cabcd66c.c10.jpg"
      },
      {
        id: 5,
        src:
          "https://cdn.portobellostreet.es/imagenes_muebles/Muebles-Comedor-vintage-Maze.jpg"
      },
      {
        id: 6,
        src:
          "https://www.amarehotels.com/wp-content/uploads/2019/07/01-amare-ibiza-habitaciones-oh-la-la-the-one-hab-1.jpg"
      }
    ];
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.house = await this.houseService.getByFk(params.fk_usuarios);
      console.log(this.house);
      console.log(params.fk_usuarios);

      this.user = await this.usuariosService.getById(params.fk_usuarios);
      console.log(this.user);
      this.user = this.user[0];
    });

    this.srcPrincipal = this.ArrayPhotos[0].src;
  }

  changeImage(e) {
    console.log(e.target.src);
    this.srcPrincipal = e.target.src;
  }

  async save() {
    let emi = this.usuariosService.getLocalStore("id");
    let recep = this.house.fk_usuarios;
    await this.contactService.insertComent(this.comentario, emi, recep);
  }

  changeCard($event) {
    //console.log($event.target.id);
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
