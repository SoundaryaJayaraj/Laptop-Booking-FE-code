import { TestBed } from '@angular/core/testing';

import { AppointentViewService } from './appointent-view.service';

describe('AppointentViewService', () => {
  let service: AppointentViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointentViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
