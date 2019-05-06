import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() playlist: Playlist;
  
  constructor() { }

  ngOnInit() {
  }

}
