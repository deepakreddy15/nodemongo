"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var LocationsComponent = (function () {
    function LocationsComponent(http) {
        this.http = http;
        this.Location = {
            Email: '',
            Location: '',
            Feedback: ''
        };
        this.url = 'http://localhost:8080/Location-review';
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    LocationsComponent.prototype.submitlocationreview = function () {
        console.log("got it");
        console.log(this.Location.Email + "" + this.Location.Location + "" + this.Location.Feedback + "");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post(this.url, JSON.stringify({ Email: this.Location.Email,
            Location: this.Location.Location,
            Feedback: this.Location.Feedback,
        }), { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'app-locations',
            templateUrl: './locations.component.html',
            styleUrls: ['./locations.component.css']
        })
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=locations.component.js.map