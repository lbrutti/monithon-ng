import { TestBed } from '@angular/core/testing';

import { MonithonApiService } from './monithon-api.service';

describe('MonithonApiServiceService', () => {
  let service: MonithonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonithonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
