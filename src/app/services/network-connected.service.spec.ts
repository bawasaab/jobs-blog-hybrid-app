import { TestBed } from '@angular/core/testing';

import { NetworkConnectedService } from './network-connected.service';

describe('NetworkConnectedService', () => {
  let service: NetworkConnectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkConnectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
