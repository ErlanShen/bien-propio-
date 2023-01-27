import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGridCartasComponent } from './banner-grid-cartas.component';

describe('BannerGridCartasComponent', () => {
  let component: BannerGridCartasComponent;
  let fixture: ComponentFixture<BannerGridCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGridCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGridCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
