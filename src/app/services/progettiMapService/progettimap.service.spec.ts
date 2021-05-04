import { TestBed } from '@angular/core/testing';

import { ProgettiMapService } from './progettimap.service';

describe('ProgettiMapService', () => {
  let service: ProgettiMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgettiMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
