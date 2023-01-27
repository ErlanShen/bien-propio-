import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../helpers/servicios/propiedades.service';
import { Propiedad } from "../../helpers/modelos/propiedad";
import { ActivatedRoute } from '@angular/router';
import { Usuario } from "../../helpers/modelos/usuario";
import { AuthService } from '../../helpers/servicios/auth.service';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  propiedadesaMostrarF: Propiedad[]
  propiedadesaMostrarP: Propiedad[]
  propiedadesaMostrarB: Propiedad[]
  usuarios: Usuario;
  cantidad:number
 

  constructor(private prop: PropiedadesService,private auth:AuthService, private rut:ActivatedRoute,private mediaMatcher:MediaMatcher) {

    this.auth.miusuario$.pipe(
      switchMap((user:Usuario)=>{
        this.usuarios =user
        return combineLatest(
          this.prop.buscarVariasPropiedades(user.favorito),
          this.prop.allpublicados(user.publicados,2),
          this.prop.allpublicados(user.publicados, 0)
        )
      })
      ).subscribe(todos =>{
        this.propiedadesaMostrarF = todos[0]
        this.propiedadesaMostrarP = todos[1]
        this.propiedadesaMostrarB = todos[2]
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
  ngOnInit() {
    
    
  }

}
