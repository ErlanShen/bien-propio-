import { TarjetaPropiedadComponent } from './compartido/tarjeta-propiedad/tarjeta-propiedad.component';
import { BodyComponent } from './landing/body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sesiones/login/login.component';
import { RegistroComponent } from './sesiones/registro/registro.component';
import { LoginGuard } from '../app/helpers/guards/login.guard';
import { BloqueoLoginGuard } from '../app/helpers/guards/bloqueo-login.guard';
import { AdminGuard } from './helpers/guards/admin.guard';
import { ClientesGuard } from './helpers/guards/clientes.guard';
import { PropiedadURLComponent } from './landing/propiedad-url/propiedad-url.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: BodyComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BloqueoLoginGuard]
  },
  {
    path: 'registro',
    component: RegistroComponent,
    canActivate: [BloqueoLoginGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [LoginGuard,AdminGuard]
  },
  
  {
    path: 'cuenta',
    loadChildren:()=> import ('./cliente/cliente.module').then(m => m.ClienteModule),
    canActivate: [LoginGuard,ClientesGuard]
  },

  {
    path:'mapa/:tipo/:ubicacion',
    loadChildren: ()=> import('./mapa-busqueda/mapa-busqueda.module').then(m=>m.MapaBusquedaModule)
  },
  {
    path: 'blog',
    loadChildren: ()=> import('./blog/blog.module').then(m=>m.BlogModule)    
  },
  {
    path: 'propiedad/:id',
    component: PropiedadURLComponent
  },
  {
    path: 'filtros',
    loadChildren:()=>import('./landing/filtros-busqueda/filtros-busqueda.module').then(m=>m.FiltrosBusquedaModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
