import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/**
 * @title Testing with MatSidenavHarness
 */
export class SidenavHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SidenavHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SidenavHarnessExample, isStandalone: true, selector: "sidenav-harness-example", ngImport: i0, template: "<mat-drawer-container>\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\n</mat-drawer-container>\n", dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { kind: "component", type: i1.MatDrawerContent, selector: "mat-drawer-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SidenavHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-harness-example', standalone: true, imports: [MatSidenavModule], template: "<mat-drawer-container>\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\n</mat-drawer-container>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtaGFybmVzcy9zaWRlbmF2LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1oYXJuZXNzL3NpZGVuYXYtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjs4R0FBckIscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDWmxDLHNMQUlBLDJDRE1ZLGdCQUFnQjs7MkZBRWYscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTaWRlbmF2SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTaWRlbmF2TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXI+XG4gIDxtYXQtZHJhd2VyIG1vZGU9XCJzaWRlXCI+SGVsbG8gZnJvbSB0aGUgZHJhd2VyPC9tYXQtZHJhd2VyPlxuICA8bWF0LWRyYXdlci1jb250ZW50PkhlbGxvIGZyb20gdGhlIGNvbnRlbnQ8L21hdC1kcmF3ZXItY29udGVudD5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=