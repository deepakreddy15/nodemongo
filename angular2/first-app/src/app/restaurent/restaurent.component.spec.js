"use strict";
var testing_1 = require('@angular/core/testing');
var restaurent_component_1 = require('./restaurent.component');
describe('RestaurentComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [restaurent_component_1.RestaurentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(restaurent_component_1.RestaurentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=restaurent.component.spec.js.map