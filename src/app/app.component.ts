import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from './_services/youtubeApi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	searchForm: FormGroup;

	constructor(private _fb: FormBuilder, private _youtubeservice: YoutubeApiService) { }

	ngOnInit() {
		this.searchForm = this._fb.group({
			'search': ['', Validators.required]
		});
	}

	// Search videos fun
	searchVideos() {
		if (this.searchForm.valid) {
			let key = this.searchForm.controls['search'].value;
			this._youtubeservice.getVideoEmitter.next(key);
		}
	}

}