/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/sidenav/sidenav-disable-close/sidenav-disable-close-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
const _c0 = ["sidenav"];
function SidenavDisableCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵlistener("backdropClick", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_container_backdropClick_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.close("backdrop"); });
    i0.ɵɵelementStart(1, "mat-sidenav", 3, 4);
    i0.ɵɵlistener("keydown.escape", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_keydown_escape_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close("escape"); });
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 5);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.close("toggle button"); });
    i0.ɵɵtext(5, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-sidenav-content");
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵelementStart(8, "button", 5);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(2); return _r2.open(); });
    i0.ɵɵtext(9, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("Closed due to: ", ctx_r0.reason, "");
} }
function SidenavDisableCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Sidenav with custom escape and backdrop click behavior
 */
let SidenavDisableCloseExample = /** @class */ (() => {
    /**
     * \@title Sidenav with custom escape and backdrop click behavior
     */
    class SidenavDisableCloseExample {
        constructor() {
            this.reason = '';
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
             * @param {?} h
             * @return {?}
             */
            h => h.test(window.location.host)));
        }
        /**
         * @param {?} reason
         * @return {?}
         */
        close(reason) {
            this.reason = reason;
            this.sidenav.close();
        }
    }
    SidenavDisableCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    templateUrl: 'sidenav-disable-close-example.html',
                    styleUrls: ['sidenav-disable-close-example.css'],
                },] },
    ];
    SidenavDisableCloseExample.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
    };
    /** @nocollapse */ SidenavDisableCloseExample.ɵfac = function SidenavDisableCloseExample_Factory(t) { return new (t || SidenavDisableCloseExample)(); };
    /** @nocollapse */ SidenavDisableCloseExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavDisableCloseExample, selectors: [["sidenav-disable-close-example"]], viewQuery: function SidenavDisableCloseExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "backdropClick", 4, "ngIf"], [4, "ngIf"], [1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["mat-button", "", 3, "click"]], template: function SidenavDisableCloseExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavDisableCloseExample_mat_sidenav_container_0_Template, 12, 1, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavDisableCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i3.MatButton, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavDisableCloseExample;
})();
export { SidenavDisableCloseExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavDisableCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-disable-close-example',
                templateUrl: 'sidenav-disable-close-example.html',
                styleUrls: ['sidenav-disable-close-example.css'],
            }]
    }], null, { sidenav: [{
            type: ViewChild,
            args: ['sidenav']
        }] }); })();
if (false) {
    /** @type {?} */
    SidenavDisableCloseExample.prototype.sidenav;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.reason;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0lDRHJELGdEQUVFO0lBRDRCLHFPQUF1QixVQUFVLEtBQUU7SUFDL0QseUNBQ0U7SUFEb0IsNk5BQXdCLFFBQVEsS0FBRTtJQUN0RCx5QkFBRztJQUFBLGlDQUFvRDtJQUFqQyxzTUFBZSxlQUFlLEtBQUU7SUFBQyxzQkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDNUUsaUJBQWM7SUFFZCwyQ0FDRTtJQUFBLHlCQUFHO0lBQUEsaUNBQTRDO0lBQXpCLHFMQUFTLFVBQWMsSUFBQztJQUFDLG9CQUFJO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUNoRSwwQkFBRztJQUFBLGFBQXlCO0lBQUEsaUJBQUk7SUFDbEMsaUJBQXNCO0lBQ3hCLGlCQUF3Qjs7O0lBRmpCLGdCQUF5QjtJQUF6QiwyREFBeUI7OztJQUloQywyQkFBd0I7SUFBQSx1REFBdUM7SUFBQSxpQkFBTTs7Ozs7QURSckU7Ozs7SUFBQSxNQUthLDBCQUEwQjtRQUx2QztZQVFFLFdBQU0sR0FBRyxFQUFFLENBQUM7WUFPWixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1NBQ25HOzs7OztRQU5DLEtBQUssQ0FBQyxNQUFjO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxXQUFXLEVBQUUsb0NBQW9DO29CQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7OzswQkFFRSxTQUFTLFNBQUMsU0FBUzs7MkhBRFQsMEJBQTBCO3NGQUExQiwwQkFBMEI7Ozs7OztZQ1R2QyxnSEFFRTtZQVVGLDJFQUF3Qjs7WUFYMEMsb0NBQWlCO1lBVzlFLGVBQWtCO1lBQWxCLHFDQUFrQjs7cUNEWnZCO0tBb0JDO1NBWFksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOztrQkFFRSxTQUFTO21CQUFDLFNBQVM7Ozs7SUFBcEIsNkNBQTBDOztJQUUxQyw0Q0FBWTs7SUFPWiwrQ0FBa0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKiBAdGl0bGUgU2lkZW5hdiB3aXRoIGN1c3RvbSBlc2NhcGUgYW5kIGJhY2tkcm9wIGNsaWNrIGJlaGF2aW9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkRpc2FibGVDbG9zZUV4YW1wbGUge1xuICBAVmlld0NoaWxkKCdzaWRlbmF2Jykgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICByZWFzb24gPSAnJztcblxuICBjbG9zZShyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICB9XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyXG4gICAgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIChiYWNrZHJvcENsaWNrKT1cImNsb3NlKCdiYWNrZHJvcCcpXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IChrZXlkb3duLmVzY2FwZSk9XCJjbG9zZSgnZXNjYXBlJylcIiBkaXNhYmxlQ2xvc2U+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgndG9nZ2xlIGJ1dHRvbicpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICA8L21hdC1zaWRlbmF2PlxuXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi5vcGVuKClcIj5PcGVuPC9idXR0b24+PC9wPlxuICAgIDxwPkNsb3NlZCBkdWUgdG86IHt7cmVhc29ufX08L3A+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19