"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var TcinemasComponent = (function () {
    function TcinemasComponent(http) {
        this.http = http;
        this.CInema = {
            Name: '',
            Director: '',
            Starring: '',
            Generes: '',
            Country: '',
            Language: '',
            Trailer: ''
        };
        this.url = 'http://localhost:8080/tcinema';
    }
    TcinemasComponent.prototype.ngOnInit = function () {
    };
    TcinemasComponent.prototype.crewdetails = function () {
        console.log(this.CInema.Name + "" + this.CInema.Director + "" + this.CInema.Starring + "" + this.CInema.Generes + "" + this.CInema.Country
            + "" + this.CInema.Language + "" + this.CInema.Trailer);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post(this.url, JSON.stringify({ Name: this.CInema.Name,
            Director: this.CInema.Director,
            Starring: this.CInema.Starring,
            Generes: this.CInema.Generes,
            Country: this.CInema.Country,
            Language: this.CInema.Language,
            Trailer: this.CInema.Trailer
        }), { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
        this.CInema.Trailer = '';
        this.CInema.Director = '';
        this.CInema.Name = '';
        this.CInema.Starring = '';
        this.CInema.Generes = '';
        this.CInema.Language = '';
        this.CInema.Country = '';
    };
    TcinemasComponent = __decorate([
        core_1.Component({
            selector: 'app-tcinemas',
            templateUrl: './tcinemas.component.html',
            styleUrls: ['./tcinemas.component.css']
        })
    ], TcinemasComponent);
    return TcinemasComponent;
}());
exports.TcinemasComponent = TcinemasComponent;
//# sourceMappingURL=tcinemas.component.js.map