import { MensajesService } from './mensajes.service';
import { map, switchMap } from 'rxjs/operators';
import { RecomendadosInicio } from './../modelos/recomendados-inicio';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecomendadosService {

  private direccionColeccion: AngularFirestoreCollection<RecomendadosInicio>
  private documento: AngularFirestoreDocument<RecomendadosInicio>
  private listaRecomendados: Observable<RecomendadosInicio[]>
  constructor(private base: AngularFirestore, private mensaje: MensajesService) {
    this.direccionColeccion = this.base.collection<RecomendadosInicio>('recomendados')
  }

  getRecomendados(): Observable<RecomendadosInicio[]> {
    this.listaRecomendados = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as RecomendadosInicio
        const id = info.payload.doc.id
        return { id, ...documento }
      }))
    )
    return this.listaRecomendados
  }

  getRecomendadosById(id: string) {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(datos => {
        const documento = datos.payload.data() as RecomendadosInicio
        const id = datos.payload.id
        return { id, ...documento }
      })
    )
  }

  addRecomendado(recomendado: RecomendadosInicio) {
    this.direccionColeccion.add(recomendado).then(() => {
      this.mensaje.showSuccess("Se agrego con éxito " + recomendado.titulo)
    })
  }

  updateRecomendado(recomendado: RecomendadosInicio) {
    this.documento = this.direccionColeccion.doc(recomendado.id)
    this.documento.set(recomendado, { merge: true }).then(() => {
      this.mensaje.showSuccess("Se actualizó el recomendado " + recomendado.titulo)
    })

  }

  deleteRecomendado(recomendado: RecomendadosInicio) {
    this.mensaje.confirmador("¿Esta seguro de eliminar " + recomendado.titulo + "?").then(() => {
      this.documento = this.direccionColeccion.doc(recomendado.id)
      this.documento.delete().then(() => {
        this.mensaje.showSuccess("Se elimino " + recomendado.titulo)
      })
    }).catch(() => {
      this.mensaje.Warning("Se rechazó eliminar " + recomendado.titulo)
    })

  }

  manejadorRecomendados(recomendado: RecomendadosInicio) {
    if (recomendado.id) {
      this.updateRecomendado(recomendado)

    } else {
      this.addRecomendado(recomendado)
    }
  }
  countActiveRecomendados(): Observable<number> {
    return this.base.collection('recomendados', buscar => buscar.where("activo", "==", true)).snapshotChanges().pipe(
      switchMap(encontrados => {
        return of(encontrados.length)
      })
    )
  }
  activeRecomendados(): Observable<RecomendadosInicio[]> {
    return this.base.collection<RecomendadosInicio>('recomendados', activos => activos.where("activo", "==", true).limit(5)).snapshotChanges().
      pipe(map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as RecomendadosInicio
        const id = info.payload.doc.id
        return { id, ...documento }
      })))
  }
  
  filterByOrder(): Observable<RecomendadosInicio[]> {
    return this.base.collection<RecomendadosInicio>('recomendados', datos => datos.orderBy('orden', 'asc')).snapshotChanges().pipe(
      map(datos => datos.map(info => {
        const documento = info.payload.doc.data() as RecomendadosInicio
        const id = info.payload.doc.id
        return { id, ...documento }
      }))
    )
  }

}
