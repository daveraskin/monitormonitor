import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { PLAYLISTS } from './playlists';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {

  // create search results class that is a parent of all the other ones
  searchResults: any[]; 

  getSearchResults<T>():  Observable<T[]> {
  	return of(this.searchResults);
  };

  getPlaylists(searchTermValue: string): void {
  	if (searchTermValue) {
  		this.searchResults = PLAYLISTS;
  	}
  }

  constructor() { }
}
