import { TestBed } from '@angular/core/testing';

import { DataBlogsService } from './data-blogs.service';

describe('DataBlogsService', () => {
  let service: DataBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
