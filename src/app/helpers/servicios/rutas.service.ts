import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, Route, ParamMap} from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RutasService {
  
    constructor(private router: Router, private route : ActivatedRoute) {
 
  }


  separadorRutas(ruta: string): string[]{
    let respuesta: string [] = []
    respuesta = ruta.split("/")
    return respuesta
  }

  actualizadorRutas(){
    this.router.routeReuseStrategy.shouldReuseRoute = ()=> false
  }
}
