"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var RestaurentComponent = (function () {
    function RestaurentComponent(http) {
        this.http = http;
        this.Restaurent = {
            Email: '',
            FoodType: '',
            Feedback: ''
        };
        this.url = 'http://localhost:8080/Restaurents-Review';
    }
    RestaurentComponent.prototype.ngOnInit = function () {
    };
    RestaurentComponent.prototype.submitreview = function () {
        console.log(this.Restaurent);
        console.log(this.Restaurent.Email + "" + this.Restaurent.FoodType + "" + this.Restaurent.Feedback + "");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post(this.url, JSON.stringify({ Email: this.Restaurent.Email,
            FoodType: this.Restaurent.FoodType,
            Feedback: this.Restaurent.Feedback,
        }), { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    RestaurentComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurent',
            templateUrl: './restaurent.component.html',
            styleUrls: ['./restaurent.component.css']
        })
    ], RestaurentComponent);
    return RestaurentComponent;
}());
exports.RestaurentComponent = RestaurentComponent;
//# sourceMappingURL=restaurent.component.js.map