import { AuthService } from './../../../helpers/servicios/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MensajesService } from './../../../helpers/servicios/mensajes.service';

import { Foto } from './../../../helpers/modelos/foto';
import { GaleriaService } from './../../../helpers/servicios/galeria.service';
import { RutasService } from './../../../helpers/servicios/rutas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCategoriasBlogService } from './../../../helpers/servicios/data-categorias-blog.service';
import { DataBlogsService } from './../../../helpers/servicios/data-blogs.service';
import { Blog } from './../../../helpers/modelos/blog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaBlog } from 'src/app/helpers/modelos/categoria-blog';
import ImageResize from 'quill-image-resize-module';
import Quill from 'quill';
import { ImageHandler, Options } from 'ngx-quill-upload';



Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageHandler', ImageHandler);


@Component({
  selector: 'app-formulario-blog',
  templateUrl: './formulario-blog.component.html',
  styleUrls: ['./formulario-blog.component.scss']
})
export class FormularioBlogComponent implements OnInit {
  @ViewChild('custom') boton: any
  editor: Quill
  config: any
  imagenEdit: string
  blogs: Blog = {
    titulo: "",
    subtitulo: "",   
    estado: false,
    fechaCreacion: new Date(),
    fechaPublicacion: new Date(),
    autor: "",
    descripcion: "",
    contenido: "",
    categorias: [],
    imagen: ""
  }
  estado = [
    { label: "Si", value: true },
    { label: "No", value: false }
  ]

  fechaActual = new Date()
  categoriasBusqueda: CategoriaBlog[] = []
  fechaC: any
  fechaP: any
  editando: boolean = false
  cursor: any
  cambio: number = 0
  verificar = new BehaviorSubject(false)
  chequear: boolean = false
  usuario: string
 
  constructor(private blogService: DataBlogsService, private categoriaService: DataCategoriasBlogService,
    private router: Router, private activeRoute: ActivatedRoute, private serveRutas: RutasService,
    private imageService: GaleriaService, private noti: MensajesService, private auth: AuthService) {
    const id = this.activeRoute.snapshot.params.id

    if (id != "nuevo") {
      this.blogService.getBlogById(id).subscribe(datos => {
        this.blogs = datos
        this.editando = true
        if (datos.contenido) {
          this.cambio = datos.contenido.length
        }
      })

    }
    this.categoriaService.getAllCategories().subscribe(datos => {
      this.categoriasBusqueda = datos
    })
    this.verificar.subscribe(dato => {
      if (dato && this.chequear === false) {
        this.noti.noGuardado()
      }
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
  
    this.auth.miusuario$.subscribe(nombre=>{
      this.blogs.autor = nombre.uid
    })
    
  }

  ngOnInit(): void {
    this.serveRutas.actualizadorRutas()

  }

  guardar(blog: Blog) {
    this.blogService.manejadorBlogs(blog)
    this.router.navigateByUrl('/admin/blog')

  }

  verImagenes(eventos: any) {
   
    this.blogs.imagen = eventos[0]
  }

  verImagenes2(eventos: any) {
    this.imagenEdit = eventos[0]
    let position = this.editor.getSelection().index
    this.editor.insertEmbed(position, 'image', eventos[0])
  }

  rev(event) {
    this.editor = event

  }

  onContentChanged(event) {
    let texto = event.html
    let contenido = event.text
    this.blogs.descripcion = contenido
    if (texto && this.cambio !== texto.length) {
      this.verificar.next(true)
      this.chequear = true
    } else {
      this.verificar.next(false)
      this.chequear = false
      this.cerrar()
    }

  }

  aceptar(blog: Blog) {
    this.noti.onConfirm()
    this.guardar(blog)
  }

  cerrar() {
    this.noti.onReject()   
  }
}
