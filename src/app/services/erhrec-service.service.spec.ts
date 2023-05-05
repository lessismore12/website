import { TestBed } from '@angular/core/testing';

import { ErhrecServiceService } from './erhrec-service.service';

describe('ErhrecServiceService', () => {
  let service: ErhrecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErhrecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
