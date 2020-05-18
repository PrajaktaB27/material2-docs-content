/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/sidenav/sidenav-position/sidenav-position-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
function SidenavPositionExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3);
    i0.ɵɵtext(2, "Start content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav", 4);
    i0.ɵɵtext(4, "End content");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Implicit main content\n");
    i0.ɵɵelementEnd();
} }
function SidenavPositionExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Implicit main content with two sidenavs
 */
let SidenavPositionExample = /** @class */ (() => {
    /**
     * \@title Implicit main content with two sidenavs
     */
    class SidenavPositionExample {
        constructor() {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
             * @param {?} h
             * @return {?}
             */
            h => h.test(window.location.host)));
        }
    }
    SidenavPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-position-example',
                    templateUrl: 'sidenav-position-example.html',
                    styleUrls: ['sidenav-position-example.css'],
                },] },
    ];
    /** @nocollapse */ SidenavPositionExample.ɵfac = function SidenavPositionExample_Factory(t) { return new (t || SidenavPositionExample)(); };
    /** @nocollapse */ SidenavPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavPositionExample, selectors: [["sidenav-position-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["opened", "", "mode", "side"], ["opened", "", "mode", "side", "position", "end"]], template: function SidenavPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavPositionExample_mat_sidenav_container_0_Template, 6, 0, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavPositionExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavPositionExample;
})();
export { SidenavPositionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavPositionExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-position-example',
                templateUrl: 'sidenav-position-example.html',
                styleUrls: ['sidenav-position-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SidenavPositionExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LXBvc2l0aW9uL3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQXhDLGdEQUNFO0lBQUEsc0NBQWdDO0lBQUEsNkJBQWE7SUFBQSxpQkFBYztJQUMzRCxzQ0FBK0M7SUFBQSwyQkFBVztJQUFBLGlCQUFjO0lBQ3hFLHdDQUNGO0lBQUEsaUJBQXdCOzs7SUFFeEIsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07Ozs7O0FESHJFOzs7O0lBQUEsTUFLYSxzQkFBc0I7UUFMbkM7WUFNRSxjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1NBQ25HOzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7bUhBQ1ksc0JBQXNCO2tGQUF0QixzQkFBc0I7WUNSbkMsMkdBQ0U7WUFLRix1RUFBd0I7O1lBTnlCLG9DQUFpQjtZQU03RCxlQUFrQjtZQUFsQixxQ0FBa0I7O2lDRE52QjtLQVVDO1NBRlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O0lBRUMsMkNBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEltcGxpY2l0IG1haW4gY29udGVudCB3aXRoIHR3byBzaWRlbmF2cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZQb3NpdGlvbkV4YW1wbGUge1xuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtc2lkZW5hdiBvcGVuZWQgbW9kZT1cInNpZGVcIj5TdGFydCBjb250ZW50PC9tYXQtc2lkZW5hdj5cbiAgPG1hdC1zaWRlbmF2IG9wZW5lZCBtb2RlPVwic2lkZVwiIHBvc2l0aW9uPVwiZW5kXCI+RW5kIGNvbnRlbnQ8L21hdC1zaWRlbmF2PlxuICBJbXBsaWNpdCBtYWluIGNvbnRlbnRcbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19