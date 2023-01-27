import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { FormularioAgregarModule } from './formulario-agregar/formulario-agregar/formulario-agregar.module';



@NgModule({
  declarations: [
    ClienteComponent,
    InicioClienteComponent,
    PerfilClienteComponent,
    FormularioAgregarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CompartidoModule,
    FormularioAgregarModule
  ]
})
export class ClienteModule { }
