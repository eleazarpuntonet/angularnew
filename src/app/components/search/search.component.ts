import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.pug',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
	spotItems: any;
	isLoading: boolean;

  constructor(
		private spotify: SpotifyService,
  ) { 
		this.isLoading = true
  }

  ngOnInit(): void {
    let data = history.state;

		this.spotify.getArtist(data.query)
			.subscribe((data:any)=>{
        this.spotItems = data; 
        this.isLoading = false;
			})    
  }

}
