import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, Headers} from '@angular/http';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TickdetailsComponent } from './tickdetails/tickdetails.component';
import { MoviesDataComponent } from './movies-data/movies-data.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { LocationsComponent } from './locations/locations.component';
import { TcinemasComponent } from './tcinemas/tcinemas.component';
import { HcinemasComponent } from './hcinemas/hcinemas.component';
import { TmoviedataComponent } from './tmoviedata/tmoviedata.component';
import { MoviereviewComponent } from './moviereview/moviereview.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    TicketsComponent,
    TickdetailsComponent,
    UserReviewComponent,
    RestaurentComponent,
    LocationsComponent,
    TcinemasComponent,
    HcinemasComponent,
    MoviereviewComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'cinema', component: CinemaComponent},
      {path: 'ticket', component: TicketsComponent},
      {path: 'ticket/:id', component: TickdetailsComponent},
      {path:'user-review', component: UserReviewComponent},
      {path:'user-review/:MName', component: MoviereviewComponent},
      {path:'Restaurents-Review', component: RestaurentComponent },
      {path: 'Location-review', component: LocationsComponent},
      {path: 'tcinema', component:TcinemasComponent }
    ])
  ],
  providers: [MoviesDataComponent, TmoviedataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
