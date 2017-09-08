"use strict";
var testing_1 = require('@angular/core/testing');
var cinema_component_1 = require('./cinema.component');
describe('CinemaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [cinema_component_1.CinemaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(cinema_component_1.CinemaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cinema.component.spec.js.map