import { Propiedad } from './propiedad';
export interface PortadaPromociones {
    cercanos: Propiedad[],
    baratos: Propiedad[]
}

export interface Ruleta{
    nombre: string,
    propiedades: Propiedad[]
}