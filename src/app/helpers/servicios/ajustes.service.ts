import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Identidad } from '../modelos/identidad';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  private Formularioajustes: Observable<Identidad>
  private direccionColeccion: AngularFirestoreCollection<Identidad>
  private documento: AngularFirestoreDocument<Identidad>
  
  constructor(private base: AngularFirestore) {
    this.direccionColeccion = this.base.collection<Identidad>("ajustes")
  }

  verFormularioAjustes():Observable<Identidad>{
    return this.base.collection<Identidad>("ajustes",unico=>unico.limit(1)).snapshotChanges().pipe(
      map(formulario=>formulario.map(dato=>{
        const documento=dato.payload.doc.data()
        const id=dato.payload.doc.id
        return {id: id,...documento}
      })[0]
      )
    )
  }

  update(identidad:Identidad){
    this.documento=this.direccionColeccion.doc(identidad.id)
    this.documento.set(identidad,{merge:true})
  }

}
