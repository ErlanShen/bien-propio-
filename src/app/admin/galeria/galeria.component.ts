import { GaleriaService } from './../../helpers/servicios/galeria.service';
import { MensajesService } from './../../helpers/servicios/mensajes.service';
import { Foto } from './../../helpers/modelos/foto';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  misFotos: Foto[] = [];
  invisible: boolean = false;
  seleccionado: number;
  todasLasFotos: Foto[];
  miMensaje: string = "Copiar link"
  posicion: number = 0;
  filas: number = 12;
  
  @ViewChild('upL') upLoader: FileUpload

  constructor(
    private servicio: GaleriaService,
    private mensajesServi: MensajesService,
  ) {
    this.servicio.traerImagen().subscribe(item => {
      this.todasLasFotos = item
    })
  }

  ngOnInit(): void {
  }

  mouseEnter(posicion: number) {
    this.invisible = true
    if (posicion === this.seleccionado) {
      this.miMensaje = "Copiar Link"
    }
    this.seleccionado = posicion
  }
  mouseLeave() {
    this.invisible = false
    this.seleccionado = null
  }

  ver(evento: any) {
    const archivos = evento.currentFiles
    for (let i = 0; i < archivos.length; i++) {
      let nName = archivos[i].name.replace(/[\])}[{(]/g, '')
      this.misFotos[i] = {
        archivo: archivos[i],
        nombre: (new Date()).getMilliseconds() + archivos[i].lastModified + nName,
        fecha: new Date(),
      }
    }
    
  }

  uploadPhoto(obj: Foto[]) {
    this.servicio.subirFotos(obj).then(() => {
      this.mensajesServi.cargador
      this.upLoader.clear()
    })
  }

  copyUrlPhoto(obj: string, posicion: number, seleccion: number) {
    navigator.clipboard.writeText(obj);
    if (posicion === seleccion) {
      this.miMensaje = 'Copiado!'
      this.seleccionado = null
    }
    setTimeout(() => {
      this.miMensaje = "Copiar Link"
    }, 250);

  }

  deletePhoto(obj: Foto) {
    this.servicio.borrarImagen(obj)
  }

  cortadorArreglo(misfotos: Foto[], queremos: number, inicio: number): Foto[] {
    let encontradas: Foto[] = []
    let maximo: number = (queremos + inicio) - 1
    for (let index = inicio; index <= maximo; index++) {
      const foto = misfotos[index];
      if (foto === undefined) {
        return encontradas
      }
      encontradas.push(foto)
    }
    return encontradas
  }
  onPageChange(event) {
    this.posicion = event.first;
  }

}
