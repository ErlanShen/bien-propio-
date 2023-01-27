import { Identidad } from './../../../helpers/modelos/identidad';
import { ActivatedRoute } from '@angular/router';
import { DataBlogsService } from './../../../helpers/servicios/data-blogs.service';
import { Observable, of } from 'rxjs';
import { RecomendadosBlog } from './../../../helpers/modelos/recomendados-blog';
import { Blog } from './../../../helpers/modelos/blog';
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-recomendados-tarjeta',
  templateUrl: './recomendados-tarjeta.component.html',
  styleUrls: ['./recomendados-tarjeta.component.scss']
})
export class RecomendadosTarjetaComponent implements OnInit {

  @Input("datos") blog: Blog 
  blogsActuales: Blog[]

  constructor(private blogServicio: DataBlogsService) { 

    this.blogServicio.getLatestBlogs().subscribe(datos => {
      this.blogsActuales = datos
    })

  }

  ngOnInit(): void {

  }

  transformador(numero: string): number {
    let respuesta = numero.split("%")
    return Number(respuesta[0])
  }

  
}
