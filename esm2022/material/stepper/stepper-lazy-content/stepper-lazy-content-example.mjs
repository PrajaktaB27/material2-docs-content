import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/stepper";
import * as i2 from "@angular/material/button";
/**
 * @title Stepper lazy content rendering
 */
export class StepperLazyContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperLazyContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: StepperLazyContentExample, isStandalone: true, selector: "stepper-lazy-content-example", ngImport: i0, template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n", dependencies: [{ kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i1.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i1.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i1.MatStepContent, selector: "ng-template[matStepContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperLazyContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-lazy-content-example', standalone: true, imports: [MatStepperModule, MatButtonModule], template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHlCQUF5Qjs4R0FBekIseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZDYnRDLDR3QkFzQkEsMkNEWFksZ0JBQWdCLGcxQkFBRSxlQUFlOzsyRkFFaEMseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgbGF6eSBjb250ZW50IHJlbmRlcmluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWxhenktY29udGVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWxhenktY29udGVudC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0U3RlcHBlck1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckxhenlDb250ZW50RXhhbXBsZSB7fVxuIiwiPG1hdC1zdGVwcGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+U3RlcCAxPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcENvbnRlbnQ+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgd2FzIHJlbmRlcmVkIGxhemlseTwvcD5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+U3RlcCAyPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcENvbnRlbnQ+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgd2FzIGFsc28gcmVuZGVyZWQgbGF6aWx5PC9wPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlN0ZXAgMzwvbmctdGVtcGxhdGU+XG4gICAgPHA+VGhpcyBjb250ZW50IHdhcyByZW5kZXJlZCBlYWdlcmx5PC9wPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cbiJdfQ==