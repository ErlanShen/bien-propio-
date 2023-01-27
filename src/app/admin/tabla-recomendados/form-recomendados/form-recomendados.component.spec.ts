import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecomendadosComponent } from './form-recomendados.component';

describe('FormRecomendadosComponent', () => {
  let component: FormRecomendadosComponent;
  let fixture: ComponentFixture<FormRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
