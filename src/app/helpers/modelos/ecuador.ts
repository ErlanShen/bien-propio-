export interface Provincias{
    nombre: string,
    id: number,
    cantones: Cantones[]
}
export interface Cantones{
    nombre: string,
    id: number,
    parroquias: Parroquias[]
}
export interface Parroquias{
    nombre: string,
    id: number
}
export interface Resultados{
    nombre?:string,
    tipo?:string,
    color?:string,
}