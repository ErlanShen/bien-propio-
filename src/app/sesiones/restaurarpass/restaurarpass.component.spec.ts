import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurarpassComponent } from './restaurarpass.component';

describe('RestaurarpassComponent', () => {
  let component: RestaurarpassComponent;
  let fixture: ComponentFixture<RestaurarpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurarpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurarpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
