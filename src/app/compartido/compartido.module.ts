import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from "primeng/divider";
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { BannerGridCartasComponent } from './banner-grid-cartas/banner-grid-cartas.component';
import { DropdownModule } from 'primeng/dropdown';
import { MapaComponent } from './mapa/mapa.component';
import { FiltroMapaComponent } from './filtro-mapa/filtro-mapa.component'
import { GMapModule } from 'primeng/gmap';
import { GoogleMapsModule } from '@angular/google-maps'
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { MegaMenuModule } from 'primeng/megamenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';
import { TarjetaPropiedadComponent } from './tarjeta-propiedad/tarjeta-propiedad.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogoTarjetaComponent } from './tarjeta-propiedad/dialogo-tarjeta/dialogo-tarjeta.component';
import {DragDropModule} from 'primeng/dragdrop';
import {OrderListModule} from 'primeng/orderlist';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { TooltipModule } from 'primeng/tooltip';
import { SelectorFotosComponent } from './selector-fotos/selector-fotos.component';
import { PaginatorModule } from 'primeng/paginator';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { SeguroPipe } from '../helpers/pipes/seguro.pipe';
import { QuillModule } from 'ngx-quill'
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CargaActivaComponent } from './carga-activa/carga-activa.component';
import { FormularioDireccionComponent } from './formulario-direccion/formulario-direccion.component';
import { NgMagnizoomModule } from 'ng-magnizoom';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FiltrosPipe } from '../helpers/pipes/filtros.pipe';



const misModulos = [
  SwiperModule,
  ButtonModule,
  ReactiveFormsModule,
  FormsModule,
  DialogModule,
  MessageModule,
  MessagesModule,
  ConfirmDialogModule,
  ToastModule,
  DividerModule,
  PasswordModule,
  InputTextModule,
  AccordionModule,
  MenubarModule,
  CheckboxModule,
  FileUploadModule,
  HttpClientModule,
  MegaMenuModule,
  ProgressSpinnerModule,
  GMapModule,
  GoogleMapsModule,
  DropdownModule,
  CardModule,
  GalleriaModule,
  TabViewModule,
  TranslateModule.forChild(),
  PanelMenuModule,
  SelectButtonModule,
  TableModule,
  InputSwitchModule,
  CalendarModule,
  AutoCompleteModule,
  ChipModule,
  InputNumberModule,
  InputTextareaModule,
  FontAwesomeModule,
  ScrollPanelModule,
  ScrollTopModule,
  NgxQRCodeModule,
  TooltipModule,
  PaginatorModule,
  RadioButtonModule,
  OrderListModule,
  OverlayPanelModule,
  MultiSelectModule,
  EditorModule,
  DragDropModule,
  ToggleButtonModule,
  TieredMenuModule,
  QuillModule.forRoot(),
  NgMagnizoomModule,
  YouTubePlayerModule
]

const misComponentes = [
  MapaComponent,
  FiltroMapaComponent,
  BannerGridCartasComponent,
  PopupComponent,
  TarjetaPropiedadComponent,
  DialogoTarjetaComponent,
  SelectorFotosComponent,
  SeguroPipe,
  CargaActivaComponent,
  FormularioDireccionComponent,
  FiltrosPipe
]



@NgModule({
  declarations: [
    misComponentes

  ],
  imports: [
    CommonModule,
    misModulos,

  ],
  exports: [
    misModulos,
    misComponentes
  ],
  providers: [

  ]
})
export class CompartidoModule { }
