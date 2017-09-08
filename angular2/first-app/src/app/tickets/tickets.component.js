"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TicketsComponent = (function () {
    function TicketsComponent(router) {
        this.router = router;
        this.tickets = [];
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.tickets = [{
                movie: "Fida",
                Rating: "3.5",
                Review: "Worth watch movie- TG-pilla Movie"
            },
            {
                movie: "Ninnu Kori",
                Rating: "3.5",
                Review: "One more hit for NANI"
            }, {
                movie: "Shamantakamani",
                Rating: "3",
                Review: "Good Direction! Same style of acting from Nara Rohith"
            }];
    };
    TicketsComponent.prototype._moredetails = function (ticket) {
        this.router.navigate(['ticket', ticket.movie]);
    };
    TicketsComponent = __decorate([
        core_1.Component({
            selector: 'app-tickets',
            templateUrl: './tickets.component.html',
            styleUrls: ['./tickets.component.css']
        })
    ], TicketsComponent);
    return TicketsComponent;
}());
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map