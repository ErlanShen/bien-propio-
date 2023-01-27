import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrosBusquedaComponent } from './filtros-busqueda.component';

const routes: Routes = [
  {
    path:"",
    component:FiltrosBusquedaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRouting { }
