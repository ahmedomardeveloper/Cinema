import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  public allTrendingMovies = [];
  moviePage: any;
  mediatype: string = "movie"

  constructor(public _MoviesService: MoviesService) {
    this._MoviesService.getTrending("movie", 1).subscribe((moviesTrendingData) => {
      this.allTrendingMovies = moviesTrendingData.results;
      this.moviePage = moviesTrendingData.page;
    })
  }

  ngOnInit(): void {
  }

}
