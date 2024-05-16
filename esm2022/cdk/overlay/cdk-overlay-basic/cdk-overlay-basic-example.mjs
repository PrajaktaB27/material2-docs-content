import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * @title Overlay basic example
 */
export class CdkOverlayBasicExample {
    constructor() {
        this.isOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkOverlayBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkOverlayBasicExample, isStandalone: true, selector: "cdk-overlay-basic-example", ngImport: i0, template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"], dependencies: [{ kind: "ngmodule", type: OverlayModule }, { kind: "directive", type: i1.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkOverlayBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-overlay-basic-example', standalone: true, imports: [OverlayModule], template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW92ZXJsYXktYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9vdmVybGF5L2Nkay1vdmVybGF5LWJhc2ljL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvb3ZlcmxheS9jZGstb3ZlcmxheS1iYXNpYy9jZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQUVuRDs7R0FFRztBQVFILE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ2hCO21IQUZZLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHFGQ2JuQyw4aEJBaUJBLHVZRE5ZLGFBQWE7O2dHQUVaLHNCQUFzQjtrQkFQbEMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbi8qKlxuICogQHRpdGxlIE92ZXJsYXkgYmFzaWMgZXhhbXBsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtPdmVybGF5TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrT3ZlcmxheUJhc2ljRXhhbXBsZSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xufVxuIiwiPCEtLSBUaGlzIGJ1dHRvbiB0cmlnZ2VycyB0aGUgb3ZlcmxheSBhbmQgaXMgaXQncyBvcmlnaW4gLS0+XG48YnV0dG9uIChjbGljayk9XCJpc09wZW4gPSAhaXNPcGVuXCIgdHlwZT1cImJ1dHRvblwiIGNka092ZXJsYXlPcmlnaW4gI3RyaWdnZXI9XCJjZGtPdmVybGF5T3JpZ2luXCI+XG4gIHt7aXNPcGVuID8gXCJDbG9zZVwiIDogXCJPcGVuXCJ9fVxuPC9idXR0b24+XG5cbjwhLS0gVGhpcyB0ZW1wbGF0ZSBkaXNwbGF5cyB0aGUgb3ZlcmxheSBjb250ZW50IGFuZCBpcyBjb25uZWN0ZWQgdG8gdGhlIGJ1dHRvbiAtLT5cbjxuZy10ZW1wbGF0ZVxuICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInRyaWdnZXJcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuXCJcbj5cbiAgPHVsIGNsYXNzPVwiZXhhbXBsZS1saXN0XCI+XG4gICAgPGxpPkl0ZW0gMTwvbGk+XG4gICAgPGxpPkl0ZW0gMjwvbGk+XG4gICAgPGxpPkl0ZW0gMzwvbGk+XG4gIDwvdWw+XG48L25nLXRlbXBsYXRlPlxuIl19