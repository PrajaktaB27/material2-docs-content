/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/button/button-overview/button-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * \@title Basic buttons
 */
let ButtonOverviewExample = /** @class */ (() => {
    /**
     * \@title Basic buttons
     */
    class ButtonOverviewExample {
    }
    ButtonOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-overview-example',
                    templateUrl: 'button-overview-example.html',
                    styleUrls: ['button-overview-example.css'],
                },] },
    ];
    /** @nocollapse */ ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
    /** @nocollapse */ ButtonOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 132, vars: 0, consts: [[1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"]], template: function ButtonOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtext(2, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵtext(9, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵtext(11, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵtext(13, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 7);
            i0.ɵɵtext(15, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "mat-divider");
            i0.ɵɵelementStart(17, "section");
            i0.ɵɵelementStart(18, "div", 0);
            i0.ɵɵtext(19, "Raised");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 1);
            i0.ɵɵelementStart(21, "button", 8);
            i0.ɵɵtext(22, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 9);
            i0.ɵɵtext(24, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 10);
            i0.ɵɵtext(26, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 11);
            i0.ɵɵtext(28, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "button", 12);
            i0.ɵɵtext(30, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "a", 13);
            i0.ɵɵtext(32, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "mat-divider");
            i0.ɵɵelementStart(34, "section");
            i0.ɵɵelementStart(35, "div", 0);
            i0.ɵɵtext(36, "Stroked");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 1);
            i0.ɵɵelementStart(38, "button", 14);
            i0.ɵɵtext(39, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "button", 15);
            i0.ɵɵtext(41, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button", 16);
            i0.ɵɵtext(43, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 17);
            i0.ɵɵtext(45, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "button", 18);
            i0.ɵɵtext(47, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "a", 19);
            i0.ɵɵtext(49, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(50, "mat-divider");
            i0.ɵɵelementStart(51, "section");
            i0.ɵɵelementStart(52, "div", 0);
            i0.ɵɵtext(53, "Flat");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 1);
            i0.ɵɵelementStart(55, "button", 20);
            i0.ɵɵtext(56, "Basic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "button", 21);
            i0.ɵɵtext(58, "Primary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "button", 22);
            i0.ɵɵtext(60, "Accent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "button", 23);
            i0.ɵɵtext(62, "Warn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "button", 24);
            i0.ɵɵtext(64, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "a", 25);
            i0.ɵɵtext(66, "Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(67, "mat-divider");
            i0.ɵɵelementStart(68, "section");
            i0.ɵɵelementStart(69, "div", 0);
            i0.ɵɵtext(70, "Icon");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 1);
            i0.ɵɵelementStart(72, "div", 26);
            i0.ɵɵelementStart(73, "button", 27);
            i0.ɵɵelementStart(74, "mat-icon");
            i0.ɵɵtext(75, "more_vert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "button", 28);
            i0.ɵɵelementStart(77, "mat-icon");
            i0.ɵɵtext(78, "home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "button", 29);
            i0.ɵɵelementStart(80, "mat-icon");
            i0.ɵɵtext(81, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "button", 30);
            i0.ɵɵelementStart(83, "mat-icon");
            i0.ɵɵtext(84, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "button", 31);
            i0.ɵɵelementStart(86, "mat-icon");
            i0.ɵɵtext(87, "open_in_new");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(88, "mat-divider");
            i0.ɵɵelementStart(89, "section");
            i0.ɵɵelementStart(90, "div", 0);
            i0.ɵɵtext(91, "FAB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 1);
            i0.ɵɵelementStart(93, "div", 26);
            i0.ɵɵelementStart(94, "div", 32);
            i0.ɵɵelementStart(95, "button", 33);
            i0.ɵɵelementStart(96, "mat-icon");
            i0.ɵɵtext(97, "delete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "div", 32);
            i0.ɵɵelementStart(99, "button", 34);
            i0.ɵɵelementStart(100, "mat-icon");
            i0.ɵɵtext(101, "bookmark");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "div", 32);
            i0.ɵɵelementStart(103, "button", 35);
            i0.ɵɵelementStart(104, "mat-icon");
            i0.ɵɵtext(105, "home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "div", 32);
            i0.ɵɵelementStart(107, "button", 36);
            i0.ɵɵelementStart(108, "mat-icon");
            i0.ɵɵtext(109, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(110, "mat-divider");
            i0.ɵɵelementStart(111, "section");
            i0.ɵɵelementStart(112, "div", 0);
            i0.ɵɵtext(113, "Mini FAB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "div", 1);
            i0.ɵɵelementStart(115, "div", 26);
            i0.ɵɵelementStart(116, "div", 32);
            i0.ɵɵelementStart(117, "button", 37);
            i0.ɵɵelementStart(118, "mat-icon");
            i0.ɵɵtext(119, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "div", 32);
            i0.ɵɵelementStart(121, "button", 38);
            i0.ɵɵelementStart(122, "mat-icon");
            i0.ɵɵtext(123, "plus_one");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "div", 32);
            i0.ɵɵelementStart(125, "button", 39);
            i0.ɵɵelementStart(126, "mat-icon");
            i0.ɵɵtext(127, "filter_list");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "div", 32);
            i0.ɵɵelementStart(129, "button", 40);
            i0.ɵɵelementStart(130, "mat-icon");
            i0.ɵɵtext(131, "home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButton, i1.MatAnchor, i2.MatDivider, i3.MatIcon], styles: ["section[_ngcontent-%COMP%] {\n  display: table;\n  margin: 8px;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-right: 8px;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 480px;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}"] });
    return ButtonOverviewExample;
})();
export { ButtonOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-overview-example',
                templateUrl: 'button-overview-example.html',
                styleUrls: ['button-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFLeEM7Ozs7SUFBQSxNQUthLHFCQUFxQjs7O2dCQUxqQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDOztpSEFDWSxxQkFBcUI7aUZBQXJCLHFCQUFxQjtZQ1ZsQywrQkFDRTtZQUFBLDhCQUEyQjtZQUFBLHFCQUFLO1lBQUEsaUJBQU07WUFDdEMsOEJBQ0U7WUFBQSxpQ0FBbUI7WUFBQSxxQkFBSztZQUFBLGlCQUFTO1lBQ2pDLGlDQUFtQztZQUFBLHVCQUFPO1lBQUEsaUJBQVM7WUFDbkQsaUNBQWtDO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUNqRCxrQ0FBZ0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQzdDLGtDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDN0MsNkJBQTZEO1lBQUEscUJBQUk7WUFBQSxpQkFBSTtZQUN2RSxpQkFBTTtZQUNSLGlCQUFVO1lBQ1YsK0JBQTJCO1lBQzNCLGdDQUNFO1lBQUEsK0JBQTJCO1lBQUEsdUJBQU07WUFBQSxpQkFBTTtZQUN2QywrQkFDRTtZQUFBLGtD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WCxpQkFBTTtZQUNOLGlDQUNFO1lBQUEsb0NBQ0U7WUFBQSxrQ0FBVTtZQUFBLDBCQUFRO1lBQUEsaUJBQVc7WUFDL0IsaUJBQVM7WUFDWCxpQkFBTTtZQUNOLGlDQUNFO1lBQUEsb0NBQ0U7WUFBQSxrQ0FBVTtZQUFBLDZCQUFXO1lBQUEsaUJBQVc7WUFDbEMsaUJBQVM7WUFDWCxpQkFBTTtZQUNOLGlDQUNFO1lBQUEsb0NBQ0U7WUFBQSxrQ0FBVTtZQUFBLHNCQUFJO1lBQUEsaUJBQVc7WUFDM0IsaUJBQVM7WUFDWCxpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07WUFDUixpQkFBVTs7Z0NEN0hWO0tBVXFDO1NBQXhCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgYnV0dG9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydidXR0b24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5CYXNpYzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICAgIDxhIG1hdC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPlJhaXNlZDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LXJhaXNlZC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPlN0cm9rZWQ8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LXN0cm9rZWQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5GbGF0PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICAgIDxhIG1hdC1mbGF0LWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+SWNvbjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZmxleC1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSB2ZXJ0aWNhbCB0aHJlZSBkb3QgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhvbWUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+aG9tZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG1lbnUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBvcGVuIGluIG5ldyB0YWIgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+b3Blbl9pbl9uZXc8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5GQUI8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZsZXgtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgZGVsZXRlIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGJvb2ttYXJrIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+Ym9va21hcms8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhvbWUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPk1pbmkgRkFCPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgbWVudSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBwbHVzIG9uZSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnBsdXNfb25lPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGZpbHRlciBsaXN0IGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+ZmlsdGVyX2xpc3Q8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBkaXNhYmxlZCBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdfQ==