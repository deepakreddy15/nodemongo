"use strict";
var testing_1 = require('@angular/core/testing');
var user_review_component_1 = require('./user-review.component');
describe('UserReviewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_review_component_1.UserReviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(user_review_component_1.UserReviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-review.component.spec.js.map