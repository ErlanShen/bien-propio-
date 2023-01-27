import { TestBed } from '@angular/core/testing';

import { MapaServiceService } from './mapa-service.service';

describe('MapaServiceService', () => {
  let service: MapaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
