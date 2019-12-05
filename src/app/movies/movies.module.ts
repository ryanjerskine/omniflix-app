import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaDisplaysModule } from '../media-displays/media-displays.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MediaDisplaysModule
  ]
})
export class MoviesModule { }
