import { TestBed, inject } from '@angular/core/testing';

import { NatureOfControlsService } from './nature-of-controls.service';

describe('NatureOfControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NatureOfControlsService]
    });
  });

  it('should be created', inject([NatureOfControlsService], (service: NatureOfControlsService) => {
    expect(service).toBeTruthy();
  }));
});
