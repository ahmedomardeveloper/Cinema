import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentBreadCrumpHeading: string = "About Us";
  currentBreadcrumbItemActive: string = "About Us";
  currentBgImage: string = `url('./assets/images/about.jpg')`;

  constructor() { }

  ngOnInit(): void {
  }

}
