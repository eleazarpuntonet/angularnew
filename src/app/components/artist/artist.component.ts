import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.pug',
	styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {
	
	idArtist: string;
	isLoading: boolean = true;
	artisResource: any;
	
	constructor(
		private spotify: SpotifyService,
		private activatedRoute: ActivatedRoute
	) { 
		this.activatedRoute.params.subscribe( param => this.idArtist = param.id )
	}
		
	ngOnInit(): void {
		this.spotify.getArtistById(this.idArtist)
			.subscribe((data:any)=>{
				this.isLoading = false
				console.log(data)
				this.artisResource = data
			})  			
	}

}
	