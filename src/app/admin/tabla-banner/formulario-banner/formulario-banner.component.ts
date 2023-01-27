import { Transacciones } from './../../../helpers/modelos/transacciones';
import { MetEnumService } from './../../../helpers/servicios/met-enum.service';
import { MensajesService } from './../../../helpers/servicios/mensajes.service';
import { BannerService } from './../../../helpers/servicios/banner.service';
import { Banner } from './../../../helpers/modelos/banner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario-banner',
  templateUrl: './formulario-banner.component.html',
  styleUrls: ['./formulario-banner.component.scss']
})
export class FormularioBannerComponent implements OnInit {
  banner: Banner = {
    mensaje: "",
    imagen: "",
    activo: false,
    transacciones: Transacciones.VENTA
  }
  editando: boolean = false
  transacciones = this.enumeradores.generarLista(Transacciones)
  constructor(private bannerS: BannerService, private router: Router, private activatedRoute: ActivatedRoute,
    private enumeradores: MetEnumService) {
    const id = this.activatedRoute.snapshot.params.id;
    if (id != "nuevo") {
      this.bannerS.getBannerById(id).subscribe(data => {
        this.banner = data
        this.editando = true
      })
    }

  }

  ngOnInit(): void { }

  guardar(banner: Banner) {
    this.bannerS.manejadorBanners(banner)

  }

  verImagenes(eventos: any) {
    this.banner.imagen = eventos[0]
  }
}
