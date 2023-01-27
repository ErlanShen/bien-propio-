import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { Foto } from './../../../../helpers/modelos/foto';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { faTrash, faUndo, faPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fotos-clientes',
  templateUrl: './fotos-clientes.component.html',
  styleUrls: ['./fotos-clientes.component.scss']
})
export class FotosClientesComponent implements OnInit {
  faTrash=faTrash
  faSyncAlt=faUndo
  faPlus=faPlus
  startIndex: number=0
  misFotos: Foto[] = [];
  guardar:Foto[]=[]
  @Output('galeria') emitidor= new EventEmitter<[Foto[],Foto[]]>()
  @ViewChildren('rotar') imagenes:QueryList<ElementRef>
  @Input('imagenes') imagenesPrev: Foto[]=[];
  @Input('imagenesGuardar') imagenesGuardar: Foto[]=[];
  @Input('multiple') multiples:boolean=false;
  @Input('id') id:number=0;
  @Input('imgsEditar') imgsEditar: string[] 
  @ViewChild('img',{static:true}) verInput:ElementRef
  constructor(private render:Renderer2, private propiedadS:PropiedadesService) { }

  rotar:string=''
  ngOnInit(): void {
     if (this.imagenesPrev && this.imagenesPrev.length>0) {
      this.misFotos=this.imagenesPrev
      this.guardar=this.imagenesGuardar
    }
  }

  ver(evento: any) {
    if(!this.multiples && this.misFotos.length>0){
      this.misFotos=[]
    }
    if (!this.multiples && this.imgsEditar.length>0) {
      this.imgsEditar=[]
    }
    const archivos = evento.target.files
    for (let i = 0; i < archivos.length; i++) {
      if (archivos[i] instanceof File) {
        const reader = new FileReader();
      reader.readAsDataURL(archivos[i])
      let foto: Foto={
        nombre: archivos[i].name,
        fecha: new Date().getMilliseconds(),
      }
      reader.onload=()=>{
        foto.archivo=reader.result
      }
      this.misFotos.push(foto)
      this.guardar.push({
        nombre: archivos[i].name,
        fecha: new Date().getMilliseconds(),
        archivo:archivos[i]
      })
      }
    }
    this.emitidor.emit([this.misFotos, this.guardar])
  }
  quitarFoto(numero:number){
   
    if (!this.multiples && numero === 0)  {
      this.verInput.nativeElement.value=""
      this.misFotos.splice(numero,1)
      this.guardar.splice(numero,1)
    
    }
    else{
      let lista = new DataTransfer()
      this.misFotos.splice(numero,1)
      this.guardar.splice(numero,1)
      this.emitidor.emit([this.misFotos, this.guardar])
      this.misFotos.forEach(elementos=>{
        let archivos = new File([elementos.archivo],elementos.nombre)
        lista.items.add(archivos)

      })
      this.verInput.nativeElement.files=lista.files
      
    }  
   
  }
 
  onDragStart(index: number) {
    this.startIndex = index;
}

onDrop(dropIndex: number) {
    const general = this.misFotos[this.startIndex]; 
    this.misFotos.splice(this.startIndex, 1);      
    this.misFotos.splice(dropIndex, 0, general);    
}
onDrop2(dropIndex: number) {
  const general = this.imgsEditar[this.startIndex]; 
  this.imgsEditar.splice(this.startIndex, 1);      
  this.imgsEditar.splice(dropIndex, 0, general);    
}
borrarFoto(indice:number){
 
    this.propiedadS.borrarImagenURL(this.imgsEditar[indice])
   this.imgsEditar.splice(indice,1)      
}

}
