import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, TopNavComponent, SideNavComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
