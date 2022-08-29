import { TestBed } from '@angular/core/testing';

import { CommonHeaderServiceService } from './common-header-service.service';

describe('CommonHeaderServiceService', () => {
  let service: CommonHeaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHeaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
