import { Component } from '@angular/core';

@Component({
  selector: 'app-search-hause',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  listHouses: any;

  constructor() {
    this.listHouses = [
      {
        id: 1,
        nombre: 'La Casona',
        direccion: 'Llanes, Asturias, España ',
        banos: 1,
        camas: 5,
        capacidad: 10,
        foto:
          'https://media.er2.co/es/avila/0000000014043/1600/52ef86c22befb.jpg',
        descripcion: 'Casa en primera línea de playa.'
      },
      {
        id: 2,
        nombre: 'La recogida',
        direccion: 'Jaen, Jaen, España ',
        banos: 1,
        camas: 2,
        capacidad: 2,
        foto:
          'https://www.planosdecasas3d.com/wp-content/uploads/2017/12/casa-economica-de-1-dormitorio-600x461.jpg',
        descripcion: 'Aire fresco y pura paz.'
      },
      {
        id: 3,
        nombre: 'La montañera',
        direccion: 'Andorra,Andorra, España ',
        banos: 3,
        camas: 6,
        capacidad: 14,
        foto:
          'https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280//p/photo/image/2734567/casa-prado-entre-bosques-2.jpg',
        descripcion: 'Disfruta de la nieve.'
      },
      {
        id: 4,
        nombre: 'El mar',
        direccion: 'La manga, Murcia, España ',
        banos: 1,
        camas: 1,
        capacidad: 2,
        foto:
          'https://cflvdg.avoz.es/default/2019/06/30/00121561920814955999773/Foto/c.jpg',
        descripcion: 'Tu eliges donde bañarte.'
      },
      {
        id: 1,
        nombre: 'La Casona',
        direccion: 'Llanes, Asturias, España ',
        banos: 1,
        camas: 5,
        capacidad: 10,
        descripcion: 'Casa en primera línea de playa.'
      }
    ];
  }
}
