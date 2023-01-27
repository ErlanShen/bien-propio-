import { Transacciones } from 'src/app/helpers/modelos/transacciones';
import { GaleriaService } from './galeria.service';
import { Foto } from './../modelos/foto';
import { MensajesService } from './mensajes.service';
import { Propiedad, Publicacion } from './../modelos/propiedad';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, finalize, toArray, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ClienteService } from './cliente.service';
import { AuthService } from './auth.service';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  private direccionColeccion: AngularFirestoreCollection<Propiedad>;
  private listaBlogs: Observable<Propiedad[]>;
  private documentos: AngularFirestoreDocument<Propiedad>;
  private porcentaje: number[] = [];
  private urls: string[] = [];
  private usuario: Usuario;
  constructor(private base: AngularFirestore,
    private mensajesServ: MensajesService, private storage: AngularFireStorage,
    private galeria: GaleriaService, private clienteS:ClienteService,private auth:AuthService) {
    this.direccionColeccion = this.base.collection<Propiedad>('propiedad')

    this.auth.miusuario$.subscribe(datos=>{

      this.usuario = datos
    })

  }


  public getPropiedades(): Observable<Propiedad[]> {
    this.listaBlogs = this.direccionColeccion.snapshotChanges().pipe(
      map(datos => datos.map(contenido => {
        const documento = contenido.payload.doc.data() as any
        const id = contenido.payload.doc.id
        let armado = { id, ...documento }
        armado.publicacion = armado.publicacion.toDate()
        return armado as Propiedad
      })
      )
    )
    return this.listaBlogs
  }

  public getUnaPropiedad(id: string) {
    return this.direccionColeccion.doc(id).snapshotChanges().pipe(
      map(datos => {
        const documentos = datos.payload.data() as any
        const id = datos.payload.id
        let armado = { id, ...documentos }
        armado.publicacion = armado.publicacion.toDate()
        
        return armado as Propiedad

      })
    )
  }

  public addPropiedad(agregar: Propiedad,) {
    this.direccionColeccion.add(agregar)
    this.mensajesServ.showSuccess("Se agregó la propiedad: " + agregar.titulo)
  }

  public deletePropiedad(propiedad: Propiedad) {
    this.mensajesServ.confirmador("Desea eliminar la propiedad " + propiedad.titulo).then(() => {
      this.galeria.verificarExist(propiedad.imgDestcada).then(valor => {
        this.documentos = this.direccionColeccion.doc(propiedad.id)
        this.documentos.delete()
      }).catch(error => {
        this.documentos = this.direccionColeccion.doc(propiedad.id)
        this.storage.refFromURL(propiedad.imgDestcada).delete()
        propiedad.galeria.forEach(foto => {
          this.storage.refFromURL(foto).delete()
        })
        this.documentos.delete()
      })
    })
  }

  public updatePropiedad(traer: Propiedad) {
    this.documentos = this.direccionColeccion.doc(traer.id)
    this.documentos.update(traer)
    this.mensajesServ.showSuccess("Se actualizó la propiedad: " + traer.titulo)
  }

  public addUpdate(hibrido: Propiedad, idNuevo: string) {
 
    if (!hibrido.id) {
      hibrido.id=idNuevo
      this.direccionColeccion.doc(idNuevo).set(hibrido)
    }
    else{
      this.updatePropiedad(hibrido)
    }
  
  }

  public soloTitulos(): Observable<Propiedad[]> {
    this.listaBlogs = this.direccionColeccion.snapshotChanges().pipe(
      map(toda => toda.map(separada => {
        const documento = separada.payload.doc.data().titulo
        const id = separada.payload.doc.id
        const foto = separada.payload.doc.data().imgDestcada
        return { id, titulo: documento, imgDestcada: foto }
      }))
    )
    return this.listaBlogs
  }
  public filtrarPropiedades(tipo: string, ubicacion: string): Observable<Propiedad[]> {
    return this.base.collection<Propiedad>('propiedad', buscar => buscar.where('direccion.' + tipo, "==", ubicacion)).snapshotChanges()
      .pipe(
        map(data => data.map(propiedad => {
          const doc = propiedad.payload.doc.data() as any
          const id = propiedad.payload.doc.id
          let armado = { id, ...doc }
          armado.publicacion=armado.publicacion.toDate()
          return armado as Propiedad
        })),
        map(props=>props.filter(activos=>activos.activo===2))
      )
  }

  recomendarPropiedades(buscar: string, operador: any, cantidad: any): Observable<Propiedad[]> {
    return this.base.collection<Propiedad>('propiedad', datos => datos.where(buscar, operador, cantidad)).snapshotChanges().pipe(
      map(datos => datos.map(propiedades => {
        const doc = propiedades.payload.doc.data() as Propiedad
        const id = propiedades.payload.doc.id
        return { id, ...doc }
      }))
    )
  }

  nuevaPropiedadVacia(): Propiedad {
    return {
      tipo: Transacciones.ALQUILER,
      lat: 0,
      lng: 0,
      titulo: "",
      servicios:{
        lineaBlanca:false,
        lineaTelf:false,
        lavanderia:false,
        gimnasio:false,
        internet:false,
        aireAcon:false,
        controlAccesos:false,
        alarmaSeguridad:false,
        cableTv:false,
        calefon:false,
        incendios:false,
        extOlores:false,
        gas:false,
        seguridadPriv:false,
        ParqVisitas:false,
        cisterna:false,
        generador:false,
      },
      caracteristicasG:{
        amoblado:false,
        piscina:false,
        jardin:false,
        condominio:false,
        alfombrado:false,
        ascensor:false,
        cercaElectrica:false,
        terraza:false
      },
      exteriores:{
        areaBBQ:false,
        balcon:false,
        cancha:false
      },
      ambientes:{
        patio:false,
        sauna:false,
        bodega:false,
        turco:false,
      secadero:false,
      closets:false,
      cuartoPlancha:false,
      cuartoMaquinas:false,
      estudio:false,
      salaComunal:false,
      areaEventos:false,
      cuartoJuegos:false,
      hidromasaje:false,
      },
      imgDestcada: "",
      galeria: [],
      descripcion: "",
      planos:[],
      precio: 0,
      publicacion:new Date(),
      banos: 0,
      pisos: 0,
      cuartos: 0,
      metrosCuadrados: 0,
      antiguedad:1,
      mediosBanos:0,
      alicuota:0,
      parqueadero:0,
      video:"",
      matterport:"",
      metrosConstruidos:0,
      propietarios: 0,
      idUsuario: "",
      direccion: {
        provincia: "",
        canton: "",
        parroquia: "",
        barrio: "",
        callePrincipal: "",
        calleSecundaria: "",
        numeracion: "",
        referencias: "",
        codigoPostal: ""
      }
    }
  }
  
  buscarVariasPropiedades(ids:string[]): Observable<Propiedad[]> {
    return this.getPropiedades().pipe(

      map(todasprop=> todasprop.filter(propiedad =>{

        if( ids.indexOf(propiedad.id) === -1){
          return false 
        }
        return true
      }))
    ) 
  }

  traerPropiedades5(ids: string[]): Observable<Propiedad[]> {
    return this.getPropiedades().pipe(
      map(ultimos => ultimos.filter(publicacion => {
        if (ids.indexOf(publicacion.id) === -1 ) {
          return false
        }
        return true
      }).slice(0,5))
    )
  }
  
  guardarBorrador(propiedad: Propiedad, idCliente:string, imgPrincipal: Foto[], galeria: Foto[], planos: Foto[], usuario:Usuario){
  propiedad.activo= Publicacion.BORRADOR
  if (!propiedad.id) {
    idCliente=this.base.createId()
  }
  this.nuevoSubir(propiedad, idCliente,imgPrincipal,galeria,planos).then(propiedad=>{
 
  this.clienteS.editarPropiedadesCliente(usuario,propiedad.id)
  }
    )
}

