import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Propiedad } from './../../helpers/modelos/propiedad';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { ProvinciasDataService } from './../../helpers/servicios/provincias-data.service';
import { Direccion } from './../../helpers/modelos/direccion';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'formDirect',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.9s ease-out',
              style({ opacity: 1 }))
          ]
        ),

      ]
    ),
  ]
})
export class FormularioDireccionComponent implements OnInit {
  optionsMap: google.maps.MapOptions
  faQuestionCircle = faQuestionCircle;
  optionsMap2: google.maps.MapOptions
  center: google.maps.LatLngLiteral={
    lat: -1.831239,
    lng: -78.183406
  }
  sinLatLng=false
  latLngPropiedad: google.maps.LatLngLiteral
  markers = []
  zoom:number=7;
  direccion: Direccion = {
    provincia: '',
    canton: '',
    parroquia: '',
    barrio: '',
    callePrincipal: '',
    calleSecundaria: '',
    numeracion: '',
    referencias: '',
    codigoPostal: ''
  }
  provincias: any[] = []
  selecProv: string = ""
  cantones: any[] = []
  parroquias: any[] = []
  editar = true
  nuevo=false 
  borderColor='white'
  @Output() enviarDir = new EventEmitter<[Direccion,google.maps.LatLngLiteral]>();
  @Input('dirProp') dirProp: Propiedad
  @Input('columns') columna: boolean=false
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  @ViewChild("googleMap",{static: true}) public googleMap: GoogleMap;
  infoContent:string=""
  constructor(private servicioLugares: ProvinciasDataService) {
    this.optionsMap = {
      zoomControl: true,
      streetViewControl:false,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      disableDefaultUI:true,
      draggableCursor:'pointer'
    }
    this.optionsMap2={
      draggable:false,
      streetViewControl:false,
      disableDefaultUI:true,
      zoomControl:false,
    }
    this.servicioLugares.getProvincias().forEach(data => {
      let prov = {
        name: data.nombre
      }
      this.provincias.push(prov)
    })
  }
  ngOnInit(): void {
    if (this.dirProp.direccion.provincia!="" ) {
      this.buscarCantones({ value: this.dirProp.direccion.provincia })
      this.buscarParroquias({ value: this.dirProp.direccion.canton })
      this.elegirCanton({value: this.dirProp.direccion.parroquia})
      this.direccion = this.dirProp.direccion
      this.infoContent=this.direccion.callePrincipal+" "+ this.direccion.numeracion+", "+ this.direccion.canton+" "+ this.direccion.codigoPostal+", "+"ECUADOR"
      let lnglat={
        lat: this.dirProp.lat,
        lng: this.dirProp.lng,
      }
      this.latLngPropiedad=lnglat
      this.center=lnglat
      this.zoom=16
      this.markers.push(
        {position: lnglat,
        options: {
          draggable: false,
          animation: google.maps.Animation.DROP,
          icon: '../../../assets/MarketIcon.png'
        }
      }
      )
    }
    this.nuevo=true
  }
  buscarCantones(evento: any) {
    this.buscarLugar(evento.value,10)
    this.direccion.parroquia = ""
    this.cantones = []
    let busqueda = this.servicioLugares.getCantones().filter(data => {
      return data.provincia.localeCompare(evento.value) === 0
    })
    busqueda.forEach(data => {
      let canton = {
        name: data.nombre
      }
      this.cantones.push(canton)
    })
  }
  buscarParroquias(evento: any) {
  this.buscarLugar(this.direccion.provincia+","+evento.value,12)
    this.parroquias = []
    let busqueda = this.servicioLugares.getParroquias().filter(data => {
      return data.canton.localeCompare(evento.value) === 0
    })
    busqueda.forEach(data => {
      let parroquia = {
        name: data.nombre
      }
      this.parroquias.push(parroquia)
    })
  }
  enviarDireccion(direccion: Direccion) {
    direccion.provincia = direccion.provincia.replace(/[\])}[{(]/g, '')
    direccion.canton = direccion.canton.replace(/[\])}[{(]/g, '')
    direccion.parroquia = direccion.parroquia.replace(/[\])}[{(]/g, '')
    this.enviarDir.emit([direccion,this.latLngPropiedad])
    this.editar = false
    this.center=this.latLngPropiedad
    this.zoom=16
  }
  openInfo(marker: MapMarker, content) {   
    this.info.open(marker)
    this.info.options={
      maxWidth:150
    }

  }
  elegirCanton(evento){
    this.buscarLugar(this.direccion.provincia+","+this.direccion.canton+","+evento.value, 14)
  }
  buscarLugar(lugar:string, zoom: number){
    let geo = new google.maps.Geocoder
    if(this.nuevo){
      geo.geocode({'address':lugar, componentRestrictions:{
        country:'EC'
      }}, (results, status)=>{
       if (status==="OK") {
         this.center={
           lat: results[0].geometry.location.lat(),
           lng: results[0].geometry.location.lng()
         }
         this.zoom=zoom   
       }
      })
    }
  }
  click(event: google.maps.MapMouseEvent) {
    this.sinLatLng=false
    let geo = new google.maps.Geocoder
    let lnglat: google.maps.LatLngLiteral={
      lat:event.latLng.toJSON().lat,
          lng:event.latLng.toJSON().lng
    }
    this.latLngPropiedad=lnglat
    geo.geocode({'location':lnglat}, (results, status)=>{
     if (status==="OK") {
      this.infoContent= results[0].formatted_address
      let type=results[0].address_components[results[0].address_components.length-1]
      this.direccion.codigoPostal=type.types[0]==="postal_code"?type.long_name:""
     }
    })
    if (this.markers.length<1 && this.editar ) {
      this.markers.push(
        {position: lnglat,
        options: {
          draggable: false,
          animation: google.maps.Animation.DROP,
          icon: '../../../assets/MarketIcon.png'
        }
      }
      )

    }
    else {
      this.markers.splice(0,1)
      this.markers.push(
        {position: lnglat,
        options: {
          draggable: false,
          animation: google.maps.Animation.DROP,
          icon: '../../../assets/MarketIcon.png'
        }
      }
      )
 
    }
 
  }
  alMover(){
    if(!this.latLngPropiedad){
      this.sinLatLng=true
    }

  }
}
