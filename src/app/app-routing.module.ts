import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SongsComponent } from './components/songs/songs.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { ArtistComponent } from './components/artist/artist.component'
import { PipesComponent } from './components/pipes/pipes.component'
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent        
	},
	{
		path: 'songs',
		component: SongsComponent        
	},
	{
		path: 'artists',
		component: ArtistsComponent        
	},
	{
		path: 'playlists',
		component: PlaylistsComponent        
	},
	{
		path: 'artist/:id',
		component: ArtistComponent        
	},
	{
		path: 'pipes',
		component: PipesComponent        
	},
	{
		path: 'search',
		component: SearchComponent        
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''        
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
