import { TestBed } from '@angular/core/testing';

import { RecomendadosService } from './recomendados.service';

describe('RecomendadosService', () => {
  let service: RecomendadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
