import { TestBed, inject } from '@angular/core/testing';

import { PopUpService } from './pop-up.service';

describe('PopUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopUpService]
    });
  });

  it('should be created', inject([PopUpService], (service: PopUpService) => {
    expect(service).toBeTruthy();
  }));
});
