import { TestBed } from '@angular/core/testing';

import { Debug2Service } from './debug2.service';

describe('Debug2Service', () => {
  let service: Debug2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Debug2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
