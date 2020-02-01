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
import { NotFoundComponent } from './not-found/not-found.component';
import { ContentComponent } from './content/content.component';
import { LearnIpaComponent } from './learn-ipa/learn-ipa.component';
import { CreditsComponent } from './credits/credits.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'content', component: ContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'learn-ipa', component: LearnIpaComponent },
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
    NotFoundComponent,
    ContentComponent,
    LearnIpaComponent,
    CreditsComponent,
    ContactComponent
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
