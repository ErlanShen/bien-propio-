import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { Transacciones } from 'src/app/helpers/modelos/transacciones';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { PropiedadesService } from './../../../helpers/servicios/propiedades.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import {
  faBath, faRulerCombined, faBed, faUsers, faDollarSign, faCity, faHandHoldingUsd, faEdit,
  faHome, faMapMarkedAlt, faUser, faFileAlt, faGlobeAmericas, faShareAlt, faBars, faSink, faRuler, faParking, faTree, faQuestion, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
import { NgMagnizoomComponent } from 'ng-magnizoom';
import { Usuario } from 'src/app/helpers/modelos/usuario';
import { ClienteService } from 'src/app/helpers/servicios/cliente.service';
import { map, switchMap, tap } from 'rxjs/operators';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { Ambientes } from 'src/app/helpers/modelos/ambientes';
import { Exteriores } from 'src/app/helpers/modelos/exteriores';
import { CaracteristicasGenerales } from 'src/app/helpers/modelos/caracteristicas-generales';
import { Servicios } from 'src/app/helpers/modelos/servicios';
import { HostListener } from "@angular/core";
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Identidad } from 'src/app/helpers/modelos/identidad';
import { AjustesService } from 'src/app/helpers/servicios/ajustes.service';
import { faFacebook, faInstagram, faTelegram, faTiktok, faTwitter, faVk, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialogo-tarjeta',
  templateUrl: './dialogo-tarjeta.component.html',
  styleUrls: ['./dialogo-tarjeta.component.scss']
})
export class DialogoTarjetaComponent implements OnInit {

