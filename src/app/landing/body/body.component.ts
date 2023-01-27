import { BannerService } from './../../helpers/servicios/banner.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  imagen: string;
  mensaje: string;
  displayResponsive: boolean = false;
  constructor(private bannerS: BannerService) {

  }

  ngOnInit(): void {

  }
  dialogo() {
    this.displayResponsive = true;
  }

  recibirCategoria(cate: number) {
    this.bannerS.getBannersByCat(cate).subscribe(data => {
      this.ramdomize(data);
      this.imagen = data[0].imagen;
      this.mensaje = data[0].mensaje;
    })
  }
  ramdomize(array) {
    array.sort(() => Math.random() - 0.5);
  }
}
