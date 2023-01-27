import { ActivatedRoute } from '@angular/router';
import { Transacciones } from './../../helpers/modelos/transacciones';
import { MetEnumService } from './../../helpers/servicios/met-enum.service';
import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
} from 'swiper/core';
import {
  faHeart,
  faBath,
  faRulerCombined,
  faBed,
  faUsers,
  faDollarSign,
  faCity,
  faHandHoldingUsd,
  faEdit,
  faHome,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Component, ElementRef, Input, OnInit, Self } from '@angular/core';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
import { ClienteService } from 'src/app/helpers/servicios/cliente.service';
import { Usuario } from 'src/app/helpers/modelos/usuario';
import { Breakpoints, MediaMatcher } from '@angular/cdk/layout';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);
@Component({
  selector: 'app-tarjeta-propiedad',
  templateUrl: './tarjeta-propiedad.component.html',
  styleUrls: ['./tarjeta-propiedad.component.scss'],
})
export class TarjetaPropiedadComponent implements OnInit {
  clienteC: Usuario;
  posicion: number = 0;
  diasMes = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  };

  @Input('propiedades') propiedades: Propiedad[] = [];
  @Input('paginator') paginas: boolean = false;
  @Input('cantidad') cantidad: number;
  width: string;
  margenl: number;
  expId: string;
  displaycarta: boolean = false;
  busqueda: string;
  mistransacciones = this.tipo.generarLista(Transacciones);
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
  faHeart = faHeart;
  icono = 'pi pi-heart';
  tProp: string = '';
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    allowTouchMove: false,
    pagination: true,
    centeredSlides: true,
    shortSwipes: true,
    navigation: {
      disabledClass: 'swiper-button-disabled',
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
    },
  };

  constructor(
    private datos: PropiedadesService,
    private tipo: MetEnumService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private client: ClienteService,
    private mediaMatcher: MediaMatcher,
    @Self() private el: ElementRef
  ) {
    this.busqueda = this.route.snapshot.params.ubicacion;

    this.auth.miusuario$.subscribe((usuario) => {
      if (usuario) {
        this.clienteC = usuario as Usuario;
      }
    });

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const elemento = this.el.nativeElement; // para no llamar a cada rato a el.native.....
    const new1 = elemento.offsetParent.offsetWidth - elemento.offsetLeft; // ancho de el div
    switch (true) {
      case new1 >= 1500:
        this.width = 'calc(20% - 30px)';
        break;
      case new1 > 1202 && new1 < 1499:
        this.width = 'calc(25% - 30px)';
        break;
      case new1 > 951 && new1 < 1201:
        this.width = 'calc(33% - 30px)';
        break;
      case new1 > 501 && new1 < 950:
        this.width = 'calc(50% - 30px)';
        break;
      case new1 > 0 && new1 < 499:
        this.width = 'calc(100% - 30px)';
        break;
      default:
        this.width = 'calc(33% - 30px)';
        break;
    }
  }

  showResponsiveDialog(id: string, titulo: string, evento: any) {
    if (evento.target.className.indexOf('pi-heart') === -1 && evento.target.className.indexOf('swiper') === -1 ) {
      this.expId = id;
      this.displaycarta = true;
      this.tProp = titulo;
    }  
  }

  cerrar(evento: any) {
    this.displaycarta = false;
  }
  cortador(titulo: string) {}

  agregarf(prop: string, user: Usuario) {
    if (user.favorito.indexOf(prop) === -1) {
      user.favorito.push(prop);
    } else {
      let posicion = user.favorito.indexOf(prop);
      user.favorito.splice(posicion, 1);
    }
    this.client.editarCliente(user);
  }

  comparadorf(publicacion: Date): boolean {
    let respuesta: boolean = false;
    const hoy = new Date();
    let fhoy = {
      dia: hoy.getDate(),
      mes: hoy.getMonth(),
      anio: hoy.getFullYear(),
    };
    let fpublicacion = {
      dia: publicacion.getDate(),
      mes: publicacion.getMonth(),
      anio: publicacion.getFullYear(),
    };

    if (
      fhoy.anio === fpublicacion.anio ||
      (fhoy.mes === 0 &&
        fpublicacion.mes === 11 &&
        fhoy.anio - fpublicacion.anio === 1)
    ) {
      if (
        fhoy.mes - fpublicacion.mes <= 1 ||
        fhoy.mes - fpublicacion.mes === -11
      ) {
        if (fhoy.mes === fpublicacion.mes) {
          respuesta = true;
        } else {
          let resta =
            this.diasMes[fpublicacion.mes] - fpublicacion.dia + fhoy.dia;
          if (resta <= 31) {
            respuesta = true;
          }
        }
      }
    }
    return respuesta;
  }

  arregloProp(
    misprops: Propiedad[],
    quiero: number,
    inicio: number
  ): Propiedad[] {
    let encontradas: Propiedad[] = [];
    let maximo: number = quiero + inicio - 1;
    for (let index = inicio; index <= maximo; index++) {
      const prop = misprops[index];
      if (prop === undefined) {
        return encontradas;
      }
      encontradas.push(prop);
    }
    return encontradas;
  }

  onPageChange(event) {
    this.posicion = event.first;
  }
}
