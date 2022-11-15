import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(public _HttpClient: HttpClient) {


  }

  getQuotes(): Observable<any> {
    return this._HttpClient.get('https://type.fit/api/quotes');
  }
}
