import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBusquedaComponent } from './ver-busqueda.component';

describe('VerBusquedaComponent', () => {
  let component: VerBusquedaComponent;
  let fixture: ComponentFixture<VerBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
