import { TestBed } from '@angular/core/testing';

import { HausesService } from './hauses.service';

describe('HausesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HausesService = TestBed.get(HausesService);
    expect(service).toBeTruthy();
  });
});
