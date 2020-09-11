import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { musicItem } from '../../../services/music.service';



@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.pug',
  styleUrls: ['./music-card.component.sass']
})
export class MusicCardComponent implements OnInit {
  @Input() musicSong: any;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() img: string;
  @Input() typeresource: string;
  @Input() resource: any;
  @Output() songSelected: EventEmitter<number>;
 
  constructor(
		private router: Router,
  ) {
    this.songSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  goToArtist(resource: any){
    console.log(resource)
    let id: string;
    if(resource.type === 'album'){
      id = resource.artists[0].id
    } else {
      id = resource.id
    }
    // this.songSelected.emit(id);
		this.router.navigate(['/artist',id]);
	}
}
