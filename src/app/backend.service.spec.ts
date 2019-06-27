import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BackendService]
  }));

  it('should be created', () => {
    const service: BackendService = TestBed.get(BackendService);
    expect(service).toBeTruthy();
  });
});
