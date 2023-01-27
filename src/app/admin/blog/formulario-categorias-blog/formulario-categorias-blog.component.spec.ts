import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCategoriasBlogComponent } from './formulario-categorias-blog.component';

describe('FormularioCategoriasBlogComponent', () => {
  let component: FormularioCategoriasBlogComponent;
  let fixture: ComponentFixture<FormularioCategoriasBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCategoriasBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCategoriasBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
