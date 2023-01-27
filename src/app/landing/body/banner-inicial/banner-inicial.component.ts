import { Router } from '@angular/router';
import { Resultados } from './../../../helpers/modelos/ecuador';
import { ProvinciasDataService } from './../../../helpers/servicios/provincias-data.service';
import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner-inicial',
  templateUrl: './banner-inicial.component.html',
  styleUrls: ['./banner-inicial.component.scss']
})
export class BannerInicialComponent implements OnInit {
  results: Resultados[]
  faSearch = faSearch

  @Input("imagen") imagen
  @Input("titulo") titulo
  @Output() buscado = new EventEmitter<Resultados>();
  @Output() selected = new EventEmitter<number>();
  ecuador: any
  resultadoSeleccionado: any;
  transaccion = 0
  transacciones = [{
    nombre: "Venta",
    valor: 0
  },
  {
    nombre: "Renta",
    valor: 1
  },
  ]
  revisarSeleccionado = true
  elementType = "url"
  ver = window.location.href;

  constructor(private enumeradores: MetEnumService, private provinciaS: ProvinciasDataService, private router: Router) {

  }

  ngOnInit(): void {
    this.selected.emit(this.transaccion);
  }
  sendCategoria() {
    this.selected.emit(this.transaccion);
  }
search(event:any){
  //Hacer que el orden de los resultados de la busqueda sea basado en un valor
      let resultados : any[] = [];
      let query = event.query.toLowerCase()
      let provincia = this.provinciaS.getProvincias()
      let cantones = this.provinciaS.getCantones()
      let parroquias= this.provinciaS.getParroquias()
      let parroquiasFiltro= parroquias.filter(parr=>{
        return parr.nombre.toLowerCase().indexOf(query) > -1 
      })
      parroquiasFiltro.forEach(data=>{
        resultados.push({nombre:this.c(data.provincia)+", "+ this.c(data.canton) + ", " + this.c(data.nombre)+ " ", tipo: data.ques, color:'#007fd3e1'})
      })
      let cantonesFiltro= cantones.filter(data=>{
        return data.nombre.toLowerCase().indexOf(query) > -1 
       }) 
       cantonesFiltro.forEach(data=>{
        resultados.push({nombre: this.c(data.provincia) + ", " + this.c(data.nombre) + " ", tipo: data.ques, color:'#199400d0'})
      })
      let provinciasFiltro: any = provincia.filter(data=>{
        return data.nombre.toLowerCase().indexOf(query) > -1 
       }) 
       provinciasFiltro.forEach(data=>{
        resultados.push({nombre:this.c(data.nombre), tipo:"Provincia", color:'#dd5100cb'})
      })
      
    this.results=resultados
}

  
  c(words: string) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  quitarEspacios() {
    let busqueda = this.resultadoSeleccionado.nombre
    busqueda = busqueda.replace(/[\])}[{(]/g, '')
    busqueda = this.titleCase(busqueda)
    busqueda = busqueda.replace(/ /g, "")
    let seleccionado = {
      nombre: this.resultadoSeleccionado.nombre,
      tipo: this.resultadoSeleccionado.tipo,
      color: this.resultadoSeleccionado.color
    }
    this.router.navigateByUrl('/mapa/' + this.resultadoSeleccionado.tipo + '/' + busqueda)
    
    this.buscado.emit(seleccionado)
  }
  
  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
}
