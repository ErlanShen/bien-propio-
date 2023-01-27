import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { AjustesService } from './helpers/servicios/ajustes.service';
import { Identidad } from './helpers/modelos/identidad';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subcription: Subscription = new Subscription()
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService, private titleService: Title, private ajustesServicio: AjustesService, private router: Router) {
    ajustesServicio.verFormularioAjustes().subscribe(data => {
      titleService.setTitle(data.fraseDelSitio)
    })

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.subcription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.use(event.lang);
      this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
    });
  }

}
