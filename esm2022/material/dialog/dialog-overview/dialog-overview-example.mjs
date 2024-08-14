import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
/**
 * @title Dialog Overview
 */
export class DialogOverviewExample {
    constructor() {
        this.animal = signal('');
        this.name = model('');
        this.dialog = inject(MatDialog);
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name(), animal: this.animal() },
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result !== undefined) {
                this.animal.set(result);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: DialogOverviewExample, isStandalone: true, selector: "dialog-overview-example", inputs: { name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { name: "nameChange" }, ngImport: i0, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n    <li>\n      You chose: <em>{{animal()}}</em>\n    </li>\n  }\n</ol>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\" />\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal()) {\n    <li>\n      You chose: <em>{{animal()}}</em>\n    </li>\n  }\n</ol>\n" }]
        }] });
export class DialogOverviewExampleDialog {
    constructor() {
        this.dialogRef = inject((MatDialogRef));
        this.data = inject(MAT_DIALOG_DATA);
        this.animal = model(this.data.animal);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogOverviewExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.0-next.2", type: DialogOverviewExampleDialog, isStandalone: true, selector: "dialog-overview-example-dialog", inputs: { animal: { classPropertyName: "animal", publicName: "animal", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { animal: "animalChange" }, ngImport: i0, template: "<h2 mat-dialog-title>Hi {{data.name}}</h2>\n<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example-dialog', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatButtonModule,
                        MatDialogTitle,
                        MatDialogContent,
                        MatDialogActions,
                        MatDialogClose,
                    ], template: "<h2 mat-dialog-title>Hi {{data.name}}</h2>\n<mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"animal\" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"animal()\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGNBQWMsR0FDZixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0FBT3ZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHFCQUFxQjtJQVBsQztRQVFXLFdBQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsU0FBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixXQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBY3JDO0lBWkMsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQzlELElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQztTQUNqRCxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztxSEFoQlUscUJBQXFCO3lHQUFyQixxQkFBcUIscVBDOUJsQyw2VkFnQkEsMkNEV1ksa0JBQWtCLDBTQUFFLGNBQWMsaVlBQUUsV0FBVyw4bUJBQUUsZUFBZTs7a0dBRy9ELHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUMsbUJBQzFELHVCQUF1QixDQUFDLE1BQU07O0FBb0NqRCxNQUFNLE9BQU8sMkJBQTJCO0lBZnhDO1FBZ0JXLGNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQSxZQUF5QyxDQUFBLENBQUMsQ0FBQztRQUM5RCxTQUFJLEdBQUcsTUFBTSxDQUFhLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLFdBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUszQztJQUhDLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7cUhBUFUsMkJBQTJCO3lHQUEzQiwyQkFBMkIsc1FFaEV4QyxzY0FZQSwyQ0YwQ0ksa0JBQWtCLDBTQUNsQixjQUFjLGlZQUNkLFdBQVcsOG1CQUNYLGVBQWUsNE5BQ2YsY0FBYywrSEFDZCxnQkFBZ0IseUdBQ2hCLGdCQUFnQiw0SEFDaEIsY0FBYzs7a0dBR0wsMkJBQTJCO2tCQWZ2QyxTQUFTOytCQUNFLGdDQUFnQyxjQUU5QixJQUFJLFdBQ1A7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixjQUFjO3FCQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIG1vZGVsLCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge1xuICBNQVRfRElBTE9HX0RBVEEsXG4gIE1hdERpYWxvZyxcbiAgTWF0RGlhbG9nQWN0aW9ucyxcbiAgTWF0RGlhbG9nQ2xvc2UsXG4gIE1hdERpYWxvZ0NvbnRlbnQsXG4gIE1hdERpYWxvZ1JlZixcbiAgTWF0RGlhbG9nVGl0bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyBPdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSB7XG4gIHJlYWRvbmx5IGFuaW1hbCA9IHNpZ25hbCgnJyk7XG4gIHJlYWRvbmx5IG5hbWUgPSBtb2RlbCgnJyk7XG4gIHJlYWRvbmx5IGRpYWxvZyA9IGluamVjdChNYXREaWFsb2cpO1xuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUoKSwgYW5pbWFsOiB0aGlzLmFuaW1hbCgpfSxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYW5pbWFsLnNldChyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dUaXRsZSxcbiAgICBNYXREaWFsb2dDb250ZW50LFxuICAgIE1hdERpYWxvZ0FjdGlvbnMsXG4gICAgTWF0RGlhbG9nQ2xvc2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyB7XG4gIHJlYWRvbmx5IGRpYWxvZ1JlZiA9IGluamVjdChNYXREaWFsb2dSZWY8RGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nPik7XG4gIHJlYWRvbmx5IGRhdGEgPSBpbmplY3Q8RGlhbG9nRGF0YT4oTUFUX0RJQUxPR19EQVRBKTtcbiAgcmVhZG9ubHkgYW5pbWFsID0gbW9kZWwodGhpcy5kYXRhLmFuaW1hbCk7XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+V2hhdCdzIHlvdXIgbmFtZT88L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm5hbWVcIiAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5QaWNrIG9uZTwvYnV0dG9uPlxuICA8L2xpPlxuICBAaWYgKGFuaW1hbCgpKSB7XG4gICAgPGxpPlxuICAgICAgWW91IGNob3NlOiA8ZW0+e3thbmltYWwoKX19PC9lbT5cbiAgICA8L2xpPlxuICB9XG48L29sPlxuIiwiPGgyIG1hdC1kaWFsb2ctdGl0bGU+SGkge3tkYXRhLm5hbWV9fTwvaDI+XG48bWF0LWRpYWxvZy1jb250ZW50PlxuICA8cD5XaGF0J3MgeW91ciBmYXZvcml0ZSBhbmltYWw/PC9wPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBBbmltYWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJhbmltYWxcIiAvPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uTm9DbGljaygpXCI+Tm8gVGhhbmtzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJhbmltYWwoKVwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG4iXX0=