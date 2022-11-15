import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  currentBreadCrumpHeading: string = "Movies";
  currentBreadcrumbItemActive: string = "details";
  currentBgImage: string = `url('./assets/images/movies.jpg')`;
  keyword: string = '';
  pageNumbers: number[] = [];
  currentPage: number = 1;
  mediatype: string = "movie"
  trendingAll: any[] = [];




  constructor(public _MoviesService: MoviesService) {

    for (let i = 1; i < 9; i++) {
      this.pageNumbers.push(i);
    }
    this._MoviesService.getTrending("movie", this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;

    })



  }



  changePage(ind: number) {
    this.currentPage = ind;
    // window.alert(ind);
    this._MoviesService.getTrending("movie", this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;
    })

  }

  prev() {
    this.currentPage--;

    if (this.currentPage == 0) {
      this.changePage(this.pageNumbers[this.pageNumbers.length - 1]);
    }
    this.changePage(this.currentPage);
    console.log(this.currentPage);




  }
  next() {
    this.currentPage++;
    if (this.currentPage == this.pageNumbers.length + 1) {
      this.changePage(this.pageNumbers[0]);
    }
    this.changePage(this.currentPage);
    console.log(this.currentPage);

  }
  ngOnInit(): void {
  }

}
