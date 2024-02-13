import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/stepper";
/**
 * @title Testing with MatStepperHarness
 */
export class StepperHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: StepperHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: StepperHarnessExample, isStandalone: true, selector: "stepper-harness-example", ngImport: i0, template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n", dependencies: [{ kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i1.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i1.MatStepperNext, selector: "button[matStepperNext]" }, { kind: "directive", type: i1.MatStepperPrevious, selector: "button[matStepperPrevious]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: StepperHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-harness-example', standalone: true, imports: [MatStepperModule], template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1oYXJuZXNzL3N0ZXBwZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjttSEFBckIscUJBQXFCO3VHQUFyQixxQkFBcUIsbUZDWmxDLHVkQWVBLDJDRExZLGdCQUFnQjs7Z0dBRWYscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTdGVwcGVySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTdGVwcGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LXN0ZXBwZXI+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPk9uZTwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBvcHRpb25hbD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlR3bzwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+UHJldmlvdXM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIG9wdGlvbmFsPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+VGhyZWU8L25nLXRlbXBsYXRlPlxuICAgIDxidXR0b24gbWF0U3RlcHBlclByZXZpb3VzPlByZXZpb3VzPC9idXR0b24+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19