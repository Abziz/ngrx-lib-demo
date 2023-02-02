import { TestBed } from '@angular/core/testing';

import { StoreCounterService } from './store-counter.service';

describe('StoreCounterService', () => {
  let service: StoreCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
