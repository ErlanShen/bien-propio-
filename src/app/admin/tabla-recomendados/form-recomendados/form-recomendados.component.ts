import { Direccion } from './../../../helpers/modelos/direccion';
import { RutasService } from './../../../helpers/servicios/rutas.service';
import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { Propiedad } from './../../../helpers/modelos/propiedad';
import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { RecomendadosService } from './../../../helpers/servicios/recomendados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecomendadosInicio } from './../../../helpers/modelos/recomendados-inicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-recomendados',
  templateUrl: './form-recomendados.component.html',
  styleUrls: ['./form-recomendados.component.scss']
})
export class FormRecomendadosComponent implements OnInit {

  recomendado: RecomendadosInicio = {
    titulo: "",
    propiedades: [],
    orden: 0,
    expresion: [
      '',
      '',
      ''
    ],   
  }

  activo = [
    { label: 'No', value: false },
    { label: 'Si', value: true }
  ]
  expresiones = [
    { nombre: 'Mayor a', expr: '>' },
    { nombre: 'Menor a', expr: '<' },
    { nombre: 'Mayor o igual que', expr: '>=' },
    { nombre: 'Menor o igual que', expr: '<=' },
    { nombre: 'igual a', expr: '==' }
  ]
  direcciones = [
    { nombre: 'Barrio', value: 'barrio' },
    { nombre: 'Canton', value: 'canton' },
    { nombre: 'Código Postal', value: 'codigoPostal' },
    { nombre: 'Parroquia', value: 'parroquia' },
    { nombre: 'Provincia', value: 'provincia' }
  ]

  propiedades = this.enumerador.generarLista(this.propiedadSer.nuevaPropiedadVacia())
  editando: boolean = false
  resultPropiedad: Propiedad[] = []

  ids: string[] = []
  constructor(private recomendadosS: RecomendadosService, private activeRouter: ActivatedRoute,
    private router: Router, private enumerador: MetEnumService, private propiedadSer: PropiedadesService,
    private serveRutas: RutasService) {
    const id = this.activeRouter.snapshot.params.id
    if (id != 'nuevo') {
      this.recomendadosS.getRecomendadosById(id).subscribe(datos => {
        this.recomendado = datos
        this.encontrados(this.recomendado.expresion[0],this.recomendado.expresion[1],this.recomendado.expresion[2])
      })
    }
  }

  ngOnInit(): void {
    this.serveRutas.actualizadorRutas()
  }

  guardar(recomendado: RecomendadosInicio, propiedad: Propiedad[]) {
    propiedad.forEach((datos, indice) => {
      recomendado.propiedades[indice] = datos.id
    })
    this.recomendadosS.manejadorRecomendados(recomendado)
    this.router.navigateByUrl('/admin/recomendados')
  }

  encontrados(busqueda: string, operador: string, event: string) {
    this.propiedadSer.recomendarPropiedades(busqueda, operador, Number(event)).subscribe(datos => {
      this.resultPropiedad = datos
      
    })

  }

}
