import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRecomendadosComponent } from './tabla-recomendados.component';

describe('TablaRecomendadosComponent', () => {
  let component: TablaRecomendadosComponent;
  let fixture: ComponentFixture<TablaRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
