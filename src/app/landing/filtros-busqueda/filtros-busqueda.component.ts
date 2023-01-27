import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SelectItemGroup } from 'primeng/api';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Propiedad } from 'src/app/helpers/modelos/propiedad';
import { Transacciones } from 'src/app/helpers/modelos/transacciones';
import { MetEnumService } from 'src/app/helpers/servicios/met-enum.service';
import { PropiedadesService } from 'src/app/helpers/servicios/propiedades.service';
import { ProvinciasDataService } from 'src/app/helpers/servicios/provincias-data.service';

interface cantHabitaciones {
  name: string
}
export interface Rango {
  min: number,
  max: number
}

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.scss']
})
export class FiltrosBusquedaComponent implements OnInit {
  propiedades: Propiedad[]
  mistransacciones = this.tipo.generarLista(Transacciones)
  cantidad: number
  results: string[];
  resultadoSeleccionado: any;
  fijado: boolean
  @ViewChild("filtro") filtro: ElementRef
  @ViewChild("tamanio") tamanio: ElementRef
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    //console.log(e.target['scrollingElement'].scrollTop)
    const scroll = e.target['scrollingElement'].scrollTop
    const altura = window.innerHeight * 0.15
    const alturaDiv = this.filtro.nativeElement.offsetHeight * 0.90

