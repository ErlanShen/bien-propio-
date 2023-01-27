import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendadosTarjetaComponent } from './recomendados-tarjeta.component';

describe('RecomendadosTarjetaComponent', () => {
  let component: RecomendadosTarjetaComponent;
  let fixture: ComponentFixture<RecomendadosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendadosTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendadosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
