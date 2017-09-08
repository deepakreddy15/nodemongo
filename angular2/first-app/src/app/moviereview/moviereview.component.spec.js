"use strict";
var testing_1 = require('@angular/core/testing');
var moviereview_component_1 = require('./moviereview.component');
describe('MoviereviewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [moviereview_component_1.MoviereviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(moviereview_component_1.MoviereviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=moviereview.component.spec.js.map