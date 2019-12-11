import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'omniflix-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mediaRows$ = this.moviesService.getDashboardItems();

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

}
