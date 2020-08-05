import { TestBed } from '@angular/core/testing';

import { EmotionServiceService } from './emotion-service.service';

describe('EmotionServiceService', () => {
  let service: EmotionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmotionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
