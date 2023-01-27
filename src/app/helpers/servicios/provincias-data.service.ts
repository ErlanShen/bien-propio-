import {  Provincias } from './../modelos/ecuador';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasDataService {
private ecuador: Provincias[]=[
  {
    id: 1,
    nombre: "AZUAY",
    cantones: [
      {
        id: 101,
        nombre: "CUENCA",
        parroquias: [
          {
            id: 10101,
            nombre: "BELLAVISTA"
          },
          {
            id: 10102,
            nombre: "CAÑARIBAMBA"
          },
          {
            id: 10103,
            nombre: "EL BATÁN"
          },
          {
            id: 10104,
            nombre: "EL SAGRARIO"
          },
          {
            id: 10105,
            nombre: "EL VECINO"
          },
          {
            id: 10106,
            nombre: "GIL RAMÍREZ DÁVALOS"
          },
          {
            id: 10107,
            nombre: "HUAYNACÁPAC"
          },
          {
            id: 10108,
            nombre: "MACHÁNGARA"
          },
          {
            id: 10109,
            nombre: "MONAY"
          },
          {
            id: 10110,
            nombre: "SAN BLAS"
          },
          {
            id: 10111,
            nombre: "SAN SEBASTIÁN"
          },
          {
            id: 10112,
            nombre: "SUCRE"
          },
          {
            id: 10113,
            nombre: "TOTORACOCHA"
          },
          {
            id: 10114,
            nombre: "YANUNCAY"
          },
          {
            id: 10115,
            nombre: "HERMANO MIGUEL"
          },
          {
            id: 10150,
            nombre: "CUENCA"
          },
          {
            id: 10151,
            nombre: "BAÑOS"
          },
          {
            id: 10152,
            nombre: "CUMBE"
          },
          {
            id: 10153,
            nombre: "CHAUCHA"
          },
          {
            id: 10154,
            nombre: "CHECA (JIDCAY)"
          },
          {
            id: 10155,
            nombre: "CHIQUINTAD"
          },
          {
            id: 10156,
            nombre: "LLACAO"
          },
          {
            id: 10157,
            nombre: "MOLLETURO"
          },
          {
            id: 10158,
            nombre: "NULTI"
          },
          {
            id: 10159,
            nombre: "OCTAVIO CORDERO PALACIOS (SANTA ROSA)"
          },
          {
            id: 10160,
            nombre: "PACCHA"
          },
          {
            id: 10161,
            nombre: "QUINGEO"
          },
          {
            id: 10162,
            nombre: "RICAURTE"
          },
          {
            id: 10163,
            nombre: "SAN JOAQUÍN"
          },
          {
            id: 10164,
            nombre: "SANTA ANA"
          },
          {
            id: 10165,
            nombre: "SAYAUSÍ"
          },
          {
            id: 10166,
            nombre: "SIDCAY"
          },
          {
            id: 10167,
            nombre: "SININCAY"
          },
          {
            id: 10168,
            nombre: "TARQUI"
          },
          {
            id: 10169,
            nombre: "TURI"
          },
          {
            id: 10170,
            nombre: "VALLE"
          },
          {
            id: 10171,
            nombre: "VICTORIA DEL PORTETE (IRQUIS)"
          }
        ]
      },
      {
        id: 102,
        nombre: "GIRÓN",
        parroquias: [
          {
            id: 10250,
            nombre: "GIRÓN"
          },
          {
            id: 10251,
            nombre: "ASUNCIÓN"
          },
          {
            id: 10252,
            nombre: "SAN GERARDO"
          }
        ]
      },
      {
        id: 103,
        nombre: "GUALACEO",
        parroquias: [
          {
            id: 10350,
            nombre: "GUALACEO"
          },
          {
            id: 10351,
            nombre: "CHORDELEG"
          },
          {
            id: 10352,
            nombre: "DANIEL CÓRDOVA TORAL (EL ORIENTE)"
          },
          {
            id: 10353,
            nombre: "JADÁN"
          },
          {
            id: 10354,
            nombre: "MARIANO MORENO"
          },
          {
            id: 10355,
            nombre: "PRINCIPAL"
          },
          {
            id: 10356,
            nombre: "REMIGIO CRESPO TORAL (GÚLAG)"
          },
          {
            id: 10357,
            nombre: "SAN JUAN"
          },
          {
            id: 10358,
            nombre: "ZHIDMAD"
          },
          {
            id: 10359,
            nombre: "LUIS CORDERO VEGA"
          },
          {
            id: 10360,
            nombre: "SIMÓN BOLÍVAR (CAB. EN GAÑANZOL)"
          }
        ]
      },
      {
        id: 104,
        nombre: "NABÓN",
        parroquias: [
          {
            id: 10450,
            nombre: "NABÓN"
          },
          {
            id: 10451,
            nombre: "COCHAPATA"
          },
          {
            id: 10452,
            nombre: "EL PROGRESO (CAB.EN ZHOTA)"
          },
          {
            id: 10453,
            nombre: "LAS NIEVES (CHAYA)"
          },
          {
            id: 10454,
            nombre: "OÑA"
          }
        ]
      },
      {
        id: 105,
        nombre: "PAUTE",
        parroquias: [
          {
            id: 10550,
            nombre: "PAUTE"
          },
          {
            id: 10551,
            nombre: "AMALUZA"
          },
          {
            id: 10552,
            nombre: "BULÁN (JOSÉ VÍCTOR IZQUIERDO)"
          },
          {
            id: 10553,
            nombre: "CHICÁN (GUILLERMO ORTEGA)"
          },
          {
            id: 10554,
            nombre: "EL CABO"
          },
          {
            id: 10555,
            nombre: "GUACHAPALA"
          },
          {
            id: 10556,
            nombre: "GUARAINAG"
          },
          {
            id: 10557,
            nombre: "PALMAS"
          },
          {
            id: 10558,
            nombre: "PAN"
          },
          {
            id: 10559,
            nombre: "SAN CRISTÓBAL (CARLOS ORDÓÑEZ LAZO)"
          },
          {
            id: 10560,
            nombre: "SEVILLA DE ORO"
          },
          {
            id: 10561,
            nombre: "TOMEBAMBA"
          },
          {
            id: 10562,
            nombre: "DUG DUG"
          }
        ]
      },
      {
        id: 106,
        nombre: "PUCARA",
        parroquias: [
          {
            id: 10650,
            nombre: "PUCARÁ"
          },
          {
            id: 10651,
            nombre: "CAMILO PONCE ENRÍQUEZ (CAB. EN RÍO 7 DE MOLLEPONGO)"
          },
          {
            id: 10652,
            nombre: "SAN RAFAEL DE SHARUG"
          }
        ]
      },
      {
        id: 107,
        nombre: "SAN FERNANDO",
        parroquias: [
          {
            id: 10750,
            nombre: "SAN FERNANDO"
          },
          {
            id: 10751,
            nombre: "CHUMBLÍN"
          }
        ]
      },
      {
        id: 108,
        nombre: "SANTA ISABEL",
        parroquias: [
          {
            id: 10850,
            nombre: "SANTA ISABEL (CHAGUARURCO)"
          },
          {
            id: 10851,
            nombre: "ABDÓN CALDERÓN (LA UNIÓN)"
          },
          {
            id: 10852,
            nombre: "EL CARMEN DE PIJILÍ"
          },
          {
            id: 10853,
            nombre: "ZHAGLLI (SHAGLLI)"
          },
          {
            id: 10854,
            nombre: "SAN SALVADOR DE CAÑARIBAMBA"
          }
        ]
      },
      {
        id: 109,
        nombre: "SIGSIG",
        parroquias: [
          {
            id: 10950,
            nombre: "SIGSIG"
          },
          {
            id: 10951,
            nombre: "CUCHIL (CUTCHIL)"
          },
          {
            id: 10952,
            nombre: "GIMA"
          },
          {
            id: 10953,
            nombre: "GUEL"
          },
          {
            id: 10954,
            nombre: "LUDO"
          },
          {
            id: 10955,
            nombre: "SAN BARTOLOMÉ"
          },
          {
            id: 10956,
            nombre: "SAN JOSÉ DE RARANGA"
          }
        ]
      },
      {
        id: 110,
        nombre: "OÑA",
        parroquias: [
          {
            id: 11050,
            nombre: "SAN FELIPE DE OÑA CABECERA CANTONAL"
          },
          {
            id: 11051,
            nombre: "SUSUDEL"
          }
        ]
      },
      {
        id: 111,
        nombre: "CHORDELEG",
        parroquias: [
          {
            id: 11150,
            nombre: "CHORDELEG"
          },
          {
            id: 11151,
            nombre: "PRINCIPAL"
          },
          {
            id: 11152,
            nombre: "LA UNIÓN"
          },
          {
            id: 11153,
            nombre: "LUIS GALARZA ORELLANA (CAB.EN DELEGSOL)"
          },
          {
            id: 11154,
            nombre: "SAN MARTÍN DE PUZHIO"
          }
        ]
      },
      {
        id: 112,
        nombre: "EL PAN",
        parroquias: [
          {
            id: 11250,
            nombre: "EL PAN"
          },
          {
            id: 11251,
            nombre: "AMALUZA"
          },
          {
            id: 11252,
            nombre: "PALMAS"
          },
          {
            id: 11253,
            nombre: "SAN VICENTE"
          }
        ]
      },
      {
        id: 113,
        nombre: "SEVILLA DE ORO",
        parroquias: [
          {
            id: 11350,
            nombre: "SEVILLA DE ORO"
          },
          {
            id: 11351,
            nombre: "AMALUZA"
          },
          {
            id: 11352,
            nombre: "PALMAS"
          }
        ]
      },
      {
        id: 114,
        nombre: "GUACHAPALA",
        parroquias: [
          {
            id: 11450,
            nombre: "GUACHAPALA"
          }
        ]
      },
      {
        id: 115,
        nombre: "CAMILO PONCE ENRÍQUEZ",
        parroquias: [
          {
            id: 11550,
            nombre: "CAMILO PONCE ENRÍQUEZ"
          },
          {
            id: 11551,
            nombre: "EL CARMEN DE PIJILÍ"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    nombre: "BOLIVAR",
    cantones: [
      {
        id: 201,
        nombre: "GUARANDA",
        parroquias: [
          {
            id: 20101,
            nombre: "ÁNGEL POLIBIO CHÁVES"
          },
          {
            id: 20102,
            nombre: "GABRIEL IGNACIO VEINTIMILLA"
          },
          {
            id: 20103,
            nombre: "GUANUJO"
          },
          {
            id: 20150,
            nombre: "GUARANDA"
          },
          {
            id: 20151,
            nombre: "FACUNDO VELA"
          },
          {
            id: 20152,
            nombre: "GUANUJO"
          },
          {
            id: 20153,
            nombre: "JULIO E. MORENO (CATANAHUÁN GRANDE)"
          },
          {
            id: 20154,
            nombre: "LAS NAVES"
          },
          {
            id: 20155,
            nombre: "SALINAS"
          },
          {
            id: 20156,
            nombre: "SAN LORENZO"
          },
          {
            id: 20157,
            nombre: "SAN SIMÓN (YACOTO)"
          },
          {
            id: 20158,
            nombre: "SANTA FÉ (SANTA FÉ)"
          },
          {
            id: 20159,
            nombre: "SIMIÁTUG"
          },
          {
            id: 20160,
            nombre: "SAN LUIS DE PAMBIL"
          }
        ]
      },
      {
        id: 202,
        nombre: "CHILLANES",
        parroquias: [
          {
            id: 20250,
            nombre: "CHILLANES"
          },
          {
            id: 20251,
            nombre: "SAN JOSÉ DEL TAMBO (TAMBOPAMBA)"
          }
        ]
      },
      {
        id: 203,
        nombre: "CHIMBO",
        parroquias: [
          {
            id: 20350,
            nombre: "SAN JOSÉ DE CHIMBO"
          },
          {
            id: 20351,
            nombre: "ASUNCIÓN (ASANCOTO)"
          },
          {
            id: 20352,
            nombre: "CALUMA"
          },
          {
            id: 20353,
            nombre: "MAGDALENA (CHAPACOTO)"
          },
          {
            id: 20354,
            nombre: "SAN SEBASTIÁN"
          },
          {
            id: 20355,
            nombre: "TELIMBELA"
          }
        ]
      },
      {
        id: 204,
        nombre: "ECHEANDÍA",
        parroquias: [
          {
            id: 20450,
            nombre: "ECHEANDÍA"
          }
        ]
      },
      {
        id: 205,
        nombre: "SAN MIGUEL",
        parroquias: [
          {
            id: 20550,
            nombre: "SAN MIGUEL"
          },
          {
            id: 20551,
            nombre: "BALSAPAMBA"
          },
          {
            id: 20552,
            nombre: "BILOVÁN"
          },
          {
            id: 20553,
            nombre: "RÉGULO DE MORA"
          },
          {
            id: 20554,
            nombre: "SAN PABLO (SAN PABLO DE ATENAS)"
          },
          {
            id: 20555,
            nombre: "SANTIAGO"
          },
          {
            id: 20556,
            nombre: "SAN VICENTE"
          }
        ]
      },
      {
        id: 206,
        nombre: "CALUMA",
        parroquias: [
          {
            id: 20650,
            nombre: "CALUMA"
          }
        ]
      },
      {
        id: 207,
        nombre: "LAS NAVES",
        parroquias: [
          {
            id: 20701,
            nombre: "LAS MERCEDES"
          },
          {
            id: 20702,
            nombre: "LAS NAVES"
          },
          {
            id: 20750,
            nombre: "LAS NAVES"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    nombre: "CAÑAR",
    cantones: [
      {
        id: 301,
        nombre: "AZOGUES",
        parroquias: [
          {
            id: 30101,
            nombre: "AURELIO BAYAS MARTÍNEZ"
          },
          {
            id: 30102,
            nombre: "AZOGUES"
          },
          {
            id: 30103,
            nombre: "BORRERO"
          },
          {
            id: 30104,
            nombre: "SAN FRANCISCO"
          },
          {
            id: 30150,
            nombre: "AZOGUES"
          },
          {
            id: 30151,
            nombre: "COJITAMBO"
          },
          {
            id: 30152,
            nombre: "DÉLEG"
          },
          {
            id: 30153,
            nombre: "GUAPÁN"
          },
          {
            id: 30154,
            nombre: "JAVIER LOYOLA (CHUQUIPATA)"
          },
          {
            id: 30155,
            nombre: "LUIS CORDERO"
          },
          {
            id: 30156,
            nombre: "PINDILIG"
          },
          {
            id: 30157,
            nombre: "RIVERA"
          },
          {
            id: 30158,
            nombre: "SAN MIGUEL"
          },
          {
            id: 30159,
            nombre: "SOLANO"
          },
          {
            id: 30160,
            nombre: "TADAY"
          }
        ]
      },
      {
        id: 302,
        nombre: "BIBLIÁN",
        parroquias: [
          {
            id: 30250,
            nombre: "BIBLIÁN"
          },
          {
            id: 30251,
            nombre: "NAZÓN (CAB. EN PAMPA DE DOMÍNGUEZ)"
          },
          {
            id: 30252,
            nombre: "SAN FRANCISCO DE SAGEO"
          },
          {
            id: 30253,
            nombre: "TURUPAMBA"
          },
          {
            id: 30254,
            nombre: "JERUSALÉN"
          }
        ]
      },
      {
        id: 303,
        nombre: "CAÑAR",
        parroquias: [
          {
            id: 30350,
            nombre: "CAÑAR"
          },
          {
            id: 30351,
            nombre: "CHONTAMARCA"
          },
          {
            id: 30352,
            nombre: "CHOROCOPTE"
          },
          {
            id: 30353,
            nombre: "GENERAL MORALES (SOCARTE)"
          },
          {
            id: 30354,
            nombre: "GUALLETURO"
          },
          {
            id: 30355,
            nombre: "HONORATO VÁSQUEZ (TAMBO VIEJO)"
          },
          {
            id: 30356,
            nombre: "INGAPIRCA"
          },
          {
            id: 30357,
            nombre: "JUNCAL"
          },
          {
            id: 30358,
            nombre: "SAN ANTONIO"
          },
          {
            id: 30359,
            nombre: "SUSCAL"
          },
          {
            id: 30360,
            nombre: "TAMBO"
          },
          {
            id: 30361,
            nombre: "ZHUD"
          },
          {
            id: 30362,
            nombre: "VENTURA"
          },
          {
            id: 30363,
            nombre: "DUCUR"
          }
        ]
      },
      {
        id: 304,
        nombre: "LA TRONCAL",
        parroquias: [
          {
            id: 30450,
            nombre: "LA TRONCAL"
          },
          {
            id: 30451,
            nombre: "MANUEL J. CALLE"
          },
          {
            id: 30452,
            nombre: "PANCHO NEGRO"
          }
        ]
      },
      {
        id: 305,
        nombre: "EL TAMBO",
        parroquias: [
          {
            id: 30550,
            nombre: "EL TAMBO"
          }
        ]
      },
      {
        id: 306,
        nombre: "DÉLEG",
        parroquias: [
          {
            id: 30650,
            nombre: "DÉLEG"
          },
          {
            id: 30651,
            nombre: "SOLANO"
          }
        ]
      },
      {
        id: 307,
        nombre: "SUSCAL",
        parroquias: [
          {
            id: 30750,
            nombre: "SUSCAL"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    nombre: "CARCHI",
    cantones: [
      {
        id: 401,
        nombre: "TULCÁN",
        parroquias: [
          {
            id: 40101,
            nombre: "GONZÁLEZ SUÁREZ"
          },
          {
            id: 40102,
            nombre: "TULCÁN"
          },
          {
            id: 40150,
            nombre: "TULCÁN"
          },
          {
            id: 40151,
            nombre: "EL CARMELO (EL PUN)"
          },
          {
            id: 40152,
            nombre: "HUACA"
          },
          {
            id: 40153,
            nombre: "JULIO ANDRADE (OREJUELA)"
          },
          {
            id: 40154,
            nombre: "MALDONADO"
          },
          {
            id: 40155,
            nombre: "PIOTER"
          },
          {
            id: 40156,
            nombre: "TOBAR DONOSO (LA BOCANA DE CAMUMBÍ)"
          },
          {
            id: 40157,
            nombre: "TUFIÑO"
          },
          {
            id: 40158,
            nombre: "URBINA (TAYA)"
          },
          {
            id: 40159,
            nombre: "EL CHICAL"
          },
          {
            id: 40160,
            nombre: "MARISCAL SUCRE"
          },
          {
            id: 40161,
            nombre: "SANTA MARTHA DE CUBA"
          }
        ]
      },
      {
        id: 402,
        nombre: "BOLÍVAR",
        parroquias: [
          {
            id: 40250,
            nombre: "BOLÍVAR"
          },
          {
            id: 40251,
            nombre: "GARCÍA MORENO"
          },
          {
            id: 40252,
            nombre: "LOS ANDES"
          },
          {
            id: 40253,
            nombre: "MONTE OLIVO"
          },
          {
            id: 40254,
            nombre: "SAN VICENTE DE PUSIR"
          },
          {
            id: 40255,
            nombre: "SAN RAFAEL"
          }
        ]
      },
      {
        id: 403,
        nombre: "ESPEJO",
        parroquias: [
          {
            id: 40301,
            nombre: "EL ÁNGEL"
          },
          {
            id: 40302,
            nombre: "27 DE SEPTIEMBRE"
          },
          {
            id: 40350,
            nombre: "EL ANGEL"
          },
          {
            id: 40351,
            nombre: "EL GOALTAL"
          },
          {
            id: 40352,
            nombre: "LA LIBERTAD (ALIZO)"
          },
          {
            id: 40353,
            nombre: "SAN ISIDRO"
          }
        ]
      },
      {
        id: 404,
        nombre: "MIRA",
        parroquias: [
          {
            id: 40450,
            nombre: "MIRA (CHONTAHUASI)"
          },
          {
            id: 40451,
            nombre: "CONCEPCIÓN"
          },
          {
            id: 40452,
            nombre: "JIJÓN Y CAAMAÑO (CAB. EN RÍO BLANCO)"
          },
          {
            id: 40453,
            nombre: "JUAN MONTALVO (SAN IGNACIO DE QUIL)"
          }
        ]
      },
      {
        id: 405,
        nombre: "MONTÚFAR",
        parroquias: [
          {
            id: 40501,
            nombre: "GONZÁLEZ SUÁREZ"
          },
          {
            id: 40502,
            nombre: "SAN JOSÉ"
          },
          {
            id: 40550,
            nombre: "SAN GABRIEL"
          },
          {
            id: 40551,
            nombre: "CRISTÓBAL COLÓN"
          },
          {
            id: 40552,
            nombre: "CHITÁN DE NAVARRETE"
          },
          {
            id: 40553,
            nombre: "FERNÁNDEZ SALVADOR"
          },
          {
            id: 40554,
            nombre: "LA PAZ"
          },
          {
            id: 40555,
            nombre: "PIARTAL"
          }
        ]
      },
      {
        id: 406,
        nombre: "SAN PEDRO DE HUACA",
        parroquias: [
          {
            id: 40650,
            nombre: "HUACA"
          },
          {
            id: 40651,
            nombre: "MARISCAL SUCRE"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    nombre: "COTOPAXI",
    cantones: [
      {
        id: 501,
        nombre: "LATACUNGA",
        parroquias: [
          {
            id: 50101,
            nombre: "ELOY ALFARO (SAN FELIPE)"
          },
          {
            id: 50102,
            nombre: "IGNACIO FLORES (PARQUE FLORES)"
          },
          {
            id: 50103,
            nombre: "JUAN MONTALVO (SAN SEBASTIÁN)"
          },
          {
            id: 50104,
            nombre: "LA MATRIZ"
          },
          {
            id: 50105,
            nombre: "SAN BUENAVENTURA"
          },
          {
            id: 50150,
            nombre: "LATACUNGA"
          },
          {
            id: 50151,
            nombre: "ALAQUES (ALÁQUEZ)"
          },
          {
            id: 50152,
            nombre: "BELISARIO QUEVEDO (GUANAILÍN)"
          },
          {
            id: 50153,
            nombre: "GUAITACAMA (GUAYTACAMA)"
          },
          {
            id: 50154,
            nombre: "JOSEGUANGO BAJO"
          },
          {
            id: 50155,
            nombre: "LAS PAMPAS"
          },
          {
            id: 50156,
            nombre: "MULALÓ"
          },
          {
            id: 50157,
            nombre: "11 DE NOVIEMBRE (ILINCHISI)"
          },
          {
            id: 50158,
            nombre: "POALÓ"
          },
          {
            id: 50159,
            nombre: "SAN JUAN DE PASTOCALLE"
          },
          {
            id: 50160,
            nombre: "SIGCHOS"
          },
          {
            id: 50161,
            nombre: "TANICUCHÍ"
          },
          {
            id: 50162,
            nombre: "TOACASO"
          },
          {
            id: 50163,
            nombre: "PALO QUEMADO"
          }
        ]
      },
      {
        id: 502,
        nombre: "LA MANÁ",
        parroquias: [
          {
            id: 50201,
            nombre: "EL CARMEN"
          },
          {
            id: 50202,
            nombre: "LA MANÁ"
          },
          {
            id: 50203,
            nombre: "EL TRIUNFO"
          },
          {
            id: 50250,
            nombre: "LA MANÁ"
          },
          {
            id: 50251,
            nombre: "GUASAGANDA (CAB.EN GUASAGANDA"
          },
          {
            id: 50252,
            nombre: "PUCAYACU"
          }
        ]
      },
      {
        id: 503,
        nombre: "PANGUA",
        parroquias: [
          {
            id: 50350,
            nombre: "EL CORAZÓN"
          },
          {
            id: 50351,
            nombre: "MORASPUNGO"
          },
          {
            id: 50352,
            nombre: "PINLLOPATA"
          },
          {
            id: 50353,
            nombre: "RAMÓN CAMPAÑA"
          }
        ]
      },
      {
        id: 504,
        nombre: "PUJILI",
        parroquias: [
          {
            id: 50450,
            nombre: "PUJILÍ"
          },
          {
            id: 50451,
            nombre: "ANGAMARCA"
          },
          {
            id: 50452,
            nombre: "CHUCCHILÁN (CHUGCHILÁN)"
          },
          {
            id: 50453,
            nombre: "GUANGAJE"
          },
          {
            id: 50454,
            nombre: "ISINLIBÍ (ISINLIVÍ)"
          },
          {
            id: 50455,
            nombre: "LA VICTORIA"
          },
          {
            id: 50456,
            nombre: "PILALÓ"
          },
          {
            id: 50457,
            nombre: "TINGO"
          },
          {
            id: 50458,
            nombre: "ZUMBAHUA"
          }
        ]
      },
      {
        id: 505,
        nombre: "SALCEDO",
        parroquias: [
          {
            id: 50550,
            nombre: "SAN MIGUEL"
          },
          {
            id: 50551,
            nombre: "ANTONIO JOSÉ HOLGUÍN (SANTA LUCÍA)"
          },
          {
            id: 50552,
            nombre: "CUSUBAMBA"
          },
          {
            id: 50553,
            nombre: "MULALILLO"
          },
          {
            id: 50554,
            nombre: "MULLIQUINDIL (SANTA ANA)"
          },
          {
            id: 50555,
            nombre: "PANSALEO"
          }
        ]
      },
      {
        id: 506,
        nombre: "SAQUISILÍ",
        parroquias: [
          {
            id: 50650,
            nombre: "SAQUISILÍ"
          },
          {
            id: 50651,
            nombre: "CANCHAGUA"
          },
          {
            id: 50652,
            nombre: "CHANTILÍN"
          },
          {
            id: 50653,
            nombre: "COCHAPAMBA"
          }
        ]
      },
      {
        id: 507,
        nombre: "SIGCHOS",
        parroquias: [
          {
            id: 50750,
            nombre: "SIGCHOS"
          },
          {
            id: 50751,
            nombre: "CHUGCHILLÁN"
          },
          {
            id: 50752,
            nombre: "ISINLIVÍ"
          },
          {
            id: 50753,
            nombre: "LAS PAMPAS"
          },
          {
            id: 50754,
            nombre: "PALO QUEMADO"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    nombre: "CHIMBORAZO",
    cantones: [
      {
        id: 601,
        nombre: "RIOBAMBA",
        parroquias: [
          {
            id: 60101,
            nombre: "LIZARZABURU"
          },
          {
            id: 60102,
            nombre: "MALDONADO"
          },
          {
            id: 60103,
            nombre: "VELASCO"
          },
          {
            id: 60104,
            nombre: "VELOZ"
          },
          {
            id: 60105,
            nombre: "YARUQUÍES"
          },
          {
            id: 60150,
            nombre: "RIOBAMBA"
          },
          {
            id: 60151,
            nombre: "CACHA (CAB. EN MACHÁNGARA)"
          },
          {
            id: 60152,
            nombre: "CALPI"
          },
          {
            id: 60153,
            nombre: "CUBIJÍES"
          },
          {
            id: 60154,
            nombre: "FLORES"
          },
          {
            id: 60155,
            nombre: "LICÁN"
          },
          {
            id: 60156,
            nombre: "LICTO"
          },
          {
            id: 60157,
            nombre: "PUNGALÁ"
          },
          {
            id: 60158,
            nombre: "PUNÍN"
          },
          {
            id: 60159,
            nombre: "QUIMIAG"
          },
          {
            id: 60160,
            nombre: "SAN JUAN"
          },
          {
            id: 60161,
            nombre: "SAN LUIS"
          }
        ]
      },
      {
        id: 602,
        nombre: "ALAUSI",
        parroquias: [
          {
            id: 60250,
            nombre: "ALAUSÍ"
          },
          {
            id: 60251,
            nombre: "ACHUPALLAS"
          },
          {
            id: 60252,
            nombre: "CUMANDÁ"
          },
          {
            id: 60253,
            nombre: "GUASUNTOS"
          },
          {
            id: 60254,
            nombre: "HUIGRA"
          },
          {
            id: 60255,
            nombre: "MULTITUD"
          },
          {
            id: 60256,
            nombre: "PISTISHÍ (NARIZ DEL DIABLO)"
          },
          {
            id: 60257,
            nombre: "PUMALLACTA"
          },
          {
            id: 60258,
            nombre: "SEVILLA"
          },
          {
            id: 60259,
            nombre: "SIBAMBE"
          },
          {
            id: 60260,
            nombre: "TIXÁN"
          }
        ]
      },
      {
        id: 603,
        nombre: "COLTA",
        parroquias: [
          {
            id: 60301,
            nombre: "CAJABAMBA"
          },
          {
            id: 60302,
            nombre: "SICALPA"
          },
          {
            id: 60350,
            nombre: "VILLA LA UNIÓN (CAJABAMBA)"
          },
          {
            id: 60351,
            nombre: "CAÑI"
          },
          {
            id: 60352,
            nombre: "COLUMBE"
          },
          {
            id: 60353,
            nombre: "JUAN DE VELASCO (PANGOR)"
          },
          {
            id: 60354,
            nombre: "SANTIAGO DE QUITO (CAB. EN SAN ANTONIO DE QUITO)"
          }
        ]
      },
      {
        id: 604,
        nombre: "CHAMBO",
        parroquias: [
          {
            id: 60450,
            nombre: "CHAMBO"
          }
        ]
      },
      {
        id: 605,
        nombre: "CHUNCHI",
        parroquias: [
          {
            id: 60550,
            nombre: "CHUNCHI"
          },
          {
            id: 60551,
            nombre: "CAPZOL"
          },
          {
            id: 60552,
            nombre: "COMPUD"
          },
          {
            id: 60553,
            nombre: "GONZOL"
          },
          {
            id: 60554,
            nombre: "LLAGOS"
          }
        ]
      },
      {
        id: 606,
        nombre: "GUAMOTE",
        parroquias: [
          {
            id: 60650,
            nombre: "GUAMOTE"
          },
          {
            id: 60651,
            nombre: "CEBADAS"
          },
          {
            id: 60652,
            nombre: "PALMIRA"
          }
        ]
      },
      {
        id: 607,
        nombre: "GUANO",
        parroquias: [
          {
            id: 60701,
            nombre: "EL ROSARIO"
          },
          {
            id: 60702,
            nombre: "LA MATRIZ"
          },
          {
            id: 60750,
            nombre: "GUANO"
          },
          {
            id: 60751,
            nombre: "GUANANDO"
          },
          {
            id: 60752,
            nombre: "ILAPO"
          },
          {
            id: 60753,
            nombre: "LA PROVIDENCIA"
          },
          {
            id: 60754,
            nombre: "SAN ANDRÉS"
          },
          {
            id: 60755,
            nombre: "SAN GERARDO DE PACAICAGUÁN"
          },
          {
            id: 60756,
            nombre: "SAN ISIDRO DE PATULÚ"
          },
          {
            id: 60757,
            nombre: "SAN JOSÉ DEL CHAZO"
          },
          {
            id: 60758,
            nombre: "SANTA FÉ DE GALÁN"
          },
          {
            id: 60759,
            nombre: "VALPARAÍSO"
          }
        ]
      },
      {
        id: 608,
        nombre: "PALLATANGA",
        parroquias: [
          {
            id: 60850,
            nombre: "PALLATANGA"
          }
        ]
      },
      {
        id: 609,
        nombre: "PENIPE",
        parroquias: [
          {
            id: 60950,
            nombre: "PENIPE"
          },
          {
            id: 60951,
            nombre: "EL ALTAR"
          },
          {
            id: 60952,
            nombre: "MATUS"
          },
          {
            id: 60953,
            nombre: "PUELA"
          },
          {
            id: 60954,
            nombre: "SAN ANTONIO DE BAYUSHIG"
          },
          {
            id: 60955,
            nombre: "LA CANDELARIA"
          },
          {
            id: 60956,
            nombre: "BILBAO (CAB.EN QUILLUYACU)"
          }
        ]
      },
      {
        id: 610,
        nombre: "CUMANDÁ",
        parroquias: [
          {
            id: 61050,
            nombre: "CUMANDÁ"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    nombre: "EL ORO",
    cantones: [
      {
        id: 701,
        nombre: "MACHALA",
        parroquias: [
          {
            id: 70101,
            nombre: "LA PROVIDENCIA"
          },
          {
            id: 70102,
            nombre: "MACHALA"
          },
          {
            id: 70103,
            nombre: "PUERTO BOLÍVAR"
          },
          {
            id: 70104,
            nombre: "NUEVE DE MAYO"
          },
          {
            id: 70105,
            nombre: "EL CAMBIO"
          },
          {
            id: 70150,
            nombre: "MACHALA"
          },
          {
            id: 70151,
            nombre: "EL CAMBIO"
          },
          {
            id: 70152,
            nombre: "EL RETIRO"
          }
        ]
      },
      {
        id: 702,
        nombre: "ARENILLAS",
        parroquias: [
          {
            id: 70250,
            nombre: "ARENILLAS"
          },
          {
            id: 70251,
            nombre: "CHACRAS"
          },
          {
            id: 70252,
            nombre: "LA LIBERTAD"
          },
          {
            id: 70253,
            nombre: "LAS LAJAS (CAB. EN LA VICTORIA)"
          },
          {
            id: 70254,
            nombre: "PALMALES"
          },
          {
            id: 70255,
            nombre: "CARCABÓN"
          }
        ]
      },
      {
        id: 703,
        nombre: "ATAHUALPA",
        parroquias: [
          {
            id: 70350,
            nombre: "PACCHA"
          },
          {
            id: 70351,
            nombre: "AYAPAMBA"
          },
          {
            id: 70352,
            nombre: "CORDONCILLO"
          },
          {
            id: 70353,
            nombre: "MILAGRO"
          },
          {
            id: 70354,
            nombre: "SAN JOSÉ"
          },
          {
            id: 70355,
            nombre: "SAN JUAN DE CERRO AZUL"
          }
        ]
      },
      {
        id: 704,
        nombre: "BALSAS",
        parroquias: [
          {
            id: 70450,
            nombre: "BALSAS"
          },
          {
            id: 70451,
            nombre: "BELLAMARÍA"
          }
        ]
      },
      {
        id: 705,
        nombre: "CHILLA",
        parroquias: [
          {
            id: 70550,
            nombre: "CHILLA"
          }
        ]
      },
      {
        id: 706,
        nombre: "EL GUABO",
        parroquias: [
          {
            id: 70650,
            nombre: "EL GUABO"
          },
          {
            id: 70651,
            nombre: "BARBONES (SUCRE)"
          },
          {
            id: 70652,
            nombre: "LA IBERIA"
          },
          {
            id: 70653,
            nombre: "TENDALES (CAB.EN PUERTO TENDALES)"
          },
          {
            id: 70654,
            nombre: "RÍO BONITO"
          }
        ]
      },
      {
        id: 707,
        nombre: "HUAQUILLAS",
        parroquias: [
          {
            id: 70701,
            nombre: "ECUADOR"
          },
          {
            id: 70702,
            nombre: "EL PARAÍSO"
          },
          {
            id: 70703,
            nombre: "HUALTACO"
          },
          {
            id: 70704,
            nombre: "MILTON REYES"
          },
          {
            id: 70705,
            nombre: "UNIÓN LOJANA"
          },
          {
            id: 70750,
            nombre: "HUAQUILLAS"
          }
        ]
      },
      {
        id: 708,
        nombre: "MARCABELÍ",
        parroquias: [
          {
            id: 70850,
            nombre: "MARCABELÍ"
          },
          {
            id: 70851,
            nombre: "EL INGENIO"
          }
        ]
      },
      {
        id: 709,
        nombre: "PASAJE",
        parroquias: [
          {
            id: 70901,
            nombre: "BOLÍVAR"
          },
          {
            id: 70902,
            nombre: "LOMA DE FRANCO"
          },
          {
            id: 70903,
            nombre: "OCHOA LEÓN (MATRIZ)"
          },
          {
            id: 70904,
            nombre: "TRES CERRITOS"
          },
          {
            id: 70950,
            nombre: "PASAJE"
          },
          {
            id: 70951,
            nombre: "BUENAVISTA"
          },
          {
            id: 70952,
            nombre: "CASACAY"
          },
          {
            id: 70953,
            nombre: "LA PEAÑA"
          },
          {
            id: 70954,
            nombre: "PROGRESO"
          },
          {
            id: 70955,
            nombre: "UZHCURRUMI"
          },
          {
            id: 70956,
            nombre: "CAÑAQUEMADA"
          }
        ]
      },
      {
        id: 710,
        nombre: "PIÑAS",
        parroquias: [
          {
            id: 71001,
            nombre: "LA MATRIZ"
          },
          {
            id: 71002,
            nombre: "LA SUSAYA"
          },
          {
            id: 71003,
            nombre: "PIÑAS GRANDE"
          },
          {
            id: 71050,
            nombre: "PIÑAS"
          },
          {
            id: 71051,
            nombre: "CAPIRO (CAB. EN LA CAPILLA DE CAPIRO)"
          },
          {
            id: 71052,
            nombre: "LA BOCANA"
          },
          {
            id: 71053,
            nombre: "MOROMORO (CAB. EN EL VADO)"
          },
          {
            id: 71054,
            nombre: "PIEDRAS"
          },
          {
            id: 71055,
            nombre: "SAN ROQUE (AMBROSIO MALDONADO)"
          },
          {
            id: 71056,
            nombre: "SARACAY"
          }
        ]
      },
      {
        id: 711,
        nombre: "PORTOVELO",
        parroquias: [
          {
            id: 71150,
            nombre: "PORTOVELO"
          },
          {
            id: 71151,
            nombre: "CURTINCAPA"
          },
          {
            id: 71152,
            nombre: "MORALES"
          },
          {
            id: 71153,
            nombre: "SALATÍ"
          }
        ]
      },
      {
        id: 712,
        nombre: "SANTA ROSA",
        parroquias: [
          {
            id: 71201,
            nombre: "SANTA ROSA"
          },
          {
            id: 71202,
            nombre: "PUERTO JELÍ"
          },
          {
            id: 71203,
            nombre: "BALNEARIO JAMBELÍ (SATÉLITE)"
          },
          {
            id: 71204,
            nombre: "JUMÓN (SATÉLITE)"
          },
          {
            id: 71205,
            nombre: "NUEVO SANTA ROSA"
          },
          {
            id: 71250,
            nombre: "SANTA ROSA"
          },
          {
            id: 71251,
            nombre: "BELLAVISTA"
          },
          {
            id: 71252,
            nombre: "JAMBELÍ"
          },
          {
            id: 71253,
            nombre: "LA AVANZADA"
          },
          {
            id: 71254,
            nombre: "SAN ANTONIO"
          },
          {
            id: 71255,
            nombre: "TORATA"
          },
          {
            id: 71256,
            nombre: "VICTORIA"
          },
          {
            id: 71257,
            nombre: "BELLAMARÍA"
          }
        ]
      },
      {
        id: 713,
        nombre: "ZARUMA",
        parroquias: [
          {
            id: 71350,
            nombre: "ZARUMA"
          },
          {
            id: 71351,
            nombre: "ABAÑÍN"
          },
          {
            id: 71352,
            nombre: "ARCAPAMBA"
          },
          {
            id: 71353,
            nombre: "GUANAZÁN"
          },
          {
            id: 71354,
            nombre: "GUIZHAGUIÑA"
          },
          {
            id: 71355,
            nombre: "HUERTAS"
          },
          {
            id: 71356,
            nombre: "MALVAS"
          },
          {
            id: 71357,
            nombre: "MULUNCAY GRANDE"
          },
          {
            id: 71358,
            nombre: "SINSAO"
          },
          {
            id: 71359,
            nombre: "SALVIAS"
          }
        ]
      },
      {
        id: 714,
        nombre: "LAS LAJAS",
        parroquias: [
          {
            id: 71401,
            nombre: "LA VICTORIA"
          },
          {
            id: 71402,
            nombre: "PLATANILLOS"
          },
          {
            id: 71403,
            nombre: "VALLE HERMOSO"
          },
          {
            id: 71450,
            nombre: "LA VICTORIA"
          },
          {
            id: 71451,
            nombre: "LA LIBERTAD"
          },
          {
            id: 71452,
            nombre: "EL PARAÍSO"
          },
          {
            id: 71453,
            nombre: "SAN ISIDRO"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    nombre: "ESMERALDAS",
    cantones: [
      {
        id: 801,
        nombre: "ESMERALDAS",
        parroquias: [
          {
            id: 80101,
            nombre: "BARTOLOMÉ RUIZ (CÉSAR FRANCO CARRIÓN)"
          },
          {
            id: 80102,
            nombre: "5 DE AGOSTO"
          },
          {
            id: 80103,
            nombre: "ESMERALDAS"
          },
          {
            id: 80104,
            nombre: "LUIS TELLO (LAS PALMAS)"
          },
          {
            id: 80105,
            nombre: "SIMÓN PLATA TORRES"
          },
          {
            id: 80150,
            nombre: "ESMERALDAS"
          },
          {
            id: 80151,
            nombre: "ATACAMES"
          },
          {
            id: 80152,
            nombre: "CAMARONES (CAB. EN SAN VICENTE)"
          },
          {
            id: 80153,
            nombre: "CRNEL. CARLOS CONCHA TORRES (CAB.EN HUELE)"
          },
          {
            id: 80154,
            nombre: "CHINCA"
          },
          {
            id: 80155,
            nombre: "CHONTADURO"
          },
          {
            id: 80156,
            nombre: "CHUMUNDÉ"
          },
          {
            id: 80157,
            nombre: "LAGARTO"
          },
          {
            id: 80158,
            nombre: "LA UNIÓN"
          },
          {
            id: 80159,
            nombre: "MAJUA"
          },
          {
            id: 80160,
            nombre: "MONTALVO (CAB. EN HORQUETA)"
          },
          {
            id: 80161,
            nombre: "RÍO VERDE"
          },
          {
            id: 80162,
            nombre: "ROCAFUERTE"
          },
          {
            id: 80163,
            nombre: "SAN MATEO"
          },
          {
            id: 80164,
            nombre: "SÚA (CAB. EN LA BOCANA)"
          },
          {
            id: 80165,
            nombre: "TABIAZO"
          },
          {
            id: 80166,
            nombre: "TACHINA"
          },
          {
            id: 80167,
            nombre: "TONCHIGÜE"
          },
          {
            id: 80168,
            nombre: "VUELTA LARGA"
          }
        ]
      },
      {
        id: 802,
        nombre: "ELOY ALFARO",
        parroquias: [
          {
            id: 80250,
            nombre: "VALDEZ (LIMONES)"
          },
          {
            id: 80251,
            nombre: "ANCHAYACU"
          },
          {
            id: 80252,
            nombre: "ATAHUALPA (CAB. EN CAMARONES)"
          },
          {
            id: 80253,
            nombre: "BORBÓN"
          },
          {
            id: 80254,
            nombre: "LA TOLA"
          },
          {
            id: 80255,
            nombre: "LUIS VARGAS TORRES (CAB. EN PLAYA DE ORO)"
          },
          {
            id: 80256,
            nombre: "MALDONADO"
          },
          {
            id: 80257,
            nombre: "PAMPANAL DE BOLÍVAR"
          },
          {
            id: 80258,
            nombre: "SAN FRANCISCO DE ONZOLE"
          },
          {
            id: 80259,
            nombre: "SANTO DOMINGO DE ONZOLE"
          },
          {
            id: 80260,
            nombre: "SELVA ALEGRE"
          },
          {
            id: 80261,
            nombre: "TELEMBÍ"
          },
          {
            id: 80262,
            nombre: "COLÓN ELOY DEL MARÍA"
          },
          {
            id: 80263,
            nombre: "SAN JOSÉ DE CAYAPAS"
          },
          {
            id: 80264,
            nombre: "TIMBIRÉ"
          }
        ]
      },
      {
        id: 803,
        nombre: "MUISNE",
        parroquias: [
          {
            id: 80350,
            nombre: "MUISNE"
          },
          {
            id: 80351,
            nombre: "BOLÍVAR"
          },
          {
            id: 80352,
            nombre: "DAULE"
          },
          {
            id: 80353,
            nombre: "GALERA"
          },
          {
            id: 80354,
            nombre: "QUINGUE (OLMEDO PERDOMO FRANCO)"
          },
          {
            id: 80355,
            nombre: "SALIMA"
          },
          {
            id: 80356,
            nombre: "SAN FRANCISCO"
          },
          {
            id: 80357,
            nombre: "SAN GREGORIO"
          },
          {
            id: 80358,
            nombre: "SAN JOSÉ DE CHAMANGA (CAB.EN CHAMANGA)"
          }
        ]
      },
      {
        id: 804,
        nombre: "QUININDÉ",
        parroquias: [
          {
            id: 80450,
            nombre: "ROSA ZÁRATE (QUININDÉ)"
          },
          {
            id: 80451,
            nombre: "CUBE"
          },
          {
            id: 80452,
            nombre: "CHURA (CHANCAMA) (CAB. EN EL YERBERO)"
          },
          {
            id: 80453,
            nombre: "MALIMPIA"
          },
          {
            id: 80454,
            nombre: "VICHE"
          },
          {
            id: 80455,
            nombre: "LA UNIÓN"
          }
        ]
      },
      {
        id: 805,
        nombre: "SAN LORENZO",
        parroquias: [
          {
            id: 80550,
            nombre: "SAN LORENZO"
          },
          {
            id: 80551,
            nombre: "ALTO TAMBO (CAB. EN GUADUAL)"
          },
          {
            id: 80552,
            nombre: "ANCÓN (PICHANGAL) (CAB. EN PALMA REAL)"
          },
          {
            id: 80553,
            nombre: "CALDERÓN"
          },
          {
            id: 80554,
            nombre: "CARONDELET"
          },
          {
            id: 80555,
            nombre: "5 DE JUNIO (CAB. EN UIMBI)"
          },
          {
            id: 80556,
            nombre: "CONCEPCIÓN"
          },
          {
            id: 80557,
            nombre: "MATAJE (CAB. EN SANTANDER)"
          },
          {
            id: 80558,
            nombre: "SAN JAVIER DE CACHAVÍ (CAB. EN SAN JAVIER)"
          },
          {
            id: 80559,
            nombre: "SANTA RITA"
          },
          {
            id: 80560,
            nombre: "TAMBILLO"
          },
          {
            id: 80561,
            nombre: "TULULBÍ (CAB. EN RICAURTE)"
          },
          {
            id: 80562,
            nombre: "URBINA"
          }
        ]
      },
      {
        id: 806,
        nombre: "ATACAMES",
        parroquias: [
          {
            id: 80650,
            nombre: "ATACAMES"
          },
          {
            id: 80651,
            nombre: "LA UNIÓN"
          },
          {
            id: 80652,
            nombre: "SÚA (CAB. EN LA BOCANA)"
          },
          {
            id: 80653,
            nombre: "TONCHIGÜE"
          },
          {
            id: 80654,
            nombre: "TONSUPA"
          }
        ]
      },
      {
        id: 807,
        nombre: "RIOVERDE",
        parroquias: [
          {
            id: 80750,
            nombre: "RIOVERDE"
          },
          {
            id: 80751,
            nombre: "CHONTADURO"
          },
          {
            id: 80752,
            nombre: "CHUMUNDÉ"
          },
          {
            id: 80753,
            nombre: "LAGARTO"
          },
          {
            id: 80754,
            nombre: "MONTALVO (CAB. EN HORQUETA)"
          },
          {
            id: 80755,
            nombre: "ROCAFUERTE"
          }
        ]
      },
      {
        id: 808,
        nombre: "LA CONCORDIA",
        parroquias: [
          {
            id: 80850,
            nombre: "LA CONCORDIA"
          },
          {
            id: 80851,
            nombre: "MONTERREY"
          },
          {
            id: 80852,
            nombre: "LA VILLEGAS"
          },
          {
            id: 80853,
            nombre: "PLAN PILOTO"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    nombre: "GUAYAS",
    cantones: [
      {
        id: 901,
        nombre: "GUAYAQUIL",
        parroquias: [
          {
            id: 90101,
            nombre: "AYACUCHO"
          },
          {
            id: 90102,
            nombre: "BOLÍVAR (SAGRARIO)"
          },
          {
            id: 90103,
            nombre: "CARBO (CONCEPCIÓN)"
          },
          {
            id: 90104,
            nombre: "FEBRES CORDERO"
          },
          {
            id: 90105,
            nombre: "GARCÍA MORENO"
          },
          {
            id: 90106,
            nombre: "LETAMENDI"
          },
          {
            id: 90107,
            nombre: "NUEVE DE OCTUBRE"
          },
          {
            id: 90108,
            nombre: "OLMEDO (SAN ALEJO)"
          },
          {
            id: 90109,
            nombre: "ROCA"
          },
          {
            id: 90110,
            nombre: "ROCAFUERTE"
          },
          {
            id: 90111,
            nombre: "SUCRE"
          },
          {
            id: 90112,
            nombre: "TARQUI"
          },
          {
            id: 90113,
            nombre: "URDANETA"
          },
          {
            id: 90114,
            nombre: "XIMENA"
          },
          {
            id: 90115,
            nombre: "PASCUALES"
          },
          {
            id: 90150,
            nombre: "GUAYAQUIL"
          },
          {
            id: 90151,
            nombre: "CHONGÓN"
          },
          {
            id: 90152,
            nombre: "JUAN GÓMEZ RENDÓN (PROGRESO)"
          },
          {
            id: 90153,
            nombre: "MORRO"
          },
          {
            id: 90154,
            nombre: "PASCUALES"
          },
          {
            id: 90155,
            nombre: "PLAYAS (GRAL. VILLAMIL)"
          },
          {
            id: 90156,
            nombre: "POSORJA"
          },
          {
            id: 90157,
            nombre: "PUNÁ"
          },
          {
            id: 90158,
            nombre: "TENGUEL"
          }
        ]
      },
      {
        id: 902,
        nombre: "ALFREDO BAQUERIZO MORENO (JUJÁN)",
        parroquias: [
          {
            id: 90250,
            nombre: "ALFREDO BAQUERIZO MORENO (JUJÁN)"
          }
        ]
      },
      {
        id: 903,
        nombre: "BALAO",
        parroquias: [
          {
            id: 90350,
            nombre: "BALAO"
          }
        ]
      },
      {
        id: 904,
        nombre: "BALZAR",
        parroquias: [
          {
            id: 90450,
            nombre: "BALZAR"
          }
        ]
      },
      {
        id: 905,
        nombre: "COLIMES",
        parroquias: [
          {
            id: 90550,
            nombre: "COLIMES"
          },
          {
            id: 90551,
            nombre: "SAN JACINTO"
          }
        ]
      },
      {
        id: 906,
        nombre: "DAULE",
        parroquias: [
          {
            id: 90601,
            nombre: "DAULE"
          },
          {
            id: 90602,
            nombre: "LA AURORA (SATÉLITE)"
          },
          {
            id: 90603,
            nombre: "BANIFE"
          },
          {
            id: 90604,
            nombre: "EMILIANO CAICEDO MARCOS"
          },
          {
            id: 90605,
            nombre: "MAGRO"
          },
          {
            id: 90606,
            nombre: "PADRE JUAN BAUTISTA AGUIRRE"
          },
          {
            id: 90607,
            nombre: "SANTA CLARA"
          },
          {
            id: 90608,
            nombre: "VICENTE PIEDRAHITA"
          },
          {
            id: 90650,
            nombre: "DAULE"
          },
          {
            id: 90651,
            nombre: "ISIDRO AYORA (SOLEDAD)"
          },
          {
            id: 90652,
            nombre: "JUAN BAUTISTA AGUIRRE (LOS TINTOS)"
          },
          {
            id: 90653,
            nombre: "LAUREL"
          },
          {
            id: 90654,
            nombre: "LIMONAL"
          },
          {
            id: 90655,
            nombre: "LOMAS DE SARGENTILLO"
          },
          {
            id: 90656,
            nombre: "LOS LOJAS (ENRIQUE BAQUERIZO MORENO)"
          },
          {
            id: 90657,
            nombre: "PIEDRAHITA (NOBOL)"
          }
        ]
      },
      {
        id: 907,
        nombre: "DURÁN",
        parroquias: [
          {
            id: 90701,
            nombre: "ELOY ALFARO (DURÁN)"
          },
          {
            id: 90702,
            nombre: "EL RECREO"
          },
          {
            id: 90750,
            nombre: "ELOY ALFARO (DURÁN)"
          }
        ]
      },
      {
        id: 908,
        nombre: "EL EMPALME",
        parroquias: [
          {
            id: 90850,
            nombre: "VELASCO IBARRA (EL EMPALME)"
          },
          {
            id: 90851,
            nombre: "GUAYAS (PUEBLO NUEVO)"
          },
          {
            id: 90852,
            nombre: "EL ROSARIO"
          }
        ]
      },
      {
        id: 909,
        nombre: "EL TRIUNFO",
        parroquias: [
          {
            id: 90950,
            nombre: "EL TRIUNFO"
          }
        ]
      },
      {
        id: 910,
        nombre: "MILAGRO",
        parroquias: [
          {
            id: 91050,
            nombre: "MILAGRO"
          },
          {
            id: 91051,
            nombre: "CHOBO"
          },
          {
            id: 91052,
            nombre: "GENERAL ELIZALDE (BUCAY)"
          },
          {
            id: 91053,
            nombre: "MARISCAL SUCRE (HUAQUES)"
          },
          {
            id: 91054,
            nombre: "ROBERTO ASTUDILLO (CAB. EN CRUCE DE VENECIA)"
          }
        ]
      },
      {
        id: 911,
        nombre: "NARANJAL",
        parroquias: [
          {
            id: 91150,
            nombre: "NARANJAL"
          },
          {
            id: 91151,
            nombre: "JESÚS MARÍA"
          },
          {
            id: 91152,
            nombre: "SAN CARLOS"
          },
          {
            id: 91153,
            nombre: "SANTA ROSA DE FLANDES"
          },
          {
            id: 91154,
            nombre: "TAURA"
          }
        ]
      },
      {
        id: 912,
        nombre: "NARANJITO",
        parroquias: [
          {
            id: 91250,
            nombre: "NARANJITO"
          }
        ]
      },
      {
        id: 913,
        nombre: "PALESTINA",
        parroquias: [
          {
            id: 91350,
            nombre: "PALESTINA"
          }
        ]
      },
      {
        id: 914,
        nombre: "PEDRO CARBO",
        parroquias: [
          {
            id: 91450,
            nombre: "PEDRO CARBO"
          },
          {
            id: 91451,
            nombre: "VALLE DE LA VIRGEN"
          },
          {
            id: 91452,
            nombre: "SABANILLA"
          }
        ]
      },
      {
        id: 916,
        nombre: "SAMBORONDÓN",
        parroquias: [
          {
            id: 91601,
            nombre: "SAMBORONDÓN"
          },
          {
            id: 91602,
            nombre: "LA PUNTILLA (SATÉLITE)"
          },
          {
            id: 91650,
            nombre: "SAMBORONDÓN"
          },
          {
            id: 91651,
            nombre: "TARIFA"
          }
        ]
      },
      {
        id: 918,
        nombre: "SANTA LUCÍA",
        parroquias: [
          {
            id: 91850,
            nombre: "SANTA LUCÍA"
          }
        ]
      },
      {
        id: 919,
        nombre: "SALITRE (URBINA JADO)",
        parroquias: [
          {
            id: 91901,
            nombre: "BOCANA"
          },
          {
            id: 91902,
            nombre: "CANDILEJOS"
          },
          {
            id: 91903,
            nombre: "CENTRAL"
          },
          {
            id: 91904,
            nombre: "PARAÍSO"
          },
          {
            id: 91905,
            nombre: "SAN MATEO"
          },
          {
            id: 91950,
            nombre: "EL SALITRE (LAS RAMAS)"
          },
          {
            id: 91951,
            nombre: "GRAL. VERNAZA (DOS ESTEROS)"
          },
          {
            id: 91952,
            nombre: "LA VICTORIA (ÑAUZA)"
          },
          {
            id: 91953,
            nombre: "JUNQUILLAL"
          }
        ]
      },
      {
        id: 920,
        nombre: "SAN JACINTO DE YAGUACHI",
        parroquias: [
          {
            id: 92050,
            nombre: "SAN JACINTO DE YAGUACHI"
          },
          {
            id: 92051,
            nombre: "CRNEL. LORENZO DE GARAICOA (PEDREGAL)"
          },
          {
            id: 92052,
            nombre: "CRNEL. MARCELINO MARIDUEÑA (SAN CARLOS)"
          },
          {
            id: 92053,
            nombre: "GRAL. PEDRO J. MONTERO (BOLICHE)"
          },
          {
            id: 92054,
            nombre: "SIMÓN BOLÍVAR"
          },
          {
            id: 92055,
            nombre: "YAGUACHI VIEJO (CONE)"
          },
          {
            id: 92056,
            nombre: "VIRGEN DE FÁTIMA"
          }
        ]
      },
      {
        id: 921,
        nombre: "PLAYAS",
        parroquias: [
          {
            id: 92150,
            nombre: "GENERAL VILLAMIL (PLAYAS)"
          }
        ]
      },
      {
        id: 922,
        nombre: "SIMÓN BOLÍVAR",
        parroquias: [
          {
            id: 92250,
            nombre: "SIMÓN BOLÍVAR"
          },
          {
            id: 92251,
            nombre: "CRNEL.LORENZO DE GARAICOA (PEDREGAL)"
          }
        ]
      },
      {
        id: 923,
        nombre: "CORONEL MARCELINO MARIDUEÑA",
        parroquias: [
          {
            id: 92350,
            nombre: "CORONEL MARCELINO MARIDUEÑA (SAN CARLOS)"
          }
        ]
      },
      {
        id: 924,
        nombre: "LOMAS DE SARGENTILLO",
        parroquias: [
          {
            id: 92450,
            nombre: "LOMAS DE SARGENTILLO"
          },
          {
            id: 92451,
            nombre: "ISIDRO AYORA (SOLEDAD)"
          }
        ]
      },
      {
        id: 925,
        nombre: "NOBOL",
        parroquias: [
          {
            id: 92550,
            nombre: "NARCISA DE JESÚS"
          }
        ]
      },
      {
        id: 927,
        nombre: "GENERAL ANTONIO ELIZALDE",
        parroquias: [
          {
            id: 92750,
            nombre: "GENERAL ANTONIO ELIZALDE (BUCAY)"
          }
        ]
      },
      {
        id: 928,
        nombre: "ISIDRO AYORA",
        parroquias: [
          {
            id: 92850,
            nombre: "ISIDRO AYORA"
          }
        ]
      }
    ]
  },
  {
    id: 10,
    nombre: "IMBABURA",
    cantones: [
      {
        id: 1001,
        nombre: "IBARRA",
        parroquias: [
          {
            id: 100101,
            nombre: "CARANQUI"
          },
          {
            id: 100102,
            nombre: "GUAYAQUIL DE ALPACHACA"
          },
          {
            id: 100103,
            nombre: "SAGRARIO"
          },
          {
            id: 100104,
            nombre: "SAN FRANCISCO"
          },
          {
            id: 100105,
            nombre: "LA DOLOROSA DEL PRIORATO"
          },
          {
            id: 100150,
            nombre: "SAN MIGUEL DE IBARRA"
          },
          {
            id: 100151,
            nombre: "AMBUQUÍ"
          },
          {
            id: 100152,
            nombre: "ANGOCHAGUA"
          },
          {
            id: 100153,
            nombre: "CAROLINA"
          },
          {
            id: 100154,
            nombre: "LA ESPERANZA"
          },
          {
            id: 100155,
            nombre: "LITA"
          },
          {
            id: 100156,
            nombre: "SALINAS"
          },
          {
            id: 100157,
            nombre: "SAN ANTONIO"
          }
        ]
      },
      {
        id: 1002,
        nombre: "ANTONIO ANTE",
        parroquias: [
          {
            id: 100201,
            nombre: "ANDRADE MARÍN (LOURDES)"
          },
          {
            id: 100202,
            nombre: "ATUNTAQUI"
          },
          {
            id: 100250,
            nombre: "ATUNTAQUI"
          },
          {
            id: 100251,
            nombre: "IMBAYA (SAN LUIS DE COBUENDO)"
          },
          {
            id: 100252,
            nombre: "SAN FRANCISCO DE NATABUELA"
          },
          {
            id: 100253,
            nombre: "SAN JOSÉ DE CHALTURA"
          },
          {
            id: 100254,
            nombre: "SAN ROQUE"
          }
        ]
      },
      {
        id: 1003,
        nombre: "COTACACHI",
        parroquias: [
          {
            id: 100301,
            nombre: "SAGRARIO"
          },
          {
            id: 100302,
            nombre: "SAN FRANCISCO"
          },
          {
            id: 100350,
            nombre: "COTACACHI"
          },
          {
            id: 100351,
            nombre: "APUELA"
          },
          {
            id: 100352,
            nombre: "GARCÍA MORENO (LLURIMAGUA)"
          },
          {
            id: 100353,
            nombre: "IMANTAG"
          },
          {
            id: 100354,
            nombre: "PEÑAHERRERA"
          },
          {
            id: 100355,
            nombre: "PLAZA GUTIÉRREZ (CALVARIO)"
          },
          {
            id: 100356,
            nombre: "QUIROGA"
          },
          {
            id: 100357,
            nombre: "6 DE JULIO DE CUELLAJE (CAB. EN CUELLAJE)"
          },
          {
            id: 100358,
            nombre: "VACAS GALINDO (EL CHURO) (CAB.EN SAN MIGUEL ALTO"
          }
        ]
      },
      {
        id: 1004,
        nombre: "OTAVALO",
        parroquias: [
          {
            id: 100401,
            nombre: "JORDÁN"
          },
          {
            id: 100402,
            nombre: "SAN LUIS"
          },
          {
            id: 100450,
            nombre: "OTAVALO"
          },
          {
            id: 100451,
            nombre: "DR. MIGUEL EGAS CABEZAS (PEGUCHE)"
          },
          {
            id: 100452,
            nombre: "EUGENIO ESPEJO (CALPAQUÍ)"
          },
          {
            id: 100453,
            nombre: "GONZÁLEZ SUÁREZ"
          },
          {
            id: 100454,
            nombre: "PATAQUÍ"
          },
          {
            id: 100455,
            nombre: "SAN JOSÉ DE QUICHINCHE"
          },
          {
            id: 100456,
            nombre: "SAN JUAN DE ILUMÁN"
          },
          {
            id: 100457,
            nombre: "SAN PABLO"
          },
          {
            id: 100458,
            nombre: "SAN RAFAEL"
          },
          {
            id: 100459,
            nombre: "SELVA ALEGRE (CAB.EN SAN MIGUEL DE PAMPLONA)"
          }
        ]
      },
      {
        id: 1005,
        nombre: "PIMAMPIRO",
        parroquias: [
          {
            id: 100550,
            nombre: "PIMAMPIRO"
          },
          {
            id: 100551,
            nombre: "CHUGÁ"
          },
          {
            id: 100552,
            nombre: "MARIANO ACOSTA"
          },
          {
            id: 100553,
            nombre: "SAN FRANCISCO DE SIGSIPAMBA"
          }
        ]
      },
      {
        id: 1006,
        nombre: "SAN MIGUEL DE URCUQUÍ",
        parroquias: [
          {
            id: 100650,
            nombre: "URCUQUÍ CABECERA CANTONAL"
          },
          {
            id: 100651,
            nombre: "CAHUASQUÍ"
          },
          {
            id: 100652,
            nombre: "LA MERCED DE BUENOS AIRES"
          },
          {
            id: 100653,
            nombre: "PABLO ARENAS"
          },
          {
            id: 100654,
            nombre: "SAN BLAS"
          },
          {
            id: 100655,
            nombre: "TUMBABIRO"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    nombre: "LOJA",
    cantones: [
      {
        id: 1101,
        nombre: "LOJA",
        parroquias: [
          {
            id: 110101,
            nombre: "EL SAGRARIO"
          },
          {
            id: 110102,
            nombre: "SAN SEBASTIÁN"
          },
          {
            id: 110103,
            nombre: "SUCRE"
          },
          {
            id: 110104,
            nombre: "VALLE"
          },
          {
            id: 110150,
            nombre: "LOJA"
          },
          {
            id: 110151,
            nombre: "CHANTACO"
          },
          {
            id: 110152,
            nombre: "CHUQUIRIBAMBA"
          },
          {
            id: 110153,
            nombre: "EL CISNE"
          },
          {
            id: 110154,
            nombre: "GUALEL"
          },
          {
            id: 110155,
            nombre: "JIMBILLA"
          },
          {
            id: 110156,
            nombre: "MALACATOS (VALLADOLID)"
          },
          {
            id: 110157,
            nombre: "SAN LUCAS"
          },
          {
            id: 110158,
            nombre: "SAN PEDRO DE VILCABAMBA"
          },
          {
            id: 110159,
            nombre: "SANTIAGO"
          },
          {
            id: 110160,
            nombre: "TAQUIL (MIGUEL RIOFRÍO)"
          },
          {
            id: 110161,
            nombre: "VILCABAMBA (VICTORIA)"
          },
          {
            id: 110162,
            nombre: "YANGANA (ARSENIO CASTILLO)"
          },
          {
            id: 110163,
            nombre: "QUINARA"
          }
        ]
      },
      {
        id: 1102,
        nombre: "CALVAS",
        parroquias: [
          {
            id: 110201,
            nombre: "CARIAMANGA"
          },
          {
            id: 110202,
            nombre: "CHILE"
          },
          {
            id: 110203,
            nombre: "SAN VICENTE"
          },
          {
            id: 110250,
            nombre: "CARIAMANGA"
          },
          {
            id: 110251,
            nombre: "COLAISACA"
          },
          {
            id: 110252,
            nombre: "EL LUCERO"
          },
          {
            id: 110253,
            nombre: "UTUANA"
          },
          {
            id: 110254,
            nombre: "SANGUILLÍN"
          }
        ]
      },
      {
        id: 1103,
        nombre: "CATAMAYO",
        parroquias: [
          {
            id: 110301,
            nombre: "CATAMAYO"
          },
          {
            id: 110302,
            nombre: "SAN JOSÉ"
          },
          {
            id: 110350,
            nombre: "CATAMAYO (LA TOMA)"
          },
          {
            id: 110351,
            nombre: "EL TAMBO"
          },
          {
            id: 110352,
            nombre: "GUAYQUICHUMA"
          },
          {
            id: 110353,
            nombre: "SAN PEDRO DE LA BENDITA"
          },
          {
            id: 110354,
            nombre: "ZAMBI"
          }
        ]
      },
      {
        id: 1104,
        nombre: "CELICA",
        parroquias: [
          {
            id: 110450,
            nombre: "CELICA"
          },
          {
            id: 110451,
            nombre: "CRUZPAMBA (CAB. EN CARLOS BUSTAMANTE)"
          },
          {
            id: 110452,
            nombre: "CHAQUINAL"
          },
          {
            id: 110453,
            nombre: "12 DE DICIEMBRE (CAB. EN ACHIOTES)"
          },
          {
            id: 110454,
            nombre: "PINDAL (FEDERICO PÁEZ)"
          },
          {
            id: 110455,
            nombre: "POZUL (SAN JUAN DE POZUL)"
          },
          {
            id: 110456,
            nombre: "SABANILLA"
          },
          {
            id: 110457,
            nombre: "TNTE. MAXIMILIANO RODRÍGUEZ LOAIZA"
          }
        ]
      },
      {
        id: 1105,
        nombre: "CHAGUARPAMBA",
        parroquias: [
          {
            id: 110550,
            nombre: "CHAGUARPAMBA"
          },
          {
            id: 110551,
            nombre: "BUENAVISTA"
          },
          {
            id: 110552,
            nombre: "EL ROSARIO"
          },
          {
            id: 110553,
            nombre: "SANTA RUFINA"
          },
          {
            id: 110554,
            nombre: "AMARILLOS"
          }
        ]
      },
      {
        id: 1106,
        nombre: "ESPÍNDOLA",
        parroquias: [
          {
            id: 110650,
            nombre: "AMALUZA"
          },
          {
            id: 110651,
            nombre: "BELLAVISTA"
          },
          {
            id: 110652,
            nombre: "JIMBURA"
          },
          {
            id: 110653,
            nombre: "SANTA TERESITA"
          },
          {
            id: 110654,
            nombre: "27 DE ABRIL (CAB. EN LA NARANJA)"
          },
          {
            id: 110655,
            nombre: "EL INGENIO"
          },
          {
            id: 110656,
            nombre: "EL AIRO"
          }
        ]
      },
      {
        id: 1107,
        nombre: "GONZANAMÁ",
        parroquias: [
          {
            id: 110750,
            nombre: "GONZANAMÁ"
          },
          {
            id: 110751,
            nombre: "CHANGAIMINA (LA LIBERTAD)"
          },
          {
            id: 110752,
            nombre: "FUNDOCHAMBA"
          },
          {
            id: 110753,
            nombre: "NAMBACOLA"
          },
          {
            id: 110754,
            nombre: "PURUNUMA (EGUIGUREN)"
          },
          {
            id: 110755,
            nombre: "QUILANGA (LA PAZ)"
          },
          {
            id: 110756,
            nombre: "SACAPALCA"
          },
          {
            id: 110757,
            nombre: "SAN ANTONIO DE LAS ARADAS (CAB. EN LAS ARADAS)"
          }
        ]
      },
      {
        id: 1108,
        nombre: "MACARÁ",
        parroquias: [
          {
            id: 110801,
            nombre: "GENERAL ELOY ALFARO (SAN SEBASTIÁN)"
          },
          {
            id: 110802,
            nombre: "MACARÁ (MANUEL ENRIQUE RENGEL SUQUILANDA)"
          },
          {
            id: 110850,
            nombre: "MACARÁ"
          },
          {
            id: 110851,
            nombre: "LARAMA"
          },
          {
            id: 110852,
            nombre: "LA VICTORIA"
          },
          {
            id: 110853,
            nombre: "SABIANGO (LA CAPILLA)"
          }
        ]
      },
      {
        id: 1109,
        nombre: "PALTAS",
        parroquias: [
          {
            id: 110901,
            nombre: "CATACOCHA"
          },
          {
            id: 110902,
            nombre: "LOURDES"
          },
          {
            id: 110950,
            nombre: "CATACOCHA"
          },
          {
            id: 110951,
            nombre: "CANGONAMÁ"
          },
          {
            id: 110952,
            nombre: "GUACHANAMÁ"
          },
          {
            id: 110953,
            nombre: "LA TINGUE"
          },
          {
            id: 110954,
            nombre: "LAURO GUERRERO"
          },
          {
            id: 110955,
            nombre: "OLMEDO (SANTA BÁRBARA)"
          },
          {
            id: 110956,
            nombre: "ORIANGA"
          },
          {
            id: 110957,
            nombre: "SAN ANTONIO"
          },
          {
            id: 110958,
            nombre: "CASANGA"
          },
          {
            id: 110959,
            nombre: "YAMANA"
          }
        ]
      },
      {
        id: 1110,
        nombre: "PUYANGO",
        parroquias: [
          {
            id: 111050,
            nombre: "ALAMOR"
          },
          {
            id: 111051,
            nombre: "CIANO"
          },
          {
            id: 111052,
            nombre: "EL ARENAL"
          },
          {
            id: 111053,
            nombre: "EL LIMO (MARIANA DE JESÚS)"
          },
          {
            id: 111054,
            nombre: "MERCADILLO"
          },
          {
            id: 111055,
            nombre: "VICENTINO"
          }
        ]
      },
      {
        id: 1111,
        nombre: "SARAGURO",
        parroquias: [
          {
            id: 111150,
            nombre: "SARAGURO"
          },
          {
            id: 111151,
            nombre: "EL PARAÍSO DE CELÉN"
          },
          {
            id: 111152,
            nombre: "EL TABLÓN"
          },
          {
            id: 111153,
            nombre: "LLUZHAPA"
          },
          {
            id: 111154,
            nombre: "MANÚ"
          },
          {
            id: 111155,
            nombre: "SAN ANTONIO DE QUMBE (CUMBE)"
          },
          {
            id: 111156,
            nombre: "SAN PABLO DE TENTA"
          },
          {
            id: 111157,
            nombre: "SAN SEBASTIÁN DE YÚLUC"
          },
          {
            id: 111158,
            nombre: "SELVA ALEGRE"
          },
          {
            id: 111159,
            nombre: "URDANETA (PAQUISHAPA)"
          },
          {
            id: 111160,
            nombre: "SUMAYPAMBA"
          }
        ]
      },
      {
        id: 1112,
        nombre: "SOZORANGA",
        parroquias: [
          {
            id: 111250,
            nombre: "SOZORANGA"
          },
          {
            id: 111251,
            nombre: "NUEVA FÁTIMA"
          },
          {
            id: 111252,
            nombre: "TACAMOROS"
          }
        ]
      },
      {
        id: 1113,
        nombre: "ZAPOTILLO",
        parroquias: [
          {
            id: 111350,
            nombre: "ZAPOTILLO"
          },
          {
            id: 111351,
            nombre: "MANGAHURCO (CAZADEROS)"
          },
          {
            id: 111352,
            nombre: "GARZAREAL"
          },
          {
            id: 111353,
            nombre: "LIMONES"
          },
          {
            id: 111354,
            nombre: "PALETILLAS"
          },
          {
            id: 111355,
            nombre: "BOLASPAMBA"
          }
        ]
      },
      {
        id: 1114,
        nombre: "PINDAL",
        parroquias: [
          {
            id: 111450,
            nombre: "PINDAL"
          },
          {
            id: 111451,
            nombre: "CHAQUINAL"
          },
          {
            id: 111452,
            nombre: "12 DE DICIEMBRE (CAB.EN ACHIOTES)"
          },
          {
            id: 111453,
            nombre: "MILAGROS"
          }
        ]
      },
      {
        id: 1115,
        nombre: "QUILANGA",
        parroquias: [
          {
            id: 111550,
            nombre: "QUILANGA"
          },
          {
            id: 111551,
            nombre: "FUNDOCHAMBA"
          },
          {
            id: 111552,
            nombre: "SAN ANTONIO DE LAS ARADAS (CAB. EN LAS ARADAS)"
          }
        ]
      },
      {
        id: 1116,
        nombre: "OLMEDO",
        parroquias: [
          {
            id: 111650,
            nombre: "OLMEDO"
          },
          {
            id: 111651,
            nombre: "LA TINGUE"
          }
        ]
      }
    ]
  },
  {
    id: 12,
    nombre: "LOS RÍOS",
    cantones: [
      {
        id: 1201,
        nombre: "BABAHOYO",
        parroquias: [
          {
            id: 120101,
            nombre: "CLEMENTE BAQUERIZO"
          },
          {
            id: 120102,
            nombre: "DR. CAMILO PONCE"
          },
          {
            id: 120103,
            nombre: "BARREIRO"
          },
          {
            id: 120104,
            nombre: "EL SALTO"
          },
          {
            id: 120150,
            nombre: "BABAHOYO"
          },
          {
            id: 120151,
            nombre: "BARREIRO (SANTA RITA)"
          },
          {
            id: 120152,
            nombre: "CARACOL"
          },
          {
            id: 120153,
            nombre: "FEBRES CORDERO (LAS JUNTAS)"
          },
          {
            id: 120154,
            nombre: "PIMOCHA"
          },
          {
            id: 120155,
            nombre: "LA UNIÓN"
          }
        ]
      },
      {
        id: 1202,
        nombre: "BABA",
        parroquias: [
          {
            id: 120250,
            nombre: "BABA"
          },
          {
            id: 120251,
            nombre: "GUARE"
          },
          {
            id: 120252,
            nombre: "ISLA DE BEJUCAL"
          }
        ]
      },
      {
        id: 1203,
        nombre: "MONTALVO",
        parroquias: [
          {
            id: 120350,
            nombre: "MONTALVO"
          }
        ]
      },
      {
        id: 1204,
        nombre: "PUEBLOVIEJO",
        parroquias: [
          {
            id: 120450,
            nombre: "PUEBLOVIEJO"
          },
          {
            id: 120451,
            nombre: "PUERTO PECHICHE"
          },
          {
            id: 120452,
            nombre: "SAN JUAN"
          }
        ]
      },
      {
        id: 1205,
        nombre: "QUEVEDO",
        parroquias: [
          {
            id: 120501,
            nombre: "QUEVEDO"
          },
          {
            id: 120502,
            nombre: "SAN CAMILO"
          },
          {
            id: 120503,
            nombre: "SAN JOSÉ"
          },
          {
            id: 120504,
            nombre: "GUAYACÁN"
          },
          {
            id: 120505,
            nombre: "NICOLÁS INFANTE DÍAZ"
          },
          {
            id: 120506,
            nombre: "SAN CRISTÓBAL"
          },
          {
            id: 120507,
            nombre: "SIETE DE OCTUBRE"
          },
          {
            id: 120508,
            nombre: "24 DE MAYO"
          },
          {
            id: 120509,
            nombre: "VENUS DEL RÍO QUEVEDO"
          },
          {
            id: 120510,
            nombre: "VIVA ALFARO"
          },
          {
            id: 120550,
            nombre: "QUEVEDO"
          },
          {
            id: 120551,
            nombre: "BUENA FÉ"
          },
          {
            id: 120552,
            nombre: "MOCACHE"
          },
          {
            id: 120553,
            nombre: "SAN CARLOS"
          },
          {
            id: 120554,
            nombre: "VALENCIA"
          },
          {
            id: 120555,
            nombre: "LA ESPERANZA"
          }
        ]
      },
      {
        id: 1206,
        nombre: "URDANETA",
        parroquias: [
          {
            id: 120650,
            nombre: "CATARAMA"
          },
          {
            id: 120651,
            nombre: "RICAURTE"
          }
        ]
      },
      {
        id: 1207,
        nombre: "VENTANAS",
        parroquias: [
          {
            id: 120701,
            nombre: "10 DE NOVIEMBRE"
          },
          {
            id: 120750,
            nombre: "VENTANAS"
          },
          {
            id: 120751,
            nombre: "QUINSALOMA"
          },
          {
            id: 120752,
            nombre: "ZAPOTAL"
          },
          {
            id: 120753,
            nombre: "CHACARITA"
          },
          {
            id: 120754,
            nombre: "LOS ÁNGELES"
          }
        ]
      },
      {
        id: 1208,
        nombre: "VÍNCES",
        parroquias: [
          {
            id: 120850,
            nombre: "VINCES"
          },
          {
            id: 120851,
            nombre: "ANTONIO SOTOMAYOR (CAB. EN PLAYAS DE VINCES)"
          },
          {
            id: 120852,
            nombre: "PALENQUE"
          }
        ]
      },
      {
        id: 1209,
        nombre: "PALENQUE",
        parroquias: [
          {
            id: 120950,
            nombre: "PALENQUE"
          }
        ]
      },
      {
        id: 1210,
        nombre: "BUENA FÉ",
        parroquias: [
          {
            id: 121001,
            nombre: "SAN JACINTO DE BUENA FÉ"
          },
          {
            id: 121002,
            nombre: "7 DE AGOSTO"
          },
          {
            id: 121003,
            nombre: "11 DE OCTUBRE"
          },
          {
            id: 121050,
            nombre: "SAN JACINTO DE BUENA FÉ"
          },
          {
            id: 121051,
            nombre: "PATRICIA PILAR"
          }
        ]
      },
      {
        id: 1211,
        nombre: "VALENCIA",
        parroquias: [
          {
            id: 121150,
            nombre: "VALENCIA"
          }
        ]
      },
      {
        id: 1212,
        nombre: "MOCACHE",
        parroquias: [
          {
            id: 121250,
            nombre: "MOCACHE"
          }
        ]
      },
      {
        id: 1213,
        nombre: "QUINSALOMA",
        parroquias: [
          {
            id: 121350,
            nombre: "QUINSALOMA"
          }
        ]
      }
    ]
  },
  {
    id: 13,
    nombre: "MANABÍ",
    cantones: [
      {
        id: 1301,
        nombre: "PORTOVIEJO",
        parroquias: [
          {
            id: 130101,
            nombre: "PORTOVIEJO"
          },
          {
            id: 130102,
            nombre: "12 DE MARZO"
          },
          {
            id: 130103,
            nombre: "COLÓN"
          },
          {
            id: 130104,
            nombre: "PICOAZÁ"
          },
          {
            id: 130105,
            nombre: "SAN PABLO"
          },
          {
            id: 130106,
            nombre: "ANDRÉS DE VERA"
          },
          {
            id: 130107,
            nombre: "FRANCISCO PACHECO"
          },
          {
            id: 130108,
            nombre: "18 DE OCTUBRE"
          },
          {
            id: 130109,
            nombre: "SIMÓN BOLÍVAR"
          },
          {
            id: 130150,
            nombre: "PORTOVIEJO"
          },
          {
            id: 130151,
            nombre: "ABDÓN CALDERÓN (SAN FRANCISCO)"
          },
          {
            id: 130152,
            nombre: "ALHAJUELA (BAJO GRANDE)"
          },
          {
            id: 130153,
            nombre: "CRUCITA"
          },
          {
            id: 130154,
            nombre: "PUEBLO NUEVO"
          },
          {
            id: 130155,
            nombre: "RIOCHICO (RÍO CHICO)"
          },
          {
            id: 130156,
            nombre: "SAN PLÁCIDO"
          },
          {
            id: 130157,
            nombre: "CHIRIJOS"
          }
        ]
      },
      {
        id: 1302,
        nombre: "BOLÍVAR",
        parroquias: [
          {
            id: 130250,
            nombre: "CALCETA"
          },
          {
            id: 130251,
            nombre: "MEMBRILLO"
          },
          {
            id: 130252,
            nombre: "QUIROGA"
          }
        ]
      },
      {
        id: 1303,
        nombre: "CHONE",
        parroquias: [
          {
            id: 130301,
            nombre: "CHONE"
          },
          {
            id: 130302,
            nombre: "SANTA RITA"
          },
          {
            id: 130350,
            nombre: "CHONE"
          },
          {
            id: 130351,
            nombre: "BOYACÁ"
          },
          {
            id: 130352,
            nombre: "CANUTO"
          },
          {
            id: 130353,
            nombre: "CONVENTO"
          },
          {
            id: 130354,
            nombre: "CHIBUNGA"
          },
          {
            id: 130355,
            nombre: "ELOY ALFARO"
          },
          {
            id: 130356,
            nombre: "RICAURTE"
          },
          {
            id: 130357,
            nombre: "SAN ANTONIO"
          }
        ]
      },
      {
        id: 1304,
        nombre: "EL CARMEN",
        parroquias: [
          {
            id: 130401,
            nombre: "EL CARMEN"
          },
          {
            id: 130402,
            nombre: "4 DE DICIEMBRE"
          },
          {
            id: 130450,
            nombre: "EL CARMEN"
          },
          {
            id: 130451,
            nombre: "WILFRIDO LOOR MOREIRA (MAICITO)"
          },
          {
            id: 130452,
            nombre: "SAN PEDRO DE SUMA"
          }
        ]
      },
      {
        id: 1305,
        nombre: "FLAVIO ALFARO",
        parroquias: [
          {
            id: 130550,
            nombre: "FLAVIO ALFARO"
          },
          {
            id: 130551,
            nombre: "SAN FRANCISCO DE NOVILLO (CAB. EN"
          },
          {
            id: 130552,
            nombre: "ZAPALLO"
          }
        ]
      },
      {
        id: 1306,
        nombre: "JIPIJAPA",
        parroquias: [
          {
            id: 130601,
            nombre: "DR. MIGUEL MORÁN LUCIO"
          },
          {
            id: 130602,
            nombre: "MANUEL INOCENCIO PARRALES Y GUALE"
          },
          {
            id: 130603,
            nombre: "SAN LORENZO DE JIPIJAPA"
          },
          {
            id: 130650,
            nombre: "JIPIJAPA"
          },
          {
            id: 130651,
            nombre: "AMÉRICA"
          },
          {
            id: 130652,
            nombre: "EL ANEGADO (CAB. EN ELOY ALFARO)"
          },
          {
            id: 130653,
            nombre: "JULCUY"
          },
          {
            id: 130654,
            nombre: "LA UNIÓN"
          },
          {
            id: 130655,
            nombre: "MACHALILLA"
          },
          {
            id: 130656,
            nombre: "MEMBRILLAL"
          },
          {
            id: 130657,
            nombre: "PEDRO PABLO GÓMEZ"
          },
          {
            id: 130658,
            nombre: "PUERTO DE CAYO"
          },
          {
            id: 130659,
            nombre: "PUERTO LÓPEZ"
          }
        ]
      },
      {
        id: 1307,
        nombre: "JUNÍN",
        parroquias: [
          {
            id: 130750,
            nombre: "JUNÍN"
          }
        ]
      },
      {
        id: 1308,
        nombre: "MANTA",
        parroquias: [
          {
            id: 130801,
            nombre: "LOS ESTEROS"
          },
          {
            id: 130802,
            nombre: "MANTA"
          },
          {
            id: 130803,
            nombre: "SAN MATEO"
          },
          {
            id: 130804,
            nombre: "TARQUI"
          },
          {
            id: 130805,
            nombre: "ELOY ALFARO"
          },
          {
            id: 130850,
            nombre: "MANTA"
          },
          {
            id: 130851,
            nombre: "SAN LORENZO"
          },
          {
            id: 130852,
            nombre: "SANTA MARIANITA (BOCA DE PACOCHE)"
          }
        ]
      },
      {
        id: 1309,
        nombre: "MONTECRISTI",
        parroquias: [
          {
            id: 130901,
            nombre: "ANIBAL SAN ANDRÉS"
          },
          {
            id: 130902,
            nombre: "MONTECRISTI"
          },
          {
            id: 130903,
            nombre: "EL COLORADO"
          },
          {
            id: 130904,
            nombre: "GENERAL ELOY ALFARO"
          },
          {
            id: 130905,
            nombre: "LEONIDAS PROAÑO"
          },
          {
            id: 130950,
            nombre: "MONTECRISTI"
          },
          {
            id: 130951,
            nombre: "JARAMIJÓ"
          },
          {
            id: 130952,
            nombre: "LA PILA"
          }
        ]
      },
      {
        id: 1310,
        nombre: "PAJÁN",
        parroquias: [
          {
            id: 131050,
            nombre: "PAJÁN"
          },
          {
            id: 131051,
            nombre: "CAMPOZANO (LA PALMA DE PAJÁN)"
          },
          {
            id: 131052,
            nombre: "CASCOL"
          },
          {
            id: 131053,
            nombre: "GUALE"
          },
          {
            id: 131054,
            nombre: "LASCANO"
          }
        ]
      },
      {
        id: 1311,
        nombre: "PICHINCHA",
        parroquias: [
          {
            id: 131150,
            nombre: "PICHINCHA"
          },
          {
            id: 131151,
            nombre: "BARRAGANETE"
          },
          {
            id: 131152,
            nombre: "SAN SEBASTIÁN"
          }
        ]
      },
      {
        id: 1312,
        nombre: "ROCAFUERTE",
        parroquias: [
          {
            id: 131250,
            nombre: "ROCAFUERTE"
          }
        ]
      },
      {
        id: 1313,
        nombre: "SANTA ANA",
        parroquias: [
          {
            id: 131301,
            nombre: "SANTA ANA"
          },
          {
            id: 131302,
            nombre: "LODANA"
          },
          {
            id: 131350,
            nombre: "SANTA ANA DE VUELTA LARGA"
          },
          {
            id: 131351,
            nombre: "AYACUCHO"
          },
          {
            id: 131352,
            nombre: "HONORATO VÁSQUEZ (CAB. EN VÁSQUEZ)"
          },
          {
            id: 131353,
            nombre: "LA UNIÓN"
          },
          {
            id: 131354,
            nombre: "OLMEDO"
          },
          {
            id: 131355,
            nombre: "SAN PABLO (CAB. EN PUEBLO NUEVO)"
          }
        ]
      },
      {
        id: 1314,
        nombre: "SUCRE",
        parroquias: [
          {
            id: 131401,
            nombre: "BAHÍA DE CARÁQUEZ"
          },
          {
            id: 131402,
            nombre: "LEONIDAS PLAZA GUTIÉRREZ"
          },
          {
            id: 131450,
            nombre: "BAHÍA DE CARÁQUEZ"
          },
          {
            id: 131451,
            nombre: "CANOA"
          },
          {
            id: 131452,
            nombre: "COJIMÍES"
          },
          {
            id: 131453,
            nombre: "CHARAPOTÓ"
          },
          {
            id: 131454,
            nombre: "10 DE AGOSTO"
          },
          {
            id: 131455,
            nombre: "JAMA"
          },
          {
            id: 131456,
            nombre: "PEDERNALES"
          },
          {
            id: 131457,
            nombre: "SAN ISIDRO"
          },
          {
            id: 131458,
            nombre: "SAN VICENTE"
          }
        ]
      },
      {
        id: 1315,
        nombre: "TOSAGUA",
        parroquias: [
          {
            id: 131550,
            nombre: "TOSAGUA"
          },
          {
            id: 131551,
            nombre: "BACHILLERO"
          },
          {
            id: 131552,
            nombre: "ANGEL PEDRO GILER (LA ESTANCILLA)"
          }
        ]
      },
      {
        id: 1316,
        nombre: "24 DE MAYO",
        parroquias: [
          {
            id: 131650,
            nombre: "SUCRE"
          },
          {
            id: 131651,
            nombre: "BELLAVISTA"
          },
          {
            id: 131652,
            nombre: "NOBOA"
          },
          {
            id: 131653,
            nombre: "ARQ. SIXTO DURÁN BALLÉN"
          }
        ]
      },
      {
        id: 1317,
        nombre: "PEDERNALES",
        parroquias: [
          {
            id: 131750,
            nombre: "PEDERNALES"
          },
          {
            id: 131751,
            nombre: "COJIMÍES"
          },
          {
            id: 131752,
            nombre: "10 DE AGOSTO"
          },
          {
            id: 131753,
            nombre: "ATAHUALPA"
          }
        ]
      },
      {
        id: 1318,
        nombre: "OLMEDO",
        parroquias: [
          {
            id: 131850,
            nombre: "OLMEDO"
          }
        ]
      },
      {
        id: 1319,
        nombre: "PUERTO LÓPEZ",
        parroquias: [
          {
            id: 131950,
            nombre: "PUERTO LÓPEZ"
          },
          {
            id: 131951,
            nombre: "MACHALILLA"
          },
          {
            id: 131952,
            nombre: "SALANGO"
          }
        ]
      },
      {
        id: 1320,
        nombre: "JAMA",
        parroquias: [
          {
            id: 132050,
            nombre: "JAMA"
          }
        ]
      },
      {
        id: 1321,
        nombre: "JARAMIJÓ",
        parroquias: [
          {
            id: 132150,
            nombre: "JARAMIJÓ"
          }
        ]
      },
      {
        id: 1322,
        nombre: "SAN VICENTE",
        parroquias: [
          {
            id: 132250,
            nombre: "SAN VICENTE"
          },
          {
            id: 132251,
            nombre: "CANOA"
          }
        ]
      }
    ]
  },
  {
    id: 14,
    nombre: "MORONA SANTIAGO",
    cantones: [
      {
        id: 1401,
        nombre: "MORONA",
        parroquias: [
          {
            id: 140150,
            nombre: "MACAS"
          },
          {
            id: 140151,
            nombre: "ALSHI (CAB. EN 9 DE OCTUBRE)"
          },
          {
            id: 140152,
            nombre: "CHIGUAZA"
          },
          {
            id: 140153,
            nombre: "GENERAL PROAÑO"
          },
          {
            id: 140154,
            nombre: "HUASAGA (CAB.EN WAMPUIK)"
          },
          {
            id: 140155,
            nombre: "MACUMA"
          },
          {
            id: 140156,
            nombre: "SAN ISIDRO"
          },
          {
            id: 140157,
            nombre: "SEVILLA DON BOSCO"
          },
          {
            id: 140158,
            nombre: "SINAÍ"
          },
          {
            id: 140159,
            nombre: "TAISHA"
          },
          {
            id: 140160,
            nombre: "ZUÑA (ZÚÑAC)"
          },
          {
            id: 140161,
            nombre: "TUUTINENTZA"
          },
          {
            id: 140162,
            nombre: "CUCHAENTZA"
          },
          {
            id: 140163,
            nombre: "SAN JOSÉ DE MORONA"
          },
          {
            id: 140164,
            nombre: "RÍO BLANCO"
          }
        ]
      },
      {
        id: 1402,
        nombre: "GUALAQUIZA",
        parroquias: [
          {
            id: 140201,
            nombre: "GUALAQUIZA"
          },
          {
            id: 140202,
            nombre: "MERCEDES MOLINA"
          },
          {
            id: 140250,
            nombre: "GUALAQUIZA"
          },
          {
            id: 140251,
            nombre: "AMAZONAS (ROSARIO DE CUYES)"
          },
          {
            id: 140252,
            nombre: "BERMEJOS"
          },
          {
            id: 140253,
            nombre: "BOMBOIZA"
          },
          {
            id: 140254,
            nombre: "CHIGÜINDA"
          },
          {
            id: 140255,
            nombre: "EL ROSARIO"
          },
          {
            id: 140256,
            nombre: "NUEVA TARQUI"
          },
          {
            id: 140257,
            nombre: "SAN MIGUEL DE CUYES"
          },
          {
            id: 140258,
            nombre: "EL IDEAL"
          }
        ]
      },
      {
        id: 1403,
        nombre: "LIMÓN INDANZA",
        parroquias: [
          {
            id: 140350,
            nombre: "GENERAL LEONIDAS PLAZA GUTIÉRREZ (LIMÓN)"
          },
          {
            id: 140351,
            nombre: "INDANZA"
          },
          {
            id: 140352,
            nombre: "PAN DE AZÚCAR"
          },
          {
            id: 140353,
            nombre: "SAN ANTONIO (CAB. EN SAN ANTONIO CENTRO"
          },
          {
            id: 140354,
            nombre: "SAN CARLOS DE LIMÓN (SAN CARLOS DEL"
          },
          {
            id: 140355,
            nombre: "SAN JUAN BOSCO"
          },
          {
            id: 140356,
            nombre: "SAN MIGUEL DE CONCHAY"
          },
          {
            id: 140357,
            nombre: "SANTA SUSANA DE CHIVIAZA (CAB. EN CHIVIAZA)"
          },
          {
            id: 140358,
            nombre: "YUNGANZA (CAB. EN EL ROSARIO)"
          }
        ]
      },
      {
        id: 1404,
        nombre: "PALORA",
        parroquias: [
          {
            id: 140450,
            nombre: "PALORA (METZERA)"
          },
          {
            id: 140451,
            nombre: "ARAPICOS"
          },
          {
            id: 140452,
            nombre: "CUMANDÁ (CAB. EN COLONIA AGRÍCOLA SEVILLA DEL ORO)"
          },
          {
            id: 140453,
            nombre: "HUAMBOYA"
          },
          {
            id: 140454,
            nombre: "SANGAY (CAB. EN NAYAMANACA)"
          }
        ]
      },
      {
        id: 1405,
        nombre: "SANTIAGO",
        parroquias: [
          {
            id: 140550,
            nombre: "SANTIAGO DE MÉNDEZ"
          },
          {
            id: 140551,
            nombre: "COPAL"
          },
          {
            id: 140552,
            nombre: "CHUPIANZA"
          },
          {
            id: 140553,
            nombre: "PATUCA"
          },
          {
            id: 140554,
            nombre: "SAN LUIS DE EL ACHO (CAB. EN EL ACHO)"
          },
          {
            id: 140555,
            nombre: "SANTIAGO"
          },
          {
            id: 140556,
            nombre: "TAYUZA"
          },
          {
            id: 140557,
            nombre: "SAN FRANCISCO DE CHINIMBIMI"
          }
        ]
      },
      {
        id: 1406,
        nombre: "SUCÚA",
        parroquias: [
          {
            id: 140650,
            nombre: "SUCÚA"
          },
          {
            id: 140651,
            nombre: "ASUNCIÓN"
          },
          {
            id: 140652,
            nombre: "HUAMBI"
          },
          {
            id: 140653,
            nombre: "LOGROÑO"
          },
          {
            id: 140654,
            nombre: "YAUPI"
          },
          {
            id: 140655,
            nombre: "SANTA MARIANITA DE JESÚS"
          }
        ]
      },
      {
        id: 1407,
        nombre: "HUAMBOYA",
        parroquias: [
          {
            id: 140750,
            nombre: "HUAMBOYA"
          },
          {
            id: 140751,
            nombre: "CHIGUAZA"
          },
          {
            id: 140752,
            nombre: "PABLO SEXTO"
          }
        ]
      },
      {
        id: 1408,
        nombre: "SAN JUAN BOSCO",
        parroquias: [
          {
            id: 140850,
            nombre: "SAN JUAN BOSCO"
          },
          {
            id: 140851,
            nombre: "PAN DE AZÚCAR"
          },
          {
            id: 140852,
            nombre: "SAN CARLOS DE LIMÓN"
          },
          {
            id: 140853,
            nombre: "SAN JACINTO DE WAKAMBEIS"
          },
          {
            id: 140854,
            nombre: "SANTIAGO DE PANANZA"
          }
        ]
      },
      {
        id: 1409,
        nombre: "TAISHA",
        parroquias: [
          {
            id: 140950,
            nombre: "TAISHA"
          },
          {
            id: 140951,
            nombre: "HUASAGA (CAB. EN WAMPUIK)"
          },
          {
            id: 140952,
            nombre: "MACUMA"
          },
          {
            id: 140953,
            nombre: "TUUTINENTZA"
          },
          {
            id: 140954,
            nombre: "PUMPUENTSA"
          }
        ]
      },
      {
        id: 1410,
        nombre: "LOGROÑO",
        parroquias: [
          {
            id: 141050,
            nombre: "LOGROÑO"
          },
          {
            id: 141051,
            nombre: "YAUPI"
          },
          {
            id: 141052,
            nombre: "SHIMPIS"
          }
        ]
      },
      {
        id: 1411,
        nombre: "PABLO SEXTO",
        parroquias: [
          {
            id: 141150,
            nombre: "PABLO SEXTO"
          }
        ]
      },
      {
        id: 1412,
        nombre: "TIWINTZA",
        parroquias: [
          {
            id: 141250,
            nombre: "SANTIAGO"
          },
          {
            id: 141251,
            nombre: "SAN JOSÉ DE MORONA"
          }
        ]
      }
    ]
  },
  {
    id: 15,
    nombre: "NAPO",
    cantones: [
      {
        id: 1501,
        nombre: "TENA",
        parroquias: [
          {
            id: 150150,
            nombre: "TENA"
          },
          {
            id: 150151,
            nombre: "AHUANO"
          },
          {
            id: 150152,
            nombre: "CARLOS JULIO AROSEMENA TOLA (ZATZA-YACU)"
          },
          {
            id: 150153,
            nombre: "CHONTAPUNTA"
          },
          {
            id: 150154,
            nombre: "PANO"
          },
          {
            id: 150155,
            nombre: "PUERTO MISAHUALLI"
          },
          {
            id: 150156,
            nombre: "PUERTO NAPO"
          },
          {
            id: 150157,
            nombre: "TÁLAG"
          },
          {
            id: 150158,
            nombre: "SAN JUAN DE MUYUNA"
          }
        ]
      },
      {
        id: 1503,
        nombre: "ARCHIDONA",
        parroquias: [
          {
            id: 150350,
            nombre: "ARCHIDONA"
          },
          {
            id: 150351,
            nombre: "AVILA"
          },
          {
            id: 150352,
            nombre: "COTUNDO"
          },
          {
            id: 150353,
            nombre: "LORETO"
          },
          {
            id: 150354,
            nombre: "SAN PABLO DE USHPAYACU"
          },
          {
            id: 150355,
            nombre: "PUERTO MURIALDO"
          }
        ]
      },
      {
        id: 1504,
        nombre: "EL CHACO",
        parroquias: [
          {
            id: 150450,
            nombre: "EL CHACO"
          },
          {
            id: 150451,
            nombre: "GONZALO DíAZ DE PINEDA (EL BOMBÓN)"
          },
          {
            id: 150452,
            nombre: "LINARES"
          },
          {
            id: 150453,
            nombre: "OYACACHI"
          },
          {
            id: 150454,
            nombre: "SANTA ROSA"
          },
          {
            id: 150455,
            nombre: "SARDINAS"
          }
        ]
      },
      {
        id: 1507,
        nombre: "QUIJOS",
        parroquias: [
          {
            id: 150750,
            nombre: "BAEZA"
          },
          {
            id: 150751,
            nombre: "COSANGA"
          },
          {
            id: 150752,
            nombre: "CUYUJA"
          },
          {
            id: 150753,
            nombre: "PAPALLACTA"
          },
          {
            id: 150754,
            nombre: "SAN FRANCISCO DE BORJA (VIRGILIO DÁVILA)"
          },
          {
            id: 150755,
            nombre: "SAN JOSÉ DEL PAYAMINO"
          },
          {
            id: 150756,
            nombre: "SUMACO"
          }
        ]
      },
      {
        id: 1509,
        nombre: "CARLOS JULIO AROSEMENA TOLA",
        parroquias: [
          {
            id: 150950,
            nombre: "CARLOS JULIO AROSEMENA TOLA"
          }
        ]
      }
    ]
  },
  {
    id: 16,
    nombre: "PASTAZA",
    cantones: [
      {
        id: 1601,
        nombre: "PASTAZA",
        parroquias: [
          {
            id: 160150,
            nombre: "PUYO"
          },
          {
            id: 160151,
            nombre: "ARAJUNO"
          },
          {
            id: 160152,
            nombre: "CANELOS"
          },
          {
            id: 160153,
            nombre: "CURARAY"
          },
          {
            id: 160154,
            nombre: "DIEZ DE AGOSTO"
          },
          {
            id: 160155,
            nombre: "FÁTIMA"
          },
          {
            id: 160156,
            nombre: "MONTALVO (ANDOAS)"
          },
          {
            id: 160157,
            nombre: "POMONA"
          },
          {
            id: 160158,
            nombre: "RÍO CORRIENTES"
          },
          {
            id: 160159,
            nombre: "RÍO TIGRE"
          },
          {
            id: 160160,
            nombre: "SANTA CLARA"
          },
          {
            id: 160161,
            nombre: "SARAYACU"
          },
          {
            id: 160162,
            nombre: "SIMÓN BOLÍVAR (CAB. EN MUSHULLACTA)"
          },
          {
            id: 160163,
            nombre: "TARQUI"
          },
          {
            id: 160164,
            nombre: "TENIENTE HUGO ORTIZ"
          },
          {
            id: 160165,
            nombre: "VERACRUZ (INDILLAMA) (CAB. EN INDILLAMA)"
          },
          {
            id: 160166,
            nombre: "EL TRIUNFO"
          }
        ]
      },
      {
        id: 1602,
        nombre: "MERA",
        parroquias: [
          {
            id: 160250,
            nombre: "MERA"
          },
          {
            id: 160251,
            nombre: "MADRE TIERRA"
          },
          {
            id: 160252,
            nombre: "SHELL"
          }
        ]
      },
      {
        id: 1603,
        nombre: "SANTA CLARA",
        parroquias: [
          {
            id: 160350,
            nombre: "SANTA CLARA"
          },
          {
            id: 160351,
            nombre: "SAN JOSÉ"
          }
        ]
      },
      {
        id: 1604,
        nombre: "ARAJUNO",
        parroquias: [
          {
            id: 160450,
            nombre: "ARAJUNO"
          },
          {
            id: 160451,
            nombre: "CURARAY"
          }
        ]
      }
    ]
  },
  {
    id: 17,
    nombre: "PICHINCHA",
    cantones: [
      {
        id: 1701,
        nombre: "QUITO",
        parroquias: [
          {
            id: 170101,
            nombre: "BELISARIO QUEVEDO"
          },
          {
            id: 170102,
            nombre: "CARCELÉN"
          },
          {
            id: 170103,
            nombre: "CENTRO HISTÓRICO"
          },
          {
            id: 170104,
            nombre: "COCHAPAMBA"
          },
          {
            id: 170105,
            nombre: "COMITÉ DEL PUEBLO"
          },
          {
            id: 170106,
            nombre: "COTOCOLLAO"
          },
          {
            id: 170107,
            nombre: "CHILIBULO"
          },
          {
            id: 170108,
            nombre: "CHILLOGALLO"
          },
          {
            id: 170109,
            nombre: "CHIMBACALLE"
          },
          {
            id: 170110,
            nombre: "EL CONDADO"
          },
          {
            id: 170111,
            nombre: "GUAMANÍ"
          },
          {
            id: 170112,
            nombre: "IÑAQUITO"
          },
          {
            id: 170113,
            nombre: "ITCHIMBÍA"
          },
          {
            id: 170114,
            nombre: "JIPIJAPA"
          },
          {
            id: 170115,
            nombre: "KENNEDY"
          },
          {
            id: 170116,
            nombre: "LA ARGELIA"
          },
          {
            id: 170117,
            nombre: "LA CONCEPCIÓN"
          },
          {
            id: 170118,
            nombre: "LA ECUATORIANA"
          },
          {
            id: 170119,
            nombre: "LA FERROVIARIA"
          },
          {
            id: 170120,
            nombre: "LA LIBERTAD"
          },
          {
            id: 170121,
            nombre: "LA MAGDALENA"
          },
          {
            id: 170122,
            nombre: "LA MENA"
          },
          {
            id: 170123,
            nombre: "MARISCAL SUCRE"
          },
          {
            id: 170124,
            nombre: "PONCEANO"
          },
          {
            id: 170125,
            nombre: "PUENGASÍ"
          },
          {
            id: 170126,
            nombre: "QUITUMBE"
          },
          {
            id: 170127,
            nombre: "RUMIPAMBA"
          },
          {
            id: 170128,
            nombre: "SAN BARTOLO"
          },
          {
            id: 170129,
            nombre: "SAN ISIDRO DEL INCA"
          },
          {
            id: 170130,
            nombre: "SAN JUAN"
          },
          {
            id: 170131,
            nombre: "SOLANDA"
          },
          {
            id: 170132,
            nombre: "TURUBAMBA"
          },
          {
            id: 170150,
            nombre: "DISTRITO METROPOLITANO DE QUITO"
          },
          {
            id: 170151,
            nombre: "ALANGASÍ"
          },
          {
            id: 170152,
            nombre: "AMAGUAÑA"
          },
          {
            id: 170153,
            nombre: "ATAHUALPA"
          },
          {
            id: 170154,
            nombre: "CALACALÍ"
          },
          {
            id: 170155,
            nombre: "CALDERÓN"
          },
          {
            id: 170156,
            nombre: "CONOCOTO"
          },
          {
            id: 170157,
            nombre: "CUMBAYÁ"
          },
          {
            id: 170158,
            nombre: "CHAVEZPAMBA"
          },
          {
            id: 170159,
            nombre: "CHECA"
          },
          {
            id: 170160,
            nombre: "EL QUINCHE"
          },
          {
            id: 170161,
            nombre: "GUALEA"
          },
          {
            id: 170162,
            nombre: "GUANGOPOLO"
          },
          {
            id: 170163,
            nombre: "GUAYLLABAMBA"
          },
          {
            id: 170164,
            nombre: "LA MERCED"
          },
          {
            id: 170165,
            nombre: "LLANO CHICO"
          },
          {
            id: 170166,
            nombre: "LLOA"
          },
          {
            id: 170167,
            nombre: "MINDO"
          },
          {
            id: 170168,
            nombre: "NANEGAL"
          },
          {
            id: 170169,
            nombre: "NANEGALITO"
          },
          {
            id: 170170,
            nombre: "NAYÓN"
          },
          {
            id: 170171,
            nombre: "NONO"
          },
          {
            id: 170172,
            nombre: "PACTO"
          },
          {
            id: 170173,
            nombre: "PEDRO VICENTE MALDONADO"
          },
          {
            id: 170174,
            nombre: "PERUCHO"
          },
          {
            id: 170175,
            nombre: "PIFO"
          },
          {
            id: 170176,
            nombre: "PÍNTAG"
          },
          {
            id: 170177,
            nombre: "POMASQUI"
          },
          {
            id: 170178,
            nombre: "PUÉLLARO"
          },
          {
            id: 170179,
            nombre: "PUEMBO"
          },
          {
            id: 170180,
            nombre: "SAN ANTONIO"
          },
          {
            id: 170181,
            nombre: "SAN JOSÉ DE MINAS"
          },
          {
            id: 170182,
            nombre: "SAN MIGUEL DE LOS BANCOS"
          },
          {
            id: 170183,
            nombre: "TABABELA"
          },
          {
            id: 170184,
            nombre: "TUMBACO"
          },
          {
            id: 170185,
            nombre: "YARUQUÍ"
          },
          {
            id: 170186,
            nombre: "ZAMBIZA"
          },
          {
            id: 170187,
            nombre: "PUERTO QUITO"
          }
        ]
      },
      {
        id: 1702,
        nombre: "CAYAMBE",
        parroquias: [
          {
            id: 170201,
            nombre: "AYORA"
          },
          {
            id: 170202,
            nombre: "CAYAMBE"
          },
          {
            id: 170203,
            nombre: "JUAN MONTALVO"
          },
          {
            id: 170250,
            nombre: "CAYAMBE"
          },
          {
            id: 170251,
            nombre: "ASCÁZUBI"
          },
          {
            id: 170252,
            nombre: "CANGAHUA"
          },
          {
            id: 170253,
            nombre: "OLMEDO (PESILLO)"
          },
          {
            id: 170254,
            nombre: "OTÓN"
          },
          {
            id: 170255,
            nombre: "SANTA ROSA DE CUZUBAMBA"
          }
        ]
      },
      {
        id: 1703,
        nombre: "MEJIA",
        parroquias: [
          {
            id: 170350,
            nombre: "MACHACHI"
          },
          {
            id: 170351,
            nombre: "ALÓAG"
          },
          {
            id: 170352,
            nombre: "ALOASÍ"
          },
          {
            id: 170353,
            nombre: "CUTUGLAHUA"
          },
          {
            id: 170354,
            nombre: "EL CHAUPI"
          },
          {
            id: 170355,
            nombre: "MANUEL CORNEJO ASTORGA (TANDAPI)"
          },
          {
            id: 170356,
            nombre: "TAMBILLO"
          },
          {
            id: 170357,
            nombre: "UYUMBICHO"
          }
        ]
      },
      {
        id: 1704,
        nombre: "PEDRO MONCAYO",
        parroquias: [
          {
            id: 170450,
            nombre: "TABACUNDO"
          },
          {
            id: 170451,
            nombre: "LA ESPERANZA"
          },
          {
            id: 170452,
            nombre: "MALCHINGUÍ"
          },
          {
            id: 170453,
            nombre: "TOCACHI"
          },
          {
            id: 170454,
            nombre: "TUPIGACHI"
          }
        ]
      },
      {
        id: 1705,
        nombre: "RUMIÑAHUI",
        parroquias: [
          {
            id: 170501,
            nombre: "SANGOLQUÍ"
          },
          {
            id: 170502,
            nombre: "SAN PEDRO DE TABOADA"
          },
          {
            id: 170503,
            nombre: "SAN RAFAEL"
          },
          {
            id: 170550,
            nombre: "SANGOLQUI"
          },
          {
            id: 170551,
            nombre: "COTOGCHOA"
          },
          {
            id: 170552,
            nombre: "RUMIPAMBA"
          }
        ]
      },
      {
        id: 1707,
        nombre: "SAN MIGUEL DE LOS BANCOS",
        parroquias: [
          {
            id: 170750,
            nombre: "SAN MIGUEL DE LOS BANCOS"
          },
          {
            id: 170751,
            nombre: "MINDO"
          },
          {
            id: 170752,
            nombre: "PEDRO VICENTE MALDONADO"
          },
          {
            id: 170753,
            nombre: "PUERTO QUITO"
          }
        ]
      },
      {
        id: 1708,
        nombre: "PEDRO VICENTE MALDONADO",
        parroquias: [
          {
            id: 170850,
            nombre: "PEDRO VICENTE MALDONADO"
          }
        ]
      },
      {
        id: 1709,
        nombre: "PUERTO QUITO",
        parroquias: [
          {
            id: 170950,
            nombre: "PUERTO QUITO"
          }
        ]
      }
    ]
  },
  {
    id: 18,
    nombre: "TUNGURAHUA",
    cantones: [
      {
        id: 1801,
        nombre: "AMBATO",
        parroquias: [
          {
            id: 180101,
            nombre: "ATOCHA – FICOA"
          },
          {
            id: 180102,
            nombre: "CELIANO MONGE"
          },
          {
            id: 180103,
            nombre: "HUACHI CHICO"
          },
          {
            id: 180104,
            nombre: "HUACHI LORETO"
          },
          {
            id: 180105,
            nombre: "LA MERCED"
          },
          {
            id: 180106,
            nombre: "LA PENÍNSULA"
          },
          {
            id: 180107,
            nombre: "MATRIZ"
          },
          {
            id: 180108,
            nombre: "PISHILATA"
          },
          {
            id: 180109,
            nombre: "SAN FRANCISCO"
          },
          {
            id: 180150,
            nombre: "AMBATO"
          },
          {
            id: 180151,
            nombre: "AMBATILLO"
          },
          {
            id: 180152,
            nombre: "ATAHUALPA (CHISALATA)"
          },
          {
            id: 180153,
            nombre: "AUGUSTO N. MARTÍNEZ (MUNDUGLEO)"
          },
          {
            id: 180154,
            nombre: "CONSTANTINO FERNÁNDEZ (CAB. EN CULLITAHUA)"
          },
          {
            id: 180155,
            nombre: "HUACHI GRANDE"
          },
          {
            id: 180156,
            nombre: "IZAMBA"
          },
          {
            id: 180157,
            nombre: "JUAN BENIGNO VELA"
          },
          {
            id: 180158,
            nombre: "MONTALVO"
          },
          {
            id: 180159,
            nombre: "PASA"
          },
          {
            id: 180160,
            nombre: "PICAIGUA"
          },
          {
            id: 180161,
            nombre: "PILAGÜÍN (PILAHÜÍN)"
          },
          {
            id: 180162,
            nombre: "QUISAPINCHA (QUIZAPINCHA)"
          },
          {
            id: 180163,
            nombre: "SAN BARTOLOMÉ DE PINLLOG"
          },
          {
            id: 180164,
            nombre: "SAN FERNANDO (PASA SAN FERNANDO)"
          },
          {
            id: 180165,
            nombre: "SANTA ROSA"
          },
          {
            id: 180166,
            nombre: "TOTORAS"
          },
          {
            id: 180167,
            nombre: "CUNCHIBAMBA"
          },
          {
            id: 180168,
            nombre: "UNAMUNCHO"
          }
        ]
      },
      {
        id: 1802,
        nombre: "BAÑOS DE AGUA SANTA",
        parroquias: [
          {
            id: 180250,
            nombre: "BAÑOS DE AGUA SANTA"
          },
          {
            id: 180251,
            nombre: "LLIGUA"
          },
          {
            id: 180252,
            nombre: "RÍO NEGRO"
          },
          {
            id: 180253,
            nombre: "RÍO VERDE"
          },
          {
            id: 180254,
            nombre: "ULBA"
          }
        ]
      },
      {
        id: 1803,
        nombre: "CEVALLOS",
        parroquias: [
          {
            id: 180350,
            nombre: "CEVALLOS"
          }
        ]
      },
      {
        id: 1804,
        nombre: "MOCHA",
        parroquias: [
          {
            id: 180450,
            nombre: "MOCHA"
          },
          {
            id: 180451,
            nombre: "PINGUILÍ"
          }
        ]
      },
      {
        id: 1805,
        nombre: "PATATE",
        parroquias: [
          {
            id: 180550,
            nombre: "PATATE"
          },
          {
            id: 180551,
            nombre: "EL TRIUNFO"
          },
          {
            id: 180552,
            nombre: "LOS ANDES (CAB. EN POATUG)"
          },
          {
            id: 180553,
            nombre: "SUCRE (CAB. EN SUCRE-PATATE URCU)"
          }
        ]
      },
      {
        id: 1806,
        nombre: "QUERO",
        parroquias: [
          {
            id: 180650,
            nombre: "QUERO"
          },
          {
            id: 180651,
            nombre: "RUMIPAMBA"
          },
          {
            id: 180652,
            nombre: "YANAYACU - MOCHAPATA (CAB. EN YANAYACU)"
          }
        ]
      },
      {
        id: 1807,
        nombre: "SAN PEDRO DE PELILEO",
        parroquias: [
          {
            id: 180701,
            nombre: "PELILEO"
          },
          {
            id: 180702,
            nombre: "PELILEO GRANDE"
          },
          {
            id: 180750,
            nombre: "PELILEO"
          },
          {
            id: 180751,
            nombre: "BENÍTEZ (PACHANLICA)"
          },
          {
            id: 180752,
            nombre: "BOLÍVAR"
          },
          {
            id: 180753,
            nombre: "COTALÓ"
          },
          {
            id: 180754,
            nombre: "CHIQUICHA (CAB. EN CHIQUICHA GRANDE)"
          },
          {
            id: 180755,
            nombre: "EL ROSARIO (RUMICHACA)"
          },
          {
            id: 180756,
            nombre: "GARCÍA MORENO (CHUMAQUI)"
          },
          {
            id: 180757,
            nombre: "GUAMBALÓ (HUAMBALÓ)"
          },
          {
            id: 180758,
            nombre: "SALASACA"
          }
        ]
      },
      {
        id: 1808,
        nombre: "SANTIAGO DE PÍLLARO",
        parroquias: [
          {
            id: 180801,
            nombre: "CIUDAD NUEVA"
          },
          {
            id: 180802,
            nombre: "PÍLLARO"
          },
          {
            id: 180850,
            nombre: "PÍLLARO"
          },
          {
            id: 180851,
            nombre: "BAQUERIZO MORENO"
          },
          {
            id: 180852,
            nombre: "EMILIO MARÍA TERÁN (RUMIPAMBA)"
          },
          {
            id: 180853,
            nombre: "MARCOS ESPINEL (CHACATA)"
          },
          {
            id: 180854,
            nombre: "PRESIDENTE URBINA (CHAGRAPAMBA -PATZUCUL)"
          },
          {
            id: 180855,
            nombre: "SAN ANDRÉS"
          },
          {
            id: 180856,
            nombre: "SAN JOSÉ DE POALÓ"
          },
          {
            id: 180857,
            nombre: "SAN MIGUELITO"
          }
        ]
      },
      {
        id: 1809,
        nombre: "TISALEO",
        parroquias: [
          {
            id: 180950,
            nombre: "TISALEO"
          },
          {
            id: 180951,
            nombre: "QUINCHICOTO"
          }
        ]
      }
    ]
  },
  {
    id: 19,
    nombre: "ZAMORA CHINCHIPE",
    cantones: [
      {
        id: 1901,
        nombre: "ZAMORA",
        parroquias: [
          {
            id: 190101,
            nombre: "EL LIMÓN"
          },
          {
            id: 190102,
            nombre: "ZAMORA"
          },
          {
            id: 190150,
            nombre: "ZAMORA"
          },
          {
            id: 190151,
            nombre: "CUMBARATZA"
          },
          {
            id: 190152,
            nombre: "GUADALUPE"
          },
          {
            id: 190153,
            nombre: "IMBANA (LA VICTORIA DE IMBANA)"
          },
          {
            id: 190154,
            nombre: "PAQUISHA"
          },
          {
            id: 190155,
            nombre: "SABANILLA"
          },
          {
            id: 190156,
            nombre: "TIMBARA"
          },
          {
            id: 190157,
            nombre: "ZUMBI"
          },
          {
            id: 190158,
            nombre: "SAN CARLOS DE LAS MINAS"
          }
        ]
      },
      {
        id: 1902,
        nombre: "CHINCHIPE",
        parroquias: [
          {
            id: 190250,
            nombre: "ZUMBA"
          },
          {
            id: 190251,
            nombre: "CHITO"
          },
          {
            id: 190252,
            nombre: "EL CHORRO"
          },
          {
            id: 190253,
            nombre: "EL PORVENIR DEL CARMEN"
          },
          {
            id: 190254,
            nombre: "LA CHONTA"
          },
          {
            id: 190255,
            nombre: "PALANDA"
          },
          {
            id: 190256,
            nombre: "PUCAPAMBA"
          },
          {
            id: 190257,
            nombre: "SAN FRANCISCO DEL VERGEL"
          },
          {
            id: 190258,
            nombre: "VALLADOLID"
          },
          {
            id: 190259,
            nombre: "SAN ANDRÉS"
          }
        ]
      },
      {
        id: 1903,
        nombre: "NANGARITZA",
        parroquias: [
          {
            id: 190350,
            nombre: "GUAYZIMI"
          },
          {
            id: 190351,
            nombre: "ZURMI"
          },
          {
            id: 190352,
            nombre: "NUEVO PARAÍSO"
          }
        ]
      },
      {
        id: 1904,
        nombre: "YACUAMBI",
        parroquias: [
          {
            id: 190450,
            nombre: "28 DE MAYO (SAN JOSÉ DE YACUAMBI)"
          },
          {
            id: 190451,
            nombre: "LA PAZ"
          },
          {
            id: 190452,
            nombre: "TUTUPALI"
          }
        ]
      },
      {
        id: 1905,
        nombre: "YANTZAZA (YANZATZA)",
        parroquias: [
          {
            id: 190550,
            nombre: "YANTZAZA (YANZATZA)"
          },
          {
            id: 190551,
            nombre: "CHICAÑA"
          },
          {
            id: 190552,
            nombre: "EL PANGUI"
          },
          {
            id: 190553,
            nombre: "LOS ENCUENTROS"
          }
        ]
      },
      {
        id: 1906,
        nombre: "EL PANGUI",
        parroquias: [
          {
            id: 190650,
            nombre: "EL PANGUI"
          },
          {
            id: 190651,
            nombre: "EL GUISME"
          },
          {
            id: 190652,
            nombre: "PACHICUTZA"
          },
          {
            id: 190653,
            nombre: "TUNDAYME"
          }
        ]
      },
      {
        id: 1907,
        nombre: "CENTINELA DEL CÓNDOR",
        parroquias: [
          {
            id: 190750,
            nombre: "ZUMBI"
          },
          {
            id: 190751,
            nombre: "PAQUISHA"
          },
          {
            id: 190752,
            nombre: "TRIUNFO-DORADO"
          },
          {
            id: 190753,
            nombre: "PANGUINTZA"
          }
        ]
      },
      {
        id: 1908,
        nombre: "PALANDA",
        parroquias: [
          {
            id: 190850,
            nombre: "PALANDA"
          },
          {
            id: 190851,
            nombre: "EL PORVENIR DEL CARMEN"
          },
          {
            id: 190852,
            nombre: "SAN FRANCISCO DEL VERGEL"
          },
          {
            id: 190853,
            nombre: "VALLADOLID"
          },
          {
            id: 190854,
            nombre: "LA CANELA"
          }
        ]
      },
      {
        id: 1909,
        nombre: "PAQUISHA",
        parroquias: [
          {
            id: 190950,
            nombre: "PAQUISHA"
          },
          {
            id: 190951,
            nombre: "BELLAVISTA"
          },
          {
            id: 190952,
            nombre: "NUEVO QUITO"
          }
        ]
      }
    ]
  },
  {
    id: 20,
    nombre: "GALÁPAGOS",
    cantones: [
      {
        id: 2001,
        nombre: "SAN CRISTÓBAL",
        parroquias: [
          {
            id: 200150,
            nombre: "PUERTO BAQUERIZO MORENO"
          },
          {
            id: 200151,
            nombre: "EL PROGRESO"
          },
          {
            id: 200152,
            nombre: "ISLA SANTA MARÍA (FLOREANA) (CAB. EN PTO. VELASCO IBARRA)"
          }
        ]
      },
      {
        id: 2002,
        nombre: "ISABELA",
        parroquias: [
          {
            id: 200250,
            nombre: "PUERTO VILLAMIL"
          },
          {
            id: 200251,
            nombre: "TOMÁS DE BERLANGA (SANTO TOMÁS)"
          }
        ]
      },
      {
        id: 2003,
        nombre: "SANTA CRUZ",
        parroquias: [
          {
            id: 200350,
            nombre: "PUERTO AYORA"
          },
          {
            id: 200351,
            nombre: "BELLAVISTA"
          },
          {
            id: 200352,
            nombre: "SANTA ROSA (INCLUYE LA ISLA BALTRA)"
          }
        ]
      }
    ]
  },
  {
    id: 21,
    nombre: "SUCUMBÍOS",
    cantones: [
      {
        id: 2101,
        nombre: "LAGO AGRIO",
        parroquias: [
          {
            id: 210150,
            nombre: "NUEVA LOJA"
          },
          {
            id: 210151,
            nombre: "CUYABENO"
          },
          {
            id: 210152,
            nombre: "DURENO"
          },
          {
            id: 210153,
            nombre: "GENERAL FARFÁN"
          },
          {
            id: 210154,
            nombre: "TARAPOA"
          },
          {
            id: 210155,
            nombre: "EL ENO"
          },
          {
            id: 210156,
            nombre: "PACAYACU"
          },
          {
            id: 210157,
            nombre: "JAMBELÍ"
          },
          {
            id: 210158,
            nombre: "SANTA CECILIA"
          },
          {
            id: 210159,
            nombre: "AGUAS NEGRAS"
          }
        ]
      },
      {
        id: 2102,
        nombre: "GONZALO PIZARRO",
        parroquias: [
          {
            id: 210250,
            nombre: "EL DORADO DE CASCALES"
          },
          {
            id: 210251,
            nombre: "EL REVENTADOR"
          },
          {
            id: 210252,
            nombre: "GONZALO PIZARRO"
          },
          {
            id: 210253,
            nombre: "LUMBAQUÍ"
          },
          {
            id: 210254,
            nombre: "PUERTO LIBRE"
          },
          {
            id: 210255,
            nombre: "SANTA ROSA DE SUCUMBÍOS"
          }
        ]
      },
      {
        id: 2103,
        nombre: "PUTUMAYO",
        parroquias: [
          {
            id: 210350,
            nombre: "PUERTO EL CARMEN DEL PUTUMAYO"
          },
          {
            id: 210351,
            nombre: "PALMA ROJA"
          },
          {
            id: 210352,
            nombre: "PUERTO BOLÍVAR (PUERTO MONTÚFAR)"
          },
          {
            id: 210353,
            nombre: "PUERTO RODRÍGUEZ"
          },
          {
            id: 210354,
            nombre: "SANTA ELENA"
          }
        ]
      },
      {
        id: 2104,
        nombre: "SHUSHUFINDI",
        parroquias: [
          {
            id: 210450,
            nombre: "SHUSHUFINDI"
          },
          {
            id: 210451,
            nombre: "LIMONCOCHA"
          },
          {
            id: 210452,
            nombre: "PAÑACOCHA"
          },
          {
            id: 210453,
            nombre: "SAN ROQUE (CAB. EN SAN VICENTE)"
          },
          {
            id: 210454,
            nombre: "SAN PEDRO DE LOS COFANES"
          },
          {
            id: 210455,
            nombre: "SIETE DE JULIO"
          }
        ]
      },
      {
        id: 2105,
        nombre: "SUCUMBÍOS",
        parroquias: [
          {
            id: 210550,
            nombre: "LA BONITA"
          },
          {
            id: 210551,
            nombre: "EL PLAYÓN DE SAN FRANCISCO"
          },
          {
            id: 210552,
            nombre: "LA SOFÍA"
          },
          {
            id: 210553,
            nombre: "ROSA FLORIDA"
          },
          {
            id: 210554,
            nombre: "SANTA BÁRBARA"
          }
        ]
      },
      {
        id: 2106,
        nombre: "CASCALES",
        parroquias: [
          {
            id: 210650,
            nombre: "EL DORADO DE CASCALES"
          },
          {
            id: 210651,
            nombre: "SANTA ROSA DE SUCUMBÍOS"
          },
          {
            id: 210652,
            nombre: "SEVILLA"
          }
        ]
      },
      {
        id: 2107,
        nombre: "CUYABENO",
        parroquias: [
          {
            id: 210750,
            nombre: "TARAPOA"
          },
          {
            id: 210751,
            nombre: "CUYABENO"
          },
          {
            id: 210752,
            nombre: "AGUAS NEGRAS"
          }
        ]
      }
    ]
  },
  {
    id: 22,
    nombre: "ORELLANA",
    cantones: [
      {
        id: 2201,
        nombre: "ORELLANA",
        parroquias: [
          {
            id: 220150,
            nombre: "PUERTO FRANCISCO DE ORELLANA (EL COCA)"
          },
          {
            id: 220151,
            nombre: "DAYUMA"
          },
          {
            id: 220152,
            nombre: "TARACOA (NUEVA ESPERANZA: YUCA)"
          },
          {
            id: 220153,
            nombre: "ALEJANDRO LABAKA"
          },
          {
            id: 220154,
            nombre: "EL DORADO"
          },
          {
            id: 220155,
            nombre: "EL EDÉN"
          },
          {
            id: 220156,
            nombre: "GARCÍA MORENO"
          },
          {
            id: 220157,
            nombre: "INÉS ARANGO (CAB. EN WESTERN)"
          },
          {
            id: 220158,
            nombre: "LA BELLEZA"
          },
          {
            id: 220159,
            nombre: "NUEVO PARAÍSO (CAB. EN UNIÓN"
          },
          {
            id: 220160,
            nombre: "SAN JOSÉ DE GUAYUSA"
          },
          {
            id: 220161,
            nombre: "SAN LUIS DE ARMENIA"
          }
        ]
      },
      {
        id: 2202,
        nombre: "AGUARICO",
        parroquias: [
          {
            id: 220201,
            nombre: "TIPITINI"
          },
          {
            id: 220250,
            nombre: "NUEVO ROCAFUERTE"
          },
          {
            id: 220251,
            nombre: "CAPITÁN AUGUSTO RIVADENEYRA"
          },
          {
            id: 220252,
            nombre: "CONONACO"
          },
          {
            id: 220253,
            nombre: "SANTA MARÍA DE HUIRIRIMA"
          },
          {
            id: 220254,
            nombre: "TIPUTINI"
          },
          {
            id: 220255,
            nombre: "YASUNÍ"
          }
        ]
      },
      {
        id: 2203,
        nombre: "LA JOYA DE LOS SACHAS",
        parroquias: [
          {
            id: 220350,
            nombre: "LA JOYA DE LOS SACHAS"
          },
          {
            id: 220351,
            nombre: "ENOKANQUI"
          },
          {
            id: 220352,
            nombre: "POMPEYA"
          },
          {
            id: 220353,
            nombre: "SAN CARLOS"
          },
          {
            id: 220354,
            nombre: "SAN SEBASTIÁN DEL COCA"
          },
          {
            id: 220355,
            nombre: "LAGO SAN PEDRO"
          },
          {
            id: 220356,
            nombre: "RUMIPAMBA"
          },
          {
            id: 220357,
            nombre: "TRES DE NOVIEMBRE"
          },
          {
            id: 220358,
            nombre: "UNIÓN MILAGREÑA"
          }
        ]
      },
      {
        id: 2204,
        nombre: "LORETO",
        parroquias: [
          {
            id: 220450,
            nombre: "LORETO"
          },
          {
            id: 220451,
            nombre: "AVILA (CAB. EN HUIRUNO)"
          },
          {
            id: 220452,
            nombre: "PUERTO MURIALDO"
          },
          {
            id: 220453,
            nombre: "SAN JOSÉ DE PAYAMINO"
          },
          {
            id: 220454,
            nombre: "SAN JOSÉ DE DAHUANO"
          },
          {
            id: 220455,
            nombre: "SAN VICENTE DE HUATICOCHA"
          }
        ]
      }
    ]
  },
  {
    id: 23,
    nombre: "SANTO DOMINGO DE LOS TSÁCHILAS",
    cantones: [
      {
        id: 2301,
        nombre: "SANTO DOMINGO",
        parroquias: [
          {
            id: 230101,
            nombre: "ABRAHAM CALAZACÓN"
          },
          {
            id: 230102,
            nombre: "BOMBOLÍ"
          },
          {
            id: 230103,
            nombre: "CHIGUILPE"
          },
          {
            id: 230104,
            nombre: "RÍO TOACHI"
          },
          {
            id: 230105,
            nombre: "RÍO VERDE"
          },
          {
            id: 230106,
            nombre: "SANTO DOMINGO DE LOS COLORADOS"
          },
          {
            id: 230107,
            nombre: "ZARACAY"
          },
          {
            id: 230150,
            nombre: "SANTO DOMINGO DE LOS COLORADOS"
          },
          {
            id: 230151,
            nombre: "ALLURIQUÍN"
          },
          {
            id: 230152,
            nombre: "PUERTO LIMÓN"
          },
          {
            id: 230153,
            nombre: "LUZ DE AMÉRICA"
          },
          {
            id: 230154,
            nombre: "SAN JACINTO DEL BÚA"
          },
          {
            id: 230155,
            nombre: "VALLE HERMOSO"
          },
          {
            id: 230156,
            nombre: "EL ESFUERZO"
          },
          {
            id: 230157,
            nombre: "SANTA MARÍA DEL TOACHI"
          }
        ]
      }
    ]
  },
  {
    id: 24,
    nombre: "SANTA ELENA",
    cantones: [
      {
        id: 2401,
        nombre: "SANTA ELENA",
        parroquias: [
          {
            id: 240101,
            nombre: "BALLENITA"
          },
          {
            id: 240102,
            nombre: "SANTA ELENA"
          },
          {
            id: 240150,
            nombre: "SANTA ELENA"
          },
          {
            id: 240151,
            nombre: "ATAHUALPA"
          },
          {
            id: 240152,
            nombre: "COLONCHE"
          },
          {
            id: 240153,
            nombre: "CHANDUY"
          },
          {
            id: 240154,
            nombre: "MANGLARALTO"
          },
          {
            id: 240155,
            nombre: "SIMÓN BOLÍVAR (JULIO MORENO)"
          },
          {
            id: 240156,
            nombre: "SAN JOSÉ DE ANCÓN"
          }
        ]
      },
      {
        id: 2402,
        nombre: "LA LIBERTAD",
        parroquias: [
          {
            id: 240250,
            nombre: "LA LIBERTAD"
          }
        ]
      },
      {
        id: 2403,
        nombre: "SALINAS",
        parroquias: [
          {
            id: 240301,
            nombre: "CARLOS ESPINOZA LARREA"
          },
          {
            id: 240302,
            nombre: "GRAL. ALBERTO ENRÍQUEZ GALLO"
          },
          {
            id: 240303,
            nombre: "VICENTE ROCAFUERTE"
          },
          {
            id: 240304,
            nombre: "SANTA ROSA"
          },
          {
            id: 240350,
            nombre: "SALINAS"
          },
          {
            id: 240351,
            nombre: "ANCONCITO"
          },
          {
            id: 240352,
            nombre: "JOSÉ LUIS TAMAYO (MUEY)"
          }
        ]
      }
    ]
  }
]

getProvincias(){
  return this.ecuador
}
getCantones(){
  let respuesta = []
  this.ecuador.forEach(data=>{
    data.cantones.forEach(cant=>{
        let canto = {
          provincia: data.nombre,
          nombre: cant.nombre,
          id: cant.id,
          ques: "Cantón"
        }
        respuesta.push(canto)
      })
  })
  return respuesta
}
getParroquias(){
  let respuesta = []
  this.ecuador.forEach(data=>{
   data.cantones.forEach(canto=>
        canto.parroquias.forEach(parr=>{
          let parroquia={
            provincia:data.nombre,
            id: parr.id,
            nombre: parr.nombre,
            canton: canto.nombre,
            ques: "Parroquia"
          }
          respuesta.push(parroquia)
        })
      )
  })
  return respuesta
}
  constructor() { }
}
