import { MensajesService } from './mensajes.service';
import { Promociones } from './../modelos/promociones';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timestamp } from "@firebase/firestore-types";



@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  private coleccion: AngularFirestoreCollection<Promociones>;
  private promociones: Observable<Promociones[]>
  private documento: AngularFirestoreDocument<Promociones>

  constructor(private base: AngularFirestore, private mensajeServi: MensajesService) {
    this.coleccion = this.base.collection<Promociones>('promociones')
  }


  getPromotions(): Observable<Promociones[]> {
    this.promociones = this.coleccion.snapshotChanges().pipe(
      map(datos => datos.map(informacion => {
        const documento = informacion.payload.doc.data() as Promociones
        const id = informacion.payload.doc.id
        let objeto = { id, ...documento }
        objeto.fechaInicio = objeto.fechaInicio.toDate()
        objeto.fechaFin = objeto.fechaFin.toDate()
        return objeto
      }))
    )
    return this.promociones
  }

  getOnePromotion(id: string): Observable<Promociones> {
    return this.coleccion.doc(id).snapshotChanges().pipe(
      map(datos => {
        const documento = datos.payload.data() as Promociones
        const id = datos.payload.id
        let objeto = { id, ...documento }
        objeto.fechaInicio = this.transformadorFecha(objeto.fechaInicio)
        objeto.fechaFin = this.transformadorFecha(objeto.fechaFin)
        return objeto
      })
    )
  }

  private addPromotions(promocion: Promociones) {
    this.coleccion.add(promocion)
    this.mensajeServi.showSuccess("Se agrego la promoción: " + promocion.titulo)
  }

  private updatePromotions(promocion: Promociones) {
    this.documento = this.coleccion.doc(promocion.id)
    this.documento.set(promocion, { merge: true })
    this.mensajeServi.showSuccess("Se actualizó la promoción: " + promocion.titulo)
  }
  deletePromotion(promocion: Promociones) {
    this.mensajeServi.confirmador("Desea eliminar la promoción " + promocion.titulo).then(() => {
      this.documento = this.coleccion.doc(promocion.id)
      this.documento.delete()
    })

  }

  manejadorPromotions(promocion: Promociones) {
    if (promocion.id) {
      this.updatePromotions(promocion)
    } else {
      this.addPromotions(promocion)
    }
  }

  transformadorFecha(fecha: Timestamp) {
    let hoy: Date = new Date()
    if (fecha) {
      hoy = new Date(fecha.toDate())
    }
    return hoy
  }

  updateChecked(promocion: Promociones) {
    this.documento = this.coleccion.doc(promocion.id)
    this.documento.set(promocion, { merge: true })
  }

  numberActivePromotions(): Observable<Promociones> {
    return this.base.collection<Promociones>('promociones', buscar => buscar.where("activo", "==", true).limit(1)).snapshotChanges().pipe(
      map(datos => datos.map(valores => {
        const documento = valores.payload.doc.data() as Promociones
        const id = valores.payload.doc.id
        return { id, ...documento }
      })[0])
    )
  }

  activePromotions(): Observable<number> {
    return this.base.collection('promociones', buscar => buscar.where("activo", "==", true)).snapshotChanges().pipe(
      switchMap(encontrados => {
        return of(encontrados.length)
      })
    )
  }
}
