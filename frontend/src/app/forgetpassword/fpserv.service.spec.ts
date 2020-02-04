import { TestBed } from '@angular/core/testing';

import { FpservService } from './fpserv.service';

describe('FpservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FpservService = TestBed.get(FpservService);
    expect(service).toBeTruthy();
  });
});
