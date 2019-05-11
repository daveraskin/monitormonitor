import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import { SpotifySearchService } from '../spotify-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() playlist: Playlist;

  searchResults: any;
  
  populateSearchResults(): void {
  	console.log('something happing')
  	this.spotifySearchService.getSearchResults()
  		.subscribe(results => this.searchResults = results)
  }
  constructor(private spotifySearchService: SpotifySearchService) { }

  ngOnInit() {
  	this.populateSearchResults();
  }

}
