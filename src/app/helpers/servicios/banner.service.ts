import { Router } from '@angular/router';
import { MensajesService } from './mensajes.service';
import { Banner } from './../modelos/banner';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {map, switchMap} from 'rxjs/operators'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private miColeccion:AngularFirestoreCollection<Banner>;
  private banners: Observable<Banner[]>;
  private documento: AngularFirestoreDocument<Banner>;

  constructor(private base: AngularFirestore, private mensaje: MensajesService,
    private router: Router) {
    this.miColeccion= this.base.collection<Banner>("banners")
   }
   public getBanners(): Observable<Banner[]>{
    this.banners= this.base.collection('banners', buscar=> buscar.orderBy("activo", "desc")).snapshotChanges().pipe(
      map(data=> data.map(docu=>{
        const documento= docu.payload.doc.data() as Banner;
        const id= docu.payload.doc.id
        return {id, ...documento}
      }))
    )
    return this.banners
  }
  public getBannerById(idB: string){
    return this.miColeccion.doc(idB).snapshotChanges().pipe(
      map(data=>{
        const documento= data.payload.data() as Banner
        const id= data.payload.id
        return {id, ...documento}
      }))

  }
  manejadorBanners(banner: Banner){
    if (banner.id){
      this.editBanner(banner)
      this.router.navigateByUrl('/admin/banners')
    }
    else{
      this.addBanner(banner)
      this.router.navigateByUrl('/admin/banners')
    }
  }
  private addBanner(banner: Banner){
    this.miColeccion.add(banner).then(()=>{
      this.mensaje.showSuccess(" Se agregó el banner "+banner.mensaje)
    })
  }
  editBanner(banner: Banner){
    this.documento=this.miColeccion.doc(banner.id);
    this.documento.set(banner,{merge:true})
    this.mensaje.showSuccess(" Se actualizó el banner "+ banner.mensaje)
  }
  deleteBanner(banner: Banner){
    this.mensaje.confirmador("Se eliminará este banner").then(()=>{
      this.documento=this.miColeccion.doc(banner.id);
      this.documento.delete();
    })
  }
  public getActiveBanners(num: number): Observable<Banner[]>{
    return this.base.collection<Banner>('banners', buscar=> buscar.where("activo","==",true).limit(num)).snapshotChanges().pipe(
      map(valores=> valores.map(internos=> {
        const documento= internos.payload.doc.data() as Banner
        const id= internos.payload.doc.id
        let armado = {id,...documento}
        return armado
      } ))
    )
  }

  public getNumberOfActiveBanners(): Observable<number>{
    return this.base.collection('banners', buscar=> buscar.where("activo","==", true)).snapshotChanges().pipe(
      switchMap(encontrados=>{
        return of(encontrados.length)
      })
    )
  }
  public getBannersByCat(cat:number): Observable<Banner[]>{
    return this.base.collection<Banner>('banners', buscar=> buscar.where("activo","==",true).where("transacciones","==",cat)).snapshotChanges().pipe(
      map(valores=> valores.map(internos=> {
        const documento= internos.payload.doc.data() as Banner
        const id= internos.payload.doc.id
        let armado = {id,...documento}
        return armado
      } ))
    )
  }



}
