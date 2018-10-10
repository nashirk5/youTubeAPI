import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class YoutubeApiService {

	public gapi;
	public getVideoEmitter = new Subject<any>();
	public getPlayerListEmitter = new Subject<any>();
	public postPlayerEmitter = new Subject<any>();

	// get the player list data
	getPlayerListData = this.getPlayerListEmitter.asObservable();

	// get the player data
	postPlayerData = this.postPlayerEmitter.asObservable();

	constructor() { }

	// Set the player list data
	setPlayerListData(data: any) {
		this.getPlayerListEmitter.next(data)
	}

	// Set the player data
	setPlayerData(data: any) {
		this.postPlayerEmitter.next(data)
	}

	// Search video
	getVideosQuery(key: string) {

		let result = new Observable(observer => {
			this.gapi = window['youtubeService']
			var request = this.gapi.client.youtube.search.list({
				part: "snippet",
				type: "video",
				q: encodeURIComponent(key).replace(/%20g/, "+"),
				maxResults: 5,
				order: "viewCount",
				publishedAfter: "2015-01-01T00:00:00Z"
			});

			request.execute(res => {
				var result = res.items;

				observer.next(result);
			});
		});

		return result;
	}

}