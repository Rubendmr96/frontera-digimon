import { TestBed } from '@angular/core/testing';

import { DigidigitsService } from './digidigits.service';

describe('DigidigitsService', () => {
  let service: DigidigitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigidigitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
