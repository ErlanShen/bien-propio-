import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasBlogComponent } from './categorias-blog.component';

describe('CategoriasBlogComponent', () => {
  let component: CategoriasBlogComponent;
  let fixture: ComponentFixture<CategoriasBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
