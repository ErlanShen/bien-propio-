import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import { RecomendadosService } from './../../helpers/servicios/recomendados.service';

import { RecomendadosInicio } from './../../helpers/modelos/recomendados-inicio';
import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { SwiperOptions } from 'swiper/core'
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-banner-grid-cartas',
  templateUrl: './banner-grid-cartas.component.html',
  styleUrls: ['./banner-grid-cartas.component.scss']
})
export class BannerGridCartasComponent {

  recomendados: RecomendadosInicio[];
  propiedades: Propiedad[];
  filtrados: Propiedad[];
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 5,
    allowTouchMove: true,
    pagination: false,
    navigation: {
      disabledClass: 'swiper-button-disabled'
    },
    breakpoints: {
      '350': {
        slidesPerView: 1
      },
      '576': {
        slidesPerView: 1
      },
      '768': {
        slidesPerView: 1

      },
      '1200': {
        slidesPerView: 2
      }
    }
  }

  constructor(private recomendadoS: RecomendadosService, private propiedadS: PropiedadesService, private router: ActivatedRoute) {

    combineLatest(
      this.recomendadoS.activeRecomendados(),
      this.propiedadS.getPropiedades()
    ).subscribe(datos => {
      this.recomendados = datos[0]
      this.propiedades = datos[1]

    })

  }

  ngAfterViewInit(): void {
  }

  filtrarPropiedades(ids: string[], propiedades: Propiedad[]): Propiedad[] {
    let encontrados: Propiedad[] = []
    propiedades.forEach(elemento => {
      if (ids.indexOf(elemento.id) > -1) {
        encontrados.push(elemento)
      }
    })
    return encontrados
    
    
  }
  generarRango(num: number): number[] {
    let respuesta: number[] = []
    for (let index = 0; index < num / 5; index++) {
      respuesta.push(index)
    }
    return respuesta
  }
  partes(propiedades: Propiedad[], acumulado: number): Propiedad[] {

    const respuesta=propiedades.slice((acumulado*5),(acumulado+1)*5)

    
    return respuesta
  }


}
