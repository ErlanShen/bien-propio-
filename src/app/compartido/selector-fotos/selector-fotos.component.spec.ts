import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFotosComponent } from './selector-fotos.component';

describe('SelectorFotosComponent', () => {
  let component: SelectorFotosComponent;
  let fixture: ComponentFixture<SelectorFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
