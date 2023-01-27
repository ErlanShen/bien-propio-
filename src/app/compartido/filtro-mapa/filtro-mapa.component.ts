import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-mapa',
  templateUrl: './filtro-mapa.component.html',
  styleUrls: ['./filtro-mapa.component.scss']
})
export class FiltroMapaComponent implements OnInit {
  countries: any[];
  
  selectedCountry:any;
  constructor() {
    this.countries = [
      { name: "NY", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
   }

  ngOnInit(): void {
  }

}
