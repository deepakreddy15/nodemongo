"use strict";
var testing_1 = require('@angular/core/testing');
var tickdetails_component_1 = require('./tickdetails.component');
describe('TickdetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tickdetails_component_1.TickdetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tickdetails_component_1.TickdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tickdetails.component.spec.js.map