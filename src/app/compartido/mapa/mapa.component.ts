import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { HostListener } from "@angular/core";
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  @Input('busqueda') busqueda: string;
  @Input('latitudPropiedad') latitudPropiedad: number;
  @Input('longitudPropiedad') longitudPropiedad: number;
  @Input('editar') editar: boolean=true;
  @Input('propiedades') propiedades: Propiedad[]
  @Output() newPosition = new EventEmitter<google.maps.LatLngLiteral>();
  @Output() geoDireccion = new EventEmitter<google.maps.GeocoderAddressComponent[]>();
  @ViewChild("googleMap",{static: true}) public googleMap: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  @HostListener('window:resize', ['$event']) 
  getScreenSize(event?) {
    if(window.innerWidth < 1002 &&  window.innerWidth > 0  ) {
      this.altoMapa = "50vh"
    }else
    { 
      this.altoMapa ="100vh"
    }
  }
  altoMapa: string="100vh"; 
  map: google.maps.Map;
  zoom:number=7
  displaycarta: boolean = false;
  queryR: any;
  idPropiedad:string
  optionsMap: google.maps.MapOptions
  service: google.maps.places.PlacesService;
  titleContent = ''
  infoContent:any
  imgContent=""
  markers = []
  options:{
    draggable: false,
    icon: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png'
  }
  center: google.maps.LatLngLiteral=this.getCurrentPos()

  constructor(private mediaMatcher: MediaMatcher) {

    const pantallaXSM = this.mediaMatcher.matchMedia(
      '(min-width: 0px) and (max-width: 1002px)'
    ).matches;  //quitar con sus imports y mas


    switch (true) {
      case pantallaXSM:
        this.altoMapa = "50vh";

        break;

      default:
        this.altoMapa = "100vh";
        break;
    }

  }

  ngOnInit(): void {
    if(this.busqueda){
      this.geocodeAddress(this.busqueda)
    }
    else{
      this.propiedadCenter()
      }  
    this.optionsMap = {
      zoomControl: true,
      streetViewControl:true,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      disableDefaultUI:true,
    }
  }
  cerrar() {
    this.displaycarta = false
  }
  showResponsiveDialog() {
    this.displaycarta = true;
  }
  click(event: google.maps.MapMouseEvent) {
    let geo = new google.maps.Geocoder
    let lnglat: google.maps.LatLngLiteral={
      lat:event.latLng.toJSON().lat,
          lng:event.latLng.toJSON().lng
    }
     geo.geocode({'location':lnglat},(results, status)=>{
      if (status==="OK") {
        
        this.geoDireccion.emit(results[0].address_components)
      }
      
    }) 
 
  }
  openInfo(marker: MapMarker, content) {
    this.infoContent = content.info
    this.titleContent =content.tittle
    this.imgContent = content.img
    this.idPropiedad= content.id
    this.info.open(marker)
    this.info.options={
      maxWidth:150
    }

  }
  getCurrentPos():google.maps.LatLngLiteral{
    let retorno: google.maps.LatLngLiteral={
      lat: -1.831239,
      lng: -78.183406  
    }
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        retorno= {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    }  
    return retorno
  }

  geocodeAddress(location: string) {
   let geo = new google.maps.Geocoder
   geo.geocode({'address': location, componentRestrictions:{
     country:'EC'
   }}, (results, status)=>{
    
    if (status==="OK") {
      this.center={
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      }
      
      this.zoom=14   
    }
   })
   this.propiedades.forEach(data=>{
    this.markers.push(
      {position:{
        lat:data.lat,
        lng:data.lng
      },
      tittle:data.titulo,
      info:data.precio,
      img:data.imgDestcada,
      id:data.id,
      options: {
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: '../../../assets/MarketIcon.png'
      }
    }
    )
   })
  } 
  propiedadCenter(){
    this.center = {
      lat: this.latitudPropiedad,
      lng: this.longitudPropiedad,
    }
    this.zoom=16
    if (this.markers.length<1) {
      this.markers.push(
        {position:{
          lat:this.latitudPropiedad,
          lng:this.longitudPropiedad
        },
        options: { 
          draggable: false,
          animation: google.maps.Animation.DROP,
          icon: '../../../assets/MarketIcon.png'
        }
      }
      )
    }
  } 

 
    
 

  
}