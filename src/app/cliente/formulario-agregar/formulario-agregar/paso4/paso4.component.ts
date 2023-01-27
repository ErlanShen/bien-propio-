import { Foto } from './../../../../helpers/modelos/foto';
import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { AuthService } from './../../../../helpers/servicios/auth.service';
import { MetEnumService } from './../../../../helpers/servicios/met-enum.service';
import { Router, NavigationExtras } from '@angular/router';
import { Transacciones } from './../../../../helpers/modelos/transacciones';
import { Propiedad } from './../../../../helpers/modelos/propiedad';
import { faQuestionCircle, faBath, faRulerCombined, faBed, faUsers, faDollarSign, faCity,faSink,
  faRuler, faCar } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/helpers/servicios/cliente.service';



@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.scss']
})
export class Paso4Component implements OnInit {
  navigationPropiedad: NavigationExtras = {
    skipLocationChange:true,
    state: {
      propiedad: null,
      fotos: [],
      principal: [],
      fotosMostrar: [],
      principalMostrar: [],
      planos: [],
      planosMos: [],
      usuario: null,
    }
  };
  faQuestionCircle = faQuestionCircle;
  faSink=faSink;
  faBath = faBath;
  faRuler=faRuler;
  faParking=faCar;
  faRulerCombined = faRulerCombined;
  faBed = faBed;
  faUsers = faUsers;
  faDollarSign = faDollarSign;
  faGopuram = faCity;
  propiedad: Propiedad
  fotos:Foto[]
  fotoPrincipal: Foto[]
  mistransacciones = this.tipo.generarLista(Transacciones)
  constructor(private router: Router, private tipo: MetEnumService, private auth:AuthService,
    private propiedadS: PropiedadesService, private clienteS:ClienteService) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state){
     this.propiedad = navigation.extras.state.propiedad
     this.fotos=navigation.extras.state.fotos
     this.navigationPropiedad.state.fotosMostrar=navigation.extras.state.fotosMostrar
     this.fotoPrincipal=navigation.extras.state.principal
     this.navigationPropiedad.state.principalMostrar=navigation.extras.state.principalMostrar
     this.navigationPropiedad.state.planos=navigation.extras.state.planos
     this.navigationPropiedad.state.planosMos=navigation.extras.state.planosMos
     this.navigationPropiedad.state.usuario = navigation.extras.state.usuario
    }else{
      this.propiedad=this.propiedadS.nuevaPropiedadVacia()
    }
    this.auth.miusuario$.subscribe(data=>{
      this.propiedad.idUsuario=data.uid
    })
    
  }

  ngOnInit(): void {}
  intermediaria(num: number) {
    return this.tipo.retornarEnumArreglo(this.mistransacciones, num).nombre.toLowerCase()
  }
  navegar(propiedad: Propiedad, url:string) {
    this.navigationPropiedad.state.propiedad = propiedad;
    this.router.navigate([url], this.navigationPropiedad)
  }
  guardar(propiedad: Propiedad){
    propiedad.activo = 2
    this.propiedadS.nuevoSubir( propiedad, this.propiedadS.generarIdBase(), this.fotoPrincipal,this.fotos, this.navigationPropiedad.state.planos).then(prop=>{
      this.router.navigateByUrl("/cuenta/perfil")
      this.clienteS.editarPropiedadesCliente(this.navigationPropiedad.state.usuario,prop.id)
    })  
  }
  guardarBorrador(propiedad: Propiedad){
    this.propiedadS.guardarBorrador(propiedad,propiedad.idUsuario,this.fotoPrincipal,this.fotos,this.navigationPropiedad.state.planos,this.navigationPropiedad.state.usuario)
  }
}
