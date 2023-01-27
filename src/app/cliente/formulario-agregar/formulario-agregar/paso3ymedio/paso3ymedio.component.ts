import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Transacciones } from './../../../../helpers/modelos/transacciones';
import { Propiedad } from './../../../../helpers/modelos/propiedad';
import { NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-paso3ymedio',
  templateUrl: './paso3ymedio.component.html',
  styleUrls: ['./paso3ymedio.component.scss']
})
export class Paso3ymedioComponent implements OnInit {
  servicios: FormGroup= new FormGroup({
    servicio:new FormControl('')
  })
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
  faQuestionCircle = faQuestionCircle
  propiedad: Propiedad
  amenidades:string[]
  constructor(private router: Router, private propiedadS:PropiedadesService) { 
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
  }

  ngOnInit(): void {
  }

  navegar(propiedad: Propiedad, url:string) {
    this.navigationPropiedad.state.propiedad = propiedad;
    this.router.navigate([url], this.navigationPropiedad)
  }
  guardarBorrador(propiedad: Propiedad){
    this.propiedadS.guardarBorrador(propiedad,propiedad.idUsuario,this.navigationPropiedad.state.principal,this.navigationPropiedad.state.fotos,this.navigationPropiedad.state.planos,this.navigationPropiedad.state.usuario)
  }
}
