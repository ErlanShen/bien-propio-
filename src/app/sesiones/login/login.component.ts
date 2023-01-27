import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute  } from "@angular/router";
import { PrimeNGConfig } from 'primeng/api';
import { Message, MessageService } from 'primeng/api';
import { AuthService } from "../../helpers/servicios/auth.service"
import { TranslateService } from '@ngx-translate/core';
import { DatosUsuarioService } from '../../helpers/servicios/datos-usuario.service';
import { Usuario } from '../../helpers/modelos/usuario';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    MessageService
  ]

})
export class LoginComponent implements OnInit {
  @Output("avisame") avisador = new EventEmitter<string>();
  position: string;
  correo: string = "";
  rcorreo:string= "";
  clave: string = "";
  toggleMask2 = true;
  msgs2: Message[];
  miboleano: boolean = true;
  miboleano2: boolean = true;
  user:Usuario;
  correonoe: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private router: Router,private rut:ActivatedRoute, private auth: AuthService, private traducir:TranslateService, private duser:DatosUsuarioService  ) {

    this.duser.devolverUnUsuario(this.rut.snapshot.params.uid).subscribe(usuarios=>{    
      this.user=usuarios
    })
   
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

  login(correo: string, clave: string,formulario:NgForm) {


    this.auth.iniciarsesioncorreo(correo, clave).then((mensaje) => {

       this.auth.miusuario$.subscribe(usuario=>{
         if (usuario.emailVerified === false){
            usuario.emailVerified = mensaje.user.emailVerified
            this.duser.updateuser(usuario)
         }
         this.avisador.emit("valido")

         this.router.navigateByUrl('/cuenta/inicio')
         formulario.reset()
         formulario.resetForm()
       }) 
      
      
    }).catch((er)=>{
      this.avisador.emit("novalido")
      this.msgs2= this.generarerror();

    })

  }


  generarerror(){
    return [{severity:'error',key:"error", detail:this.traducir.instant("LOGIN.ERRORLOG")}]
  }
  
  cambiador(formulario:NgForm){
    this.miboleano=!this.miboleano 
    this.rcorreo=""
    this.correonoe=false
   formulario.reset()
   formulario.resetForm()
  }

  cambiaraverif(correo:string){
  
    this.auth.enviarCorreoClave(correo).then(()=>{
      this.miboleano2=!this.miboleano2 
      this.regresarlogin()
    }).catch((err)=>{
      this.correonoe = true
    })
  }
  

  
 
 
  regresarlogin(){
    setTimeout (()=>{
     this.rcorreo=""
     this.miboleano=!this.miboleano
     this.miboleano2=!this.miboleano2
     this.correonoe=false
   }, 5000);
  }

 
}
