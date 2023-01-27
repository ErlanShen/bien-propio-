import { Promociones } from './../../helpers/modelos/promociones';
import { PromocionesService } from './../../helpers/servicios/promociones.service';
import { LoaderService } from './../../loader/loader.service';
import { Traducir } from './../../helpers/modelos/traducir';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
import { Identidad } from 'src/app/helpers/modelos/identidad';
import { AjustesService } from 'src/app/helpers/servicios/ajustes.service';
import { Usuario } from 'src/app/helpers/modelos/usuario';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  misIdiomas: Traducir[];
  lenguaje: any;
  displayResponsive: boolean = false;
  displaylogin: boolean = false;
  userProfileMenuItems: MegaMenuItem[] = [];
  mimenu: MegaMenuItem[] = [];
  mimenu2: MegaMenuItem[] = [];
  mimenu3:MegaMenuItem[]=[];
  subcription: Subscription = new Subscription()
  promocion: Promociones
  verModal: boolean = false
  identidad: Identidad

  constructor(public translate: TranslateService, public LoaderService: LoaderService, private promService: PromocionesService,
    private router: Router, private auth: AuthService, private ajustesServicio: AjustesService) {

    this.buildUserProfileMenu();

       this.verificarlogin()

    this.router.events.subscribe(eventos => {
      if (eventos instanceof NavigationEnd) {
        let separados = eventos.url.split("/")
        if (separados[1] === "admin") {
          if (separados[2] === "publicidad") {
            this.verModal = true
          }
        } else {
          this.verModal = true
        }
      }
    })

    this.promService.numberActivePromotions().subscribe(datos => {
      this.promocion = datos
    })



    translate.setDefaultLang('en')
    this.lenguaje = translate.getBrowserLang();
    translate.use(this.lenguaje.match(/en|es/) ? this.lenguaje : 'en');

    this.misIdiomas = [
      {
        lenguaje: 'Español',
        simbolo: "es"
      },
      {
        lenguaje: 'English',
        simbolo: "en"
      },
    ]

    this.ajustesServicio.verFormularioAjustes().subscribe(datos => {
      this.identidad = datos
    })
    
  }

  ngOnInit() {
    this.subcription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
     this.mimenu= this.buildUserProfileMenu();
     this.mimenu2 =this.generarmenu2("secret")
     this.verificarlogin()
     this.mimenu3=this.generarmenumovil(this.mimenu,this.mimenu2)
    });
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe()
    }
  }

  inicioLogin() {
    this.displaylogin = true;
  }

  quitarmodal(event: any) {
    if (event === "valido") {
      this.displaylogin = false;

    }

  }

  generarmenu2(dn: string, admin?:Usuario) :MegaMenuItem[] {
    if (dn === "secret") {     
      return [
        {
          label: this.translate.instant("MENU.LOGIN"),
          
          command: () => this.inicioLogin()
        },
        {
          label: this.translate.instant("MENU.ANUNCIAR"),
          styleClass:"rojo",
        },
        {
          label: this.translate.instant("MENU.AYUDA"),
          
        }
      ]
    }
    else {
      return  [
        {
          label: dn,
          routerLink:"/cuenta/inicio",

        },
        {
          label:"Admin",
          routerLink:"/admin/inicio",
          visible:admin.rol === 1 ? true : false
        },
        {
          label: this.translate.instant("MENU.ANUNCIAR"),
          styleClass:"rojo",
        },
        {
          label: this.translate.instant("MENU.AYUDA"),
          
        }
      ]

    }

  }

  buildUserProfileMenu() {

    return  [
      {
        label: this.translate.instant("MENU.INICIO"),
        styleClass:"rojo",
        routerLink: "/inicio"
      },
      {
        label: this.translate.instant("MENU.COMPRA"),
        styleClass:"rojo",

        items: [
          [
            {
              label: this.translate.instant("MENU.VARIOS.Casa"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            },
            {
              label: this.translate.instant("MENU.VARIOS.Terreno"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ],
          [
            {
              label: this.translate.instant("MENU.VARIOS.Edificio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
             },
            {
              label: this.translate.instant("MENU.VARIOS.Negocio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ]
        ]
      },

      {
        label: this.translate.instant("MENU.VENTA"),
        styleClass:"rojo",
        items: [
          [
            {
              label: this.translate.instant("MENU.VARIOS.Casa"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            },
            {
              label: this.translate.instant("MENU.VARIOS.Terreno"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ],
          [
            {
              label: this.translate.instant("MENU.VARIOS.Edificio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
             },
            {
              label: this.translate.instant("MENU.VARIOS.Negocio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ]
        ]
      },
      {
        label: this.translate.instant("MENU.RENTA"),
        styleClass:  "rojo",
        items: [
          [
            {
              label: this.translate.instant("MENU.VARIOS.Casa"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            },
            {
              label: this.translate.instant("MENU.VARIOS.Terreno"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ],
          [
            {
              label: this.translate.instant("MENU.VARIOS.Edificio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
             },
            {
              label: this.translate.instant("MENU.VARIOS.Negocio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ]
        ]
      },
      {
        label: this.translate.instant("MENU.ALQUILER"),
        styleClass:"rojo",
        items: [
          [
            {
              label: this.translate.instant("MENU.VARIOS.Casa"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            },
            {
              label: this.translate.instant("MENU.VARIOS.Terreno"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ],
          [
            {
              label: this.translate.instant("MENU.VARIOS.Edificio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
             },
            {
              label: this.translate.instant("MENU.VARIOS.Negocio"),
              items: [{ label: this.translate.instant("MENU.VARIOS.Zona Norte") }, { label: this.translate.instant("MENU.VARIOS.Zona Centro") }, { label: this.translate.instant("MENU.VARIOS.Zona Sur") }]
            }
          ]
        ]
      },
    ]
  }

  generarmenumovil(menu1:MegaMenuItem[],menu2:MegaMenuItem[]): MegaMenuItem[]{
    let resultado :MegaMenuItem[]=[]
    
    resultado= [...menu1,...menu2]

  return resultado
  }

  verificarlogin(){
    
    this.auth.miusuario$.subscribe(us => {
      
      if (us) {

        this.mimenu2 = this.generarmenu2(us.displayName,us)
        this.mimenu3=this.generarmenumovil(this.mimenu,this.mimenu2)
      }
      else {
        this.mimenu2 = this.generarmenu2("secret")
      }
    })
    
  }
  nav(){
    this.router.navigateByUrl('/inicio')
  }

}
