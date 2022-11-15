import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = '1c7a1ed6f6d675e83d5f15d3c4285702'

  constructor(public _HttpClient: HttpClient) { }

  getTrending(mediaType: any, pageNumber: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${this.apiKey}&page=${pageNumber}`);

  }
  // getTrendingPeopleAll(pageNumber: number): Observable<any> {
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${this.apiKey}&page=${pageNumber}`);

  // }
  getVideo(mediaType: any, movie_id: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${movie_id}/videos?api_key=${this.apiKey}&language=en-US`);

  }


}
