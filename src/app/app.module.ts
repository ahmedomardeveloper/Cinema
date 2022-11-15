import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrequentlyComponent } from './components/frequently/frequently.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PeopleComponent } from './pages/people/people.component';
import { TvComponent } from './pages/tv/tv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';
import { SerachPipe } from './pipes/search.pipe';
import { SeemorePipe } from './pipes/seemore.pipe';
import { GetyearPipe } from './pipes/getyear.pipe';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BreadCrumpComponent,
    FooterComponent,
    FrequentlyComponent,
    NotFoundComponent,
    TrendingMoviesComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    MovieDetailsComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    SafePipe,
    SerachPipe,
    SeemorePipe,
    GetyearPipe,
    HeroComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
