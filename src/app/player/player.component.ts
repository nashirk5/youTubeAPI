import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeApiService } from '../_services/youtubeApi.service';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

	baseVidoeUrl: SafeResourceUrl; videoId; title; channelTitle; publishedAt; description;
	playerData; showSpinner: boolean = false;

	constructor(private _sanitizer: DomSanitizer, private _youtubeservice: YoutubeApiService, private _cdr: ChangeDetectorRef) { }

	ngOnInit() {
		// get the search key
		this._youtubeservice.getVideoEmitter.subscribe(
			key => {
				this.showSpinner = true;
				this.getVideo(key);
			}
		)

		// It will execute when we click on the video from the video player list
		this._youtubeservice.postPlayerData.subscribe(
			data => {
				this.showSpinner = true;
				this.processData(data);
			}
		)
	}

	// get the videos from the search option
	getVideo(key) {
		this._youtubeservice.getVideosQuery(key)
			.subscribe(
				res => {
					this._youtubeservice.setPlayerListData(res);
					this.playerData = res[0];
					this.processData(this.playerData);
				}
			)
	}

	// use to to store the data -- Reuseable fun
	processData(data: any) {
		this.videoId = data.id['videoId'];
		this.baseVidoeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId);
		this.title = data.snippet['title'];
		this.channelTitle = data.snippet['channelTitle'];
		this.publishedAt = data.snippet['publishedAt'];
		this.description = data.snippet['description'];
		this.showSpinner = false;
		this._cdr.detectChanges();
	}

}