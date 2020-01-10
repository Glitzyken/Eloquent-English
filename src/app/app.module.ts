import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { Chapter1Component } from "./chapter1/chapter1.component";
import { NextButtonComponent } from "./next-button/next-button.component";
import { PrevButtonComponent } from "./prev-button/prev-button.component";
import { Chapter2Component } from "./chapter2/chapter2.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './chapter5/chapter5.component';

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
    Chapter5Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
