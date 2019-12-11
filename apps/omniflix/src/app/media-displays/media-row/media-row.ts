import { MediaRow, MediaRowItem } from '@omniflix/api-interfaces'

export interface ClientMediaRow extends MediaRow {
  items: ClientMediaRowItem[];
}

export interface ClientMediaRowItem extends MediaRowItem {
  menuOpen;
}
