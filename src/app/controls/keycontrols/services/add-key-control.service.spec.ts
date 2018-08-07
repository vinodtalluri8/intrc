import { TestBed, inject } from '@angular/core/testing';

import { AddKeyControlService } from './add-key-control.service';

describe('AddKeyControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddKeyControlService]
    });
  });

  it('should be created', inject([AddKeyControlService], (service: AddKeyControlService) => {
    expect(service).toBeTruthy();
  }));
});
