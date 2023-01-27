import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { Router, NavigationExtras } from '@angular/router';
import { Transacciones } from './../../../../helpers/modelos/transacciones';
import { Propiedad, Publicacion } from './../../../../helpers/modelos/propiedad';
import { Component, OnInit } from '@angular/core';
import {
  MediaMatcher,
} from '@angular/cdk/layout';


@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.scss']
})
export class Paso3Component implements OnInit {
  carga: boolean = true;

  navigationPropiedad: NavigationExtras = {
    skipLocationChange:true,
    state: {
      propiedad: null,
      fotos: [],
      principal: [],
      fotosMostrar: [],
      principalMostrar: [],
      planos: [],
      planosMos: [],
      usuario: null,
    }
  };
  propiedad: Propiedad
  
  constructor(private router: Router,private propiedadS:PropiedadesService, private mediaMatcher: MediaMatcher) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state){
     this.propiedad = navigation.extras.state.propiedad
     this.navigationPropiedad.state.fotos=navigation.extras.state.fotos
     this.navigationPropiedad.state.fotosMostrar=navigation.extras.state.fotosMostrar
      this.navigationPropiedad.state.principal=navigation.extras.state.principal
      this.navigationPropiedad.state.principalMostrar=navigation.extras.state.principalMostrar
      this.navigationPropiedad.state.planos=navigation.extras.state.planos
      this.navigationPropiedad.state.planosMos=navigation.extras.state.planosMos
      this.navigationPropiedad.state.usuario = navigation.extras.state.usuario
    }else{
      this.propiedad=this.propiedadS.nuevaPropiedadVacia()
    }

    this.carga = mediaMatcher.matchMedia(
      '(min-width: 991px) and (max-width: 2560px)'
    ).matches;

  }

  ngOnInit(): void {
  }
  recibir(event) {
    this.propiedad.direccion = event[0]
    this.propiedad.lat = event[1].lat
    this.propiedad.lng = event[1].lng
  }

  navegar(propiedad: Propiedad, url:string) {
    this.navigationPropiedad.state.propiedad = propiedad;
    this.router.navigate([url], this.navigationPropiedad)
  }
  guardarBorrador(propiedad: Propiedad){
    this.propiedadS.guardarBorrador(propiedad,propiedad.idUsuario,this.navigationPropiedad.state.principal,this.navigationPropiedad.state.fotos,this.navigationPropiedad.state.planos,this.navigationPropiedad.state.usuario)
  }

  
  
}
