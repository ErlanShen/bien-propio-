import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBlogComponent } from './formulario-blog.component';

describe('FormularioBlogComponent', () => {
  let component: FormularioBlogComponent;
  let fixture: ComponentFixture<FormularioBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
