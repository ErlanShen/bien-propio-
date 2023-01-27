import { Usuario } from './../../helpers/modelos/usuario';
import { DatosUsuarioService } from 'src/app/helpers/servicios/datos-usuario.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataCategoriasBlogService } from './../../helpers/servicios/data-categorias-blog.service';
import { CategoriaBlog } from './../../helpers/modelos/categoria-blog';
import { DataBlogsService } from './../../helpers/servicios/data-blogs.service';
import { Router } from '@angular/router';
import { Blog } from './../../helpers/modelos/blog';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tabla-blog',
  templateUrl: './tabla-blog.component.html',
  styleUrls: ['./tabla-blog.component.scss']
})
export class TablaBlogComponent implements OnInit {

  blogs: Blog[] = []
  encendidos: number = 0

  constructor(private blogService: DataBlogsService, private router: Router, private catService: DataCategoriasBlogService,
    private cdr: ChangeDetectorRef, private usuarioService: DatosUsuarioService) {

    this.blogService.getAllBlogs().pipe(
      map(blogs => blogs.map(blog => {
        let nuevo: Blog = blog
        nuevo.categorias = this.catService.devolverListaCategorias(nuevo.categorias as string[]) as Observable<CategoriaBlog[]>
        nuevo.autor = this.usuarioService.devolverUnUsuario(nuevo.autor as string) as Observable<Usuario>
        return nuevo
      }))
    ).subscribe(rearmado => {
      this.blogs = rearmado
    })
    this.blogService.activeBlogs().subscribe(datos => {
      this.encendidos = datos
    })


  }

  ngOnInit(): void {

  }

  borrar(id: string) {
    this.blogService.deleteBlog(id)
  }
  cambio(blog: Blog, evento) {
    this.cdr.detectChanges()
    blog.estado = evento.checked
    this.blogService.updateChecked(blog)
  }

  desactivador(activado: boolean, ocupados: number): boolean {
    return ocupados === 3 && activado === false ? true : false
  }


}
