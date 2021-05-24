import { TestBed } from '@angular/core/testing';

import { VotezRESTService } from './votez-rest.service';

describe('VotezRESTService', () => {
  let service: VotezRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotezRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
