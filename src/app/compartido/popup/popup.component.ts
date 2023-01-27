import { Promociones } from './../../helpers/modelos/promociones';
import { PromocionesService } from './../../helpers/servicios/promociones.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input("imagen") imagen : string
  @Input("link") link : string
  @Input("texto") texto : string

 @Input("mostrar") displayModal: boolean  

  constructor(private promsService: PromocionesService) {
    
   
   }

  ngOnInit(): void {
  }

  
}
