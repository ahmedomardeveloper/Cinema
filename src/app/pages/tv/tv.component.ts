import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  currentBreadCrumpHeading: string = "T.V";
  currentBreadcrumbItemActive: string = "details";
  currentBgImage: string = `url('./assets/images/tvBg.jpg')`;
  keyword: string = '';
  pageNumbers: number[] = [];
  currentPage: number = 1;
  trendingAll: any[] = [];
  mediatype: string = "tv";

  constructor(public _MoviesService: MoviesService) {

    for (let i = 1; i < 9; i++) {
      this.pageNumbers.push(i);
    }
    this._MoviesService.getTrending(this.mediatype, this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;
    })
  }
  changePage(ind: number) {
    this.currentPage = ind;
    this._MoviesService.getTrending(this.mediatype, this.currentPage).subscribe((data) => {
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
