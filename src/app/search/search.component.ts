import { Component, OnInit } from '@angular/core';
import { SpotifySearchService } from '../spotify-search.service'
import { Playlist } from '../playlist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchTerm: string; 
  searchTypes: string[] = ['playlist', 'artist', 'song', 'album'];
  searchType: string = 'playlist';


  search(searchTermValue: string, searchType: string): void {
    this.spotifySearchService.searchSpotify(searchTermValue, searchType)
  }

  constructor(private spotifySearchService: SpotifySearchService) { }

  ngOnInit() {
  }

}
