import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { DataCategoriasBlogService } from './../../helpers/servicios/data-categorias-blog.service';
import { CategoriaBlog } from 'src/app/helpers/modelos/categoria-blog';
import { Blog } from './../../helpers/modelos/blog';
import { DataBlogsService } from './../../helpers/servicios/data-blogs.service';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-mostrar-blogs',
  templateUrl: './mostrar-blogs.component.html',
  styleUrls: ['./mostrar-blogs.component.scss']
})
export class MostrarBlogsComponent implements OnInit {

  titulos: string
  resultados: Blog[]
  blogs: Blog[]
  categoria: CategoriaBlog
  posicion: number = 0
  filas: number = 12;
  todosBlogs: Blog[]
  orden: boolean = true
  texto: string = 'MOSTRARBLOGS.ORDENAR.TITULO'
  icono: string = 'pi-sort-alt'
  id: any
  faSearch = faSearch


  constructor(private blogsService: DataBlogsService, private categoriaService: DataCategoriasBlogService,
    private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params.id
    this.id = id

    this.blogsService.filtrarBlogs(this.id, true).subscribe(datos => {
      this.blogs = datos
    })

    this.categoriaService.getOneCategory(this.id).subscribe(datos => {
      this.categoria = datos
    })

  }

  ngOnInit(): void {

  }

  onPageChange(event) {
    this.posicion = event.first;
  }

  ordenarDesc() {
    this.orden = !this.orden

    if (this.orden) {
      this.texto = 'MOSTRARBLOGS.ORDENAR.ANTIGUOS'
      this.icono = 'pi-arrow-down'
    } else {
      this.texto = 'MOSTRARBLOGS.ORDENAR.NUEVOS'
      this.icono = 'pi-arrow-up'
    }
    this.blogsService.filtrarBlogs(this.id, this.orden).subscribe(datos => {
      this.blogs = datos

    })
  }

  search(event) {
    let resultado: Blog[] = []
    let titulos: Blog[] = []
    this.blogs.forEach(data => {
      resultado.push(data)
    })
    let query = event.query.toLowerCase()
    let titulosFiltro = resultado.filter(data => {
      return data.titulo.toLowerCase().indexOf(query) > -1
    })
    titulosFiltro.forEach(datos => {
      titulos.push(datos)
    })
    this.resultados = titulos
  }

  cortadorContenido(texto: string) {
       
    let resultado = []
    let expres = /\s/    
    let url = /http(s)?:\/\/([\w-]+.)+[\w-]+(\/[\w- ./?%&=])?/
    let direccion = /http?s?:?\/\/.*\.(?:png|jpg|jpeg|gif|png|svg|com)((\/).+)?/ 
    ///http(s)?:\/\/.+\.(png|jpg|jpeg|gif|png|svg)((\/).+)?/ 
    resultado.push(texto.split(" ", 20).join(" ").split(direccion).join(" "))    
    return resultado
  }
  ///[^\r\n]+/g

}
