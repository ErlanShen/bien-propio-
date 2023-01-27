import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBannerComponent } from './tabla-banner.component';

describe('TablaBannerComponent', () => {
  let component: TablaBannerComponent;
  let fixture: ComponentFixture<TablaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
