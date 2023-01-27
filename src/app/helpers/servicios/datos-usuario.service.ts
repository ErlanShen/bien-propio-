import { Blog } from './../modelos/blog';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { Usuario } from "../../helpers/modelos/usuario";
import { map } from "rxjs/operators";
@Injectable({

  providedIn: 'root'
})

export class DatosUsuarioService {

  usuario: Usuario
  private direccionColeccion: AngularFirestoreCollection<Usuario>;
  private listaUser: Observable<Usuario[]>
  private documento: AngularFirestoreDocument<Usuario>
  constructor(private base: AngularFirestore, private auth: AuthService) {
    this.direccionColeccion = this.base.collection<Usuario>('usuarios')
    this.auth.miusuario$.subscribe(nombre => {
      this.usuario = nombre
    })
  }




  public devolverUsuarios(): Observable<Usuario[]> {
    this.listaUser = this.direccionColeccion.snapshotChanges().pipe(
      map(data => data.map(contenido => {
        const documento = contenido.payload.doc.data() as Usuario

        const uid = contenido.payload.doc.id

        return { uid, ...documento }

      }))
    )
    return this.listaUser
  }

  public devolverUnUsuario(elid: string): Observable<Usuario> {
    return this.direccionColeccion.doc(elid).snapshotChanges().pipe(
      map(separado => {
        const documento = separado.payload.data() as Usuario
        const uid = separado.payload.id
        return { uid, ...documento }
      })
    )
  }

  updateuser(user: Usuario) {
    this.documento = this.direccionColeccion.doc(user.uid)
    this.documento.set(user, { merge: true })
  }
}
