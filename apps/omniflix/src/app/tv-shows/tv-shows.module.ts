import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TvShowComponent } from './tv-show/tv-show.component';


@NgModule({
  declarations: [DashboardComponent, TvShowComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule
  ]
})
export class TvShowsModule { }
