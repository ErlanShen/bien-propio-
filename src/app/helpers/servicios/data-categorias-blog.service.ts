import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CategoriaBlog } from './../modelos/categoria-blog';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCategoriasBlogService {

  private direccionColeccion: AngularFirestoreCollection<CategoriaBlog>
  private listacategorias: Observable<CategoriaBlog[]>
  private documento: AngularFirestoreDocument<CategoriaBlog>
  constructor(private base: AngularFirestore) {
    this.direccionColeccion = this.base.collection<CategoriaBlog>('categoriasBlog')
  }

  getAllCategories(): Observable<CategoriaBlog[]> {
    this.listacategorias = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as CategoriaBlog
        const id = info.payload.doc.id
        let armado = { id, ...documento }
        return armado
      }))
    )
    return this.listacategorias
  }

  getOneCategory(id: string): Observable<CategoriaBlog> {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(datos => {
        const documento = datos.payload.data() as CategoriaBlog
        const id = datos.payload.id
        let armado = { id, ...documento }
        return armado
      })
    )
  }

  addCategory(categoria: CategoriaBlog) {
    this.direccionColeccion.add(categoria)
  }
  updateCategory(categoria: CategoriaBlog) {
    this.documento = this.direccionColeccion.doc(categoria.id)
    this.documento.update(categoria)
  }
  deleteCategory(id: string) {
    this.documento = this.direccionColeccion.doc(id)
    this.documento.delete()
  }

  manejadorCategories(categoria: CategoriaBlog) {
    if (categoria.id) {
      this.updateCategory(categoria)
    } else {
      this.addCategory(categoria)
    }
  }

  devolverListaCategorias(id: string[]): Observable<CategoriaBlog[]>{
   let retorno: CategoriaBlog[] = []
    id.forEach((datos, indice)=>{
      this.getOneCategory(datos).subscribe(cat=>{
        retorno[indice] = cat
      })
    })   
    
    return of(retorno)
  }

}
