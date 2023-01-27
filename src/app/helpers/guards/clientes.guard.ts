import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesGuard implements CanActivate {
  constructor(private auth:AuthService, private ruts:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
 
    return this.auth.miusuario$.pipe(
      take(1),
      map(usuario=>{
        return usuario.rol===0||1?  true : false 
      })
    ) 
  }
  
}
