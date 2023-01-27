import { Router } from '@angular/router';
import { MensajesService } from './mensajes.service';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Blog } from './../modelos/blog';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class DataBlogsService {
  blog: Blog[]

  private direccionColeccion: AngularFirestoreCollection<Blog>
  private listaBlogs: Observable<Blog[]>
  private documento: AngularFirestoreDocument<Blog>
  constructor(private base: AngularFirestore, private mensajeService: MensajesService, private router: Router) {
    this.direccionColeccion = this.base.collection<Blog>('blogs')
  }

  getAllBlogs(): Observable<Blog[]> {
    this.listaBlogs = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as any
        const id = info.payload.doc.id
        let blog = { id, ...documento }
        blog.fechaCreacion = blog.fechaCreacion.toDate()
        blog.fechaPublicacion = blog.fechaPublicacion.toDate()     
        return blog as Blog      
      }))
    )
    return this.listaBlogs
  }
  getBlogById(id: string) {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(datos => {
        const documento = datos.payload.data() as any
        const id = datos.payload.id
        let blog = { id, ...documento }
        blog.fechaCreacion = blog.fechaCreacion.toDate()
        blog.fechaPublicacion = blog.fechaPublicacion.toDate()
        return blog as Blog
      })
    )
  }

  addBlog(blog: Blog) {
    this.direccionColeccion.add(blog)
  }

  updateBlog(blog: Blog) {
    this.documento = this.direccionColeccion.doc(blog.id)
    this.documento.update(blog)
  }


  deleteBlog(id: string) {
    this.documento = this.direccionColeccion.doc(id)
    this.documento.delete()
  }

  manejadorBlogs(blog: Blog) {
    if (blog.id) {
      this.updateBlog(blog)
    } else {
      this.addBlog(blog)
    }
  }

  filtrarBlogs(categorias: string, orden?: boolean) {
    let busqueda: any = "asc"
    if (orden) {
      busqueda = "desc"
    } else {
      busqueda = "asc"
    }
    return this.base.collection<Blog>('blogs', ordenar => ordenar.orderBy("fechaPublicacion", busqueda)).snapshotChanges().pipe(
      map(datos => datos.map(data => {
        const documento = data.payload.doc.data() as any
        const id = data.payload.doc.id
        let blog = { id, ...documento }
        blog.fechaCreacion = blog.fechaCreacion.toDate()
        blog.fechaPublicacion = blog.fechaPublicacion.toDate()
        return blog as Blog
      })),
      map(encontrados => encontrados.filter(verificar => {
        let resultado: boolean = false
        verificar.categorias.forEach(id => {
          if (id === categorias) {
            resultado = true
          }
        })
        return resultado
      }))
    )
  }

  numeroBlogsActivos(cantidad: number): Observable<Blog[]> {
    return this.base.collection<Blog>('blogs', buscar => buscar.where("estado", "==", true).limit(cantidad)).snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as any
        const id = info.payload.doc.id
        let blog = { id, ...documento }
        blog.fechaCreacion = blog.fechaCreacion.toDate()
        blog.fechaPublicacion = blog.fechaPublicacion.toDate()
        return blog as Blog
      })))
  }

  updateChecked(blog: Blog) {
    this.documento = this.direccionColeccion.doc(blog.id)
    this.documento.set(blog, { merge: true })
  }

  activeBlogs(): Observable<number> {
    return this.base.collection('blogs', buscar => buscar.where("estado", "==", true)).snapshotChanges().pipe(
      switchMap(encontrados => {
        return of(encontrados.length)
      })
    )
  }

  getLatestBlogs(): Observable<Blog[]> {
    return this.base.collection<Blog>('blogs', ordenar => ordenar.orderBy("fechaPublicacion", "desc").limit(4)).snapshotChanges().pipe(
      map(datos => datos.map(contenido => {
        const documento = contenido.payload.doc.data() as any
        const id = contenido.payload.doc.id
        let blog ={ id, ...documento }
        blog.fechaCreacion = blog.fechaCreacion.toDate()
        blog.fechaPublicacion = blog.fechaPublicacion.toDate()
        return blog as Blog
      }))
    )
  }

  
}
