import { GaleriaService } from './../../helpers/servicios/galeria.service';
import { MensajesService } from './../../helpers/servicios/mensajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ver-cargador',
  templateUrl: './carga-activa.component.html',
  styleUrls: ['./carga-activa.component.scss']
})
export class CargaActivaComponent implements OnInit {

  prendido: boolean = false;
  progresoSubida: number[] = [];

  constructor(private mensajeServi: MensajesService, private galeria: GaleriaService) {
    this.mensajeServi.mostrarCarga$.subscribe(dato => {
      this.prendido = dato

    })

    this.mensajeServi.elPorcentaje$.subscribe(dato => {
      this.progresoSubida = dato
    })
  }

  ngOnInit(): void {

  }

}
