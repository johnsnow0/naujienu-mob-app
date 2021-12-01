import { TestBed } from '@angular/core/testing';

import { NaujienosService } from './naujienos.service';

describe('NaujienosService', () => {
  let service: NaujienosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaujienosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
