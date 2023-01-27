import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import { Observable } from 'rxjs';
import { RecomendadosService } from './../../helpers/servicios/recomendados.service';
import { RecomendadosInicio } from './../../helpers/modelos/recomendados-inicio';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';

@Component({
  selector: 'app-tabla-recomendados',
  templateUrl: './tabla-recomendados.component.html',
  styleUrls: ['./tabla-recomendados.component.scss']
})
export class TablaRecomendadosComponent implements OnInit {
  recomendado: RecomendadosInicio[]
  numRecomendados
  propiedades: any[] = []
  prueba = []
  constructor(private recomendadoS: RecomendadosService, private cdr: ChangeDetectorRef, private prop: PropiedadesService) {

    this.recomendadoS.getRecomendados().subscribe(datos => {
      this.recomendado = datos   
     /*  this.recomendado.forEach((data, i) => {
        this.propiedades[i] = (data.propiedades);
        console.log(this.propiedades);
        
      })
      this.propiedades.forEach((data) => {   
        this.prop.buscarVariasPropiedades(data).subscribe(info => {
         this.prueba = (info);
         console.log(this.prueba);
        })
      })
       */
    })

    this.recomendadoS.countActiveRecomendados().subscribe(datos => {
      this.numRecomendados = datos
    })


  }

  ngOnInit() {

  }

  cambio(recomendado: RecomendadosInicio, evento) {
    this.cdr.detectChanges()
    recomendado.activo = evento.checked
    this.recomendadoS.updateRecomendado(recomendado)
  }

  borrar(recomendado: RecomendadosInicio) {
    this.recomendadoS.deleteRecomendado(recomendado)
  }
}
