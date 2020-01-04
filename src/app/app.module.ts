import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { ContentComponent } from './content/content.component';
import { Chapter1Component } from './chapter1/chapter1.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, TopNavComponent, ContentComponent, Chapter1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
