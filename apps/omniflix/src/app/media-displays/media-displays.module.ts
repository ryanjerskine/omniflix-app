import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRowComponent } from './media-row/media-row.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MediaRowComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MediaRowComponent
  ]
})
export class MediaDisplaysModule { }
