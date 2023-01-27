import { DataCategoriasBlogService } from './../../../helpers/servicios/data-categorias-blog.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaBlog } from 'src/app/helpers/modelos/categoria-blog';

@Component({
  selector: 'app-categorias-blog',
  templateUrl: './categorias-blog.component.html',
  styleUrls: ['./categorias-blog.component.scss']
})
export class CategoriasBlogComponent implements OnInit {

  categorias: CategoriaBlog[]
  constructor(private categService: DataCategoriasBlogService) {
    this.categService.getAllCategories().subscribe(datos=>{
      this.categorias = datos
    })
   }

  ngOnInit(): void {
  }
  borrar(id: string){
    this.categService.deleteCategory(id)
  }
}
