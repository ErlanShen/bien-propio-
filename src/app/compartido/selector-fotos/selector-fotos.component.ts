import { GaleriaService } from './../../helpers/servicios/galeria.service';
import { Foto } from './../../helpers/modelos/foto';
import { Component, OnInit, ChangeDetectorRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-selector-fotos',
  templateUrl: './selector-fotos.component.html',
  styleUrls: ['./selector-fotos.component.scss']
})
export class SelectorFotosComponent implements OnInit {

  foto: Foto[] = [];
  lasfotos: Foto[];
  posicion: number = 0;
  filas: number = 4;
  @Input('fotoSelec') misSeleccionado:string[] = [];
  unico: string="";
  intermedia:any;
  disable:boolean=false
  paginaActual:number=1
  @ViewChild('op') panel:OverlayPanel
  @ViewChild('upL') upLoader: FileUpload
  @Input('multiple') multiples: boolean=false
  @Output('checkados') laSeleccion  = new EventEmitter<string[]>()

  constructor(
    private servicioG: GaleriaService,
    private detector: ChangeDetectorRef,
  ) {
    this.servicioG.traerImagen().subscribe(imagen => {
      this.lasfotos = imagen
    })
  }

  ngOnInit(): void {

  }

  onPageChange(event) {
    this.posicion = event.first;
    this.paginaActual=Number(event.first)
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

  verCambio(obj: any, posicion: number, url: string) {
    if (obj.checked) {
      this.misSeleccionado.push(
        url
      )
    } else {
      this.misSeleccionado = this.misSeleccionado.filter(verificar => {
        return verificar === this.misSeleccionado[posicion] ? false : true
      })
    }
  }

  enviador(seleccion: string[]) {
    this.laSeleccion.emit(seleccion)
    this.panel.hide() 
  }

  cancelar() {
    this.upLoader.clear()
    this.misSeleccionado=[]
    this.panel.hide()
  }

  uploadPhoto(imagen: Foto[]) {
    this.servicioG.subirFotos(imagen).then(subidas => {
      this.upLoader.clear()
    })
  }

  ver(evento: any) {
    const archivos = evento.currentFiles
    for (let i = 0; i < archivos.length; i++) {
      this.foto[i] = {
        archivo: archivos[i],
        nombre: (new Date()).getMilliseconds() + archivos[i].lastModified + archivos[i].name,
        fecha: new Date(),
      }
    }
  }
  cambiado(evento:any, pos: number, fotos: Foto[], pagina:number){
   const pag= pagina!=1 ? pos+pagina : pos
   if(!this.multiples && evento.checked){
     this.misSeleccionado.pop()
      this.misSeleccionado[0]=fotos[pag].archivo
   }
  } 
}