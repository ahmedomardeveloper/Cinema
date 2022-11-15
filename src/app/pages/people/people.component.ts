import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any[] = [];
  finalPaths: any[] = [];

  currentBreadCrumpHeading: string = "People";
  currentBreadcrumbItemActive: string = "People";
  currentBgImage: string = `url('./assets/images/actor.jpg')`;

  constructor(public _MoviesService: MoviesService) {
    _MoviesService.getTrending("person", 1).subscribe((data) => {
      this.people = data.results;
      console.log(this.people);



    })
  }

  ngOnInit(): void {
  }

}
