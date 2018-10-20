import { TestBed } from '@angular/core/testing';

import { ProcessLibService } from './process-lib.service';

describe('ProcessLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessLibService = TestBed.get(ProcessLibService);
    expect(service).toBeTruthy();
  });
});
