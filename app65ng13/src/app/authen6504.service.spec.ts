import { TestBed } from '@angular/core/testing';

import { Authen6504Service } from './authen6504.service';

describe('Authen6504Service', () => {
  let service: Authen6504Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authen6504Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
