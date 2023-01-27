import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from '../../helpers/servicios/auth.service';
import { Usuario } from '../../helpers/modelos/usuario';
import {SelectItem} from 'primeng/api';

import {  TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';

interface proffessional{
  name:string,
  code:string
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [MessageService]
})
export class RegistroComponent implements OnInit {
  rusuario:Usuario ={
    displayName: "",
    email:"",
    emailVerified:false,
    rol:0
  }
  @Output("avisame") avisador=new EventEmitter<string>();
  position: string;
  correo: string = "";
  clave: string = "";
  mostrarf: boolean = false;
  toggleMask = true;
  toggleMask2 = true;
  proffessionalType:any[];
  selectedProffesional:any;
  items: SelectItem[];
  item: string;
  Pname: string= "";
  Lname: string= "";
  Postal: string="";
  pNumber: string="";
  msgs2: Message[];
 
  constructor(private primengConfig: PrimeNGConfig, private ms: MessageService, private router: Router, private auth:AuthService, private traducir:TranslateService)  {

    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.proffessionalType = [
      {name: "REGISTERS.FORMPROF.NAMESP.NAME1", code: "REA"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME2", code: "ML" },
      {name: "REGISTERS.FORMPROF.NAMESP.NAME3", code: "HIS"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME4", code: "L" },
      {name: "REGISTERS.FORMPROF.NAMESP.NAME5", code: "P"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME6", code: "HB"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME7", code: "HI"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME8", code: "PM"},
      {name: "REGISTERS.FORMPROF.NAMESP.NAME9", code: "OREP"},
    ]
      
     
   }

  ngOnInit() {
    this.primengConfig.ripple = true;
    
    
    
  }

  register(correo: string, clave: string, formulario:NgForm) {
    //mandar rol correspondiente enves de 0
    this.auth.registrarcorreo(correo,clave,0).then(()=>{
      
      this.avisador.emit("valido")
      this.router.navigateByUrl('/login');
      formulario.reset()
      formulario.resetForm()

    }).catch((er)=>{
      
      this.avisador.emit("novalido")
      
      this.msgs2= this.generarerror();
    })

  }

  generarerror(){
    return [{severity:'error',key:"error",summary:this.traducir.instant("LOGIN.ERRORSUM"), detail:this.traducir.instant("LOGIN.ERROREG")}]
  }

}
