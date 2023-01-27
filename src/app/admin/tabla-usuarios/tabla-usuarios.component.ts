import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/helpers/servicios/datos-usuario.service';
import { Usuario } from "../../helpers/modelos/usuario";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: Usuario[];
  user: Usuario[]
  column: any[];

  constructor(private data: DatosUsuarioService, private rutas:Router ) 
  
  { 

    this.data.devolverUsuarios().subscribe(usuarios=>{
    
      this.usuarios=usuarios
    })
  }

  ngOnInit(): void {
    this.column = [
      { field: 'displayName', header: 'Nombre' },
      { field: 'email', header: 'Correo' },
      { field: 'photoURL', header: 'Foto' },
      { field: 'emailVerified:', header: 'Estado' }
      
    ];
    
  }

  edit(editar:string){
    
   this.rutas.navigateByUrl('/admin/editarUsuarios/'+ editar)
    
  }

  borrar(borrar: Usuario ){
    
    
  }


} 

