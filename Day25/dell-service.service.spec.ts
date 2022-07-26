import { TestBed } from '@angular/core/testing';

import { DellServiceService } from './dell-service.service';

describe('DellServiceService', () => {
  let service: DellServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DellServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
