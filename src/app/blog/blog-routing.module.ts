import { BlogSingularComponent } from './blog-singular/blog-singular.component';
import { MostrarBlogsComponent } from './mostrar-blogs/mostrar-blogs.component';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',  
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'blogs/:id',
        component: MostrarBlogsComponent
      },
      {
        path: 'entrada/:id',
        component: BlogSingularComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
