import { TestBed } from '@angular/core/testing';

import { UsercommonserviceService } from './usercommonservice.service';

describe('UsercommonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercommonserviceService = TestBed.get(UsercommonserviceService);
    expect(service).toBeTruthy();
  });
});
