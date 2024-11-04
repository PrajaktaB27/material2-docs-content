import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import * as i3 from '@angular/material/timepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter, DateAdapter } from '@angular/material/core';
import * as i4 from '@angular/forms';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JsonPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/** @title Basic timepicker */
class TimepickerOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerOverviewExample, isStandalone: true, selector: "timepicker-overview-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n<!-- #docregion minimum-setup -->\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n<!-- #enddocregion minimum-setup -->\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-overview-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n<!-- #docregion minimum-setup -->\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n<!-- #enddocregion minimum-setup -->\n</mat-form-field>\n" }]
        }] });

/** @title Timepicker forms integration */
class TimepickerFormsExample {
    formControl;
    constructor() {
        const initialValue = new Date();
        initialValue.setHours(12, 30, 0);
        this.formControl = new FormControl(initialValue);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerFormsExample, isStandalone: true, selector: "timepicker-forms-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [formControl]=\"formControl\" [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n\n<p>Value: {{formControl.value}}</p>\n<p>Touched: {{formControl.touched}}</p>\n<p>Dirty: {{formControl.dirty}}</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-forms-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [formControl]=\"formControl\" [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n\n<p>Value: {{formControl.value}}</p>\n<p>Touched: {{formControl.touched}}</p>\n<p>Dirty: {{formControl.dirty}}</p>\n" }]
        }], ctorParameters: () => [] });

/** @title Timepicker integration with datepicker */
class TimepickerDatepickerIntegrationExample {
    value;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerDatepickerIntegrationExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerDatepickerIntegrationExample, isStandalone: true, selector: "timepicker-datepicker-integration-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Meeting date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\" [(ngModel)]=\"value\">\n  <mat-datepicker #datepicker/>\n  <mat-datepicker-toggle [for]=\"datepicker\" matSuffix/>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Meeting time</mat-label>\n  <input matInput\n    [matTimepicker]=\"timepicker\"\n    [(ngModel)]=\"value\"\n    [ngModelOptions]=\"{updateOn: 'blur'}\">\n  <mat-timepicker #timepicker/>\n  <mat-timepicker-toggle [for]=\"timepicker\" matSuffix/>\n</mat-form-field>\n\n<p>Value: {{value}}</p>\n", styles: ["mat-form-field {\n  margin-right: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i4$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i4$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i4$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerDatepickerIntegrationExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-datepicker-integration-example', providers: [provideNativeDateAdapter()], imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatTimepickerModule,
                        MatDatepickerModule,
                        FormsModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Meeting date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\" [(ngModel)]=\"value\">\n  <mat-datepicker #datepicker/>\n  <mat-datepicker-toggle [for]=\"datepicker\" matSuffix/>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Meeting time</mat-label>\n  <input matInput\n    [matTimepicker]=\"timepicker\"\n    [(ngModel)]=\"value\"\n    [ngModelOptions]=\"{updateOn: 'blur'}\">\n  <mat-timepicker #timepicker/>\n  <mat-timepicker-toggle [for]=\"timepicker\" matSuffix/>\n</mat-form-field>\n\n<p>Value: {{value}}</p>\n", styles: ["mat-form-field {\n  margin-right: 16px;\n}\n"] }]
        }] });

/** @title Timepicker validation */
class TimepickerValidationExample {
    formControl = new FormControl(null);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerValidationExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.0-rc.0", type: TimepickerValidationExample, isStandalone: true, selector: "timepicker-validation-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input\n    matInput\n    [formControl]=\"formControl\"\n    [matTimepicker]=\"picker\"\n    matTimepickerMin=\"12:30\"\n    matTimepickerMax=\"17:30\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n\n  @if (formControl.errors?.['matTimepickerParse']) {\n    <mat-error>Value isn't a valid time</mat-error>\n  }\n\n  @if (formControl.errors?.['matTimepickerMin']) {\n    <mat-error>Value is too early</mat-error>\n  }\n\n  @if (formControl.errors?.['matTimepickerMax']) {\n    <mat-error>Value is too late</mat-error>\n  }\n</mat-form-field>\n\n<p>Enter a value before 12:30 PM or after 5:30 PM to see the errors</p>\n<p>Errors: {{formControl.errors | json}}</p>\n", styles: ["mat-form-field {\n  margin-bottom: 30px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: JsonPipe, name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerValidationExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-validation-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, ReactiveFormsModule, JsonPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input\n    matInput\n    [formControl]=\"formControl\"\n    [matTimepicker]=\"picker\"\n    matTimepickerMin=\"12:30\"\n    matTimepickerMax=\"17:30\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n\n  @if (formControl.errors?.['matTimepickerParse']) {\n    <mat-error>Value isn't a valid time</mat-error>\n  }\n\n  @if (formControl.errors?.['matTimepickerMin']) {\n    <mat-error>Value is too early</mat-error>\n  }\n\n  @if (formControl.errors?.['matTimepickerMax']) {\n    <mat-error>Value is too late</mat-error>\n  }\n</mat-form-field>\n\n<p>Enter a value before 12:30 PM or after 5:30 PM to see the errors</p>\n<p>Errors: {{formControl.errors | json}}</p>\n", styles: ["mat-form-field {\n  margin-bottom: 30px;\n}\n"] }]
        }] });

