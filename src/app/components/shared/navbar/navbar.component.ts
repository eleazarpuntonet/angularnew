import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.pug',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	items: MenuItem[];
	activeItem: MenuItem;
	activeOptions: object;
	searchText: string;
	
	constructor(
		private spotify: SpotifyService,
		private router: Router,
	) { }
	
	ngOnInit(): void {
		this.activeOptions = {
			class: 'itemActive'
		}
		
		this.items = [
			{
				label: 'Mis canciones', 
				icon: 'pi pi-fw pi-home',
				routerLink: ['home'],
			},
			{
				label: 'Artistas', 
				icon: 'pi pi-fw pi-calendar',
				routerLink: ['artists']
			},
			{
				label: 'Playlists', 
				icon: 'pi pi-fw pi-pencil',
				routerLink: ['playlists']
			},
			{
				label: 'Search', 
				icon: 'pi pi-fw pi-file'
			},
			{
				label: 'Songs', 
				icon: 'pi pi-fw pi-cog',
				routerLink: ['songs']
			},
			{
				label: 'Pipes', 
				icon: 'pi pi-fw pi-cog',
				routerLink: ['pipes']
			}
		];

		this.items.forEach(e => e.routerLinkActiveOptions = this.activeOptions)
		this.activeItem = this.items[0];
	}
	
	public search(val:string){
		// console.log(this.router.url)
		// <a [routerLink]=”/b” [state]=”{ data: {...}}”>Go to B</a>
		 
		let objRoute = {
			state : {
				query: val
			}
		}
		this.router.navigate(['/search'], objRoute);

		// this.spotify.getArtist(val)
		// 	.subscribe((data:any)=>{
		// 		console.log(data.artists.items)
		// 	})
	}
}
