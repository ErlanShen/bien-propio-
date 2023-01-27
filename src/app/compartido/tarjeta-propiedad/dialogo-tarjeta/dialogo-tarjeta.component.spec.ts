import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoTarjetaComponent } from './dialogo-tarjeta.component';

describe('DialogoTarjetaComponent', () => {
  let component: DialogoTarjetaComponent;
  let fixture: ComponentFixture<DialogoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
