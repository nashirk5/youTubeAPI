import { TestBed } from '@angular/core/testing';

import { YoutubeApiService } from './youtubeApi.service';

describe('YoutubeApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeApiService = TestBed.get(YoutubeApiService);
    expect(service).toBeTruthy();
  });
});
