import { VerBusquedaComponent } from './ver-busqueda/ver-busqueda.component';
import { MapaBusquedaComponent } from './mapa-busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:":ubicacion",
    component:MapaBusquedaComponent,
    children: [
      {
        path:':ubicacion',
        component:VerBusquedaComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaBusquedaRoutingModule { }

/* children:[
  {
    path:"",
    redirectTo:"buscar",
    pathMatch:"full"
  },
  {
    path:"buscar",
    component:VerBusquedaComponent
  },
  {
    path:"**",
    redirectTo:"buscar"
  }
] */