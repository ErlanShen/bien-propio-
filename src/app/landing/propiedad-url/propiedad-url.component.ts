import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedad-url',
  templateUrl: './propiedad-url.component.html',
  styleUrls: ['./propiedad-url.component.scss']
})
export class PropiedadURLComponent implements OnInit {

  link : string;
  constructor(private router:ActivatedRoute) { 
    this.link = this.router.snapshot.params.id
  }

  ngOnInit(): void {
  }

}