  clienteC: Usuario
  anchoVideos: string = "640px"
  altoVideos: string = "360px"
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    let anchop: number = window.innerWidth
    switch (true) {
      case (anchop < 1560 && anchop > 1400): {
        this.anchoVideos = "540px"
        break;
      }
      case (anchop < 1399 && anchop > 1200): {

        this.anchoVideos = "450px"
        break;
      }
      case (anchop < 760 && anchop > 0): {

        this.anchoVideos = "300px"
        this.altoVideos = "200px"
        break;
      }
      default:
        this.anchoVideos = "640px"
        this.altoVideos = "360px"
        break;
    }




  }
  @Output() cerrado = new EventEmitter<boolean>()
  faShareAlt = faShareAlt;
  faBars = faBars;
  faGlobeAmericas = faGlobeAmericas;
  faFileAlt = faFileAlt;
  faUser = faUser;
  faBath = faBath;
  faRulerCombined = faRulerCombined;
  faBed = faBed;
  faUsers = faUsers;
  faDollarSign = faDollarSign;
  faHome = faHome;
  faMapMarkedAlt = faMapMarkedAlt;
  faCity = faCity;
  faHandHoldingUsd = faHandHoldingUsd;
  faEdit = faEdit;
  faSink = faSink;
  faRuler = faRuler;
  faParking = faParking;
  faTree = faTree;
  elementType = "url";
  icono = 'pi pi-heart'
  mostrar: boolean = false
  ver = window.location.href;
  @Input("id") id: string
  @Input("visible") visible: boolean
  @Input('titulo') titulo:boolean = false
  propiedadmodal: Propiedad
  mistransacciones = this.tipo.generarLista(Transacciones)
  @ViewChild("zoom", { static: false }) zoom: NgMagnizoomComponent;
  urlSeleccionada: string;
  ClienteServi: Usuario;
  publicacionesAutor: Propiedad[];
  newLink: string;
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    allowTouchMove: true,
    pagination: true,
    navigation: {
      disabledClass: 'swiper-button-disabled'
    },
    breakpoints: {
      1000: {
        slidesPerView: 3
      },
      710: {
        slidesPerView: 2
      },
      500:{
        slidesPerView: 2
      },
      100: {
        slidesPerView: 1
      },
    }
  }
  redesSociales: Identidad;
  faQuestion = faQuestion
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faTelegram = faTelegram;
  faVk = faVk;
  faTiktok = faTiktok;
  faEnvelope = faEnvelope;
  miCopiado: boolean = false

  constructor(private datos: PropiedadesService, private tipo: MetEnumService, private auth: AuthService, private observer: BreakpointObserver, private mediaMatcher: MediaMatcher, private clienteService: ClienteService, private ajustesServicio: AjustesService, private router: ActivatedRoute, private ruta: Router) {

    this.auth.miusuario$.subscribe(data => {
      this.clienteC = data as Usuario
      if (data && data.publicados.indexOf(this.propiedadmodal.id) === -1) {
        this.mostrar = false
      } else {
        this.mostrar = true
      }
    })

    this.ajustesServicio.verFormularioAjustes().subscribe(data => {
      this.redesSociales = data
    })

    this.getScreenSize()

    const pantallaXL = mediaMatcher.matchMedia('(min-width: 1310px) and (max-width: 1560px)').matches;
    const pantallaL = mediaMatcher.matchMedia('(min-width: 1210px) and (max-width: 1309px)').matches;
    const pantallaMD = mediaMatcher.matchMedia('(min-width: 651px) and (max-width: 1209px)').matches;
    const pantallaXS = mediaMatcher.matchMedia('(min-width: 400px) and (max-width: 650px)').matches;
    const pantallaXXS = mediaMatcher.matchMedia('(min-width: 0px) and (max-width: 399px)').matches;


    switch (true) {
      case pantallaXL: {
        this.anchoVideos = "550px";
        break;
      }
      case pantallaL: {

        this.anchoVideos = "675px";
        break;
      }
      case pantallaMD: {
        this.anchoVideos = "650px";
        break;
      }
      case pantallaXS: {

        this.anchoVideos = "400px";
        break;
      }
      case pantallaXXS: {
        this.anchoVideos = "275px";
        break;
      }
      default:
        this.anchoVideos = "640px"
        this.altoVideos = "360px"
        break;
    }


  }

  ngOnInit(): void {
    this.datos.getUnaPropiedad(this.id).pipe(
      tap(propiedades => {
        this.propiedadmodal = propiedades
        this.urlSeleccionada = propiedades.imgDestcada
      }),
      switchMap(propie => {
        return this.clienteService.devolverUnCliente(propie.idUsuario)
      }),
      tap(user => {
        this.ClienteServi = user
      }),
      switchMap(client => {
        const ar = client.publicados
        let posicion = ar.indexOf(this.id)
        let parte1 = ar.slice(0, posicion)
        let parte2 = ar.slice(posicion + 1)
        return this.datos.traerPropiedades5([...parte1,...parte2])
      })
    ).subscribe(propiedades => {
      this.publicacionesAutor = propiedades
    })
  }

  intermediaria(num: number) {
    return this.tipo.retornarEnumArreglo(this.mistransacciones, num).nombre
  }
  notificar() {
    this.cerrado.emit(true)
  }
  galeria(imagen: string) {
    this.zoom.loadImage(imagen)
    this.urlSeleccionada = imagen
  }

  transformarTipoPropiedad(numero: number): string {
    switch (numero) {
      case 0:
        return "Venta"
        break;
      case 1:
        return "Renta"
        break;
      case 2:
        return "Cambio"
        break;
      case 3:
        return "Concesion"
        break;
      case 4:
        return "Comision"
        break;
      case 5:
        return "Alquiler"
        break;
      default:
        return ""
    }
  }
  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  URL(link: string) {
    this.ruta.navigateByUrl("/propiedad/" + link).then(() => {
      window.location.reload()
    })
  }


  listarAmbientes(data: Ambientes): Ambientes[] {
    const llaves = Object.keys(data)
    const valores = Object.values(data)
    const arreglo = []
    llaves.forEach((elemento, indice) => {
      if (valores[indice]) {
        arreglo.push({
          llave: elemento.toUpperCase(),
          valor: valores[indice]
        })
      }
    })
    return arreglo
  }


  listarExteriores(data: Exteriores): Exteriores[] {
    const llaves = Object.keys(data)
    const valores = Object.values(data)
    const arreglo = []
    llaves.forEach((elemento, indice) => {
      if (valores[indice]) {
        arreglo.push({
          llave: elemento.toUpperCase(),
          valor: valores[indice]
        })
      }
    })
    return arreglo
  }

  listarGenerales(data: CaracteristicasGenerales): CaracteristicasGenerales[] {
    const llaves = Object.keys(data)
    const valores = Object.values(data)
    const arreglo = []
    llaves.forEach((elemento, indice) => {
      if (valores[indice]) {
        arreglo.push({
          llave: elemento.toUpperCase(),
          valor: valores[indice]
        })
      }
    })
    return arreglo
  }

  listarServicios(data: Servicios): Servicios[] {
    const llaves = Object.keys(data)
    const valores = Object.values(data)
    const arreglo = []
    llaves.forEach((elemento, indice) => {
      if (valores[indice]) {
        arreglo.push({
          llave: elemento.toUpperCase(),
          valor: valores[indice]
        })
      }
    })
    return arreglo
  }

  transformadorURL(url: string) {
    let cortado: string[]
    if (url.indexOf('https://youtu.be/') > -1) {
      cortado = url.split('.be/')
    } else {
      cortado = url.split('=')
    }
    let nuevoEnlace: string = 'https://www.youtube.com/embed/' + cortado[cortado.length - 1]
    return nuevoEnlace
  }


  agregarf(prop: string, user: Usuario) {
    if (user.favorito.indexOf(prop) === -1) {
      user.favorito.push(prop)
    } else {
      let posicion = user.favorito.indexOf(prop)
      user.favorito.splice(posicion, 1)
    }
    this.clienteService.editarCliente(user)
  }

  verificarLink(actual: string, dir: string): string {
    if (actual.indexOf('mapa/')> -1) {
      this.newLink = actual.slice(0, actual.indexOf('mapa/')) + 'propiedad/' + dir
    } else {
      this.newLink = actual
    }
    return this.newLink
  }

  copiarLink(url: string) {
    navigator.clipboard.writeText(url)
    this.miCopiado = true
    setTimeout(() => {
      this.miCopiado = false
    }, 1000);
  }
}
