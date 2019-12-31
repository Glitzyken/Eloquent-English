import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CtaButtonComponent } from './cta-button/cta-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    CtaButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
