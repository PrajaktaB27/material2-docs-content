import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/toolbar";
import * as i3 from "@angular/material/sidenav";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/input";
/** @title Fixed sidenav */
export class SidenavFixedExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.options = this._formBuilder.group({
            bottom: 0,
            fixed: false,
            top: 0,
        });
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: SidenavFixedExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: SidenavFixedExample, isStandalone: true, selector: "sidenav-fixed-example", ngImport: i0, template: "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <mat-label>Top gap</mat-label>\n        <input matInput type=\"number\" formControlName=\"top\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <mat-label>Bottom gap</mat-label>\n        <input matInput type=\"number\" formControlName=\"bottom\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i3.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i3.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i3.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: SidenavFixedExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-fixed-example', standalone: true, imports: [
                        NgIf,
                        MatToolbarModule,
                        MatSidenavModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                    ], template: "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <mat-label>Top gap</mat-label>\n        <input matInput type=\"number\" formControlName=\"top\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <mat-label>Bottom gap</mat-label>\n        <input matInput type=\"number\" formControlName=\"bottom\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWZpeGVkL3NpZGVuYXYtZml4ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7OztBQUVyQywyQkFBMkI7QUFrQjNCLE1BQU0sT0FBTyxtQkFBbUI7SUFPOUIsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFON0MsWUFBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUMsQ0FBQztRQUlILGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUZsQyxDQUFDO21IQVB0QyxtQkFBbUI7dUdBQW5CLG1CQUFtQixpRkM1QmhDLG1zQ0E0QkEsMGREWEksSUFBSSw0RkFDSixnQkFBZ0IsZ0pBQ2hCLGdCQUFnQiwwWUFDaEIsV0FBVyxvdEJBQ1gsbUJBQW1CLCtVQUNuQixpQkFBaUIsNldBQ2pCLGtCQUFrQiwwU0FDbEIsZUFBZSwyTkFDZixjQUFjOztnR0FHTCxtQkFBbUI7a0JBakIvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGNBQWM7cUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqIEB0aXRsZSBGaXhlZCBzaWRlbmF2ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWZpeGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZml4ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtZml4ZWQtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkZpeGVkRXhhbXBsZSB7XG4gIG9wdGlvbnMgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgYm90dG9tOiAwLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgICB0b3A6IDAsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBzaG91bGRSdW4gPSAvKF58Likoc3RhY2tibGl0enx3ZWJjb250YWluZXIpLihpb3xjb20pJC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCk7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtdG9vbGJhciBjbGFzcz1cImV4YW1wbGUtaGVhZGVyXCI+SGVhZGVyPC9tYXQtdG9vbGJhcj5cblxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBvcGVuZWQgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXZcIlxuICAgICAgICAgICAgICAgICBbZml4ZWRJblZpZXdwb3J0XT1cIm9wdGlvbnMudmFsdWUuZml4ZWRcIiBbZml4ZWRUb3BHYXBdPVwib3B0aW9ucy52YWx1ZS50b3BcIlxuICAgICAgICAgICAgICAgICBbZml4ZWRCb3R0b21HYXBdPVwib3B0aW9ucy52YWx1ZS5ib3R0b21cIj5cbiAgICAgIHt7b3B0aW9ucy52YWx1ZS5maXhlZCA/ICdGaXhlZCcgOiAnTm9uLWZpeGVkJ319IFNpZGVuYXZcbiAgICA8L21hdC1zaWRlbmF2PlxuXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImZpeGVkXCI+Rml4ZWQ8L21hdC1jaGVja2JveD48L3A+XG4gICAgICA8cD48bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+VG9wIGdhcDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT1cInRvcFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD48L3A+XG4gICAgICA8cD48bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+Qm90dG9tIGdhcDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT1cImJvdHRvbVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD48L3A+XG4gICAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJleGFtcGxlLWZvb3RlclwiPkZvb3RlcjwvbWF0LXRvb2xiYXI+XG48L25nLWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja0JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==