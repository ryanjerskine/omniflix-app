import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ClientMediaRow, ClientMediaRowItem } from './media-row';
import Swiper from 'swiper';

@Component({
  selector: 'omniflix-media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.scss']
})
export class MediaRowComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() mediaRow: ClientMediaRow;
  @ViewChild('swiper', { static: false }) swiperElem: ElementRef;
  private swiperRef: Swiper;
  atStart: boolean;
  atEnd: boolean;

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
    const index = Math.max(0, this.swiperRef.activeIndex - this.getSlidesPerView());
    this.swiperRef.slideTo(index);
  }

  next() {
    const index = Math.min(this.mediaRow.items.length, this.swiperRef.activeIndex + this.getSlidesPerView());
    this.swiperRef.slideTo(index);
  }

  getRouterLink(item: ClientMediaRowItem) {
    return item.type === 'movie' ? `/movies/${item.id}` : `/tv-shows/${item.id}`;
  }

  getMediaLink(item: ClientMediaRowItem) {
    if (item.fanart) {
      return `${window.location.origin}/images/fanarts/${item.id}.jpg`;
    }
    return `${window.location.origin}/images/posters/${item.id}.jpg`;
  }

  toggleWatched(item: ClientMediaRowItem) {
    item.watched = !item.watched;
    this.swiperRef.update();
  }

  toggleMenu(item: ClientMediaRowItem, status: boolean) {
    item.menuOpen = status;
  }

  ngOnDestroy() {
    this.swiperRef.destroy(true, true);
  }

  private getSlidesPerView() {
    const oneAtATime = true;
    return oneAtATime ? 1 : 2; // TODO: Page past all of the visible slides if not oneAtATime
  }
  private initSwiper() {
    if (!this.swiperElem || !this.swiperElem.nativeElement) {
      return; // TODO: Log error
    }
    const spaceBetween = 16;
    this.swiperRef = new Swiper(this.swiperElem.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween,
      init: false
    });
    this.swiperRef.on('init', () => this.checkStartEnd());
    this.swiperRef.on('transitionEnd', () => this.checkStartEnd());
    setTimeout(() => (this.swiperRef as any).init());
  }
  private checkStartEnd() {
    this.atStart = this.swiperRef.isBeginning;
    this.atEnd = this.swiperRef.isEnd;
  }
}
