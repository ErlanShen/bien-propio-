import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RecomendadosBlog } from './../../helpers/modelos/recomendados-blog';
import { DataCategoriasBlogService } from './../../helpers/servicios/data-categorias-blog.service';
import { Blog } from './../../helpers/modelos/blog';
import { DataBlogsService } from './../../helpers/servicios/data-blogs.service';
import { CategoriaBlog } from 'src/app/helpers/modelos/categoria-blog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  blogs: Blog[]
  categorias: CategoriaBlog[]
  cantidadBlogs = []
  blogActuales: Blog[]
  blog: Blog
  constructor(private blogService: DataBlogsService, private catService: DataCategoriasBlogService, private router: Router,
    private activeRouter: ActivatedRoute) {
    this.catService.getAllCategories().subscribe(datos => {
      this.categorias = datos
    })

    this.blogService.getAllBlogs().subscribe(datos => {
      this.blogs = datos   
    })

    this.blogService.numeroBlogsActivos(3).subscribe(datos => {
      this.cantidadBlogs = datos
    })

    this.blogService.getLatestBlogs().subscribe(datos => {
      this.blogActuales = datos
    })
  }

  ngOnInit(): void {
  }

  filter(categoria: string) {
    this.blogService.filtrarBlogs(categoria).subscribe(datos => {
      this.blogs = datos
    })
  }

  todosBlogs() {
    this.blogService.getAllBlogs().subscribe(datos => {
      this.blogs = datos
    })
  }


}
