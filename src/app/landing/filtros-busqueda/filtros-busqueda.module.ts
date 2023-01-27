import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosBusquedaComponent } from './filtros-busqueda.component';
import { FiltrosRouting } from './filtros-busqueda.routing.module';
import { CompartidoModule } from 'src/app/compartido/compartido.module';



@NgModule({
  declarations: [
    FiltrosBusquedaComponent
  ],
  imports: [
    CommonModule,
    FiltrosRouting,
    CompartidoModule
  ]
})
export class FiltrosBusquedaModule { }
