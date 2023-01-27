import { AuthService } from './../../../helpers/servicios/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ProvinciasDataService } from './../../../helpers/servicios/provincias-data.service';
import { Direccion } from './../../../helpers/modelos/direccion';
import { Router, ActivatedRoute } from '@angular/router';
import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { PropiedadesService } from './../../../helpers/servicios/propiedades.service';
import { Propiedad, Publicacion } from './../../../helpers/modelos/propiedad';
import { Transacciones } from 'src/app/helpers/modelos/transacciones';
import { Component, OnInit } from '@angular/core';
import { faBath, faRulerCombined, faBed, faUsers, faDollarSign, faCity, faSink,
faRuler } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manejar-propiedad',
  templateUrl: './manejar-propiedad.component.html',
  styleUrls: ['./manejar-propiedad.component.scss'],
})
export class ManejarPropiedadComponent implements OnInit {
  faBath = faBath;
  faRulerCombined = faRulerCombined;
  faBed = faBed;
  faRuler=faRuler;
  faUsers = faUsers;
  faDollarSign = faDollarSign;
  faGopuram = faCity;
  faSink=faSink;
  mapa = false;
  editando: boolean = false
  antigua:boolean=false
  mistransacciones = this.tipo.generarLista(Transacciones)
  provincia: string = ""
  agregarPropiedad: Propiedad = {
    tipo: Transacciones.ALQUILER,
    lat: 0,
    lng: 0,
    activo: Publicacion.PUBLICADO,
    titulo: "",
    publicacion:new Date(),
    imgDestcada: "",
    galeria: [],
    descripcion: "",
    precio: 0,
    planos:[],
    video:"",
    matterport:"",
    banos: 0,
    pisos: 0,
    cuartos: 0,
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
    metrosCuadrados: 0,
    antiguedad:1,
    mediosBanos:0,
    alicuota:0,
    metrosConstruidos:0,
    propietarios: 0,
    idUsuario: "",
    direccion: {
      provincia:"",
    canton:"",
    parroquia:"",
    barrio:"",
    callePrincipal:"",
    calleSecundaria:"",
    numeracion:"",
    referencias:"",
    codigoPostal:""
    }
  }
 
  constructor(private agregar: PropiedadesService, private traer: ActivatedRoute, private tipo: MetEnumService, private router: Router,
    private servicioLugares:ProvinciasDataService,private auth:AuthService) {
    const id = this.traer.snapshot.params.id
    if (id != "nuevo") {
      this.agregar.getUnaPropiedad(id).subscribe(recoger => {
        this.agregarPropiedad = recoger
        this.agregarPropiedad.antiguedad===0?this.antigua=false:this.antigua=true
        this.mapa = true
        this.editando = true
      })
    }
    else {
      this.mapa = true
    }
    this.auth.miusuario$.subscribe(data=>{
      this.agregarPropiedad.idUsuario=data.uid
    })
  }
  ngOnInit(): void {
  }
  guardar(hibrido: Propiedad, nueva:boolean) {
    if(!nueva){
      hibrido.antiguedad=0
    }
    let nID=''
    if (!hibrido.id) {
      nID=this.agregar.generarIdBase()
    }
    this.agregar.addUpdate(hibrido,nID)
  }
  cancelar() {
    this.router.navigateByUrl('/admin/propiedades');
  }
  verImagen(event: any) {
    this.agregarPropiedad.imgDestcada = event[0]
  }
  verImagenes(event: any) {
    this.agregarPropiedad.galeria = event
  }
  verPlanos(event: any) {
    this.agregarPropiedad.planos = event
  }
  verDireccion(event) {
    this.agregarPropiedad.direccion = event[0]
    this.agregarPropiedad.lat=event[1].lat
    this.agregarPropiedad.lng=event[1].lng
  }
  transformadorURL(url:string){
    let cortado: string[]=url.split('/')
    let nuevoEnlace: string='https://www.youtube.com/embed/'+cortado[cortado.length-1] 
    return nuevoEnlace
  }
}
