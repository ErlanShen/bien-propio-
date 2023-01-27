import { CategoriaBlog } from 'src/app/helpers/modelos/categoria-blog';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
export interface Blog {
    id?: string,
    titulo?: string,
    subtitulo?: string,  
    fechaCreacion?: Date,
    fechaPublicacion?: Date,
    estado?: boolean,
    autor?: string | Observable<Usuario>
    descripcion?: string,
    contenido?: string,
    categorias?: string[] | Observable<CategoriaBlog[]>,   
    imagen?: string
}

 