nuevoSubir(propiedad: Propiedad, idNuevo:string, imgPrincipal: Foto[], galeria: Foto[], planos: Foto[]){
  const iPrincipal:boolean=imgPrincipal.length>0
  const iGaleria:boolean= galeria.length>0
  const iPlanos:boolean=planos.length>0
  const unidos={imgPrincipal,galeria,planos}
  let nuevoID: string = ''
  if (propiedad.id) {
    nuevoID= propiedad.id
  }else{
    nuevoID=idNuevo 
  }
   return new Promise<Propiedad>(resuelto=>{
    let copiaPropiedad:Propiedad =propiedad
  if (iGaleria) {
      unidos.galeria.forEach(imagen=>{
      this.cargarImagen(imagen,copiaPropiedad.idUsuario,nuevoID).then(enlance=>{
        copiaPropiedad.galeria.push(enlance)
        this.addUpdate(copiaPropiedad, idNuevo)
        resuelto(copiaPropiedad)
      })
    })
  }
   if (iPlanos) {
      unidos.planos.forEach(imagen=>{
      this.cargarImagen(imagen,copiaPropiedad.idUsuario,nuevoID).then(enlance=>{
        copiaPropiedad.planos.push(enlance)
        this.addUpdate(copiaPropiedad, idNuevo)
          resuelto(copiaPropiedad)})
    })
   }
   if (iPrincipal) {
      unidos.imgPrincipal.forEach(imagen=>{
      this.cargarImagen(imagen,copiaPropiedad.idUsuario,nuevoID).then(enlance=>{
        if (typeof copiaPropiedad.imgDestcada  === 'string' && copiaPropiedad.imgDestcada.length>0) {
          this.borrarImagenURL(copiaPropiedad.imgDestcada)
        }
        copiaPropiedad.imgDestcada=enlance 
        this.addUpdate(copiaPropiedad,idNuevo)
        resuelto(copiaPropiedad)
      })
    })
   }
   if (!iGaleria && !iPlanos && !iPrincipal) {
    this.addUpdate(copiaPropiedad, idNuevo)
    resuelto(copiaPropiedad)
   }
  })
}

