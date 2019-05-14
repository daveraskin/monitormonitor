import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { SpotifyResponse } from './spotify-response';
import { PLAYLISTS } from './playlists';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {

  // Behavior Subject allows search-results component to update when search component searches spotify
  searchResults = new BehaviorSubject([]); 

  Otherthing: Playlist[] = [{
    id: 5, name: 'impulso number two', url: 'www.gomasoifn.com', tracks: ['hey boy', 'you know it']
  }]

  searchSpotify(searchTermValue: string, queryType: string): void{
    if (queryType == 'playlist') {
      this.searchResults.next(PLAYLISTS);
    } else {
      this.searchResults.next(this.Otherthing);
    }
  }

  getResults(): Observable<SpotifyResponse[]> {
    return this.searchResults.asObservable();
  }

  

  constructor() { }
}
