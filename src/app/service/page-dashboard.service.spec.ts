import { TestBed } from '@angular/core/testing';

import { PageDashboardService } from './page-dashboard.service';

describe('PageDashboardService', () => {
  let service: PageDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
