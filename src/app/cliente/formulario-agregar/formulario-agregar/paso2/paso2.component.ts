import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { Foto } from './../../../../helpers/modelos/foto';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/helpers/modelos/usuario';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.scss']
})
export class Paso2Component implements OnInit {
  comparar: string ;
  mostrar : boolean = true
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
  faQuestionCircle = faQuestionCircle;
  fotos:Foto[]=[];
  fotosMos:Foto[]=[]
  principal:Foto[]=[]
  principalMos:Foto[]=[]
  planos:Foto[]=[]
  planosMos:Foto[]=[]
  usuario: Usuario 
  constructor(private router: Router, private propiedadS:PropiedadesService,private mediaMatcher: MediaMatcher) {

    this.mostrar = mediaMatcher.matchMedia(
      '(min-width: 991px) and (max-width: 2560px)'
    ).matches;

    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state){
     this.propiedad = navigation.extras.state.propiedad
     this.fotos=navigation.extras.state.fotos
     this.fotosMos=navigation.extras.state.fotosMostrar
     this.principal=navigation.extras.state.principal
     this.principalMos=navigation.extras.state.principalMostrar
     this.planos=navigation.extras.state.planos
     this.planosMos=navigation.extras.state.planosMos
     this.usuario = navigation.extras.state.usuario
     
    }else{
      this.propiedad=this.propiedadS.nuevaPropiedadVacia()
    }

  }

  ngOnInit(): void { 
  }
  navegar(usuario:Usuario,propiedad: Propiedad,url?:string, fotos?: Foto[], fotosMostar?:Foto[],principal?:Foto[],principalMostrar?:Foto[],
    planos?:Foto[],planosMos?:Foto[]) {

    this.navigationPropiedad.state.usuario = this.usuario
    this.navigationPropiedad.state.propiedad = this.propiedad;
    this.navigationPropiedad.state.fotos= this.fotos
    this.navigationPropiedad.state.fotosMostrar= this.fotosMos
    this.navigationPropiedad.state.principal= this.principal
    this.navigationPropiedad.state.principalMostrar= this.principalMos
    this.navigationPropiedad.state.planos=this.planos
    this.navigationPropiedad.state.planosMos=this.planosMos
    this.router.navigate([url],this.navigationPropiedad)

 
  }
  sacarGaleria(event: [Foto[],Foto[]], seccion:number){
    switch(true){
      case(seccion===0):
      this.principalMos=event[0]
      this.principal=event[1]
      break;
      case(seccion===1):
      this.fotosMos=event[0] as Foto[]
      this.fotos=event[1] as Foto[]
      break;
      case(seccion===2):
      this.planosMos=event[0] as Foto[]
      this.planos=event[1] as Foto[]
      break;
    }
  }
  transformadorURL(url:string){   
    let cortado :string[]
    if(url.indexOf('https://youtu.be/') > -1){
       cortado =url.split('.be/')     
    }else{
      cortado = url.split('=')
    }
    let nuevoEnlace: string='https://www.youtube.com/embed/'+cortado[cortado.length-1] 
    return nuevoEnlace
  }
  guardarBorrador(propiedad: Propiedad){
    this.propiedadS.guardarBorrador(propiedad,propiedad.idUsuario,this.principal,this.fotos,this.planos,this.usuario)
  }
}
