import { TestBed } from '@angular/core/testing';

import { NewscategoryService } from './newscategory.service';

describe('NewscategoryService', () => {
  let service: NewscategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewscategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
