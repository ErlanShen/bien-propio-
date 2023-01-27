import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from "@angular/fire/firestore";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { MensajesService } from './mensajes.service';
import { AuthService } from './auth.service';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private direccionColeccion: AngularFirestoreCollection<Usuario>;
  private listaClient: Observable<Usuario[]>
  private documento: AngularFirestoreDocument<Usuario>
  constructor(private base: AngularFirestore,private mensaje: MensajesService,private auth: AuthService)
  { this.direccionColeccion = this.base.collection<Usuario>('usuarios') }


  public devolverCliente():Observable<Usuario[]>{
    this.listaClient = this.direccionColeccion.snapshotChanges().pipe(
      map(data=> data.map(contenido=>{
        const documento = contenido.payload.doc.data()as Usuario 
        const uid = contenido.payload.doc.id 
        return { uid, ...documento}
      }))
    )
    return this.listaClient
  }

  public devolverUnCliente(elid:string):Observable <Usuario> {
    return this.direccionColeccion.doc(elid).snapshotChanges().pipe(
      map(dato=>{
        const documento = dato.payload.data()as Usuario
        const uid = dato.payload.id
        return {uid, ...documento}
      })
    )
  }

  editarCliente(client:Usuario){
    this.documento = this.direccionColeccion.doc(client.uid);
    this.documento.set(client,{merge:true})
    
  }

  editarPropiedadesCliente(cliente:Usuario, idpropiedad:string){
    this.documento = this.direccionColeccion.doc(cliente.uid) ;
    
   if (cliente.publicados.indexOf(idpropiedad) === -1 ){
    cliente.publicados.push(idpropiedad)
    this.documento.set(cliente,{merge:true})
   }
  }


  addFavoritos(favoritep:string, cliente:Usuario ){
    cliente.favorito.push(favoritep)
    this.editarCliente(cliente)
  }



  deleteFavoritos(favorito:string,cliente:Usuario){
    if(cliente.favorito){
      this.documento = this.direccionColeccion.doc(favorito)
      this.documento.delete

      //escribir logica para quitar favorito de arreglos de favoritos
      //una vez el cliente actualizado llamar a editarcliente con estos nuevos datos


  
    }
   
  }
}

