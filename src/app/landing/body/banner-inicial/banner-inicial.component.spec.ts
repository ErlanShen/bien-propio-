import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInicialComponent } from './banner-inicial.component';

describe('BannerInicialComponent', () => {
  let component: BannerInicialComponent;
  let fixture: ComponentFixture<BannerInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
