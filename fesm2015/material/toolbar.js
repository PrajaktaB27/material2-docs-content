import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow, MatToolbarModule } from '@angular/material/toolbar';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/toolbar-basic/toolbar-basic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic toolbar
 */
let ToolbarBasicExample = /** @class */ (() => {
    /**
     * \@title Basic toolbar
     */
    class ToolbarBasicExample {
    }
    ToolbarBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-basic-example',
                    templateUrl: 'toolbar-basic-example.html',
                    styleUrls: ['toolbar-basic-example.css'],
                },] },
    ];
    /** @nocollapse */ ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
    /** @nocollapse */ ToolbarBasicExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-toolbar");
            ɵɵelementStart(1, "button", 0);
            ɵɵelementStart(2, "mat-icon");
            ɵɵtext(3, "menu");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "span");
            ɵɵtext(5, "My App");
            ɵɵelementEnd();
            ɵɵelement(6, "span", 1);
            ɵɵelementStart(7, "button", 2);
            ɵɵelementStart(8, "mat-icon");
            ɵɵtext(9, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "button", 3);
            ɵɵelementStart(11, "mat-icon");
            ɵɵtext(12, "share");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatToolbar, MatButton, MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    return ToolbarBasicExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarBasicExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-basic-example',
                templateUrl: 'toolbar-basic-example.html',
                styleUrls: ['toolbar-basic-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/toolbar-multirow/toolbar-multirow-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Multi-row toolbar
 */
let ToolbarMultirowExample = /** @class */ (() => {
    /**
     * \@title Multi-row toolbar
     */
    class ToolbarMultirowExample {
    }
    ToolbarMultirowExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-multirow-example',
                    templateUrl: 'toolbar-multirow-example.html',
                    styleUrls: ['toolbar-multirow-example.css'],
                },] },
    ];
    /** @nocollapse */ ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
    /** @nocollapse */ ToolbarMultirowExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-toolbar", 0);
            ɵɵelementStart(1, "mat-toolbar-row");
            ɵɵelementStart(2, "span");
            ɵɵtext(3, "Custom Toolbar");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(4, "mat-toolbar-row");
            ɵɵelementStart(5, "span");
            ɵɵtext(6, "Second Line");
            ɵɵelementEnd();
            ɵɵelement(7, "span", 1);
            ɵɵelementStart(8, "mat-icon", 2);
            ɵɵtext(9, "verified_user");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-toolbar-row");
            ɵɵelementStart(11, "span");
            ɵɵtext(12, "Third Line");
            ɵɵelementEnd();
            ɵɵelement(13, "span", 1);
            ɵɵelementStart(14, "mat-icon", 3);
            ɵɵtext(15, "favorite");
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-icon", 4);
            ɵɵtext(17, "delete");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatToolbar, MatToolbarRow, MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    return ToolbarMultirowExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/toolbar-overview/toolbar-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Toolbar overview
 */
let ToolbarOverviewExample = /** @class */ (() => {
    /**
     * \@title Toolbar overview
     */
    class ToolbarOverviewExample {
    }
    ToolbarOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-overview-example',
                    templateUrl: 'toolbar-overview-example.html',
                    styleUrls: ['toolbar-overview-example.css'],
                },] },
    ];
    /** @nocollapse */ ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
    /** @nocollapse */ ToolbarOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 47, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵelementStart(1, "mat-toolbar");
            ɵɵelementStart(2, "button", 0);
            ɵɵelementStart(3, "mat-icon");
            ɵɵtext(4, "menu");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "span");
            ɵɵtext(6, "My App");
            ɵɵelementEnd();
            ɵɵelement(7, "span", 1);
            ɵɵelementStart(8, "button", 2);
            ɵɵelementStart(9, "mat-icon");
            ɵɵtext(10, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "button", 3);
            ɵɵelementStart(12, "mat-icon");
            ɵɵtext(13, "share");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "p");
            ɵɵelementStart(15, "mat-toolbar", 4);
            ɵɵelementStart(16, "button", 0);
            ɵɵelementStart(17, "mat-icon");
            ɵɵtext(18, "menu");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(19, "span");
            ɵɵtext(20, "My App");
            ɵɵelementEnd();
            ɵɵelement(21, "span", 1);
            ɵɵelementStart(22, "button", 2);
            ɵɵelementStart(23, "mat-icon");
            ɵɵtext(24, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(25, "button", 3);
            ɵɵelementStart(26, "mat-icon");
            ɵɵtext(27, "share");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(28, "p");
            ɵɵelementStart(29, "mat-toolbar", 4);
            ɵɵelementStart(30, "mat-toolbar-row");
            ɵɵelementStart(31, "span");
            ɵɵtext(32, "My App");
            ɵɵelementEnd();
            ɵɵelement(33, "span", 1);
            ɵɵelementStart(34, "button", 0);
            ɵɵelementStart(35, "mat-icon");
            ɵɵtext(36, "menu");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(37, "mat-toolbar-row");
            ɵɵelementStart(38, "span");
            ɵɵtext(39, "Second Line");
            ɵɵelementEnd();
            ɵɵelement(40, "span", 1);
            ɵɵelementStart(41, "button", 2);
            ɵɵelementStart(42, "mat-icon");
            ɵɵtext(43, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(44, "button", 3);
            ɵɵelementStart(45, "mat-icon");
            ɵɵtext(46, "share");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatToolbar, MatButton, MatIcon, MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    return ToolbarOverviewExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
let ToolbarExamplesModule = /** @class */ (() => {
    class ToolbarExamplesModule {
    }
    ToolbarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatToolbarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ ToolbarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ToolbarExamplesModule });
    /** @nocollapse */ ToolbarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatToolbarModule,
            ]] });
    return ToolbarExamplesModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatButtonModule,
        MatIconModule,
        MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatToolbarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { ToolbarBasicExample, ToolbarExamplesModule, ToolbarMultirowExample, ToolbarOverviewExample };
//# sourceMappingURL=toolbar.js.map
