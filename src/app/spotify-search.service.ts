import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { SpotifyResponse } from './spotify-response';
import { PLAYLISTS } from './playlists';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
      console.log(searchTermValue)
      this.http.post<SpotifyResponse[]>('http://localhost:3000/api/search', {term: searchTermValue})
      .subscribe(results => {
        console.log(results)
        this.searchResults.next(results);
      })
  }
}

  getResults(): BehaviorSubject<SpotifyResponse[]> {
        return this.searchResults
  }

  constructor(private http: HttpClient) { }
}
