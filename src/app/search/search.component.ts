import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchTerm: string; 

  search(): void {
  	this.searchTerm = "you searched for " + this.searchTerm
  }

  constructor() { }

  ngOnInit() {
  }

}
