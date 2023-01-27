import { MensajesService } from './mensajes.service';
import { Foto } from './../modelos/foto';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {

  private coleccion: AngularFirestoreCollection<Foto>
  private documento: AngularFirestoreDocument<Foto>
  private listaFotos: Observable<Foto[]>
  private porcentaje: number[]= []
  constructor(
    private storage: AngularFireStorage,
    private baseDatos: AngularFirestore,
    private mesanjeServi: MensajesService,
    private http: HttpClient,
  ) {
    this.coleccion = this.baseDatos.collection<Foto>("galerias")
  }

  subirFotos(fotos: Foto[]): Promise<Foto[]> {

    return new Promise<Foto[]>((resolve) => {
      fotos.forEach((imagen,indice) => {
        const nombreImagen = `${"galerias/" + imagen.nombre + "/" + imagen.nombre}`
        const referencia = this.storage.ref(nombreImagen)
        const subir = this.storage.upload(nombreImagen, imagen.archivo)
        subir.snapshotChanges().pipe(
          finalize(() => {
            referencia.getDownloadURL().subscribe(enlace => {
              imagen.archivo = enlace
              this.coleccion.add(imagen)
              resolve(imagen.archivo)
              this.mesanjeServi.showSuccess("Se agrego la imagen: " + imagen.nombre)
              this.mesanjeServi.cerrarCargador()
            })
          })
        ).subscribe()
        subir.percentageChanges().subscribe(dato=>{
          let redondeado=Math.round(dato)
          this.porcentaje[indice]=redondeado
          this.mesanjeServi.cargador("hola",this.porcentaje)
        })
      })
    })
   
  }

  public traerImagen(): Observable<Foto[]> {
    this.listaFotos = this.coleccion.snapshotChanges().pipe(
      map(fotos => fotos.map(contenido => {
        const objeto = contenido.payload.doc.data()
        const id = contenido.payload.doc.id
        let imagen = { id, ...objeto }
        return imagen
      }))
    )
    return this.listaFotos
  }

  borrarImagen(obj: Foto) {
    this.mesanjeServi.confirmador("Va a borrar este archivo: " + obj.nombre).then(() => {
      this.storage.storage.refFromURL(obj.archivo).delete()
      this.documento = this.coleccion.doc(obj.id)
      this.documento.delete()
    }).catch(() => {
      this.mesanjeServi.Error("Se rechazo eliminar esta imagen " + obj.nombre)
    })
  }

  editarImagen(obj: Foto) {
    this.documento = this.coleccion.doc(obj.id)
    this.documento.update(obj)
  }

  getFoto() {
    return this.http.get<any>('assets/Foto')
      .toPromise()
      .then(res => <Foto[]>res.data)
      .then(data => { return data; });
  }
verificarExist(id:string):Promise<boolean>{
    return new Promise<boolean> ((resuelto,rechazo)=>
    {
      this.baseDatos.collection<Foto>('galerias',hallado=>hallado.where('archivo','==',id)).snapshotChanges().subscribe(
        arreglo=>{
         
          
          if (arreglo.length===0) {
            rechazo(false)
          }else{
            resuelto(true)
          }
         
        }
      )
    })
}

}
