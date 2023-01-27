import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CompartidoModule } from './../compartido/compartido.module';
import { LOCALE_ID,NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TablaBannerComponent } from './tabla-banner/tabla-banner.component';
import { FormularioBannerComponent } from './tabla-banner/formulario-banner/formulario-banner.component';

import { TablaPublicidadComponent } from './tabla-publicidad/tabla-publicidad.component';
import { FormularioPublicidadComponent } from './tabla-publicidad/formulario-publicidad/formulario-publicidad.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { FormularioUsuariosComponent } from './tabla-usuarios/formulario-usuarios/formulario-usuarios.component';
import { TablaPropiedadesComponent } from './tabla-propiedades/tabla-propiedades.component';
import { ManejarPropiedadComponent } from './tabla-propiedades/manejar-propiedad/manejar-propiedad.component';
import { CategoriasBlogComponent } from './blog/categorias-blog/categorias-blog.component';
import { FormularioCategoriasBlogComponent } from './blog/formulario-categorias-blog/formulario-categorias-blog.component';
import { TablaBlogComponent } from './blog/tabla-blog.component';
import { FormularioBlogComponent } from './blog/formulario-blog/formulario-blog.component';
import {InputTextareaModule} from 'primeng/inputtextarea';

/* cambiar localizacion */
import localeEC from '@angular/common/locales/es-EC';
import { AjustesComponent } from './ajustes/ajustes.component';
import { TablaRecomendadosComponent } from './tabla-recomendados/tabla-recomendados.component';
import { FormRecomendadosComponent } from './tabla-recomendados/form-recomendados/form-recomendados.component';
import { TablaPaginaComponent } from './tabla-pagina/tabla-pagina.component';
import { FormPaginaComponent } from './tabla-pagina/form-pagina/form-pagina.component';
registerLocaleData(localeEC, 'es');

@NgModule({
  declarations: [
    AdminComponent,
    InicioAdminComponent,
    GaleriaComponent,
    TablaBannerComponent,
    FormularioBannerComponent,
    TablaPublicidadComponent,
    FormularioPublicidadComponent,
    TablaUsuariosComponent,
    FormularioUsuariosComponent,
    TablaPropiedadesComponent,
    ManejarPropiedadComponent,
    CategoriasBlogComponent,
    FormularioCategoriasBlogComponent,
    TablaBlogComponent,
    FormularioBlogComponent,
    AjustesComponent,
    TablaRecomendadosComponent,
    FormRecomendadosComponent,
    TablaPaginaComponent,
    FormPaginaComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CompartidoModule,
    InputTextareaModule,
    TranslateModule.forChild()    
  ],
  providers:[
    {provide:LOCALE_ID,useValue: 'es'}
  ],
  exports: [RouterModule]})
export class AdminModule { }
