import { Component, OnInit } from '@angular/core';
import { MusicService, musicItem } from '../../services/music.service'
import { SpotifyService } from '../../services/spotify.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
// import { FLOW } from '../../../../assets/staticdata'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	music: musicItem[];
	spotItems: any;
	client_ID: 'd6b55734aa3f4b49af89ae8023b6c69e'
	client_secret: '4659ca881ead4eed81c45197f071db34'
	isLoading: boolean;
	display: boolean = false;


	constructor(
		private http: HttpClient,
		private router: Router,
		private spotify: SpotifyService,
		private _musicService: MusicService,
		) {
		this.isLoading = true
		this.spotify.getNewReleases()
			.subscribe((items:any)=>{
				this.spotItems = items; 
				this.isLoading = false
			}, (error) => {
				this.display = true
			})
	}
	
	ngOnInit(): void {
		this.music = this._musicService.getMusic();
	}
			
	goToArtist(id:number){
		this.router.navigate(['/artist',id])
	}

	selectionSong(id:number){
		console.log(id)
	}

    confirm() {
		this.display = true
    }
}
