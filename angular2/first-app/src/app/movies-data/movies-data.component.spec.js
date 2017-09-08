"use strict";
var testing_1 = require('@angular/core/testing');
var movies_data_component_1 = require('./movies-data.component');
describe('MoviesDataComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [movies_data_component_1.MoviesDataComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(movies_data_component_1.MoviesDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movies-data.component.spec.js.map