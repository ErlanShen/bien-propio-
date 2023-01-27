import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPropiedadComponent } from './tarjeta-propiedad.component';

describe('TarjetaPropiedadComponent', () => {
  let component: TarjetaPropiedadComponent;
  let fixture: ComponentFixture<TarjetaPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
