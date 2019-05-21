import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import { SpotifyResponse } from '../spotify-response';
import { SpotifySearchService } from '../spotify-search.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() playlist: Playlist;

  searchResults: SpotifyResponse[];
  
  populateSearchResults(): void {
  	this.spotifySearchService.getResults()
  		.subscribe((results) => {
        for(var result of results) {
          console.log(JSON.stringify(result))
        };
        this.searchResults = results
    })
  }
  
  constructor(private spotifySearchService: SpotifySearchService) { }

  ngOnInit() {
  	this.populateSearchResults();
  }

}
