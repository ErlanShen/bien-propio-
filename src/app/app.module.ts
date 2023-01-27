import { NgModule } from '@angular/core';
import { BrowserModule ,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';

//componentes appmodule
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { FooterComponent } from './landing/footer/footer.component';
import { BodyComponent } from './landing/body/body.component';

//Angular firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Modulo comparticion
import { CompartidoModule } from './compartido/compartido.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './sesiones/login/login.component';
import { RegistroComponent } from './sesiones/registro/registro.component';


import { ConfirmadorDirective } from './helpers/directivas/confirmador.directive';

//Traduccion ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RestaurarpassComponent } from './sesiones/restaurarpass/restaurarpass.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BannerInicialComponent } from './landing/body/banner-inicial/banner-inicial.component';
import { ClienteModule } from './cliente/cliente.module';
import { MapaBusquedaModule } from './mapa-busqueda/mapa-busqueda.module';
import { BlogModule } from './blog/blog.module';

//Mensajes de confirmacion
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { PropiedadURLComponent } from './landing/propiedad-url/propiedad-url.component';
import { FiltrosBusquedaModule } from './landing/filtros-busqueda/filtros-busqueda.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    RegistroComponent,
    ConfirmadorDirective,
    RestaurarpassComponent,
    BannerInicialComponent,
    PropiedadURLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartidoModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AdminModule,
    MessageModule,
    ConfirmDialogModule,
    MessagesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    ClienteModule,
    MapaBusquedaModule,
    ClienteModule,
    MapaBusquedaModule,
    BlogModule,
    ProgressBarModule,
    LayoutModule,
    FiltrosBusquedaModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    Title
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
