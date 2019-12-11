import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ClientMediaRow, ClientMediaRowItem } from '../media-displays/media-row/media-row';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie/movie';
import { MediaRow } from '@omniflix/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDashboardItems(): Observable<ClientMediaRow[]> {
    return this.http.get<MediaRow[]>(`/api/movies/dashboard-items`).pipe(
      map(mediaRow => mediaRow.map(mediaRowItems =>
        ({ title: mediaRowItems.title, items: mediaRowItems.items.map(i =>
          ({ ...i, menuOpen: false } as ClientMediaRowItem)) } as ClientMediaRow))));
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }
}
