import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog Animations
 */
export class DialogAnimationsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(enterAnimationDuration, exitAnimationDuration) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
}
DialogAnimationsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogAnimationsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogAnimationsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: DialogAnimationsExample, selector: "dialog-animations-example", ngImport: i0, template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example', template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
export class DialogAnimationsExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
DialogAnimationsExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogAnimationsExampleDialog, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DialogAnimationsExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: DialogAnimationsExampleDialog, selector: "dialog-animations-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogAnimationsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example-dialog', template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1hbmltYXRpb25zL2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVqRTs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsVUFBVSxDQUFDLHNCQUE4QixFQUFFLHFCQUE2QjtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QyxLQUFLLEVBQUUsT0FBTztZQUNkLHNCQUFzQjtZQUN0QixxQkFBcUI7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEhBVFUsdUJBQXVCO2dIQUF2Qix1QkFBdUIsaUVDWHBDLDJNQUVBO21HRFNhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSwyQkFBMkI7O0FBb0J2QyxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFlBQW1CLFNBQXNEO1FBQXRELGNBQVMsR0FBVCxTQUFTLENBQTZDO0lBQUcsQ0FBQzs7a0lBRGxFLDZCQUE2QjtzSEFBN0IsNkJBQTZCLHdFRTNCMUMseVFBUUE7bUdGbUJhLDZCQUE2QjtrQkFKekMsU0FBUzsrQkFDRSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgQW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZyhlbnRlckFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcsIGV4aXRBbmltYXRpb25EdXJhdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBbmltYXRpb25zRXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBlbnRlckFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZXhpdEFuaW1hdGlvbkR1cmF0aW9uLFxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2c+KSB7fVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygnMG1zJywgJzBtcycpXCI+T3BlbiBkaWFsb2cgd2l0aG91dCBhbmltYXRpb248L2J1dHRvbj5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJzMwMDBtcycsICcxNTAwbXMnKVwiPk9wZW4gZGlhbG9nIHNsb3dseTwvYnV0dG9uPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+RGVsZXRlIGZpbGU8L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIFdvdWxkIHlvdSBsaWtlIHRvIGRlbGV0ZSBjYXQuanBlZz9cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPk5vPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=