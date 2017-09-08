"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var MoviereviewComponent = (function () {
    function MoviereviewComponent(router, http, tmoviedata) {
        this.router = router;
        this.http = http;
        this.tmoviedata = tmoviedata;
        this.url = "http://localhost:8080/UpdateDocument";
        this.Review_Data = {
            Rate: '',
            Like: 0,
            DisLike: 0,
            Comment: ''
        };
        this.count = 0;
        this.dcount = 0;
        this.User_L_D_C = [];
    }
    MoviereviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Mname = this.router.snapshot.params["MName"];
        console.log(this.Mname);
        this.tmoviedata.tMovieData().subscribe(function (res) {
            _this.User_L_D_C = res;
        });
    };
    MoviereviewComponent.prototype.countIncrement = function () {
        this.Review_Data.Like = this.Review_Data.Like + 1;
        console.log(this.Review_Data.Like);
    };
    MoviereviewComponent.prototype.countDecrement = function () {
        this.Review_Data.DisLike = this.Review_Data.DisLike + 1;
        console.log(this.Review_Data.DisLike);
    };
    MoviereviewComponent.prototype.submitMoviereview = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        console.log(this.Review_Data.Rate + " " + this.Review_Data.Like + " " + this.Review_Data.Comment);
        this.http.post(this.url, JSON.stringify({
            Mname: this.Mname,
            Rate: this.Review_Data.Rate,
            Comment: this.Review_Data.Comment,
            Like: this.Review_Data.Like,
            DisLike: this.Review_Data.DisLike
        }), { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            return console.log(JSON.stringify(error.json()));
        });
    };
    MoviereviewComponent = __decorate([
        core_1.Component({
            selector: 'app-moviereview',
            templateUrl: './moviereview.component.html',
            styleUrls: ['./moviereview.component.css']
        })
    ], MoviereviewComponent);
    return MoviereviewComponent;
}());
exports.MoviereviewComponent = MoviereviewComponent;
//# sourceMappingURL=moviereview.component.js.map