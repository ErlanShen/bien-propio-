import { faFacebook, faTwitter, faInstagram, faYoutube, faTelegram, faVk, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Identidad } from './../../helpers/modelos/identidad';
import { Component, OnInit } from '@angular/core';
import { faCalendarDay, faEnvelope, faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { AjustesService } from 'src/app/helpers/servicios/ajustes.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent implements OnInit {

  identidad: Identidad = {
    tituloDelSitio: "",
    fraseDelSitio: "",
    logo: "",
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    whatsapp: "",
    telegram: "",
    vkontakte: "",
    tiktok: "",
    direccion: "",
    horariosDeAtencion: "",
    telefonos: "",
    servicioAlCliente: "",
    correo: ""
  }

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faTelegram = faTelegram;
  faVk = faVk;
  faTiktok = faTiktok;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faCalendarDay = faCalendarDay;
  faMailBulk = faMailBulk;

  constructor(private ajustesServicio: AjustesService) {
    this.ajustesServicio.verFormularioAjustes().subscribe(datos=>{
      this.identidad=datos
    })
  }

  ngOnInit(): void {
  }


  verImagen(evento) {
    this.identidad.logo = evento[0]
  }

  save(ajustes: Identidad) {
    this.ajustesServicio.update(ajustes)
  }


}
