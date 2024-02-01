import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog elements
 */
export class DialogElementsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: DialogElementsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: DialogElementsExample, isStandalone: true, selector: "dialog-elements-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: DialogElementsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example', standalone: true, imports: [MatButtonModule], template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogElementsExampleDialog {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: DialogElementsExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: DialogElementsExampleDialog, isStandalone: true, selector: "dialog-elements-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Dialog with elements</h2>\n<mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: DialogElementsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example-dialog', standalone: true, imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule], template: "<h2 mat-dialog-title>Dialog with elements</h2>\n<mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsY0FBYyxHQUNmLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNoRCxDQUFDOzhHQUxVLHFCQUFxQjtrR0FBckIscUJBQXFCLG1GQ25CbEMsc0VBQ0EsMkNEZ0JZLGVBQWU7OzJGQUVkLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOztBQWdCNUIsTUFBTSxPQUFPLDJCQUEyQjs4R0FBM0IsMkJBQTJCO2tHQUEzQiwyQkFBMkIsMEZFakN4QyxxUUFLQSw0Q0YwQlksY0FBYywrSEFBRSxnQkFBZ0IseUdBQUUsZ0JBQWdCLDRIQUFFLGNBQWMsb0xBQUUsZUFBZTs7MkZBRWxGLDJCQUEyQjtrQkFOdkMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FFOUIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ0FjdGlvbnMsXG4gIE1hdERpYWxvZ0Nsb3NlLFxuICBNYXREaWFsb2dDb250ZW50LFxuICBNYXREaWFsb2dUaXRsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgZWxlbWVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRWxlbWVudHNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2cpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0RGlhbG9nVGl0bGUsIE1hdERpYWxvZ0NvbnRlbnQsIE1hdERpYWxvZ0FjdGlvbnMsIE1hdERpYWxvZ0Nsb3NlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2cge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+TGF1bmNoIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgyIG1hdC1kaWFsb2ctdGl0bGU+RGlhbG9nIHdpdGggZWxlbWVudHM8L2gyPlxuPG1hdC1kaWFsb2ctY29udGVudD5UaGlzIGRpYWxvZyBzaG93Y2FzZXMgdGhlIHRpdGxlLCBjbG9zZSwgY29udGVudCBhbmQgYWN0aW9ucyBlbGVtZW50cy48L21hdC1kaWFsb2ctY29udGVudD5cbjxtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPkNsb3NlPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==