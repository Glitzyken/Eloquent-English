import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit {
  // @ViewChild('intro') intro: ElementRef;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    // console.log(this.element.nativeElement);
  }
}
