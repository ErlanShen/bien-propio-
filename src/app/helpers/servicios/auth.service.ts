import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Roles, Usuario } from '../modelos/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  miusuario$: Observable<Usuario>
  private idCollection: AngularFirestoreCollection<Usuario>
  private documento: AngularFirestoreDocument<Usuario>

  constructor(private auth: AngularFireAuth, private base: AngularFirestore, private ruts: Router) {
    this.idCollection = this.base.collection<Usuario>("usuarios")
    this.miusuario$ = this.auth.authState.pipe(
      switchMap(usuario => {
        if (usuario) {
          return this.idCollection.doc(usuario.uid).valueChanges()
        }
        else {
          return of(null)
        }
      })
    )
  }

  iniciarsesioncorreo(correo: string, clave: string) {
    return this.auth.signInWithEmailAndPassword(correo, clave)

  }

  registrarcorreo(correo: string, clave: string, rol: number) {
    return this.auth.createUserWithEmailAndPassword(correo, clave).then(creado => {
      creado.user.sendEmailVerification()
      switch (rol) {
        case 0: {
          const miusuario: Usuario = {
            uid: creado.user.uid,
            displayName: this.dn(correo),
            email: creado.user.email,
            emailVerified: creado.user.emailVerified,
            photoURL: creado.user.photoURL,
            rol: Roles.CLIENTE,
            favorito: [],
            publicados: []
          }
          this.agregarusuario(miusuario)

          break
        }
        case 1: {
          const miusuario: Usuario = {
            uid: creado.user.uid,
            displayName: this.dn(correo),
            email: creado.user.email,
            emailVerified: creado.user.emailVerified,
            photoURL: creado.user.photoURL,
            rol: Roles.CLIENTE,
            favorito: [],
            publicados: []
          }
          this.agregarusuario(miusuario)
          break
        }

        default:
          break
      }


    })

  }

  dn(ema: string) {

    return (ema.split("@")[0])

  }


  private agregarusuario(user: Usuario) {
    this.idCollection.doc(user.uid).set(user)

  }

  public enviarCorreoClave(correo: string) {

    return this.auth.sendPasswordResetEmail(correo)
  }




  public cerrarsesion() {
    this.auth.signOut().then(() => {

      this.ruts.navigateByUrl("/inicio")

    })
  }
}
