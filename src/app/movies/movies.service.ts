import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MediaRow } from '../media-displays/media-row/media-row';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDashboardItems(): Observable<MediaRow[]> {
    return this.http.get<MediaRow[]>(`${environment.apiBase}movies/dashboard-items`);
  }
}
