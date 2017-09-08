"use strict";
var testing_1 = require('@angular/core/testing');
var tcinemas_component_1 = require('./tcinemas.component');
describe('TcinemasComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tcinemas_component_1.TcinemasComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tcinemas_component_1.TcinemasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tcinemas.component.spec.js.map