/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/a11y/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
import * as i0 from "@angular/core";
export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
/** @type {?} */
const EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
let CdkA11yExamplesModule = /** @class */ (() => {
    class CdkA11yExamplesModule {
    }
    CdkA11yExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        A11yModule,
                        MatSelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ CdkA11yExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkA11yExamplesModule });
    /** @nocollapse */ CdkA11yExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkA11yExamplesModule_Factory(t) { return new (t || CdkA11yExamplesModule)(); }, imports: [[
                A11yModule,
                MatSelectModule,
            ]] });
    return CdkA11yExamplesModule;
})();
export { CdkA11yExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkA11yExamplesModule, { declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule,
        MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkA11yExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDJCQUEyQixFQUM1QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOztBQUVwRyxPQUFPLEVBQUMsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQzs7TUFFM0YsUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDNUI7QUFFRDtJQUFBLE1BU2EscUJBQXFCOzs7Z0JBVGpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7Z0ZBQ1kscUJBQXFCO2dKQUFyQixxQkFBcUIsa0JBUnZCO2dCQUNQLFVBQVU7Z0JBQ1YsZUFBZTthQUNoQjtnQ0F2Qkg7S0E2QkM7U0FEWSxxQkFBcUI7d0ZBQXJCLHFCQUFxQixtQkFkaEMsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkIsYUFLekIsVUFBVTtRQUNWLGVBQWUsYUFSakIsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkI7a0RBWWhCLHFCQUFxQjtjQVRqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7XG4gIEZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlXG59IGZyb20gJy4vZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlJztcbmltcG9ydCB7XG4gIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZVxufSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUnO1xuaW1wb3J0IHtGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZm9jdXMtbW9uaXRvci1vdmVydmlldy9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0ZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlLCBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGUsIEZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLFxuICBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQTExeU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBMTF5RXhhbXBsZXNNb2R1bGUge1xufVxuXG4iXX0=