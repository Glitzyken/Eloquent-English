import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('popup', { static: true }) popup: ElementRef;

  constructor() {}

  ngOnInit() {}

  hidePopup($event) {
    if ($event.target !== $event.currentTarget) return; // prevents function from firing when element's children are clicked.
    this.popup.nativeElement.style.display = 'none';
  }
}
