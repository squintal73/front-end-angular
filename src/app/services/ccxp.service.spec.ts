import { TestBed } from '@angular/core/testing';

import { CcxpService } from './ccxp.service';

describe('CcxpService', () => {
  let service: CcxpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcxpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
