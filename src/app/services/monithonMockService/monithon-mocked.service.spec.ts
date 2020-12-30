import { TestBed } from '@angular/core/testing';

import { MonithonMockedService as MonithonMockedService } from './monithon-mocked.service';

describe('MonithonMockedServiceService', () => {
  let service: MonithonMockedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonithonMockedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
