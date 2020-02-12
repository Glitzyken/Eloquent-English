import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss']
})
export class GoToTopComponent {
  @ViewChild('top', { static: true }) top;

  @HostListener('window:scroll', ['$event'])
  switchDisplayButton() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > 20) {
      this.top.nativeElement.style.display = 'block';
    } else {
      this.top.nativeElement.style.display = 'none';
    }
  }

  scrollToTop() {
    const doc = document.documentElement.scrollTop || document.body.scrollTop;
    if (doc > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
