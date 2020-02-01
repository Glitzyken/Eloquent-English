import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ipaUrlKindle = 'https://www.amazon.com/dp/B07RZQ5Q2D';
  constructor() {}

  ngOnInit() {}
}
