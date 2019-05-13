import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { SpotifyResponse } from './spotify-response';
import { PLAYLISTS } from './playlists';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {

  searchResults = new BehaviorSubject([]); 

  getResults(): Observable<SpotifyResponse[]> {
    return this.searchResults.asObservable();
  }

  searchSpotify(searchTermValue: string, queryType: string): void{
  	if (searchTermValue) {
      console.log('yo wassup')
  		this.searchResults.next(PLAYLISTS);
  	} else {
  		this.searchResults.next(null);
  	}
  }

  constructor() { }
}
