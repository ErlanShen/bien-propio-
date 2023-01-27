import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/helpers/servicios/auth.service';
import { DatosUsuarioService } from 'src/app/helpers/servicios/datos-usuario.service';
import { Usuario } from "../../../helpers/modelos/usuario";


@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})

export class FormularioUsuariosComponent implements OnInit {

  usuarios: Usuario;
    
  constructor(private data: DatosUsuarioService, private rut:ActivatedRoute, private auth:AuthService) {

      this.data.devolverUnUsuario(this.rut.snapshot.params.uid).subscribe(usuarios=>{
        
        this.usuarios=usuarios
      })
    
   }

  ngOnInit(): void {
  }


  enviarclave(correo:string){
    
    this.auth.enviarCorreoClave(correo)
  }
    
}
