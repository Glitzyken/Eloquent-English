import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: true }) popup: ElementRef;
  ipaUrlKindle = 'https://www.amazon.com/dp/B07RZQ5Q2D';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.popup.nativeElement.style.display = 'block';
    console.log('AfterviewInit happened');
  }
}
