import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeApiService } from './_services/youtubeApi.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { HeaderComponent } from './_shared/header/header.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AutoFocusDirective } from './_shared/auto-focus.directive';
import { LoadingSpinnerComponent } from './_shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    PlayerListComponent,
    AutoFocusDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
