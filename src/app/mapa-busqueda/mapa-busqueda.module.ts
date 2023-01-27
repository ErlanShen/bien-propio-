import { RouterModule } from '@angular/router';
import { CompartidoModule } from './../compartido/compartido.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaBusquedaRoutingModule } from './mapa-busqueda-routing.module';
import { MapaBusquedaComponent } from './mapa-busqueda.component';
import { VerBusquedaComponent } from './ver-busqueda/ver-busqueda.component';


@NgModule({
  declarations: [
    MapaBusquedaComponent,
    VerBusquedaComponent
  ],
  imports: [
    CommonModule,
    MapaBusquedaRoutingModule,
    CompartidoModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: VerBusquedaComponent
      }
    ])
  ]
})
export class MapaBusquedaModule { }
