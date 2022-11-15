import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.css']
})
export class BreadCrumpComponent implements OnInit {
  @Input() breadCrumpHeading: string = '';
  @Input() breadcrumbItemActive: string = '';
  @Input() bgImage: string = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
