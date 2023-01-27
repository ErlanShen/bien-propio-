import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosClientesComponent } from './fotos-clientes.component';

describe('FotosClientesComponent', () => {
  let component: FotosClientesComponent;
  let fixture: ComponentFixture<FotosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
