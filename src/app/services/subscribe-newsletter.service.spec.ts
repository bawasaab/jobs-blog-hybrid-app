import { TestBed } from '@angular/core/testing';

import { SubscribeNewsletterService } from './subscribe-newsletter.service';

describe('SubscribeNewsletterService', () => {
  let service: SubscribeNewsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeNewsletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
