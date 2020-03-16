export class House {
  type: string;
  country: string;
  address: string;
  floor: number;
  letter: string;
  village: string;
  cp: number;
  province: string;
  capacity: number;
  rooms: number;
  beds: number;
  baths: number;
  description: string;
  images: string;
  fechaEntrada: Date;
  fechaSalida: Date;
  lavadora: boolean;
  secadora: boolean;
  aireAcondicionado: boolean;
  calefacion: boolean;
  teleCable: boolean;
  plancha: boolean;
  horno: boolean;
  wifi: boolean;
  microhondas: boolean;
  lavavajillas: boolean;
  secador: boolean;
  tostadora: boolean;
  constructor(
    type: string,
    country: string,
    address: string,
    floor: number,
    letter: string,
    village: string,
    cp: number,
    province: string,
    capacity: number,
    rooms: number,
    beds: number,
    baths: number,
    description: string,
    images: string,
    fechaEntrada: Date,
    fechaSalida: Date
  ) {
    this.type = type;
    this.country = country;
    this.address = address;
    this.floor = floor;
    this.letter = letter;
    this.village = village;
    this.province = province;
    this.capacity = capacity;
    this.rooms = rooms;
    this.beds = beds;
    this.baths = baths;
    this.images = images;
    this.description = description;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.lavadora = false;
    this.secadora = false;
    this.aireAcondicionado = false;
    this.calefacion = false;
    this.teleCable = false;
    this.plancha = false;
    this.horno = false;
    this.wifi = false;
    this.microhondas = false;
    this.lavavajillas = false;
    this.secador = false;
    this.tostadora = false;
  }
}
