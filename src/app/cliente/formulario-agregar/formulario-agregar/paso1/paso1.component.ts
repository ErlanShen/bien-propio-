import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { Transacciones } from './../../../../helpers/modelos/transacciones';
import { MetEnumService } from './../../../../helpers/servicios/met-enum.service';
import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.scss'],
})
export class Paso1Component implements OnInit {
  mostrar: boolean = true;
  anchop:boolean
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
    },
  };
  faQuestionCircle = faQuestionCircle;
  mistransacciones = this.tipo.generarLista(Transacciones);
  propiedad: Propiedad = this.propiedadS.nuevaPropiedadVacia();

  antigua: boolean = false;
  constructor(
    private tipo: MetEnumService,
    private router: Router,
    private auth: AuthService,
    private propiedadS: PropiedadesService,
    private ar: ActivatedRoute,
    private mediaMatcher: MediaMatcher
  ) {
    const rut = this.ar.snapshot.params.id;
    if (rut) {
      this.propiedadS.getUnaPropiedad(rut).subscribe((propiedad) => {
        this.propiedad = propiedad;
      });
    }

    const navigation = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      this.propiedad = navigation.extras.state.propiedad;
      this.navigationPropiedad.state.fotos = navigation.extras.state.fotos;
      this.navigationPropiedad.state.fotosMostrar =
        navigation.extras.state.fotosMostrar;
      this.navigationPropiedad.state.principal =
        navigation.extras.state.principal;
      this.navigationPropiedad.state.principalMostrar =
        navigation.extras.state.principalMostrar;
      this.navigationPropiedad.state.planos = navigation.extras.state.planos;
      this.navigationPropiedad.state.planosMos =
        navigation.extras.state.planosMos;
    }
    this.auth.miusuario$.subscribe((data) => {
      this.propiedad.idUsuario = data.uid;
      this.navigationPropiedad.state.usuario = data;
    });

    this.mostrar = mediaMatcher.matchMedia(
      '(min-width: 991px) and (max-width: 2560px)'
    ).matches;
  
      this.anchop = mediaMatcher.matchMedia( '(min-width: 0px) and (max-width: 400px)').matches;

  }

  ngOnInit(): void {}
  navegar(propiedad: Propiedad, nueva: boolean) {
    if (!nueva) {
      propiedad.antiguedad = 0;
    }
    this.navigationPropiedad.state.propiedad = propiedad;
    this.router.navigate(['/cuenta/nuevo/fotos'], this.navigationPropiedad);
  }
}
