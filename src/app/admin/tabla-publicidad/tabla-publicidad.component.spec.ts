import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPublicidadComponent } from './tabla-publicidad.component';

describe('TablaPublicidadComponent', () => {
  let component: TablaPublicidadComponent;
  let fixture: ComponentFixture<TablaPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPublicidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
