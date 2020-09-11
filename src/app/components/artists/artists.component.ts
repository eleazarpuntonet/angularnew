import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
	selector: 'app-artists',
	templateUrl: './artists.component.pug',
	styleUrls: ['./artists.component.sass']
})
export class ArtistsComponent implements OnInit {
	idArtist: string;
	
	constructor(
		private spotify: SpotifyService,
		private activatedRoute: ActivatedRoute
	) { 
		this.activatedRoute.params.subscribe( param => this.idArtist = param.id )
	}
		
	ngOnInit(): void {
		this.spotify.getArtistById(this.idArtist)
			.subscribe((data:any)=>{
				console.log(data)
			})  			
	}
		
}
	