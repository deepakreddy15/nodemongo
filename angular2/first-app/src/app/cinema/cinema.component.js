"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CinemaComponent = (function () {
    function CinemaComponent(movieinfo, router) {
        this.movieinfo = movieinfo;
        this.router = router;
        this.name1 = false;
        this.name2 = '';
        this.age = 24;
        this.button = false;
        this.movies = [];
        this.images = [{
                image_url: 'Image loading...',
                name: 'Fida'
            }, {
                image_url: 'Image loading...',
                name: 'Arjun Reddy'
            }, {
                image_url: 'Image loading...',
                name: 'Ninnu Kori'
            }, {
                image_url: 'Image loading...',
                name: 'Sye Ra Narsimha Reddy'
            }];
        this.name2 = "Deepakreddy";
    }
    CinemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieinfo.getMoviInfo().subscribe(function (movies) {
            return _this.movies = movies;
            //console.log(movies[1].title);
        });
    };
    CinemaComponent.prototype.reviewPage = function () {
        this.router.navigateByUrl('/user-review');
    };
    CinemaComponent = __decorate([
        core_1.Component({
            selector: 'app-cinema',
            templateUrl: './cinema.component.html',
            styleUrls: ['./cinema.component.css']
        })
    ], CinemaComponent);
    return CinemaComponent;
}());
exports.CinemaComponent = CinemaComponent;
//# sourceMappingURL=cinema.component.js.map