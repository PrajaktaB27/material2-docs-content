import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/forms";
/** @title Date range picker forms integration */
export class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
}
DateRangePickerFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: DateRangePickerFormsExample, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "directive", type: i3.MatLegacyError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i3.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLegacyHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatLegacySuffix, selector: "[matSuffix]" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRXRELGlEQUFpRDtBQUtqRCxNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBS0UsVUFBSyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBYyxJQUFJLENBQUM7WUFDekMsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFjLElBQUksQ0FBQztTQUN4QyxDQUFDLENBQUM7S0FDSjs7d0hBTFksMkJBQTJCOzRHQUEzQiwyQkFBMkIsdUVDUnhDLHV5QkFlQTsyRkRQYSwyQkFBMkI7a0JBSnZDLFNBQVM7K0JBQ0UsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgZm9ybXMgaW50ZWdyYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckZvcm1zRXhhbXBsZSB7XG4gIHJhbmdlID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbDxEYXRlIHwgbnVsbD4obnVsbCksXG4gICAgZW5kOiBuZXcgRm9ybUNvbnRyb2w8RGF0ZSB8IG51bGw+KG51bGwpLFxuICB9KTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZVwiIFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCIgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWSDigJMgTU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cblxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuc3RhcnQuaGFzRXJyb3IoJ21hdFN0YXJ0RGF0ZUludmFsaWQnKVwiPkludmFsaWQgc3RhcnQgZGF0ZTwvbWF0LWVycm9yPlxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuZW5kLmhhc0Vycm9yKCdtYXRFbmREYXRlSW52YWxpZCcpXCI+SW52YWxpZCBlbmQgZGF0ZTwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+U2VsZWN0ZWQgcmFuZ2U6IHt7cmFuZ2UudmFsdWUgfCBqc29ufX08L3A+XG4iXX0=