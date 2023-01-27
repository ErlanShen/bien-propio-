import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetEnumService {

  constructor() { }

  generarLista(enumerador: any): any[] {
    let resultado = [];
    Object.keys(enumerador).filter(texto => {
      return !Number(texto) && texto != "0"
    }).forEach((elementos, indice) => {
      resultado.push({ valor: indice, nombre: elementos })
    })
    return resultado
  }
  retornarEnumArreglo(arreglo: any, posicion: number): any {
    let encontrado: any
    Object(arreglo).forEach(elementos => {
      if (elementos.valor === posicion) {
        encontrado = elementos
      }
    })
    return encontrado
  }
}
