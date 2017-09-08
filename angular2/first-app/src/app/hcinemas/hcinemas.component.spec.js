"use strict";
var testing_1 = require('@angular/core/testing');
var hcinemas_component_1 = require('./hcinemas.component');
describe('HcinemasComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hcinemas_component_1.HcinemasComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hcinemas_component_1.HcinemasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hcinemas.component.spec.js.map