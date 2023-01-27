import { Transacciones } from './../../helpers/modelos/transacciones';
import { MetEnumService } from './../../helpers/servicios/met-enum.service';
import { BannerService } from './../../helpers/servicios/banner.service';
import { MensajesService } from './../../helpers/servicios/mensajes.service';
import { Banner } from './../../helpers/modelos/banner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-banner',
  templateUrl: './tabla-banner.component.html',
  styleUrls: ['./tabla-banner.component.scss']
})
export class TablaBannerComponent implements OnInit {
  banners: Banner[];
  cols: any[];
  activos: number;
  transacciones = this.enumeradores.generarLista(Transacciones)
  constructor(private mensajes: MensajesService, private bannerS: BannerService, private enumeradores: MetEnumService) { }

  ngOnInit(): void {
    this.bannerS.getBanners().subscribe(data => {
      this.banners = data
    })
    this.getNumBannersActiv()
  }
  open() {
    this.mensajes.showSuccess("hoasdla")
  }
  getNumBannersActiv() {
    this.bannerS.getNumberOfActiveBanners().subscribe(data => {
      this.activos = data
    })
  }
  checker(banner: Banner, event: any) {
    banner.activo = event.checked
    this.bannerS.editBanner(banner)
  }
  desactivador(activado: boolean, ocupados: number) {
    return ocupados >= 40 && activado === false ? true : false
  }
  intermediario(posicion: number) {
    return this.enumeradores.retornarEnumArreglo(this.transacciones, posicion).nombre
  }
  borrar(banner: Banner) {
    this.bannerS.deleteBanner(banner)
  }
}
