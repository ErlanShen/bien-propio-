import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaBusquedaComponent } from './mapa-busqueda.component';

describe('MapaBusquedaComponent', () => {
  let component: MapaBusquedaComponent;
  let fixture: ComponentFixture<MapaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
