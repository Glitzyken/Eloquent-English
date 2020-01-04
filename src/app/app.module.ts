import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { ContentsComponent } from "./contents/contents.component";
import { Chapter1Component } from "./chapter1/chapter1.component";
import { NextButtonComponent } from './next-button/next-button.component';
import { PrevButtonComponent } from './prev-button/prev-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    ContentsComponent,
    Chapter1Component,
    NextButtonComponent,
    PrevButtonComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
