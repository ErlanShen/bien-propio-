import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaActivaComponent } from './carga-activa.component';

describe('CargaActivaComponent', () => {
  let component: CargaActivaComponent;
  let fixture: ComponentFixture<CargaActivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaActivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
