import { TestBed } from '@angular/core/testing';

import { ReportMapService } from './reportmap.service';

describe('MonithonmapService', () => {
    let service: ReportMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
      service = TestBed.inject(ReportMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
