import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
/** @title Datepicker start date */
export class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DatepickerStartViewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerStartViewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: DatepickerStartViewExample, selector: "datepicker-start-view-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n", dependencies: [{ kind: "component", type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DatepickerStartViewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-start-view-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItc3RhcnQtdmlldy9kYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsbUNBQW1DO0FBS25DLE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLRSxjQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNsQzs7dUhBRlksMEJBQTBCOzJHQUExQiwwQkFBMEIscUVDUHZDLCtWQU9BOzJGREFhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzdGFydCBkYXRlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJTdGFydFZpZXdFeGFtcGxlIHtcbiAgc3RhcnREYXRlID0gbmV3IERhdGUoMTk5MCwgMCwgMSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgc3RhcnRWaWV3PVwieWVhclwiIFtzdGFydEF0XT1cInN0YXJ0RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19