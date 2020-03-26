import { ObservablesService } from "./../observables.service";
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

declare var google;

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  @Input() modoInput: boolean;
  @Input() modoMap: boolean;
  @Output() envioDireccion: EventEmitter<any>;

  @ViewChild("googleMap", null)
  gMap: any;
  map: any;
  directionsService: any;
  directionsDisplay: any;
  lat: any;
  lng: any;
  markers: any[] = [];
  loading: boolean;
  objAdress: any;

  constructor(private ObservableService: ObservablesService) {
    this.envioDireccion = new EventEmitter();
  }

  ngOnInit() {
    this.loading = true;

    //Pide activar la geolocalizacion del navegador y pasa las coordenadas
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition.bind(this),
        this.showError
      );
    } else {
      console.log("La hemos liado con la geolocalizacion");
    }

    this.autocompletadoGoogle();
  }

  handleEnter($event) {
    if ($event.keyCode === 13) {
      this.modoInput = true;
    }
  }

  //Metodo que se ejecuta cuando estamos posicionados correctamente cuando se habilita la geolocalizacion
  showPosition(position) {
    console.log(position);
    this.loadMap(position);
  }

  //Al cargar la pagina coge la geolocalizacion de showPosition y carga el mapa
  loadMap(position) {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    let propsMap = {
      center: new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gMap.nativeElement, propsMap);

    this.directionsDisplay.setMap(this.map);

    let marker = new google.maps.Marker({
      position: propsMap.center,
      map: this.map,
      title: "Usted se encuentra aqui!"
    });
    this.markers.push(marker);
    this.loading = false;
  }

  // Carga el autompletado del input al iniciar la pagina.
  autocompletadoGoogle() {
    let input = document.getElementById("inputPlace");
    let autoComplete = new google.maps.places.Autocomplete(input);

    autoComplete.setFields(["address_components", "geometry", "icon", "name"]);

    autoComplete.addListener("place_changed", () => {
      let place = autoComplete.getPlace();
      if (place.geometry === undefined) {
        this.objAdress = { activo: true };
        this.ObservableService.handleAdress(this.objAdress);
      } else {
        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();

        // console.log(lat)
        // console.log(lng)
        console.log(place);

        switch (place.address_components.length) {
          case 4:
            this.objAdress = {
              poblacion: place.address_components[0].long_name,
              provincia: place.address_components[1].long_name,
              pais: place.address_components[3].long_name,
              lat,
              lng,
              activo: true
            };

            break;

          case 5:
            this.objAdress = {
              direccion: place.name,
              poblacion: place.address_components[1].long_name,
              provincia: place.address_components[2].long_name,
              pais: place.address_components[4].long_name,
              lat,
              lng,
              activo: true
            };

            break;
          case 6:
            this.objAdress = {
              direccion: place.name,
              poblacion: place.address_components[1].long_name,
              provincia: place.address_components[2].long_name,
              pais: place.address_components[4].long_name,
              cp: place.address_components[5].long_name,
              lat,
              lng,
              activo: true
            };

            break;
          case 7:
            this.objAdress = {
              direccion: place.name,
              poblacion: place.address_components[2].long_name,
              provincia: place.address_components[3].long_name,
              pais: place.address_components[5].long_name,
              cp: place.address_components[6].long_name,
              lat,
              lng,
              activo: true
            };
            break;
        }
        this.envioDireccion.emit(this.objAdress);
        console.log(this.objAdress.activo);

        this.ObservableService.handleAdress(this.objAdress);

        let m = new google.maps.Marker({
          animation: google.maps.Animation.DROP
        });
        this.lat = lat;
        this.lng = lng;
        console.log(this.lat, this.lng);
      }
    });
  }

  // Cuando clicamos el boton carga el mapa con la direccion que hayamos puesto en el input
  mapa() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    let propsMap = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gMap.nativeElement, propsMap);

    this.directionsDisplay.setMap(this.map);

    let m = new google.maps.Marker({
      position: new google.maps.LatLng(this.lat, this.lng),
      map: this.map,
      title: "Nuevo punto"
    });
    this.markers.push(m);
  }

  // Controla los errores de geolocalizacion
  showError(error) {
    console.log(error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("El usuario no quiere ser localizado");
        break;

      case error.POSITION_UNAVAILABLE:
        console.log("No se ha podido recuperar la posición");
        break;

      case error.TIMEOUT:
        console.log("Se ha tardado demasiado en recuperar la localización");
        break;

      case error.UNKNOWN_ERROR:
        console.log("Error desconocido");
        break;
    }
  }
}