    if (scroll > altura) {
      return this.fijado = true

    } else {
      return this.fijado = false

    }
  }
  precio: Rango = {
    min: 0,
    max: 0
  };
  precioA: Rango = {
    min: 0,
    max: 0
  };
  pisos: Rango = {
    min: 0,
    max: 0
  };
  banios: Rango = {
    min: 0,
    max: 0
  };
  baniosm: Rango = {
    min: 0,
    max: 0
  };
  metrosC: Rango = {
    min: 0,
    max: 0
  };
  metrosC2: Rango = {
    min: 0,
    max: 0
  };
  cantidadHab: Rango = {
    min: 0,
    max: 0
  };
  cantidadPropi: Rango = {
    min: 0,
    max: 0
  };
  numParq: Rango = {
    min: 0,
    max: 0
  };
  val2: boolean = false
  bTipo: number //respuesta de busqueda por tipo
  groupedService: SelectItemGroup[] = this.generadorTraducciones()
  selectedServiceGroup: any[];
  subcription: Subscription = new Subscription()
  copiaPropiedad: Propiedad[]

  constructor(private provinciaS: ProvinciasDataService, private mediaMatcher: MediaMatcher, private propiedadS: PropiedadesService, private tipo: MetEnumService, private translate: TranslateService) {

    this.propiedadS.getPropiedades().subscribe(data => {
      this.propiedades = data
      this.copiaPropiedad = data
    });

    const pantallaXL = this.mediaMatcher.matchMedia(
      '(min-width: 1310px) and (max-width: 9999px)'
    ).matches;
    const pantallaL = this.mediaMatcher.matchMedia(
      '(min-width: 1210px) and (max-width: 1309px)'
    ).matches;
    const pantallaMD = this.mediaMatcher.matchMedia(
      '(min-width: 651px) and (max-width: 1209px)'
    ).matches;
    const pantallaSM = this.mediaMatcher.matchMedia(
      '(min-width: 400px) and (max-width: 650px)'
    ).matches;
    const pantallaXSM = this.mediaMatcher.matchMedia(
      '(min-width: 0px) and (max-width: 399px)'
    ).matches;  //quitar con sus imports y mas


    switch (true) {
      case pantallaXL:
        this.cantidad = 6

        break;
      case pantallaL:
        this.cantidad = 4

        break;
      case pantallaMD:
        this.cantidad = 6

        break;
      case pantallaSM:
        this.cantidad = 5

        break;
      case pantallaXSM:
        this.cantidad = 2
        break;

      default:
        this.cantidad = 10
        break;
    }




  }

  ngOnInit(): void {
    this.subcription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.groupedService = this.generadorTraducciones()
    });
  }
  ngAfterViewInit(): void {
    console.log(this.filtro.nativeElement.offsetHeight);

  }
  search(event: any) {
    //Hacer que el orden de los resultados de la busqueda sea basado en un valor
    let resultados: any[] = [];
    let query = event.query.toLowerCase()
    let provincia = this.provinciaS.getProvincias()
    let cantones = this.provinciaS.getCantones()
    let parroquias = this.provinciaS.getParroquias()
    let parroquiasFiltro = parroquias.filter(parr => {
      return parr.nombre.toLowerCase().indexOf(query) > -1
    })
    parroquiasFiltro.forEach(data => {
      resultados.push({ nombre: this.c(data.provincia) + ", " + this.c(data.canton) + ", " + this.c(data.nombre) + " ", tipo: data.ques, color: '#007fd3e1' })
    })
    let cantonesFiltro = cantones.filter(data => {
      return data.nombre.toLowerCase().indexOf(query) > -1
    })
    cantonesFiltro.forEach(data => {
      resultados.push({ nombre: this.c(data.provincia) + ", " + this.c(data.nombre) + " ", tipo: data.ques, color: '#199400d0' })
    })
    let provinciasFiltro: any = provincia.filter(data => {
      return data.nombre.toLowerCase().indexOf(query) > -1
    })
    provinciasFiltro.forEach(data => {
      resultados.push({ nombre: this.c(data.nombre), tipo: "Provincia", color: '#dd5100cb' })
    })

    this.results = resultados
  }
  c(words: string) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  generarLista(enumerador: any): any[] {
    let resultado = [];
    Object.keys(enumerador).filter(texto => {
      return !Number(texto) && texto != "0"
    }).forEach((elementos, indice) => {
      resultado.push({ valor: indice, nombre: elementos })
    })
    return resultado
  }

  cambio(evento: any, mb: any) {
    if (evento.value > mb.value) {
      mb.value = evento.value
    }
  }
  

  generadorTraducciones() {
    return [
      {
        label: this.translate.instant("FORMPROPIEDAD.AMENIDADESDESC"),
        items: [
          { label: this.translate.instant("FORMPROPIEDAD.PARQVISITAS"), value: 'ParqVisitas' },
          { label: this.translate.instant("FORMPROPIEDAD.AIREACON"), value: 'aireAcon' },
          { label: this.translate.instant("FORMPROPIEDAD.ALARMASEGURIDAD"), value: 'alarmaSeguridad' },
          { label: this.translate.instant("FORMPROPIEDAD.CABLETV"), value: 'cableTv' },
          { label: this.translate.instant("FORMPROPIEDAD.CALEFON"), value: 'calefon' },
          { label: this.translate.instant("FORMPROPIEDAD.CISTERNA"), value: 'cisterna' },
          { label: this.translate.instant("FORMPROPIEDAD.CONTROLACCESOS"), value: 'controlAccesos' },
          { label: this.translate.instant("FORMPROPIEDAD.EXTOLORES"), value: 'extOlores' },
          { label: this.translate.instant("FORMPROPIEDAD.GAS"), value: 'gas' },
          { label: this.translate.instant("FORMPROPIEDAD.GENERADOR"), value: 'generador' },
          { label: this.translate.instant("FORMPROPIEDAD.GIMNASIO"), value: 'gimnasio' },
          { label: this.translate.instant("FORMPROPIEDAD.INCENDIOS"), value: 'incendios' },
          { label: this.translate.instant("FORMPROPIEDAD.INTERNET"), value: 'internet' },
          { label: this.translate.instant("FORMPROPIEDAD.LAVANDERIA"), value: 'lavanderia' },
          { label: this.translate.instant("FORMPROPIEDAD.LINEABLANCA"), value: 'lineaBlanca' },
          { label: this.translate.instant("FORMPROPIEDAD.LINEATELF"), value: 'lineaTelf' },
          { label: this.translate.instant("FORMPROPIEDAD.SEGURIDADPRIV"), value: 'seguridadPriv' }
        ]
      },
      {
        label: this.translate.instant("FORMPROPIEDAD.AMENIDADESDESC2"),
        items: [
          { label: this.translate.instant("FORMPROPIEDAD.AMOBLADO"), value: 'amoblado' },
          { label: this.translate.instant("FORMPROPIEDAD.PISCINA"), value: 'piscina' },
          { label: this.translate.instant("FORMPROPIEDAD.JARDIN"), value: 'jardin' },
          { label: this.translate.instant("FORMPROPIEDAD.CONDOMINIO"), value: 'condominio' },
          { label: this.translate.instant("FORMPROPIEDAD.ALFOMBRADO"), value: 'alfombrado' },
          { label: this.translate.instant("FORMPROPIEDAD.ASCENSOR"), value: 'ascensor' },
          { label: this.translate.instant("FORMPROPIEDAD.CERCAELECTRICA"), value: 'cercaElectrica' },
          { label: this.translate.instant("FORMPROPIEDAD.TERRAZA"), value: 'terraza' },

        ]
      },

      {
        label: this.translate.instant("FORMPROPIEDAD.AMENIDADESDESC3"),
        items: [
          { label: this.translate.instant("FORMPROPIEDAD.AREABBQ"), value: 'areaBBQ' },
          { label: this.translate.instant("FORMPROPIEDAD.BALCON"), value: 'balcon' },
          { label: this.translate.instant("FORMPROPIEDAD.CANCHA"), value: 'cancha' },

        ]
      },
      {
        label: this.translate.instant("FORMPROPIEDAD.AMENIDADESDESC4"),
        items: [
          { label: this.translate.instant("FORMPROPIEDAD.PATIO"), value: 'patio' },
          { label: this.translate.instant("FORMPROPIEDAD.SAUNA"), value: 'sauna' },
          { label: this.translate.instant("FORMPROPIEDAD.BODEGA"), value: 'bodega' },
          { label: this.translate.instant("FORMPROPIEDAD.TURCO"), value: 'turco' },
          { label: this.translate.instant("FORMPROPIEDAD.SECADERO"), value: 'secadero' },
          { label: this.translate.instant("FORMPROPIEDAD.CLOSETS"), value: 'closets' },
          { label: this.translate.instant("FORMPROPIEDAD.CUARTOPLANCHA"), value: 'cuartoPlancha' },
          { label: this.translate.instant("FORMPROPIEDAD.CUARTOMAQUINAS"), value: 'cuartoMaquinas' },
          { label: this.translate.instant("FORMPROPIEDAD.ESTUDIO"), value: 'estudio' },
          { label: this.translate.instant("FORMPROPIEDAD.SALACOMUNAL"), value: 'salaComunal' },
          { label: this.translate.instant("FORMPROPIEDAD.AREAEVENTOS"), value: 'areaEventos' },
          { label: this.translate.instant("FORMPROPIEDAD.CUARTOJUEGOS"), value: 'cuartoJuegos' },
          { label: this.translate.instant("FORMPROPIEDAD.HIDROMASAJE"), value: 'hidromasaje' }

        ]
      }
    ];
  }
  nuevoFiltro(lasPropiedades: Propiedad[],evento: any, id: number, mayor?:any) {
    const valores = evento.value
    let filtrados:Propiedad[]
    if (mayor && evento.min > mayor.value) {
      evento.max = evento.min
    }
    console.log(mayor);
    
    switch (id) {
      case 0:
        console.log(valores, id);
        filtrados.push(...lasPropiedades.filter(propiedades => propiedades.tipo === valores)) 
        break
      case 1:
        console.log(evento, id);
        filtrados.push(...lasPropiedades.filter(pros => pros.cuartos>= evento.min && pros.cuartos <= evento.max))
        break

      default:
        filtrados = this.copiaPropiedad
        break
    }
    this.propiedades=filtrados
  }
}
