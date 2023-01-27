import { Paso3ymedioComponent } from './paso3ymedio/paso3ymedio.component';
import { Paso4Component } from './paso4/paso4.component';
import { Paso3Component } from './paso3/paso3.component';
import { Paso2Component } from './paso2/paso2.component';
import { FormularioAgregarComponent } from './../formulario-agregar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paso1Component } from './paso1/paso1.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'formulario',
        pathMatch:'full'
      },
      {
        path:'formulario',
        component: FormularioAgregarComponent,
      },

      {
        path:'datosPersonales',
        redirectTo: 'datosPersonales/',
        pathMatch:'full'
      },

      {
        path:'datosPersonales/:id',
        component: Paso1Component,
      },

      {
        path:'fotos',
        redirectTo: 'fotos/',
        pathMatch:'full'
      },


      {
        path:'fotos/:id',
        component: Paso2Component,
      },
      {
        path:'direccion',
        redirectTo: 'direccion/',
        pathMatch:'full'
      },

      {
        path:'direccion/:id',
        component: Paso3Component,
      },
      {
        path:'amenidades',
        redirectTo: 'amenidades/',
        pathMatch:'full'
      },

      {
        path:'amenidades/:id?',
        component: Paso3ymedioComponent,
      },

      {
        path:'datosInmueble',
        redirectTo: 'datosInmueble/',
        pathMatch:'full'
      },


      {
        path:'datosInmueble/:id?',
        component: Paso4Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioAgregarRoutingModule { }
