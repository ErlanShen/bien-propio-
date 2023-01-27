import { AuthService } from './../../../helpers/servicios/auth.service';

import { MensajesService } from './../../../helpers/servicios/mensajes.service';
import { Options } from 'ngx-quill-upload';
import { Foto } from './../../../helpers/modelos/foto';
import { GaleriaService } from './../../../helpers/servicios/galeria.service';
import { Quill } from 'quill';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginaService } from './../../../helpers/servicios/pagina.service';
import { Pagina } from './../../../helpers/modelos/pagina';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface opcion{
  nombre:string,
  valor:boolean
}

@Component({
  selector: 'app-form-pagina',
  templateUrl: './form-pagina.component.html',
  styleUrls: ['./form-pagina.component.scss']
})
export class FormPaginaComponent implements OnInit {
  imagenEdit:string
  verificar = new BehaviorSubject(false)
  cambio: number = 0
  chequear: boolean = false
  config: any
  editor: Quill
  id: string
  activo:opcion[]
  selectActivo:opcion
  editar: boolean = false
  pagina: Pagina = {
    activo:false,
    titulo: "",
    subtitulo: "",
    contenido: "",
    autor: "",
    fechaP: new Date(),

  }

  constructor(private paginaS: PaginaService, private activerouter: ActivatedRoute, private router: Router,
    private imageService: GaleriaService, private noti: MensajesService,private ch:ChangeDetectorRef,
    private auth:AuthService) {
    this.id = this.activerouter.snapshot.params.id
   
    if (this.id != "nuevo") {
      this.paginaS.getPaginasByid(this.id).subscribe(datos => {
        this.pagina = datos
        this.editar = true
        if (datos.contenido) {
          this.cambio = datos.contenido.length
        }

      })
    }
    this.activo=[
      {nombre: 'Si', valor: true},
      {nombre: 'No', valor: false}
    ];
    
    this.verificar.subscribe(dato => {
      if (dato && this.chequear === false) {
        this.noti.noGuardado()
      }
    })
    this.auth.miusuario$.subscribe(nombre=>{
      this.pagina.autor=nombre.uid
    })
    this.config = {
      imageResize: {
        displaySize: true // default false
      },
      imageHandler: {
        upload: (file) => {
          let imagen: Foto[] = []
          let nName = file.name.replace(/[\])}[{(]/g, '')
          imagen[0] = {
            nombre: (new Date()).getMilliseconds() + file.lastModified + nName,
            archivo: file,
            fecha: new Date()
          }
          
          return this.imageService.subirFotos(imagen).then(data => data
          )
        },
        accepts: ['png', 'jpg', 'jpeg', 'jfif']
      } as Options,

    }
    
    

  }


  ngOnInit(): void {
  }
  guardar(pagina: Pagina,id:string) {
    if (id==='nuevo'){
     
      let arreglo=pagina.titulo.toLowerCase().split(' ')
      let cambio=arreglo.map((palabra,indice)=>{
        if( indice===0){
          return  palabra
        }
        else{
         return palabra.charAt(0).toUpperCase()+palabra.slice(1) 
        }
      })
      pagina.id=cambio.join('')
    }
    this.paginaS.manejadorPaginas(pagina).then(()=>{
      this.router.navigateByUrl('/admin/pagina')
    }) 
  }
  onContentChanged(event) {
    let texto = event.html

    if (texto && this.cambio !== texto.length) {
      this.verificar.next(true)
      this.chequear = true
    } else {
      this.verificar.next(false)
      this.chequear = false
      this.cerrar()
    }

  }
  aceptar(pagina: Pagina,id:string) {
    this.noti.onConfirm()
    this.guardar(pagina,id)
  }

  cerrar() {
    this.noti.onReject()

  }
  rev(event: Quill) {
    this.editor = event
  }
  verImagenes2(event){
    this.imagenEdit=event[0]
    let posicion=this.editor.getSelection()?this.editor.getSelection().index:0
    
    this.editor.insertEmbed(posicion,'image',event[0])
   this.pagina.contenido=this.editor.root.innerHTML
  }
 
}
