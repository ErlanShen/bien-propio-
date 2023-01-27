import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import { RutasService } from './../../helpers/servicios/rutas.service';
import { PromocionesService } from './../../helpers/servicios/promociones.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Promociones } from 'src/app/helpers/modelos/promociones';

@Component({
  selector: 'app-tabla-publicidad',
  templateUrl: './tabla-publicidad.component.html',
  styleUrls: ['./tabla-publicidad.component.scss']
})
export class TablaPublicidadComponent {

  promociones: Promociones[]
  encendidos: number = 0
  constructor(private promService: PromocionesService, private cdr: ChangeDetectorRef, private rutas: RutasService) {

    this.promService.getPromotions().subscribe(datos => {
      this.promociones = datos
    })

    this.promService.activePromotions().subscribe(numero => {
      this.encendidos = numero
    })


  }

  ngOnInit(): void {

  }
 
  cambio(promocion: Promociones, evento) {
    this.cdr.detectChanges()
    promocion.activo = evento.checked
    this.promService.updateChecked(promocion)
  }

  desactivador(activado: boolean, ocupados: number): boolean {
    return ocupados === 1 && activado === false ? true : false
  }
  borrar(promocion: Promociones) {
    this.promService.deletePromotion(promocion)
  }
}
