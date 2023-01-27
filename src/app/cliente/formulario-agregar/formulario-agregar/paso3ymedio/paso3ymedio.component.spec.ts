import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3ymedioComponent } from './paso3ymedio.component';

describe('Paso3ymedioComponent', () => {
  let component: Paso3ymedioComponent;
  let fixture: ComponentFixture<Paso3ymedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paso3ymedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso3ymedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
