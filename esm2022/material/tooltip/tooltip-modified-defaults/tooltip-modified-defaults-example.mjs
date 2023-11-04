import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule, } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
export class TooltipModifiedDefaultsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TooltipModifiedDefaultsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: TooltipModifiedDefaultsExample, isStandalone: true, selector: "tooltip-modified-defaults-example", providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TooltipModifiedDefaultsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-modified-defaults-example', providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCwyQkFBMkIsRUFFM0IsZ0JBQWdCLEdBQ2pCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpELDJFQUEyRTtBQUMzRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBNkI7SUFDL0QsU0FBUyxFQUFFLElBQUk7SUFDZixTQUFTLEVBQUUsSUFBSTtJQUNmLGlCQUFpQixFQUFFLElBQUk7Q0FDeEIsQ0FBQztBQUVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLDhCQUE4QjttSEFBOUIsOEJBQThCO3VHQUE5Qiw4QkFBOEIsZ0ZBSjlCLENBQUMsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDLENBQUMsMEJDckJ4RixpT0FLQSwyQ0RrQlksZUFBZSwyTkFBRSxnQkFBZ0I7O2dHQUVoQyw4QkFBOEI7a0JBUDFDLFNBQVM7K0JBQ0UsbUNBQW1DLGFBRWxDLENBQUMsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDLENBQUMsY0FDMUUsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLFxuICBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnMsXG4gIE1hdFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKiBDdXN0b20gb3B0aW9ucyB0aGUgY29uZmlndXJlIHRoZSB0b29sdGlwJ3MgZGVmYXVsdCBzaG93L2hpZGUgZGVsYXlzLiAqL1xuZXhwb3J0IGNvbnN0IG15Q3VzdG9tVG9vbHRpcERlZmF1bHRzOiBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNob3dEZWxheTogMTAwMCxcbiAgaGlkZURlbGF5OiAxMDAwLFxuICB0b3VjaGVuZEhpZGVEZWxheTogMTAwMCxcbn07XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCcsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMsIHVzZVZhbHVlOiBteUN1c3RvbVRvb2x0aXBEZWZhdWx0c31dLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJCeSBkZWZhdWx0LCBJIGRlbGF5XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB0aGF0IGhhcyBjdXN0b20gZGVsYXlzIHRocm91Z2ggYSBkZWZhdWx0IGNvbmZpZ1wiPlxuICBCdXR0b24gd2l0aCBkZWxheS1kZWZhdWx0IHRvb2x0aXBcbjwvYnV0dG9uPlxuIl19