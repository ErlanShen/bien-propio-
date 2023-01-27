import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPropiedadesComponent } from './tabla-propiedades.component';

describe('TablaPropiedadesComponent', () => {
  let component: TablaPropiedadesComponent;
  let fixture: ComponentFixture<TablaPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
