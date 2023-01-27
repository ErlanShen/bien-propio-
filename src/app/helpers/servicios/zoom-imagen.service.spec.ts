import { TestBed } from '@angular/core/testing';

import { ZoomImagenService } from './zoom-imagen.service';

describe('ZoomImagenService', () => {
  let service: ZoomImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
