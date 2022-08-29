import { TestBed } from '@angular/core/testing';

import { PageRegisterService } from './page-register.service';

describe('PageRegisterService', () => {
  let service: PageRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
