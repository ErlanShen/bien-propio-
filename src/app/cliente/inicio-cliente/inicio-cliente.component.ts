import { Component, OnInit, Input } from '@angular/core';
import { PropiedadesService } from '../../helpers/servicios/propiedades.service';
import { Usuario } from "../../helpers/modelos/usuario";
import {  Propiedad } from "../../helpers/modelos/propiedad";
import { AuthService } from '../../helpers/servicios/auth.service';

import {PaginatorModule} from 'primeng/paginator';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.scss'],
})
export class InicioClienteComponent implements OnInit {

  propiedadesaMostrar:Propiedad[];
  usuarios: Usuario;
  
  cantidad:number;

  constructor(private prop:PropiedadesService, private auth:AuthService, private paginator:PaginatorModule, private mediaMatcher: MediaMatcher) { 

    this.auth.miusuario$.subscribe(usuarios=>{
     
      this.usuarios=usuarios
    })

    this.prop.getPropiedadesXFecha().subscribe(datos=>{
      this.propiedadesaMostrar = datos
     
    })


    const pantallaXL = mediaMatcher.matchMedia(
      '(min-width: 1500px) and (max-width: 9999px)'
     ).matches;
     const pantallaL = mediaMatcher.matchMedia(
      '(min-width: 1202px) and (max-width: 1499px)'
      ).matches;
      const pantallaMD = mediaMatcher.matchMedia(
      '(min-width: 951px) and (max-width: 1201px)'
      ).matches;
      const pantallaSM = mediaMatcher.matchMedia(
      '(min-width: 501px) and (max-width: 950px)'
      ).matches;
     const pantallaXSM = mediaMatcher.matchMedia(
      '(min-width: 0px) and (max-width: 499px)'
      ).matches;  //quitar con sus imports y mas

     

      switch (true) {
        case pantallaXL:
          this.cantidad = 5
          break;
          case pantallaL:
          this.cantidad = 4
          break;
          case pantallaMD:
          this.cantidad = 3
          break;
          case pantallaSM:
          this.cantidad = 2
          break;
          case pantallaXSM:
            this.cantidad = 2
            break;
        default:
          this.cantidad = 1
          break;
      }


    
  }

  ngOnInit(): void {

  }
 

}
