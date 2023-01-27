import { style } from '@angular/animations';
import { CategoriaBlog } from './../../helpers/modelos/categoria-blog';
import { DataCategoriasBlogService } from './../../helpers/servicios/data-categorias-blog.service';
import { Blog } from './../../helpers/modelos/blog';
import { DataBlogsService } from './../../helpers/servicios/data-blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-blog-singular',
  templateUrl: './blog-singular.component.html',
  styleUrls: ['./blog-singular.component.scss']
})
export class BlogSingularComponent implements OnInit {

  blog: Blog
  categoria: CategoriaBlog
  largo: number = 0
  fontSize: number = 20
  fontPalabra: any
  palabra: number = 0

  constructor(private activeRoute: ActivatedRoute, private blogService: DataBlogsService,
    private categService: DataCategoriasBlogService) {
    const id = this.activeRoute.snapshot.params.id
    this.blogService.getBlogById(id).pipe(
      map(blog => {
        let nuevo: Blog = blog
        nuevo.categorias = this.categService.devolverListaCategorias(nuevo.categorias as string[]) as Observable<CategoriaBlog[]>
        return nuevo
      })
    ).subscribe(contenido => {
      this.blog = contenido
    })

    this.categService.getOneCategory(id).subscribe(datos => {
      this.categoria = datos
    })

  }

  ngOnInit(): void {
  }


}
