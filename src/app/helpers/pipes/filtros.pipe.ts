import { Pipe, PipeTransform } from '@angular/core';
import { Propiedad } from '../modelos/propiedad';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(propiedades: Propiedad[], ...args: unknown[]): unknown {
    if (!args) {
      return propiedades
    }else{
      return
    }
  }

}
