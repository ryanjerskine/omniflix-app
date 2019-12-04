export interface MediaRow {
  title: string;
  items: MediaRowItem[];
}

export interface MediaRowItem {
  id: string;
  title: string;
  posterUri: string;
  fanartUri: string;
  watched: boolean;
  progressPercent: number;
}
