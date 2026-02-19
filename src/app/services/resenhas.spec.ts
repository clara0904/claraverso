import { TestBed } from '@angular/core/testing';

import { Resenhas } from './resenhas';

describe('Resenhas', () => {
  let service: Resenhas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resenhas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
