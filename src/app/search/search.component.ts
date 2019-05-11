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
  searchResults: any;

  search(searchTermValue: string): void {
    this.spotifySearchService.getPlaylists(searchTermValue);
  }

  constructor(private spotifySearchService: SpotifySearchService) { }

  ngOnInit() {
  }

}
