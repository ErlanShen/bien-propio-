import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.scss']
})
export class FormularioAgregarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
cambiar(){
  this.router.navigateByUrl('/cuenta/nuevo(formulario:datosPersonales)')
}
}
