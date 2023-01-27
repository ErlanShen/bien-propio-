import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from '../helpers/servicios/auth.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BannerService } from '../helpers/servicios/banner.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  
  item: MenuItem[]= this.generarDerecha();
  items: MenuItem[]= this.generarCentral()
  subcription: Subscription = new Subscription()

  constructor(private auth: AuthService, private banner:BannerService, private translate: TranslateService,) { }
  ngOnInit(): void {
    this.subcription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.items=this.generarCentral()
      this.item = this.generarDerecha()
    });
  }
   
  generarCentral(){

    return [
      {
        label:this.translate.instant("CLIENTE.BOTONES.RECOMENDADOS"),
        icon: 'pi pi-fw pi-th-large',
        routerLink:'/cuenta/inicio'
      },
      {
        label:'Publicar',
        icon: 'pi pi-fw pi-home',
        routerLink:'/cuenta/nuevo'
      },
      {
        label:this.translate.instant("CLIENTE.BOTONES.PERFIL"),
        icon:'pi pi-fw pi-user',
        routerLink:'/cuenta/perfil'
      },
      
    ]
  }

  generarDerecha(){
    return [
      {
        icon: 'pi pi-fw pi-search',
      },
      {
        icon:'pi pi-fw pi-comment',
      },
      {
        icon:'pi pi-fw pi-heart',
      },
      {
        icon:'pi pi-fw pi-power-off',
        label:this.translate.instant("CLIENTE.BOTONES.SALIR"),
        command: ()=>this.cerrarsesion()
        

    }
    ]

  }


  cerrarsesion(){
    this.auth.cerrarsesion()
  }

  //Crear metodo en el servicio de banner que devuelva un banner tenga la categoria cuenta//
  
}
