import { TestBed } from '@angular/core/testing';

import { MonithonMapService } from './monithonmap.service';

describe('MonithonmapService', () => {
  let service: MonithonMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonithonMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
