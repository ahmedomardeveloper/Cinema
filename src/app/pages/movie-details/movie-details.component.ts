import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  currentBreadCrumpHeading: string = "Details";
  currentBreadcrumbItemActive: string = "Details";
  currentBgImage: string = `url('./assets/images/details.jpg')`;
  id: any;
  pageNumber: any;
  params: any;
  movieDetailsObj: any = {}
  youtube_embed_link: string = '';
  mediatype: any;
  movievidId: any;


  constructor(public _ActivatedRoute: ActivatedRoute, public _MoviesService: MoviesService) {
    this.params = this._ActivatedRoute.snapshot.paramMap.keys;
    this.mediatype = this._ActivatedRoute.snapshot.paramMap.get(this.params[0]);
    this.id = this._ActivatedRoute.snapshot.paramMap.get(this.params[2]);
    this.pageNumber = this._ActivatedRoute.snapshot.paramMap.get(this.params[1]);

    this.movieDetailsObj = this._MoviesService.getTrending(this.mediatype, this.pageNumber).subscribe((data) => {
      this.movieDetailsObj = data.results[data.results.findIndex((obj: { id: any; }) => obj.id == this.id)]
    })

    _MoviesService.getVideo(this.mediatype, this.id).subscribe((movieVidData) => {
      this.youtube_embed_link = (`https://www.youtube.com/embed/${movieVidData.results[0].key}`);


      this.movievidId = movieVidData.results[0].key;

    })




  }

  ngOnInit(): void {

  }

}
