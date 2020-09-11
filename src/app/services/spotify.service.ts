import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	headers : HttpHeaders;
	constructor(
		private http: HttpClient
		) { 
			this.headers = new HttpHeaders({
				'Authorization': 'Bearer BQCavVy0ImEEMg_5r3r5M6B1Utyb5DSViMGVjMlgUN1HG0eKiYX2cv9GoGVzvLI3qshzjePqH2atWksJESo'
			})
		}

		getApiCall(query:string){
			const url = `https://api.spotify.com/v1${query}`;
			return this.http.get(url,{ headers : this.headers });
		}
		
		getNewReleases(){
			return this.getApiCall('/browse/new-releases?limit=50')
			.pipe( map((data:any)=>{
				return data['albums'].items
			}))
		}

		getArtist(query){
			return this.getApiCall(`/search?q=${query}&type=artist&limit=15`)
				.pipe( map((data:any)=>{
					return data['artists'].items
				}))
		}

		getArtistById(query){
			return this.getApiCall(`/artists/${query}`)
				// .pipe( map((data:any)=>{
				// 	return data['artists'].items
				// }))
		}
	}

	
export interface spotItem {
	album_type            : string;
	artists               : object[];
	available_markets     : string[];
	external_urls         : object;
	href                  : string;
	images                : spotImg[];
	name                  : string;
	release_date          : string;
	release_date_precision: string;
	total_tracks          : number;
	type                  : string;
	uri                   : string;		
}

export interface spotImg {
	height: number;
	width : number;
	url   : string;
}