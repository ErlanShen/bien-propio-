import { RutasService } from './../../../helpers/servicios/rutas.service';
import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCategoriasBlogService } from './../../../helpers/servicios/data-categorias-blog.service';
import { CategoriaBlog } from './../../../helpers/modelos/categoria-blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-categorias-blog',
  templateUrl: './formulario-categorias-blog.component.html',
  styleUrls: ['./formulario-categorias-blog.component.scss']
})
export class FormularioCategoriasBlogComponent implements OnInit {

  categorias: CategoriaBlog =
    {
      nombre: "",
      imagen: ""
    }

  categoriasBlog: CategoriaBlog[]  
  editando: boolean=false
  constructor(private catService: DataCategoriasBlogService, private router: Router, private activatedRoute: ActivatedRoute,
    private serveRutas: RutasService) {
    const id = this.activatedRoute.snapshot.params.id
    if (id != "nuevo") {
      this.catService.getOneCategory(id).subscribe(datos => {
        this.categorias = datos
      })
      this.editando=true
    }
  }

  ngOnInit(): void {
    this.serveRutas.actualizadorRutas()
  
  }

  guardar(categoria: CategoriaBlog) {
    this.catService.manejadorCategories(categoria)
    this.router.navigateByUrl('/admin/catBlog')
  }
  verImagenes(eventos: any){
  
    this.categorias.imagen=eventos[0]
  }
}
