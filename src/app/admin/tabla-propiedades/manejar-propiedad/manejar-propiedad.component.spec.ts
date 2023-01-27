import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarPropiedadComponent } from './manejar-propiedad.component';

describe('ManejarPropiedadComponent', () => {
  let component: ManejarPropiedadComponent;
  let fixture: ComponentFixture<ManejarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarPropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
