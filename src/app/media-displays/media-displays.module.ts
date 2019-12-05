import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRowComponent } from './media-row/media-row.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MediaRowComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MediaRowComponent
  ]
})
export class MediaDisplaysModule { }
