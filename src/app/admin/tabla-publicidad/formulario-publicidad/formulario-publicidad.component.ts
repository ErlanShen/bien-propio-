import { RutasService } from './../../../helpers/servicios/rutas.service';
import { Propiedad } from './../../../helpers/modelos/propiedad';
import { PropiedadesService } from './../../../helpers/servicios/propiedades.service';
import { PromocionesService } from './../../../helpers/servicios/promociones.service';
import { Promociones } from './../../../helpers/modelos/promociones';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBlogsService } from 'src/app/helpers/servicios/data-blogs.service';
import { Blog } from 'src/app/helpers/modelos/blog';

@Component({
  selector: 'app-formulario-publicidad',
  templateUrl: './formulario-publicidad.component.html',
  styleUrls: ['./formulario-publicidad.component.scss']
})
export class FormularioPublicidadComponent implements OnInit {

  promociones: Promociones = {
    titulo: "",
    imagen: "",
    ruta: "",
    descripcion: "",
    fechaInicio: new Date(),
    fechaFin: new Date()
  }
  activo:boolean=false;
  busqueda: Propiedad[]
  bloggeos: Blog[]
  categoriaBusqueda = [
    { label: "Propiedades", value: "propiedades" },
    { label: "Blogs", value: "blogs" }
  ]
  editando: boolean=false
  fechaActual = new Date()
  rutaA: string = "propiedades"
  rutaB: string = ""


  constructor(private promocionesService: PromocionesService, private activatedRouter: ActivatedRoute,
    private propiedadService: PropiedadesService, private router: Router, private serveRutas: RutasService,
    private blogsS:DataBlogsService ) {
    const verificar = this.activatedRouter.snapshot.params.id
    if (verificar != "nuevo") {
      this.promocionesService.getOnePromotion(verificar).subscribe(datos => {
        this.promociones = datos
        let intermedio = this.serveRutas.separadorRutas(datos.ruta)      
        this.rutaA = intermedio[1]
        this.rutaB = intermedio[2]
        if( intermedio[1] === "propiedades"){
          this.activo = false
          this.propiedadService.soloTitulos().subscribe(prop => {
            this.busqueda = prop      
          })
        }
      })
      this.editando=true
    } else {
      this.promociones = {
        titulo: "",
        imagen: "",
        ruta: "",
        descripcion: "",
        fechaInicio: new Date(),
        fechaFin: new Date()
      }
      this.rutaA = "propiedades"
      this.rutaB = ""
      this.propiedadService.soloTitulos().subscribe(prop => {
        this.busqueda = prop      
      })
    }
  }

  observar(promocion: any) {
    this.activo = !this.activo
    if (promocion.value === "propiedades") {    
      this.activo = false  
      this.propiedadService.soloTitulos().subscribe(prop => {
        this.busqueda = prop      
      })
    }
    if(promocion.value === "blogs"){
      this.activo = true
      this.blogsS.getAllBlogs().subscribe(losblogs=>{
        this.bloggeos = losblogs
      })
    }
   
  }

  ngOnInit(): void {
    this.serveRutas.actualizadorRutas()
  }

  guardar(promocion: Promociones) {
    promocion.ruta = "/" + this.rutaA + "/" + this.rutaB    
    this.promocionesService.manejadorPromotions(promocion)
    this.router.navigateByUrl("/admin/publicidad")
  }
  verImagenes(evento:any){
    this.promociones.imagen=evento[0]
  }

}
