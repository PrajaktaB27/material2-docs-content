/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/icon/icon-svg/icon-svg-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
/**
 * \@title SVG icons
 */
let IconSvgExample = /** @class */ (() => {
    /**
     * \@title SVG icons
     */
    class IconSvgExample {
        /**
         * @param {?} iconRegistry
         * @param {?} sanitizer
         */
        constructor(iconRegistry, sanitizer) {
            iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
        }
    }
    IconSvgExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-svg-example',
                    templateUrl: 'icon-svg-example.html',
                    styleUrls: ['icon-svg-example.css'],
                },] },
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = () => [
        { type: MatIconRegistry },
        { type: DomSanitizer }
    ];
    /** @nocollapse */ IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
    /** @nocollapse */ IconSvgExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "mat-icon", 0);
        } }, directives: [i1.MatIcon], styles: [""] });
    return IconSvgExample;
})();
export { IconSvgExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBS3ZEOzs7O0lBQUEsTUFLYSxjQUFjOzs7OztRQUN6QixZQUFZLFlBQTZCLEVBQUUsU0FBdUI7WUFDaEUsWUFBWSxDQUFDLFVBQVUsQ0FDbkIsV0FBVyxFQUNYLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQzs7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7Ozs7Z0JBVE8sZUFBZTtnQkFEZixZQUFZOzttR0FXUCxjQUFjOzBFQUFkLGNBQWM7WUNaM0IsOEJBQXFHOzt5QkRBckc7S0FrQkM7U0FOWSxjQUFjO2tEQUFkLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtNYXRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG4vKipcbiAqIEB0aXRsZSBTVkcgaWNvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvbi1zdmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaWNvbi1zdmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ljb24tc3ZnLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEljb25TdmdFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oXG4gICAgICAgICd0aHVtYnMtdXAnLFxuICAgICAgICBzYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdhc3NldHMvaW1nL2V4YW1wbGVzL3RodW1idXAtaWNvbi5zdmcnKSk7XG4gIH1cbn1cbiIsIjxtYXQtaWNvbiBzdmdJY29uPVwidGh1bWJzLXVwXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIHRodW1icyB1cCBTVkcgaWNvblwiPjwvbWF0LWljb24+XG4iXX0=