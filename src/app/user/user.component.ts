import { ContactService } from "./../contact.service";

import { UsuariosService } from "./../usuarios.service";
import { Component, OnInit, RootRenderer } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HouseService } from "../house.service";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { groupBy, mergeMap, toArray } from "rxjs/operators";
import { from } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  showInputs: boolean;
  showParagraph: boolean;
  card1: boolean;
  card2: boolean;
  image1: boolean;
  image2: boolean;
  image3: boolean;
  image4: boolean;
  image5: boolean;
  formEditUser: FormGroup;
  formEditHouse: FormGroup;
  formEditPhoto: FormGroup;
  user: any;
  house: any;
  fechaFormat: any;
  files: any[];

  btnPhoto: boolean;
  idHouse: any;
  showBtn: boolean;
  showIcon: boolean;
  display: boolean;
  comentarios: any;
  arrUserEmit: any[];
  array: any;
  msmUser: any[];
  userComentari: any[];
  recepId: any;
  comentRes: any;
  arrayMsmMe: any;
  arrayEnviados: any;
  arrayRecibidos: any;
  userComentariRecep: any;
  arrayGeneral: any;
  userComentari_bis: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuariosService,
    private houseService: HouseService,
    private http: HttpClient,
    private contactService: ContactService
  ) {
    this.files = new Array();
    this.userComentari = new Array();
    this.showInputs = true;
    this.showParagraph = false;
    this.card1 = true;
    this.card2 = false;
    this.arrUserEmit = new Array();

    this.formEditUser = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellidos: new FormControl("", [Validators.required]),
      fecha_nacimiento: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contraseña: new FormControl("", [Validators.required])
    });
    this.formEditHouse = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      pais: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required]),
      piso: new FormControl("", []),
      puerta: new FormControl("", []),
      poblacion: new FormControl("", [Validators.required]),
      cp: new FormControl("", [Validators.required]),
      provincia: new FormControl("", [Validators.required]),
      capacidad: new FormControl("", [Validators.required]),
      habitaciones: new FormControl("", [Validators.required]),
      camas: new FormControl("", [Validators.required]),
      banos: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      imagen1: new FormControl("", [Validators.required]),
      imagen2: new FormControl("", [Validators.required]),
      imagen3: new FormControl("", [Validators.required]),
      imagen4: new FormControl("", [Validators.required]),
      imagen5: new FormControl("", [Validators.required]),
      fecha_entrada: new FormControl("", [Validators.required]),
      fecha_salida: new FormControl("", [Validators.required]),
      lavadora: new FormControl(""),
      secadora: new FormControl(""),
      aireAcondicionado: new FormControl(""),
      calefaccion: new FormControl(""),
      teleCable: new FormControl(""),
      plancha: new FormControl(""),
      horno: new FormControl(""),
      wifi: new FormControl(""),
      microondas: new FormControl(""),
      lavavajillas: new FormControl(""),
      secador: new FormControl(""),
      tostador: new FormControl(""),
      ascensor: new FormControl(""),
      parking: new FormControl(""),
      piscina: new FormControl(""),
      parque: new FormControl(""),
      latitud: new FormControl(""),
      longitud: new FormControl("")
    });
    this.formEditPhoto = new FormGroup({
      imagen1: new FormControl(""),
      imagen2: new FormControl(""),
      imagen3: new FormControl(""),
      imagen4: new FormControl(""),
      imagen5: new FormControl("")
    });
    this.btnPhoto = false;
  }

  async ngOnInit() {
    this.id = parseInt(this.usuarioService.getLocalStore("id"));

    this.user = await this.usuarioService.getToken();

    this.user = this.user[0];

    this.convertDateFormat(this.user.fecha_nacimiento);

    this.formEditUser = new FormGroup({
      nombre: new FormControl(this.user.nombre, [Validators.required]),
      apellidos: new FormControl(this.user.apellidos, [Validators.required]),
      fecha_nacimiento: new FormControl(this.user.fecha_nacimiento, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [Validators.required]),
      contraseña: new FormControl(this.user.contraseña, [Validators.required])
    });
    /*     if (this.house) { */
    this.house = await this.houseService.getByFk(this.user.id);
    this.idHouse = this.house.id;
    this.formEditHouse = new FormGroup({
      titulo: new FormControl(this.house.titulo, [Validators.required]),
      pais: new FormControl(this.house.pais, [Validators.required]),
      direccion: new FormControl(this.house.direccion, [Validators.required]),
      piso: new FormControl(this.house.piso, []),
      puerta: new FormControl(this.house.puerta, []),
      poblacion: new FormControl(this.house.poblacion, [Validators.required]),
      cp: new FormControl(this.house.codigo_postal, [Validators.required]),
      provincia: new FormControl(this.house.provincia, [Validators.required]),
      capacidad: new FormControl(this.house.capacidad, [Validators.required]),
      habitaciones: new FormControl(this.house.habitaciones, [
        Validators.required
      ]),
      camas: new FormControl(this.house.camas, [Validators.required]),
      banos: new FormControl(this.house.banos, [Validators.required]),
      descripcion: new FormControl(this.house.descripcion, [
        Validators.required
      ]),
      fecha_entrada: new FormControl(this.house.fecha_entrada, [
        Validators.required
      ]),
      fecha_salida: new FormControl(this.house.fecha_salida, [
        Validators.required
      ]),
      lavadora: new FormControl(this.house.lavadora),
      secadora: new FormControl(this.house.secadora),
      aireAcondicionado: new FormControl(this.house.aireAcondicionado),
      calefaccion: new FormControl(this.house.calefaccion),
      teleCable: new FormControl(this.house.teleCable),
      plancha: new FormControl(this.house.plancha),
      horno: new FormControl(this.house.horno),
      wifi: new FormControl(this.house.wifi),
      microondas: new FormControl(this.house.microondas),
      lavavajillas: new FormControl(this.house.lavavajillas),
      secador: new FormControl(this.house.secador),
      tostador: new FormControl(this.house.tostador),
      ascensor: new FormControl(this.house.ascensor),
      parking: new FormControl(this.house.parking),
      piscina: new FormControl(this.house.piscina),
      parque: new FormControl(this.house.parque),
      latitud: new FormControl(this.house.latitud),
      longitud: new FormControl(this.house.longitud)
      /* imagen2: new FormControl(this.house.imagen2, [Validators.required]),
      imagen3: new FormControl(this.house.imagen3, [Validators.required]),
      imagen4: new FormControl(this.house.imagen4, [Validators.required]),
      imagen5: new FormControl(this.house.imagen5, [Validators.required]), */
    });
    this.formEditPhoto = new FormGroup({
      file1: new FormControl(""),
      file2: new FormControl(""),
      file3: new FormControl(""),
      file4: new FormControl(""),
      file5: new FormControl("")
    });
    this.image1 = true;
    this.image2 = true;
    this.image3 = true;
    this.image4 = true;
    this.image5 = true;

    if (this.house == null) {
      this.showBtn = true;
      this.showIcon = false;
    } else {
      this.showBtn = false;
      this.showIcon = true;
    }
    console.log(this.house, "init");
  }

  // USER
  async onSubmit() {
    await this.usuarioService.updateUser(this.formEditUser.value);

    this.user = await this.usuarioService.getToken();
    this.user = this.user[0];
    this.showInputs = true;
    this.showParagraph = false;
  }

  async deleteUser() {
    const booleanDelete = confirm(
      "¿Estás seguro de que quieres borrar tu perfil?"
    );
    if (booleanDelete == true) {
      await this.usuarioService.deleteByToken();
      localStorage.clear();
      this.router.navigate(["/home"]);
    }
  }

  // HOUSE
  async onSubmitHouse(pIdHouse) {
    pIdHouse = this.house.id;
    await this.houseService.updateHouseById(pIdHouse, this.formEditHouse.value);
    this.house = await this.houseService.getByFk(this.user.id);
    this.router.navigate(["/user"]);
    this.showInputs = true;
    this.showParagraph = false;
    //console.log(this.house, 'changes');
  }

  async onSubmitImage(pIdHouse) {
    this.image1 = true;
    this.image2 = true;
    this.image3 = true;
    this.image4 = true;
    this.image5 = true;
    pIdHouse = this.house.id;
    //console.log(this.house.imagen1)
    const fd = new FormData();
    //console.log(this.files)
    for (let index = 0; index < this.files.length; index++) {
      console.log(this.files[index]);
      fd.append("imagen", this.files[index][0], `nuevaCasa${index}.jpg`);
    }
    Object.keys(this.formEditPhoto.value).forEach(key => {
      fd.append(key, this.formEditPhoto.value[key]);
    });
    const req = new HttpRequest(
      "PUT",
      `http://localhost:3000/api/houses/image1/${pIdHouse}`,
      fd
    );
    this.http
      .request(req)
      .toPromise()
      .then(result => {
        console.log(result);
        /* this.showLoading = false */
        this.router.navigate(["/user"]);
      });

    await this.houseService.editImageById(pIdHouse, this.formEditPhoto.value);
    //console.log(this.house.imagen1)
    const idUsuario = this.usuarioService.getLocalStore("id");
    setTimeout(async () => {
      this.house = await this.houseService.getByFk(idUsuario);
      console.log(this.house);
    }, 5000);
    console.log("paso por aqui");
  }

  async deleteHouse(pIdHouse) {
    const booleanDelete = confirm(
      "¿Estás seguro de que quieres borrar tu casa?"
    );
    if (booleanDelete == true) {
      pIdHouse = this.idHouse;
      await this.houseService.deleteHousebyId(pIdHouse);
      this.router.navigate(["/home"]);
    }
  }

  onChange($event) {
    this.files.push($event.target.files);
  }

  async editPhoto($event) {
    switch ($event.target.id) {
      case "1":
        this.image1 = false;
        this.btnPhoto = true;
        break;
      case "2":
        this.image2 = false;
        this.btnPhoto = true;
        break;
      case "3":
        this.image3 = false;
        this.btnPhoto = true;
        break;
      case "4":
        this.image4 = false;
        this.btnPhoto = true;
        break;
      case "5":
        this.image5 = false;
        this.btnPhoto = true;
        break;
    }
  }

  // BOTH

  editeInfo($event) {
    switch ($event.target.id) {
      case "1":
        this.showInputs = false;
        this.showParagraph = true;
        break;
      case "2":
        this.showInputs = true;
        this.showParagraph = false;
    }
  }

  async changeCard($event) {
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

  async convertDateFormat(fecha) {
    const fechaNacimiento = fecha.slice(0, 10);
    const fechaNac = await fechaNacimiento
      .split("-")
      .reverse()
      .join("/");
    this.fechaFormat = fechaNac;
  }

  async getComents(mode) {
    this.arrayGeneral = new Array();
    this.userComentari = new Array();
    this.arrayEnviados = new Array();
    this.arrayRecibidos = new Array();
    this.userComentariRecep = new Array();

    if (mode === "html") {
      this.display = true;
    }

    let id: number = parseInt(this.usuarioService.getLocalStore("id"));
    //Metraigo todos los mensajes que tengan ese id como emisor o recptor
    const comentarios: any = await this.contactService.getSms(id);

    console.log(comentarios);
    for (const coment of comentarios) {
      if (coment.user_emit === id) this.arrayEnviados.push(coment);
      else if (coment.user_recep === id) this.arrayRecibidos.push(coment);
    }
    console.log(this.arrayEnviados, this.arrayRecibidos);

    const source = from(this.arrayRecibidos);
    const smsEmit = source.pipe(
      groupBy(sms => sms["user_emit"]),
      // return each item in group as array
      mergeMap(group => group.pipe(toArray()))
    );
    smsEmit.subscribe(val => this.userComentari.push(val));
    //consigo un array de sms enviado
    this.userComentari_bis = this.userComentari[0];
    console.log(this.userComentari_bis);

    const sourceRecep = from(this.arrayEnviados);
    const smsRecep = sourceRecep.pipe(
      groupBy(sms => sms["user_recep"]),
      // return each item in group as array
      mergeMap(group => group.pipe(toArray()))
    );
    smsRecep.subscribe(val => this.userComentariRecep.push(val));
    //consigo un array de sms recibidos
    this.userComentariRecep = this.userComentariRecep[0];
    console.log(this.userComentariRecep);

    for (const comentarios of this.userComentari_bis) {
      this.arrayGeneral.push(comentarios);
    }
    for (const comentarios of this.userComentariRecep) {
      this.arrayGeneral.push(comentarios);
    }
    this.arrayGeneral.sort(function(a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(this.arrayGeneral);
  }

  PonerTextArea(e) {
    this.recepId = e.target.id;
    this.display = !this.display;
  }

  async save(e) {
    const emi = this.usuarioService.getLocalStore("id");
    const nombre = this.usuarioService.getLocalStore("nombre");
    const recep = this.recepId;

    console.log(this.comentRes, recep, emi);
    await this.contactService.insertComent(this.comentRes, recep, emi, nombre);
    this.getComents("ts");
  }
  goHouse(e) {
    this.router.navigate(["/house/detail", e.target.id]);
  }
}
