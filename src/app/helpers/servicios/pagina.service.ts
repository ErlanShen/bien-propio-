import { MensajesService } from './mensajes.service';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pagina } from './../modelos/pagina';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  private direcioncolecion: AngularFirestoreCollection<Pagina>
  private listaPaginas: Observable<Pagina[]>
  private documento: AngularFirestoreDocument<Pagina>
  constructor(private base: AngularFirestore,private notificacion:MensajesService) {
    this.direcioncolecion = this.base.collection<Pagina>('pagina')
  }
  getPaginas(): Observable<Pagina[]> {
    this.listaPaginas = this.direcioncolecion.snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as any
        const id = info.payload.doc.id
        let pagina = {
          id, ...documento
        }
        pagina.fechaP = pagina.fechaP.toDate()
        return pagina as Pagina
      }))
    )
    return this.listaPaginas
  }
  getPaginasByid(id: string) {
    return this.direcioncolecion.doc(id).snapshotChanges().pipe(
      map(dato => {
        const documento = dato.payload.data() as any
        const id = dato.payload.id
        let pagina = {
          id, ...documento
        }
        pagina.fechaP = pagina.fechaP.toDate()
        return pagina as Pagina
      }))
  }
  addPagina(pagina: Pagina) {
   return this.direcioncolecion.add(pagina)
  }
  updatePagina(pagina: Pagina) {
    this.documento = this.direcioncolecion.doc(pagina.id)
   return this.documento.set(pagina, {
      merge: true
    })
  }
  deletePagina(pagina: Pagina) {
    this.notificacion.confirmador(pagina.titulo).then(()=>{
      this.documento = this.direcioncolecion.doc(pagina.id)
      this.documento.delete()
    }).catch(error=>{
      this.notificacion.Error(error)
    })

  }
  manejadorPaginas(pagina: Pagina): Promise<any> {
    return new Promise<any>(resuelto => {
      if (pagina.id) {
      this.updatePagina(pagina).then(()=>{
        resuelto(true)
      })
      }
      else {
        this.addPagina(pagina).then(()=>{
          resuelto(true)
        })
      }
    })

  }
  
  updateChecked(pagina: Pagina){
    this.documento = this.direcioncolecion.doc(pagina.id)
    this.documento.set(pagina, {merge: true})
   }
  numberActivePagina(): Observable<Pagina> {
    return this.base.collection<Pagina>('promociones', buscar => buscar.where("activo","==", true).limit(10)).snapshotChanges().pipe(
      map(datos => datos.map(valores=>{
        const documento = valores.payload.doc.data() as Pagina
        const id = valores.payload.doc.id
        return {id, ...documento}
      })[0])
    )
  }

  footerViewPage():Observable<Pagina[]> {
    this.listaPaginas = this.base.collection<Pagina>('pagina', buscar => buscar.where("activo","==",true)).snapshotChanges().pipe(
      map(pages=>pages.map(valores=>{
        const documento = valores.payload.doc.data() as Pagina
        const id = valores.payload.doc.id
        return {id, ...documento}
      }))
    )
    return this.listaPaginas
  }
}
