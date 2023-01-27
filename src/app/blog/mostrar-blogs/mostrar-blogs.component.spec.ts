import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBlogsComponent } from './mostrar-blogs.component';

describe('MostrarBlogsComponent', () => {
  let component: MostrarBlogsComponent;
  let fixture: ComponentFixture<MostrarBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
