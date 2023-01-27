import { CompartidoModule } from './../../../compartido/compartido.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioAgregarRoutingModule } from './formulario-agregar-routing.module';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { Paso3Component } from './paso3/paso3.component';
import { Paso4Component } from './paso4/paso4.component';
import { FotosClientesComponent } from './fotos-clientes/fotos-clientes.component';
import { Paso3ymedioComponent } from './paso3ymedio/paso3ymedio.component';


@NgModule({
  declarations: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    FotosClientesComponent,
    Paso3ymedioComponent
  ],
  imports: [
    CommonModule,
    FormularioAgregarRoutingModule,
    CompartidoModule
  ]
})
export class FormularioAgregarModule { }
