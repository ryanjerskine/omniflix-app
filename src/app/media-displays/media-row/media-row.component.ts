import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MediaRow } from './media-row';
import Swiper from 'swiper';

@Component({
  selector: 'omni-media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.scss']
})
export class MediaRowComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() mediaRow: MediaRow;
  @ViewChild('swiper', { static: false }) swiperElem: ElementRef;
  private swiperRef: Swiper;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  playMedia(id: string) {
    if (false) {
      // TODO: Prompt user for resume/start from beginning
    } else {
      // TODO: Redirect to player
    }
  }

  prev() {
    this.swiperRef.slidePrev();
  }

  next() {
    this.swiperRef.slideNext();
  }

  ngOnDestroy() {
    this.swiperRef.destroy(true, true);
  }

  private initSwiper() {
    const spaceBetween = 16;
    this.swiperRef = new Swiper(this.swiperElem.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween
    });
  }
}
