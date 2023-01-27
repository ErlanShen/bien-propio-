import { Transacciones } from './transacciones';
export interface Banner {
    id?: string,
    mensaje: string,
    imagen: string,
    activo: boolean,
    categoria?:string,
    transacciones: Transacciones
}
