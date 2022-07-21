import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FakeStoreService } from './fake-store.service';

describe('FakeStoreService', () => {
  let service: FakeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(FakeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
