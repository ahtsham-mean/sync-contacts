import { TestBed } from '@angular/core/testing';

import { SyncContactService } from './sync-contact.service';

describe('SyncContactService', () => {
  let service: SyncContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
