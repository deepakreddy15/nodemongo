"use strict";
var testing_1 = require('@angular/core/testing');
var tmoviedata_component_1 = require('./tmoviedata.component');
describe('TmoviedataComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tmoviedata_component_1.TmoviedataComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(tmoviedata_component_1.TmoviedataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tmoviedata.component.spec.js.map