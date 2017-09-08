"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var cinema_component_1 = require('./cinema/cinema.component');
var tickets_component_1 = require('./tickets/tickets.component');
var tickdetails_component_1 = require('./tickdetails/tickdetails.component');
var movies_data_component_1 = require('./movies-data/movies-data.component');
var user_review_component_1 = require('./user-review/user-review.component');
var restaurent_component_1 = require('./restaurent/restaurent.component');
var locations_component_1 = require('./locations/locations.component');
var tcinemas_component_1 = require('./tcinemas/tcinemas.component');
var hcinemas_component_1 = require('./hcinemas/hcinemas.component');
var tmoviedata_component_1 = require('./tmoviedata/tmoviedata.component');
var moviereview_component_1 = require('./moviereview/moviereview.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cinema_component_1.CinemaComponent,
                tickets_component_1.TicketsComponent,
                tickdetails_component_1.TickdetailsComponent,
                user_review_component_1.UserReviewComponent,
                restaurent_component_1.RestaurentComponent,
                locations_component_1.LocationsComponent,
                tcinemas_component_1.TcinemasComponent,
                hcinemas_component_1.HcinemasComponent,
                moviereview_component_1.MoviereviewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'cinema', component: cinema_component_1.CinemaComponent },
                    { path: 'ticket', component: tickets_component_1.TicketsComponent },
                    { path: 'ticket/:id', component: tickdetails_component_1.TickdetailsComponent },
                    { path: 'user-review', component: user_review_component_1.UserReviewComponent },
                    { path: 'user-review/:MName', component: moviereview_component_1.MoviereviewComponent },
                    { path: 'Restaurents-Review', component: restaurent_component_1.RestaurentComponent },
                    { path: 'Location-review', component: locations_component_1.LocationsComponent },
                    { path: 'tcinema', component: tcinemas_component_1.TcinemasComponent }
                ])
            ],
            providers: [movies_data_component_1.MoviesDataComponent, tmoviedata_component_1.TmoviedataComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map