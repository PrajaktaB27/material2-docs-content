import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
/**
 * @title Stepper with customized states
 */
export class StepperStatesExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: StepperStatesExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: StepperStatesExample, isStandalone: true, selector: "stepper-states-example", providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false },
            },
        ], ngImport: i0, template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n\n<!-- #docregion states -->\n<mat-stepper>\n<!-- #docregion label -->\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n<!-- #enddocregion label -->\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n<!-- #docregion override-icons -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-stepper>\n<!-- #enddocregion override-icons -->\n<!-- #enddocregion states -->\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-mdc-form-field {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]" }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]" }, { kind: "directive", type: i2.MatStepperIcon, selector: "ng-template[matStepperIcon]", inputs: ["matStepperIcon"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: StepperStatesExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-states-example', providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false },
                        },
                    ], standalone: true, imports: [
                        MatStepperModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                    ], template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n\n<!-- #docregion states -->\n<mat-stepper>\n<!-- #docregion label -->\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n<!-- #enddocregion label -->\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n<!-- #docregion override-icons -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-stepper>\n<!-- #enddocregion override-icons -->\n<!-- #enddocregion states -->\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-mdc-form-field {\n  margin-top: 16px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0FBRTNEOztHQUVHO0FBc0JILE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFQN0MsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxvQkFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUU2QyxDQUFDO21IQVJ0QyxvQkFBb0I7dUdBQXBCLG9CQUFvQixxRUFqQnBCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO2FBQy9DO1NBQ0YsMEJDckJILHlyRUFxRUEsNEpEN0NJLGdCQUFnQix1ekJBQ2hCLFdBQVcsdzNCQUNYLG1CQUFtQiwrVUFDbkIsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLGVBQWUsMk5BQ2YsYUFBYTs7Z0dBR0osb0JBQW9CO2tCQXJCaEMsU0FBUzsrQkFDRSx3QkFBd0IsYUFHdkI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO3lCQUMvQztxQkFDRixjQUNXLElBQUksV0FDUDt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3FCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U1RFUFBFUl9HTE9CQUxfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB3aXRoIGN1c3RvbWl6ZWQgc3RhdGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLXN0YXRlcy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLFxuICAgICAgdXNlVmFsdWU6IHtkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlfSxcbiAgICB9LFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlclN0YXRlc0V4YW1wbGUge1xuICBmaXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuICBzZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxufVxuIiwiPG1hdC1zdGVwcGVyICNzdGVwcGVyPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIGFkZHJlc3M8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cblxuPCEtLSAjZG9jcmVnaW9uIHN0YXRlcyAtLT5cbjxtYXQtc3RlcHBlcj5cbjwhLS0gI2RvY3JlZ2lvbiBsYWJlbCAtLT5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAxXCIgc3RhdGU9XCJwaG9uZVwiPlxuICAgIDxwPlB1dCBkb3duIHlvdXIgcGhvbmVzLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBsYWJlbCAtLT5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAyXCIgc3RhdGU9XCJjaGF0XCI+XG4gICAgPHA+U29jaWFsaXplIHdpdGggZWFjaCBvdGhlci48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAzXCI+XG4gICAgPHA+WW91J3JlIHdlbGNvbWUuPC9wPlxuICA8L21hdC1zdGVwPlxuXG4gIDwhLS0gSWNvbiBvdmVycmlkZXMuIC0tPlxuPCEtLSAjZG9jcmVnaW9uIG92ZXJyaWRlLWljb25zIC0tPlxuICA8bmctdGVtcGxhdGUgbWF0U3RlcHBlckljb249XCJwaG9uZVwiPlxuICAgIDxtYXQtaWNvbj5jYWxsX2VuZDwvbWF0LWljb24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBtYXRTdGVwcGVySWNvbj1cImNoYXRcIj5cbiAgICA8bWF0LWljb24+Zm9ydW08L21hdC1pY29uPlxuICA8L25nLXRlbXBsYXRlPlxuPC9tYXQtc3RlcHBlcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBvdmVycmlkZS1pY29ucyAtLT5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBzdGF0ZXMgLS0+XG4iXX0=