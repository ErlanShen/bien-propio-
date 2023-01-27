import { TestBed } from '@angular/core/testing';

import { ProvinciasDataService } from './provincias-data.service';

describe('ProvinciasDataService', () => {
  let service: ProvinciasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
