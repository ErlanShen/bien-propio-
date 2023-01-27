import { TestBed } from '@angular/core/testing';

import { MetEnumService } from './met-enum.service';

describe('MetEnumService', () => {
  let service: MetEnumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetEnumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
