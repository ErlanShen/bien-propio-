import { TestBed } from '@angular/core/testing';

import { DataCategoriasBlogService } from './data-categorias-blog.service';

describe('DataCategoriasBlogService', () => {
  let service: DataCategoriasBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCategoriasBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
