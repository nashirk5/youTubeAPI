import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { YoutubeApiService } from '../_services/youtubeApi.service';

@Component({
	selector: 'app-player-list',
	templateUrl: './player-list.component.html',
	styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

	private videoData = []; images; playerData; private divStatus: boolean = false;

	constructor(private _youtubeservice: YoutubeApiService, private _cdr: ChangeDetectorRef) { }

	ngOnInit() {
		this._youtubeservice.getPlayerListData
			.subscribe(
				data => {
					this.playerData = data;
					this.processVideoData(data);
					this._cdr.detectChanges();
				}
			);
	}

	// used to do store plyer list.
	processVideoData(data: any) {
		this.divStatus = true;
		this.videoData = [];
		for (let i = 0; i < data.length; i++) {
			this.videoData.push({ 'id': i, 'imgUrl': data[i].snippet.thumbnails.medium.url })
		}
	}

	// when we click on the player list sending that data to the service
	onClick(data: any) {
		this._youtubeservice.setPlayerData(this.playerData[data]);
		this._cdr.detectChanges();
	}

}
