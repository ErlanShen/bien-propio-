import { RutasService } from './../helpers/servicios/rutas.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items: MenuItem[] = this.generateMenu()
  subcription: Subscription = new Subscription()

  constructor(public translate: TranslateService, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.subcription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.items = this.generateMenu()
    });

  }
  generateMenu() {
    return [
      {
        label: this.translate.instant("MENU.INICIO"),
        icon: 'pi pi-fw pi-home',
        routerLink: "/admin/inicio"
      },
      {
        label: this.translate.instant("ADMINMENU.PROPIEDADES"),
        icon: 'pi pi-fw pi-map-marker',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: "/admin/formpropiedad/nuevo"
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-list',
            routerLink: "/admin/propiedades"
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.USUARIO"),
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-users',
            routerLink: '/admin/usuarios'
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.BANNER"),
        icon: 'pi pi-fw pi-image',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: "/admin/banner/nuevo"
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-images',
            routerLink: '/admin/banners'
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.PUBLICIDAD"),
        icon: 'pi pi-fw pi-money-bill',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: '/admin/formPublicidad/nuevo'
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-list',
            routerLink: '/admin/publicidad'
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.BLOG"),
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: '/admin/formBlog/nuevo'
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-list',
            routerLink: '/admin/blog'
          },
          {
            label: this.translate.instant("ADMINMENU.CATBLOG"),
            items: [
              {
                label: this.translate.instant("ADMINMENU.CREAR"),
                icon: 'pi pi-fw pi-plus',
                routerLink: '/admin/formCat/nuevo'
              },
              {
                label: this.translate.instant("ADMINMENU.LISTA"),
                icon: 'pi pi-fw pi-list',
                routerLink: '/admin/catBlog'
              }
            ]
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.RECOMENDADOS"),
        icon: 'pi pi-fw pi-money-bill',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: '/admin/formrecomendados/nuevo'
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-list',
            routerLink: '/admin/recomendados'
          }
        ]
      },
      {
        label:this.translate.instant("ADMINMENU.GALERIA"),
        icon:'pi pi-fw pi-images',
        routerLink:"/admin/galeria"
      },
      {
        label:this.translate.instant("ADMINMENU.AJUSTES"),
        icon:'pi pi-fw pi-user-edit',
        routerLink:"/admin/ajustes"
      },     
      
     
      {
        label: this.translate.instant("ADMINMENU.PAGINA"),
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: this.translate.instant("ADMINMENU.CREAR"),
            icon: 'pi pi-fw pi-plus',
            routerLink: "/admin/formPagina/nuevo"
          },
          {
            label: this.translate.instant("ADMINMENU.LISTA"),
            icon: 'pi pi-fw pi-list',
            routerLink: "/admin/pagina"
          }
        ]
      },
      {
        label: this.translate.instant("ADMINMENU.SALIR"),
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.auth.cerrarsesion(),
      }
    ]
  }
}