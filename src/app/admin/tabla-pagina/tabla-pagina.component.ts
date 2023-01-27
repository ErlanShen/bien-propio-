import { PromocionesService } from './../../helpers/servicios/promociones.service';
import { Usuario } from './../../helpers/modelos/usuario';
import { DatosUsuarioService } from './../../helpers/servicios/datos-usuario.service';
import { map } from 'rxjs/operators';
import { PaginaService } from './../../helpers/servicios/pagina.service';
import { Pagina } from './../../helpers/modelos/pagina';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tabla-pagina',
  templateUrl: './tabla-pagina.component.html',
  styleUrls: ['./tabla-pagina.component.scss']
})
export class TablaPaginaComponent implements OnInit {
  paginas: Pagina[] = []

  constructor(private pagina: PaginaService, private usuarioS: DatosUsuarioService,private cdr:ChangeDetectorRef) {
    this.pagina.getPaginas().subscribe(pagina => {
      this.paginas = pagina
    })
  }

  ngOnInit(): void {
  }
  cambio(pagina: Pagina, evento) {
    this.cdr.detectChanges()
    pagina.activo = evento.checked
    this.pagina.updateChecked(pagina)
  }

  desactivador(activado: boolean, ocupados: number): boolean {
    return ocupados === 1 && activado === false ? true : false
  }
  
  borrar(pagina: Pagina) {
    this.pagina.deletePagina(pagina)
  }


}