borrarImagenURL(dir:string){
  this.storage.refFromURL(dir).delete()
}

generarIdBase(): string{
return this.base.createId()
}

cargarImagen(imagen:Foto, idCliente:string,nuevoID:string): Promise<string>{
  return new Promise<string>(resuelto=>{
    const nombreImagen = `${idCliente + "/" + nuevoID + "/" + imagen.fecha + "/"+ imagen.nombre}`
    const referencia = this.storage.ref(nombreImagen)
      const subir = this.storage.upload(nombreImagen, imagen.archivo)
      subir.snapshotChanges().pipe(
        finalize(() => {
          referencia.getDownloadURL().subscribe(enlace => {
            resuelto(enlace)
            this.mensajesServ.showSuccess("Se agrego la imagen: " + imagen.nombre)
          })
        })
      ).subscribe()
  })
}

  subirImgsPropiedades( propiedad: Propiedad, idCliente: string, principal: Foto[],fotos: Foto[], planos:Foto[]): Promise<Propiedad> {
    let unido: Foto[] = [...principal, ...fotos, ...planos]
    const imgPrincipal:number=principal.length
    const imgsGaleria:number= fotos.length
    const imgsPlanos:number=planos.length
    const nuevoID: string = this.base.createId()
    const ingresar=  this.direccionColeccion.doc(nuevoID)
    return new Promise<Propiedad>((resolve) => {
      unido.forEach((imagen, indice) => {
        const nombreImagen = `${idCliente + "/" + nuevoID + "/" + imagen.nombre}`
        const referencia = this.storage.ref(nombreImagen)
        const subir = this.storage.upload(nombreImagen, imagen.archivo)
        subir.snapshotChanges().pipe(
          finalize(() => {
            referencia.getDownloadURL().subscribe((enlace:string) => 
              {
                
             this.urls[indice]=enlace
             if (this.verificadorArreglo(this.urls)) {
              propiedad.imgDestcada=this.urls[0]
              propiedad.galeria=this.urls.slice(1,fotos.length+1)
              propiedad.planos=this.urls.slice(fotos.length+1)
              ingresar.set(propiedad,{merge:true})
              resolve(propiedad)
              
          }
              this.mensajesServ.showSuccess("Se agrego la imagen: " + imagen.nombre) 
            })
            
          })
        ).subscribe()
        subir.percentageChanges().subscribe(dato => {
          let redondeado = Math.round(dato)
          this.porcentaje[indice] = redondeado
          this.mensajesServ.cargador("hola", this.porcentaje)
          if (this.porcentaje.reduce((acumular,inicial)=>acumular+inicial)===(unido.length*100)) {
            this.mensajesServ.cerrarCargador()

          }
        })
      })
    })
  }

  getPropiedadesXFecha(): Observable <Propiedad[]>{
    return this.base.collection<Propiedad>("propiedad",ordenados=> ordenados.where('activo','==',2).limit(99)).snapshotChanges().pipe(
      map(datos => datos.map(contenido => {
        const documento = contenido.payload.doc.data() as any
        const id = contenido.payload.doc.id
        let armado = { id, ...documento }
        armado.publicacion = armado.publicacion.toDate()
        return armado as Propiedad 
      })
      ),
      map(resultado=>resultado.sort((primer,segundo)=>{
        if(new Date(primer.publicacion)> new Date(segundo.publicacion)){
          return -1
        }
        if(new Date(primer.publicacion)<new Date(segundo.publicacion)){
          return 1
        }
        if(new Date(primer.publicacion)===new Date(segundo.publicacion)){
          return 0
        }
      }))
    )
  }

  
  verificadorArreglo(arreglo:any[]):boolean{
    let texto:number[]=arreglo.map(existe=>{
      if (!existe && existe.length===0) {
        return 0
      }
      return 1
    })
  
    return texto.reduce((acumulador,actual)=> acumulador+actual)===arreglo.length
  }

  allpublicados(ids:string[], activo:number): Observable<Propiedad[]> {
    return this.buscarVariasPropiedades(ids).pipe(
      map(todasprop=> todasprop.filter(propiedad =>{

        if( propiedad.activo === activo ){
          return true
        }
        return false
      }))
    ) 
  }
}