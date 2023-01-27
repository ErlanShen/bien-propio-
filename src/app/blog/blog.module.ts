import { CompartidoModule } from './../compartido/compartido.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { InicioComponent } from './inicio/inicio.component';
import { RecomendadosTarjetaComponent } from './inicio/recomendados-tarjeta/recomendados-tarjeta.component';
import { MostrarBlogsComponent } from './mostrar-blogs/mostrar-blogs.component';
import { BlogSingularComponent } from './blog-singular/blog-singular.component';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    BlogComponent,
    InicioComponent,
    RecomendadosTarjetaComponent,
    MostrarBlogsComponent,
    BlogSingularComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CompartidoModule,
    TooltipModule
  ]
})
export class BlogModule { }
