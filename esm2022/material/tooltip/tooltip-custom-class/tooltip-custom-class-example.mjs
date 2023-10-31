import { Component, ViewEncapsulation } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can have a custom class applied.
 */
export class TooltipCustomClassExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TooltipCustomClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TooltipCustomClassExample, isStandalone: true, selector: "tooltip-custom-class-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TooltipCustomClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-custom-class-example', encapsulation: ViewEncapsulation.None, standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBV0gsTUFBTSxPQUFPLHlCQUF5Qjs4R0FBekIseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZDakJ0QyxvUUFPQSxxS0RRWSxlQUFlLDJRQUFFLGdCQUFnQjs7MkZBRWhDLHlCQUF5QjtrQkFWckMsU0FBUzsrQkFDRSw4QkFBOEIsaUJBS3pCLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBoYXZlIGEgY3VzdG9tIGNsYXNzIGFwcGxpZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICAvLyBOZWVkIHRvIHJlbW92ZSB2aWV3IGVuY2Fwc3VsYXRpb24gc28gdGhhdCB0aGUgY3VzdG9tIHRvb2x0aXAgc3R5bGUgZGVmaW5lZCBpblxuICAvLyBgdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5jc3NgIHdpbGwgbm90IGJlIHNjb3BlZCB0byB0aGlzIGNvbXBvbmVudCdzIHZpZXcuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBtYXRUb29sdGlwQ2xhc3M9XCJleGFtcGxlLXRvb2x0aXAtdXBwZXJjYXNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IHNob3dzIGEgcmVkIHRvb2x0aXBcIlxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtYnV0dG9uXCI+XG4gIFVwcGVyY2FzZS10b29sdGlwIEFjdGlvblxuPC9idXR0b24+XG4iXX0=