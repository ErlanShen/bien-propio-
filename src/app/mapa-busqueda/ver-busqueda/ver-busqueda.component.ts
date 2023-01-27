import { Propiedad } from './../../helpers/modelos/propiedad';
import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-ver-busqueda',
  templateUrl: './ver-busqueda.component.html',
  styleUrls: ['./ver-busqueda.component.scss'],
})
export class VerBusquedaComponent {
  busqueda: string;
  map = {
    a: 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
    e: 'é|è|ê|ë|É|È|Ê|Ë',
    i: 'í|ì|î|ï|Í|Ì|Î|Ï',
    o: 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  };
  tipo: string;
  propiedades: Propiedad[];
  cantidad: number
  constructor(
    private route: ActivatedRoute,
    private propiedadS: PropiedadesService,
    private mediaMatcher: MediaMatcher) {
    this.busqueda = this.route.snapshot.params.ubicacion;
    let tipo = this.route.snapshot.params.tipo;
    let busquedaBase = this.busqueda.split(',');
    let busq = busquedaBase[busquedaBase.length - 1];
    busq = busq
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLocaleUpperCase();
    tipo = tipo.toLowerCase();
    for (var pattern in this.map) {
      tipo = tipo.replace(new RegExp(this.map[pattern], 'g'), pattern);
    }
    this.propiedadS.filtrarPropiedades(tipo, busq).subscribe((data) => {
      this.propiedades = data;
    });


    const pantallaXL = this.mediaMatcher.matchMedia(
      '(min-width: 1310px) and (max-width: 9999px)'
    ).matches;
    const pantallaL = this.mediaMatcher.matchMedia(
      '(min-width: 1210px) and (max-width: 1309px)'
    ).matches;
    const pantallaMD = this.mediaMatcher.matchMedia(
      '(min-width: 651px) and (max-width: 1209px)'
    ).matches;
    const pantallaSM = this.mediaMatcher.matchMedia(
      '(min-width: 400px) and (max-width: 650px)'
    ).matches;
    const pantallaXSM = this.mediaMatcher.matchMedia(
      '(min-width: 0px) and (max-width: 399px)'
    ).matches;  //quitar con sus imports y mas


    switch (true) {
      case pantallaXL:
        this.cantidad = 6

        break;
      case pantallaL:
        this.cantidad = 4

        break;
      case pantallaMD:
        this.cantidad = 6

        break;
      case pantallaSM:
        this.cantidad = 5

        break;
      case pantallaXSM:
        this.cantidad = 2
        break;

      default:
        this.cantidad = 10
        break;
    }
  }

}
