import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import localEs from '@angular/common/locales/es';
import localEn from '@angular/common/locales/en';
import localPt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http'
import { InputTextModule } from 'primeng/inputtext';


registerLocaleData(localEs);
registerLocaleData(localPt);

//Servicios 
import { MusicService } from './services/music.service'

//Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { MusicCardComponent } from './components/shared/music-card/music-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchComponent } from './components/search/search.component';
import { ImgPipe } from './pipes/img.pipe';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtistComponent,
    MusicCardComponent,
    PipesComponent,
    CapitalizePipe,
    SearchComponent,
    ImgPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [
    MusicService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
