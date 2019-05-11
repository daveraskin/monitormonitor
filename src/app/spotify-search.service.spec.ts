import { TestBed } from '@angular/core/testing';

import { SpotifySearchService } from './spotify-search.service';

describe('SpotifySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifySearchService = TestBed.get(SpotifySearchService);
    expect(service).toBeTruthy();
  });
});
