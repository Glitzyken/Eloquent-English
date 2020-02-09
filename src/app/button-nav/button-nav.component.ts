import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent {
  @ViewChild('nav', { static: true }) nav;

  onClick() {
    this.nav.nativeElement.checked = false;
  }
}
