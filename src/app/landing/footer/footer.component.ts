import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faWhatsapp, faYoutube, faTelegram, faVk, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Subscription } from 'rxjs';
import { AuthService } from './../../helpers/servicios/auth.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AjustesService } from 'src/app/helpers/servicios/ajustes.service';
import { Identidad } from 'src/app/helpers/modelos/identidad';
import { PaginaService } from 'src/app/helpers/servicios/pagina.service';
import { Pagina } from 'src/app/helpers/modelos/pagina';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faQuestion = faQuestion
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faTelegram = faTelegram;
  faVk = faVk;
  faTiktok = faTiktok;

  date: number
  opciones = [{
    label: "MENU.INICIO",
    sublabel: [{
      label: "MENU.VENTA"
    }],
  },
  {
    label: "MENU.INICIO",
    sublabel: [{
      label: "MENU.VENTA"
    },
    {
      label: "MENU.VENTA"
    }],
  },
  ]

  items: MenuItem[] = this.generateMenu()
  subcription: Subscription = new Subscription()

  identidad: Identidad
  paginasActivas: Pagina[]

  constructor(public translate: TranslateService, private auth: AuthService, private ajustesServicio: AjustesService, private paginaServicio: PaginaService) {
    this.date = new Date().getFullYear()
    this.subcription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.items = this.generateMenu()
    });
    this.ajustesServicio.verFormularioAjustes().subscribe(datos => {
      this.identidad = datos
    })
    this.paginaServicio.footerViewPage().subscribe(datos => {
      this.paginasActivas = datos
    })
  }

  ngOnInit(): void {
  }
  generateMenu() {
    return this.opciones.map(data => {
      if (data.sublabel) {
        let opt = {
          label: this.translate.instant(data.label),
          items: data.sublabel.map(data2 => {
            let item = { label: this.translate.instant(data2.label) }
            return item
          })
        }
        return opt
      }
      else {
        let opt = {
          label: this.translate.instant(data.label),
        }
        return opt
      }

    })

    /*   return [
        {
          label:this.translate.instant("MENU.INICIO")
        },
        {
          separator:true
          },
        {
          label:this.translate.instant("MENU.COMPRA")
        },
        {
          separator:true
          },
        {
          label:this.translate.instant("MENU.VENTA")
        },
        {
          separator:true
          },
        {
          label:this.translate.instant("MENU.ALQUILER")
        },
        {
          separator:true
          },
        {
          label:this.translate.instant("MENU.ANUNCIAR")
        },
        {
          separator:true
          },
        {
          label:this.translate.instant("MENU.AYUDA")
        },
      ] */
  }
}
