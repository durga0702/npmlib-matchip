import { TestBed } from '@angular/core/testing';

import { NpmlibMatchipService } from './npmlib-matchip.service';

describe('NpmlibMatchipService', () => {
  let service: NpmlibMatchipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmlibMatchipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
