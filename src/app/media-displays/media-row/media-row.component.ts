import { Component, OnInit, Input } from '@angular/core';
import { MediaRow } from './media-row';

@Component({
  selector: 'omni-media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.scss']
})
export class MediaRowComponent implements OnInit {
  @Input() mediaRow: MediaRow;

  constructor() { }

  ngOnInit() {
  }

}
