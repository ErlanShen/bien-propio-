import { Usuario } from './usuario';
import { Observable } from 'rxjs';
export interface Pagina {
    id?:string,
    titulo?:string,
    subtitulo?:string,
    fechaP?:Date,
    autor?:string | Observable<Usuario>,
    contenido?:string,
    activo?:boolean,
    imgPrincipal?:string,
    
}
