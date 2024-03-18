import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic sidenav */
export class SidenavOverviewExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: SidenavOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.0", type: SidenavOverviewExample, isStandalone: true, selector: "sidenav-overview-example", ngImport: i0, template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n    <mat-sidenav-content>Main content</mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: SidenavOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-overview-example', standalone: true, imports: [MatSidenavModule], template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n    <mat-sidenav-content>Main content</mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7QUFFM0QsMkJBQTJCO0FBUTNCLE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxjQUFTLEdBQUcsMENBQTBDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkY7cUhBRlksc0JBQXNCO3lHQUF0QixzQkFBc0Isb0ZDWG5DLDhTQVFBLGdMRENZLGdCQUFnQjs7a0dBRWYsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKiBAdGl0bGUgQmFzaWMgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTaWRlbmF2TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdk92ZXJ2aWV3RXhhbXBsZSB7XG4gIHNob3VsZFJ1biA9IC8oXnwuKShzdGFja2JsaXR6fHdlYmNvbnRhaW5lcikuKGlvfGNvbSkkLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KTtcbn1cbiIsIkBpZiAoc2hvdWxkUnVuKSB7XG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDxtYXQtc2lkZW5hdiBtb2RlPVwic2lkZVwiIG9wZW5lZD5TaWRlbmF2IGNvbnRlbnQ8L21hdC1zaWRlbmF2PlxuICAgIDxtYXQtc2lkZW5hdi1jb250ZW50Pk1haW4gY29udGVudDwvbWF0LXNpZGVuYXYtY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG59IEBlbHNlIHtcbiAgPGRpdj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbn1cbiJdfQ==