import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MusicService {
	musicData: musicItem[] = [
		{
			"id": 977976602,
			"readable": true,
			"title": "Creep",
			"title_short": "Creep",
			"title_version": "",
			"duration": 277,
			"rank": 625771,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-2.dzcdn.net/stream/c-2b3d31a6231616b9dd06c6cfbb8618b8-3.mp3",
			"artist": {
				"id": 13286961,
				"name": "Arlo Parks",
				"picture": "https://api.deezer.com/artist/13286961/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/04a80be5d717936864b4ce9f39380cc8/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/04a80be5d717936864b4ce9f39380cc8/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/04a80be5d717936864b4ce9f39380cc8/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/04a80be5d717936864b4ce9f39380cc8/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/13286961/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 152192552,
				"title": "Creep",
				"cover": "https://api.deezer.com/album/152192552/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/d600024e76f817bb78072aa5680bb018/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/d600024e76f817bb78072aa5680bb018/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/d600024e76f817bb78072aa5680bb018/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/d600024e76f817bb78072aa5680bb018/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/152192552/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 118731444,
			"readable": true,
			"title": "Melting",
			"title_short": "Melting",
			"title_version": "",
			"duration": 208,
			"rank": 490276,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-e.dzcdn.net/stream/c-e21f35510ad49904d4c8143c052dea49-3.mp3",
			"artist": {
				"id": 6043160,
				"name": "Kali Uchis",
				"picture": "https://api.deezer.com/artist/6043160/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/6043160/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 12350152,
				"title": "Por Vida",
				"cover": "https://api.deezer.com/album/12350152/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/0269214e13c14fc62bd9bf4f9c9ec1b2/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/0269214e13c14fc62bd9bf4f9c9ec1b2/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/0269214e13c14fc62bd9bf4f9c9ec1b2/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/0269214e13c14fc62bd9bf4f9c9ec1b2/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/12350152/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 716588182,
			"readable": true,
			"title": "Caught Up (feat. Khalid)",
			"title_short": "Caught Up (feat. Khalid)",
			"title_version": "",
			"duration": 247,
			"rank": 633235,
			"explicit_lyrics": true,
			"explicit_content_lyrics": 1,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-7.dzcdn.net/stream/c-7bf0276e4f5225cffa379022d5199334-5.mp3",
			"artist": {
				"id": 5072859,
				"name": "Majid Jordan",
				"picture": "https://api.deezer.com/artist/5072859/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/2ab1660de79309367d893161eb7f2a26/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/2ab1660de79309367d893161eb7f2a26/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/2ab1660de79309367d893161eb7f2a26/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/2ab1660de79309367d893161eb7f2a26/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/5072859/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 104497362,
				"title": "Caught Up (feat. Khalid)",
				"cover": "https://api.deezer.com/album/104497362/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/5453659dc2cc60e29afd26d2489a090d/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/5453659dc2cc60e29afd26d2489a090d/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/5453659dc2cc60e29afd26d2489a090d/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/5453659dc2cc60e29afd26d2489a090d/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/104497362/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 120868670,
			"readable": true,
			"title": "Innerbloom (What So Not Remix)",
			"title_short": "Innerbloom",
			"title_version": "(What So Not Remix)",
			"duration": 277,
			"rank": 456602,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 2,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-e.dzcdn.net/stream/c-e56e201ea3d0e6215d667c16dfa6bcaa-5.mp3",
			"artist": {
				"id": 5571502,
				"name": "RÜFÜS DU SOL",
				"picture": "https://api.deezer.com/artist/5571502/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/5c2ee6aa022f64e9283959622bf1fe49/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/5c2ee6aa022f64e9283959622bf1fe49/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/5c2ee6aa022f64e9283959622bf1fe49/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/5c2ee6aa022f64e9283959622bf1fe49/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/5571502/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 12617436,
				"title": "Innerbloom (What So Not Remix)",
				"cover": "https://api.deezer.com/album/12617436/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/7c7bc81f6ed1a416a52db70bcc5e7703/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/7c7bc81f6ed1a416a52db70bcc5e7703/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/7c7bc81f6ed1a416a52db70bcc5e7703/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/7c7bc81f6ed1a416a52db70bcc5e7703/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/12617436/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 130851538,
			"readable": true,
			"title": "The Other Side Of Paradise",
			"title_short": "The Other Side Of Paradise",
			"title_version": "",
			"duration": 320,
			"rank": 599270,
			"explicit_lyrics": true,
			"explicit_content_lyrics": 1,
			"explicit_content_cover": 0,
			"preview": "https://cdns-preview-e.dzcdn.net/stream/c-eb87c1da00e03c0911e796dbf40f0c01-6.mp3",
			"artist": {
				"id": 2489131,
				"name": "Glass Animals",
				"picture": "https://api.deezer.com/artist/2489131/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/b2e9164dfa2a293330ce341905710034/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/b2e9164dfa2a293330ce341905710034/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/b2e9164dfa2a293330ce341905710034/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/b2e9164dfa2a293330ce341905710034/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/2489131/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 13890106,
				"title": "How To Be A Human Being",
				"cover": "https://api.deezer.com/album/13890106/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/dbf4b069d3f3789a28dc687186856fa2/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/dbf4b069d3f3789a28dc687186856fa2/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/dbf4b069d3f3789a28dc687186856fa2/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/dbf4b069d3f3789a28dc687186856fa2/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/13890106/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 3090631,
			"readable": true,
			"title": "Hey You",
			"title_short": "Hey You",
			"title_version": "",
			"duration": 238,
			"rank": 421141,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 0,
			"preview": "https://cdns-preview-d.dzcdn.net/stream/c-df66b001cd7887b9d2d578481de46acf-8.mp3",
			"artist": {
				"id": 1271,
				"name": "The Exies",
				"picture": "https://api.deezer.com/artist/1271/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/3bb27d7252bad28ce2f240adfa2158dd/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/3bb27d7252bad28ce2f240adfa2158dd/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/3bb27d7252bad28ce2f240adfa2158dd/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/3bb27d7252bad28ce2f240adfa2158dd/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/1271/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 299288,
				"title": "Head For The Door",
				"cover": "https://api.deezer.com/album/299288/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/3bb27d7252bad28ce2f240adfa2158dd/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/3bb27d7252bad28ce2f240adfa2158dd/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/3bb27d7252bad28ce2f240adfa2158dd/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/3bb27d7252bad28ce2f240adfa2158dd/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/299288/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 140160263,
			"readable": true,
			"title": "Adiós a las Armas",
			"title_short": "Adiós a las Armas",
			"title_version": "",
			"duration": 256,
			"rank": 186012,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-7.dzcdn.net/stream/c-79f38e30d1a3b602d22433744ef85468-0.mp3",
			"artist": {
				"id": 7342,
				"name": "Caramelos de Cianuro",
				"picture": "https://api.deezer.com/artist/7342/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/1e99d6642ed7698f0de631eefa7b52f0/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/1e99d6642ed7698f0de631eefa7b52f0/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/1e99d6642ed7698f0de631eefa7b52f0/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/1e99d6642ed7698f0de631eefa7b52f0/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/7342/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 15086291,
				"title": "8",
				"cover": "https://api.deezer.com/album/15086291/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/899c21ea490452280fd7988b807d2274/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/899c21ea490452280fd7988b807d2274/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/899c21ea490452280fd7988b807d2274/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/899c21ea490452280fd7988b807d2274/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/15086291/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 546233562,
			"readable": true,
			"title": "Lucky Strike",
			"title_short": "Lucky Strike",
			"title_version": "",
			"duration": 208,
			"rank": 574000,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-7.dzcdn.net/stream/c-7d2208565975bc94f61f93cbd89f0194-6.mp3",
			"artist": {
				"id": 4746199,
				"name": "Troye Sivan",
				"picture": "https://api.deezer.com/artist/4746199/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/3a8db2b99a08737414f2ab3e226bbd5d/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/3a8db2b99a08737414f2ab3e226bbd5d/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/3a8db2b99a08737414f2ab3e226bbd5d/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/3a8db2b99a08737414f2ab3e226bbd5d/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/4746199/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 71592302,
				"title": "Bloom",
				"cover": "https://api.deezer.com/album/71592302/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/0be7837c3339df62564ac6c296d6ae4b/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/0be7837c3339df62564ac6c296d6ae4b/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/0be7837c3339df62564ac6c296d6ae4b/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/0be7837c3339df62564ac6c296d6ae4b/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/71592302/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 110956534,
			"readable": true,
			"title": "Daddy Issues",
			"title_short": "Daddy Issues",
			"title_version": "",
			"duration": 260,
			"rank": 890620,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 0,
			"preview": "https://cdns-preview-8.dzcdn.net/stream/c-87b3f85b42fd92ef2823a7a3783bb4ba-7.mp3",
			"artist": {
				"id": 296861,
				"name": "The Neighbourhood",
				"picture": "https://api.deezer.com/artist/296861/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/b9baaa2d9485a510cb868a8de6a7adc6/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/b9baaa2d9485a510cb868a8de6a7adc6/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/b9baaa2d9485a510cb868a8de6a7adc6/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/b9baaa2d9485a510cb868a8de6a7adc6/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/296861/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 11539620,
				"title": "Wiped Out!",
				"cover": "https://api.deezer.com/album/11539620/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/20c662d4e0f3a15d5cd8ebecb69c8181/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/20c662d4e0f3a15d5cd8ebecb69c8181/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/20c662d4e0f3a15d5cd8ebecb69c8181/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/20c662d4e0f3a15d5cd8ebecb69c8181/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/11539620/tracks",
				"type": "album"
			},
			"type": "track"
		},
		{
			"id": 2192295,
			"readable": true,
			"title": "Beat The World (Album Version)",
			"title_short": "Beat The World",
			"title_version": "(Album Version)",
			"duration": 180,
			"rank": 315544,
			"explicit_lyrics": false,
			"explicit_content_lyrics": 0,
			"explicit_content_cover": 2,
			"preview": "https://cdns-preview-8.dzcdn.net/stream/c-8629b0b076f432a5d7f6a83e7101ea8c-6.mp3",
			"artist": {
				"id": 134767,
				"name": "Pressure 4-5",
				"picture": "https://api.deezer.com/artist/134767/image",
				"picture_small": "https://cdns-images.dzcdn.net/images/artist/e2fe0d4970b3f630d662b9b3a4341299/56x56-000000-80-0-0.jpg",
				"picture_medium": "https://cdns-images.dzcdn.net/images/artist/e2fe0d4970b3f630d662b9b3a4341299/250x250-000000-80-0-0.jpg",
				"picture_big": "https://cdns-images.dzcdn.net/images/artist/e2fe0d4970b3f630d662b9b3a4341299/500x500-000000-80-0-0.jpg",
				"picture_xl": "https://cdns-images.dzcdn.net/images/artist/e2fe0d4970b3f630d662b9b3a4341299/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/artist/134767/top?limit=50",
				"type": "artist"
			},
			"album": {
				"id": 219189,
				"title": "Burning The Process",
				"cover": "https://api.deezer.com/album/219189/image",
				"cover_small": "https://cdns-images.dzcdn.net/images/cover/e2fe0d4970b3f630d662b9b3a4341299/56x56-000000-80-0-0.jpg",
				"cover_medium": "https://cdns-images.dzcdn.net/images/cover/e2fe0d4970b3f630d662b9b3a4341299/250x250-000000-80-0-0.jpg",
				"cover_big": "https://cdns-images.dzcdn.net/images/cover/e2fe0d4970b3f630d662b9b3a4341299/500x500-000000-80-0-0.jpg",
				"cover_xl": "https://cdns-images.dzcdn.net/images/cover/e2fe0d4970b3f630d662b9b3a4341299/1000x1000-000000-80-0-0.jpg",
				"tracklist": "https://api.deezer.com/album/219189/tracks",
				"type": "album"
			},
			"type": "track"
		}
	];

	constructor() {
		console.log('Servicio listo');
	}

	getMusic(): musicItem[] {
		return this.musicData;
	}
}


export interface musicItem {
	id                     : number;
	readable               : boolean;
	title                  : string;
	title_short            : string;
	title_version          : string;
	duration               : number;
	rank                   : number;
	explicit_lyrics        : boolean;
	explicit_content_lyrics: number;
	explicit_content_cover : number;
	preview                : string;
	artist?                : artistItem;
	album?                 : albumItem;
	type                   : string;
}

export interface artistItem {
	id            : number;
	name          : string;
	picture       : string;
	picture_small : string;
	picture_medium: string;
	picture_big   : string;
	picture_xl    : string;
	tracklist     : string;
	type          : string;
}

export interface albumItem {
	id          : number;
	title       : string;
	cover       : string;
	cover_small : string;
	cover_medium: string;
	cover_big   : string;
	cover_xl    : string;
	tracklist   : string;
	type        : string;
}
