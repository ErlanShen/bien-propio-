import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadURLComponent } from './propiedad-url.component';

describe('PropiedadURLComponent', () => {
  let component: PropiedadURLComponent;
  let fixture: ComponentFixture<PropiedadURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
