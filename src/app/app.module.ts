import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { PrevButtonComponent } from './prev-button/prev-button.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './chapter5/chapter5.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'chapter1', component: Chapter1Component },
  { path: 'chapter2', component: Chapter2Component },
  { path: 'chapter3', component: Chapter3Component },
  { path: 'chapter4', component: Chapter4Component },
  { path: 'chapter5', component: Chapter5Component },
  { path: 'chapter6', component: Chapter6Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    Chapter1Component,
    NextButtonComponent,
    PrevButtonComponent,
    Chapter2Component,
    SideNavComponent,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    FooterComponent,
    ButtonNavComponent,
    ChaptersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
