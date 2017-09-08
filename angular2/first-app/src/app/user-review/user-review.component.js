"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var UserReviewComponent = (function () {
    function UserReviewComponent(http, TmoviedataComponent) {
        this.http = http;
        this.TmoviedataComponent = TmoviedataComponent;
        this.UserDetails = {
            UserName: '',
            MovieName: '',
            Comment: '',
            Like: '',
            DisLike: ''
        };
        this.count = 0;
        this.Decount = 0;
        this.url = 'http://localhost:8090/add_movie';
        this.movies = [];
    }
    UserReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TmoviedataComponent.tMovieData().subscribe(function (movie) {
            _this.movies = movie;
            console.log("movies" + movie);
        });
    };
    UserReviewComponent.prototype.getReview = function () {
        console.log(this.UserDetails.UserName + "" + this.UserDetails.MovieName + "" + this.UserDetails.Comment + "" + this.UserDetails.Like + "" + this.UserDetails.DisLike);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post(this.url, JSON.stringify({ UserName: this.UserDetails.UserName,
            MovieName: this.UserDetails.MovieName,
            Comment: this.UserDetails.Comment,
            Like: this.UserDetails.Like,
            DisLike: this.UserDetails.DisLike }), { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
        this.UserDetails.UserName = '';
        this.UserDetails.MovieName = '';
        this.UserDetails.Comment = '';
        //alert("thanks for your feedback...")
    };
    UserReviewComponent.prototype.countIncrement = function () {
        this.UserDetails.Like = "Liked";
        this.count = this.count + 1;
        console.log(this.count);
    };
    UserReviewComponent.prototype.countDecrement = function () {
        this.UserDetails.Like = "DisLiked";
        this.Decount = this.Decount + 1;
        console.log(this.Decount);
    };
    UserReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-review',
            templateUrl: './user-review.component.html',
            styleUrls: ['./user-review.component.css']
        })
    ], UserReviewComponent);
    return UserReviewComponent;
}());
exports.UserReviewComponent = UserReviewComponent;
//# sourceMappingURL=user-review.component.js.map