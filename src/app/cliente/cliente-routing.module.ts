import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';

const routes: Routes = [
  {
    path:"",
    component:ClienteComponent,
    children: [
      {
        path:"",
        redirectTo:"inicio",
        pathMatch:"full"
      },
      {
        path:"inicio",
        component:InicioClienteComponent
      },
      {
        path:"perfil",
        component:PerfilClienteComponent
      },
      {
        path:"nuevo",
        loadChildren:()=>import('./formulario-agregar/formulario-agregar/formulario-agregar.module').then(m=>m.FormularioAgregarModule)
      },
      {
        path:"**",
        redirectTo:"inicio"
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
