import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuotes: any[] = [];
  lengthQuotes: number = 0;
  randQuote: any = {}

  randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
  }
  constructor(public _QuoteService: QuoteService) {
    _QuoteService.getQuotes().subscribe((quotesData) => {
      this.allQuotes = quotesData;
      this.lengthQuotes = this.allQuotes.length;
      this.randQuote = this.allQuotes[this.randomNum(0, this.lengthQuotes - 1)];

      setInterval(() => {
        this.randQuote = this.allQuotes[this.randomNum(0, this.lengthQuotes - 1)];

      }, 20000)


    });
  }

  ngOnInit(): void {
  }

}
