import { TestBed } from '@angular/core/testing';

import { NgxFireTestingService } from './ngx-fire-testing.service';

describe('NgxFireTestingService', () => {
  let service: NgxFireTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFireTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
