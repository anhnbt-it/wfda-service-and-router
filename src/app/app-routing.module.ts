import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DictionaryDetailsComponent } from './dictionary-details/dictionary-details.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent
      }
    ]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
