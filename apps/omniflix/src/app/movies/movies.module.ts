import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaDisplaysModule } from '../media-displays/media-displays.module';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MediaDisplaysModule
  ]
})
export class MoviesModule { }
