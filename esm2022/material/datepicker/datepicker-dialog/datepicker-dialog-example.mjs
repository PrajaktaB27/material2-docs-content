import { ChangeDetectionStrategy, Component, model, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, provideNativeDateAdapter, } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
/** @title Datepicker inside a MatDialog */
export class DatepickerDialogExample {
    constructor() {
        this.dialog = inject(MatDialog);
        this.selectedDate = model(null);
    }
    openDialog() {
        const dialogRef = this.dialog.open(DatepickerDialogExampleDialog, {
            minWidth: '500px',
            data: { selectedDate: this.selectedDate() },
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedDate.set(result);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DatepickerDialogExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.0-next.2", type: DatepickerDialogExample, isStandalone: true, selector: "datepicker-dialog-example", inputs: { selectedDate: { classPropertyName: "selectedDate", publicName: "selectedDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectedDate: "selectedDateChange" }, ngImport: i0, template: "<p>Selected date: {{selectedDate()}}</p>\n<button mat-flat-button color=\"primary\" (click)=\"openDialog()\">Open Dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DatepickerDialogExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-dialog-example', standalone: true, imports: [MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Selected date: {{selectedDate()}}</p>\n<button mat-flat-button color=\"primary\" (click)=\"openDialog()\">Open Dialog</button>\n" }]
        }] });
export class DatepickerDialogExampleDialog {
    constructor() {
        this.dialogRef = inject((MatDialogRef));
        this.data = inject(MAT_DIALOG_DATA);
        this.date = new FormControl(new Date());
        const data = this.data;
        this.date.setValue(data.selectedDate);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DatepickerDialogExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: DatepickerDialogExampleDialog, isStandalone: true, selector: "datepicker-dialog-example", providers: [
            provideNativeDateAdapter(),
            { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
        ], ngImport: i0, template: "<h2 mat-dialog-title>Datepicker in a Dialog</h2>\n<mat-dialog-content align=\"center\">\n  <mat-form-field>\n    <mat-label>Select a date</mat-label>\n    <input matInput [matDatepicker]=\"picker\" [formControl]=\"date\">\n    <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Clear</button>\n  <button mat-button [mat-dialog-close]=\"date.value\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i3.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i3.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i3.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DatepickerDialogExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-dialog-example', standalone: true, imports: [
                        MatDatepickerModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule,
                    ], providers: [
                        provideNativeDateAdapter(),
                        { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
                    ], template: "<h2 mat-dialog-title>Datepicker in a Dialog</h2>\n<mat-dialog-content align=\"center\">\n  <mat-form-field>\n    <mat-label>Select a date</mat-label>\n    <input matInput [matDatepicker]=\"picker\" [formControl]=\"date\">\n    <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Clear</button>\n  <button mat-button [mat-dialog-close]=\"date.value\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaWFsb2cvZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaWFsb2cvZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpYWxvZy9kYXRlcGlja2VyLWRpYWxvZy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixHQUN6QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7O0FBTXZELDJDQUEyQztBQVEzQyxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsV0FBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFHLEtBQUssQ0FBYyxJQUFJLENBQUMsQ0FBQztLQVl6QztJQVZDLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtZQUNoRSxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3FIQWRVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLCtSQ3pCcEMscUlBRUEsMkNEb0JZLGVBQWU7O2tHQUdkLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDLG1CQUNULHVCQUF1QixDQUFDLE1BQU07O0FBb0NqRCxNQUFNLE9BQU8sNkJBQTZCO0lBUXhDO1FBUEEsY0FBUyxHQUFHLE1BQU0sQ0FDaEIsQ0FBQSxZQUEyQyxDQUFBLENBQzVDLENBQUM7UUFDRixTQUFJLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXRCLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFHMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztxSEFaVSw2QkFBNkI7eUdBQTdCLDZCQUE2Qix3RUFMN0I7WUFDVCx3QkFBd0IsRUFBRTtZQUMxQixFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7U0FDL0QsMEJFekRILHVrQkFhQSwyQ0ZrQ0ksbUJBQW1CLGlnQkFDbkIsZUFBZSwrbkJBQ2YsZUFBZSwyTkFDZixrQkFBa0IsMmFBQ2xCLGNBQWMsMFdBQ2QsbUJBQW1COztrR0FPViw2QkFBNkI7a0JBakJ6QyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1A7d0JBQ1AsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjtxQkFDcEIsYUFDVTt3QkFDVCx3QkFBd0IsRUFBRTt3QkFDMUIsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO3FCQUMvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgbW9kZWwsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7XG4gIE1BVF9EQVRFX0ZPUk1BVFMsXG4gIE1BVF9OQVRJVkVfREFURV9GT1JNQVRTLFxuICBwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csIE1hdERpYWxvZ01vZHVsZSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG59XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbnNpZGUgYSBNYXREaWFsb2cgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGlhbG9nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGlhbG9nLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpYWxvZ0V4YW1wbGUge1xuICBkaWFsb2cgPSBpbmplY3QoTWF0RGlhbG9nKTtcblxuICBzZWxlY3RlZERhdGUgPSBtb2RlbDxEYXRlIHwgbnVsbD4obnVsbCk7XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERhdGVwaWNrZXJEaWFsb2dFeGFtcGxlRGlhbG9nLCB7XG4gICAgICBtaW5XaWR0aDogJzUwMHB4JyxcbiAgICAgIGRhdGE6IHtzZWxlY3RlZERhdGU6IHRoaXMuc2VsZWN0ZWREYXRlKCl9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5zZXQocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRpYWxvZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRpYWxvZy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyKCksXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTkFUSVZFX0RBVEVfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJEaWFsb2dFeGFtcGxlRGlhbG9nIHtcbiAgZGlhbG9nUmVmID0gaW5qZWN0PE1hdERpYWxvZ1JlZjxEYXRlcGlja2VyRGlhbG9nRXhhbXBsZURpYWxvZz4+KFxuICAgIE1hdERpYWxvZ1JlZjxEYXRlcGlja2VyRGlhbG9nRXhhbXBsZURpYWxvZz4sXG4gICk7XG4gIGRhdGEgPSBpbmplY3QoTUFUX0RJQUxPR19EQVRBKTtcblxuICByZWFkb25seSBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICB0aGlzLmRhdGUuc2V0VmFsdWUoZGF0YS5zZWxlY3RlZERhdGUpO1xuICB9XG59XG4iLCI8cD5TZWxlY3RlZCBkYXRlOiB7e3NlbGVjdGVkRGF0ZSgpfX08L3A+XG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBEaWFsb2c8L2J1dHRvbj5cbiIsIjxoMiBtYXQtZGlhbG9nLXRpdGxlPkRhdGVwaWNrZXIgaW4gYSBEaWFsb2c8L2gyPlxuPG1hdC1kaWFsb2ctY29udGVudCBhbGlnbj1cImNlbnRlclwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5TZWxlY3QgYSBkYXRlPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtmb3JtQ29udHJvbF09XCJkYXRlXCI+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Q2xlYXI8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cImRhdGUudmFsdWVcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuIl19