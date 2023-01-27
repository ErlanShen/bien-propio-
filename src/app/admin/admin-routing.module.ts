import { FormRecomendadosComponent } from './tabla-recomendados/form-recomendados/form-recomendados.component';
import { TablaRecomendadosComponent } from './tabla-recomendados/tabla-recomendados.component';

import { AjustesComponent } from './ajustes/ajustes.component';
import { FormPaginaComponent } from './tabla-pagina/form-pagina/form-pagina.component';
import { TablaPaginaComponent } from './tabla-pagina/tabla-pagina.component';
import { ManejarPropiedadComponent } from './tabla-propiedades/manejar-propiedad/manejar-propiedad.component';
import { TablaPropiedadesComponent } from './tabla-propiedades/tabla-propiedades.component';
import { FormularioBlogComponent } from './blog/formulario-blog/formulario-blog.component';
import { TablaBlogComponent } from './blog/tabla-blog.component';
import { FormularioCategoriasBlogComponent } from './blog/formulario-categorias-blog/formulario-categorias-blog.component';
import { CategoriasBlogComponent } from './blog/categorias-blog/categorias-blog.component';
import { FormularioBannerComponent } from './tabla-banner/formulario-banner/formulario-banner.component';
import { FormularioPublicidadComponent } from './tabla-publicidad/formulario-publicidad/formulario-publicidad.component';
import { TablaPublicidadComponent } from './tabla-publicidad/tabla-publicidad.component';
import { TablaBannerComponent } from './tabla-banner/tabla-banner.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AdminComponent } from './admin.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { FormularioUsuariosComponent } from './tabla-usuarios/formulario-usuarios/formulario-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'ajustes',
        component: AjustesComponent
      },
      {
        path: 'inicio',
        component: InicioAdminComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
      },
      {
        path: 'banners',
        component: TablaBannerComponent
      },
      {
        path: 'banner/:id',
        component: FormularioBannerComponent
      },
      {
        path: 'publicidad',
        component: TablaPublicidadComponent
      },
      {
        path: 'formPublicidad/:id',
        component: FormularioPublicidadComponent
      },
      {
        path: 'usuarios',
        component: TablaUsuariosComponent
      },
      {
        path: 'catBlog',
        component: CategoriasBlogComponent
      },
      {
        path: 'formCat/:id',
        component: FormularioCategoriasBlogComponent
      },
      {
        path: 'blog',
        component: TablaBlogComponent
      },
      {
        path: 'formBlog/:id',
        component: FormularioBlogComponent
      },
      {
        path: 'editarUsuarios/:uid',
        component: FormularioUsuariosComponent
      },
      {
        path: 'propiedades',
        component: TablaPropiedadesComponent
      },
      {
        path: 'formpropiedad/:id',
        component: ManejarPropiedadComponent
      },
      {
        path: 'recomendados',
       component: TablaRecomendadosComponent
      },
      {
        path: 'formrecomendados/:id',
        component: FormRecomendadosComponent
      },
      {      
        path:'pagina',
        component:TablaPaginaComponent
      },
      {
        path:'formPagina/:id',
        component:FormPaginaComponent
      },
      {
        path:'**',
        redirectTo:'inicio',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
