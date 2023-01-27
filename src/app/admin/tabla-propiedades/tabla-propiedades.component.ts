import { MetEnumService } from './../../helpers/servicios/met-enum.service';
import { PropiedadesService } from './../../helpers/servicios/propiedades.service';
import { Transacciones } from 'src/app/helpers/modelos/transacciones';
import { Propiedad, Publicacion } from './../../helpers/modelos/propiedad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-propiedades',
  templateUrl: './tabla-propiedades.component.html',
  styleUrls: ['./tabla-propiedades.component.scss']
})
export class TablaPropiedadesComponent implements OnInit {

  propiedad: Propiedad[];
  cols: any[];
  loading: boolean = true;
  selectedCustomers: Propiedad[];

  mistransacciones=this.tipo.generarLista(Transacciones)
  misEstados=this.tipo.generarLista(Publicacion)
  constructor(private datos:PropiedadesService, private tipo:MetEnumService) { }

  ngOnInit(): void {
    this.loading=false;
    this.traertodo()

  }

  private traertodo(){
    this.datos.getPropiedades().subscribe((traer)=>{
      this.propiedad = traer
    })
  }

  eliminar(ide:Propiedad){
     this.datos.deletePropiedad(ide)  
  }

  intermediaria(num:number){
    return this.tipo.retornarEnumArreglo(this.mistransacciones,num).nombre
  }
intermediariaEstado(num:number){
  return this.tipo.retornarEnumArreglo(this.misEstados,num).nombre
}

}
