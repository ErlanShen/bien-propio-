import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBlogComponent } from './tabla-blog.component';

describe('TablaBlogComponent', () => {
  let component: TablaBlogComponent;
  let fixture: ComponentFixture<TablaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
