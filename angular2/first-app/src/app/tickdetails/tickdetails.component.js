"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var service_1 = require('../service');
require('rxjs/Rx');
var TickdetailsComponent = (function () {
    function TickdetailsComponent(ActRoute, movieupdate, router) {
        this.ActRoute = ActRoute;
        this.movieupdate = movieupdate;
        this.router = router;
    }
    TickdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movie = this.ActRoute.params.subscribe(function (params) {
            _this.movie = parseInt(params['id']);
        });
        this.movieupdate.getDetails().subscribe(function (response) { return _this.details = response; });
    };
    TickdetailsComponent.prototype.previous = function () {
        var previousid = this.movie - 1;
        this.router.navigate(['ticket', previousid]);
    };
    TickdetailsComponent.prototype.next = function () {
        var nextid = this.movie + 1;
        this.router.navigate(['ticket', nextid]);
    };
    TickdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-tickdetails',
            templateUrl: './tickdetails.component.html',
            providers: [service_1.MovieUpdate],
            styleUrls: ['./tickdetails.component.css']
        })
    ], TickdetailsComponent);
    return TickdetailsComponent;
}());
exports.TickdetailsComponent = TickdetailsComponent;
//# sourceMappingURL=tickdetails.component.js.map