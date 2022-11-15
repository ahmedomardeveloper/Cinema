import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PeopleComponent } from './pages/people/people.component';
import { TvComponent } from './pages/tv/tv.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'movieDetails/:mediatype/:pageNumber/:id', component: MovieDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: TvComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