/** @title Timepicker options customization */
class TimepickerOptionsExample {
    customOptions = [
        { label: 'Morning', value: new Date(2024, 0, 1, 9, 0, 0) },
        { label: 'Noon', value: new Date(2024, 0, 1, 12, 0, 0) },
        { label: 'Evening', value: new Date(2024, 0, 1, 22, 0, 0) },
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerOptionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerOptionsExample, isStandalone: true, selector: "timepicker-options-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<h3>Interval examples</h3>\n\n<div>\n  <mat-form-field>\n    <mat-label>Every 45 minutes</mat-label>\n    <input matInput [matTimepicker]=\"minutesPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"minutesPicker\"/>\n    <mat-timepicker interval=\"45min\" #minutesPicker/>\n  </mat-form-field>\n</div>\n\n<div>\n  <mat-form-field>\n    <mat-label>Every 3.5 hours</mat-label>\n    <input matInput [matTimepicker]=\"hoursPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"hoursPicker\"/>\n    <mat-timepicker interval=\"3.5h\" #hoursPicker/>\n  </mat-form-field>\n</div>\n\n<h3>Custom list of options</h3>\n\n<div>\n  <mat-form-field>\n    <mat-label>Pick a time of day</mat-label>\n    <input matInput [matTimepicker]=\"customPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"customPicker\"/>\n    <mat-timepicker [options]=\"customOptions\" #customPicker/>\n  </mat-form-field>\n</div>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerOptionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-options-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<h3>Interval examples</h3>\n\n<div>\n  <mat-form-field>\n    <mat-label>Every 45 minutes</mat-label>\n    <input matInput [matTimepicker]=\"minutesPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"minutesPicker\"/>\n    <mat-timepicker interval=\"45min\" #minutesPicker/>\n  </mat-form-field>\n</div>\n\n<div>\n  <mat-form-field>\n    <mat-label>Every 3.5 hours</mat-label>\n    <input matInput [matTimepicker]=\"hoursPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"hoursPicker\"/>\n    <mat-timepicker interval=\"3.5h\" #hoursPicker/>\n  </mat-form-field>\n</div>\n\n<h3>Custom list of options</h3>\n\n<div>\n  <mat-form-field>\n    <mat-label>Pick a time of day</mat-label>\n    <input matInput [matTimepicker]=\"customPicker\">\n    <mat-timepicker-toggle matIconSuffix [for]=\"customPicker\"/>\n    <mat-timepicker [options]=\"customOptions\" #customPicker/>\n  </mat-form-field>\n</div>\n" }]
        }] });

/** @title Timepicker with custom toggle icon */
class TimepickerCustomIconExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerCustomIconExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerCustomIconExample, isStandalone: true, selector: "timepicker-custom-icon-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\">\n    <mat-icon matTimepickerToggleIcon>globe</mat-icon>\n  </mat-timepicker-toggle>\n  <mat-timepicker #picker/>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerCustomIconExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-custom-icon-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, MatIcon], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\">\n    <mat-icon matTimepickerToggleIcon>globe</mat-icon>\n  </mat-timepicker-toggle>\n  <mat-timepicker #picker/>\n</mat-form-field>\n" }]
        }] });

/** @title Timepicker with different locale */
class TimepickerLocaleExample {
    _adapter = inject(DateAdapter);
    value = new Date(2024, 0, 1, 13, 45, 0);
    switchLocale() {
        this._adapter.setLocale('bg-BG');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerLocaleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerLocaleExample, isStandalone: true, selector: "timepicker-locale-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [(ngModel)]=\"value\" [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n\n<button mat-button (click)=\"switchLocale()\">Dynamically switch to Bulgarian</button>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }, { kind: "component", type: i3.MatTimepickerToggle, selector: "mat-timepicker-toggle", inputs: ["for", "aria-label", "disabled", "tabIndex", "disableRipple"], exportAs: ["matTimepickerToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-locale-example', providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, FormsModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Pick a time</mat-label>\n  <input matInput [(ngModel)]=\"value\" [matTimepicker]=\"picker\">\n  <mat-timepicker-toggle matIconSuffix [for]=\"picker\"/>\n  <mat-timepicker #picker/>\n</mat-form-field>\n\n<button mat-button (click)=\"switchLocale()\">Dynamically switch to Bulgarian</button>\n" }]
        }] });

/**
 * @title Testing with MatTimepickerInputHarness
 */
class TimepickerHarnessExample {
    date;
    constructor() {
        const today = new Date();
        this.date = signal(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 45));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-rc.0", type: TimepickerHarnessExample, isStandalone: true, selector: "timepicker-harness-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<input [matTimepicker]=\"picker\" [(value)]=\"date\"/>\n<mat-timepicker #picker/>\n", dependencies: [{ kind: "ngmodule", type: MatTimepickerModule }, { kind: "component", type: i3.MatTimepicker, selector: "mat-timepicker", inputs: ["interval", "options", "disableRipple", "aria-label", "aria-labelledby"], outputs: ["selected", "opened", "closed"], exportAs: ["matTimepicker"] }, { kind: "directive", type: i3.MatTimepickerInput, selector: "input[matTimepicker]", inputs: ["value", "matTimepicker", "matTimepickerMin", "matTimepickerMax", "disabled"], outputs: ["valueChange"], exportAs: ["matTimepickerInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-rc.0", ngImport: i0, type: TimepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'timepicker-harness-example', providers: [provideNativeDateAdapter()], imports: [MatTimepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<input [matTimepicker]=\"picker\" [(value)]=\"date\"/>\n<mat-timepicker #picker/>\n" }]
        }], ctorParameters: () => [] });

/**
 * Generated bundle index. Do not edit.
 */

export { TimepickerCustomIconExample, TimepickerDatepickerIntegrationExample, TimepickerFormsExample, TimepickerHarnessExample, TimepickerLocaleExample, TimepickerOptionsExample, TimepickerOverviewExample, TimepickerValidationExample };
//# sourceMappingURL=timepicker.mjs.map
