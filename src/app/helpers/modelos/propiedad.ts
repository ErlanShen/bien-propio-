import { Ambientes } from './ambientes';
import { Exteriores } from './exteriores';
import { Servicios } from './servicios';
import { CaracteristicasGenerales } from './caracteristicas-generales';
import { Transacciones } from './transacciones';
import { Direccion } from './direccion';

export interface Propiedad {
    id?:string,
    parqueadero?:number,
    negociable?:boolean,
    exteriores?: Exteriores,
    caracteristicasG?: CaracteristicasGenerales,
    servicios?:Servicios,
    ambientes?:Ambientes,
    anioconstruccion?:number;
    tipo?:Transacciones,
    negocio?:Negocio[],
    titulo?:string,
    imgDestcada?:string,
    galeria?:string[],
    descripcion?:string,
    precio?:number,
    banos?:number,
    pisos?:number,
    publicacion?:Date,
    cuartos?:number,
    direccion?:Direccion,
    metrosCuadrados?:number,
    propietarios?:number,
    idUsuario?:string,
    lat?: number,
    lng?: number,
    antiguedad?:number,
    mediosBanos?:number,
    alicuota?:number,
    metrosConstruidos?:number,
    video?:string,
    matterport?:string,
    planos?:string[],
    activo?: Publicacion
}

export enum Negocio{
    VENTA,
    RENTA,
    INTERCAMBIO
}
export enum Publicacion{
    BORRADOR,
    EXPIRADO,
    PUBLICADO,
    PROGRAMADO
}
