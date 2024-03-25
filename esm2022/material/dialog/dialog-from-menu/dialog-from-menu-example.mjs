import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, } from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/menu";
/**
 * @title Dialog launched from a menu
 */
export class DialogFromMenuExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        // #enddocregion focus-restoration
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: DialogFromMenuExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.1", type: DialogFromMenuExample, isStandalone: true, selector: "dialog-from-menu-example", viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: ["menuTrigger"], descendants: true }], ngImport: i0, template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: DialogFromMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-example', standalone: true, imports: [MatButtonModule, MatMenuModule], template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { menuTrigger: [{
                type: ViewChild,
                args: ['menuTrigger']
            }] } });
export class DialogFromMenuExampleDialog {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: DialogFromMenuExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.1", type: DialogFromMenuExampleDialog, isStandalone: true, selector: "dialog-from-menu-dialog", ngImport: i0, template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: DialogFromMenuExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-dialog', standalone: true, imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule], template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBQyxjQUFjLEVBQUUsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUN6RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsVUFBVTtRQUNSLCtCQUErQjtRQUMvQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRXZGLG9FQUFvRTtRQUNwRSx3RUFBd0U7UUFDeEUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEUsa0NBQWtDO0lBQ3BDLENBQUM7cUhBYlUscUJBQXFCO3lHQUFyQixxQkFBcUIsZ01DbEJsQyxnTUFJQSwyQ0RZWSxlQUFlLDJOQUFFLGFBQWE7O2tHQUU3QixxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBRXhCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7OEVBR2YsV0FBVztzQkFBcEMsU0FBUzt1QkFBQyxhQUFhOztBQXFCMUIsTUFBTSxPQUFPLDJCQUEyQjtxSEFBM0IsMkJBQTJCO3lHQUEzQiwyQkFBMkIsbUZFeEN4QyxxS0FNQSw0Q0ZnQ1ksZ0JBQWdCLHlHQUFFLGdCQUFnQiw0SEFBRSxjQUFjLG9MQUFFLGVBQWU7O2tHQUVsRSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZyxcbiAgTWF0RGlhbG9nQWN0aW9ucyxcbiAgTWF0RGlhbG9nQ2xvc2UsXG4gIE1hdERpYWxvZ0NvbnRlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdE1lbnVUcmlnZ2VyLCBNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIGxhdW5jaGVkIGZyb20gYSBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRNZW51TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRnJvbU1lbnVFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgnbWVudVRyaWdnZXInKSBtZW51VHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgLy8gI2RvY3JlZ2lvbiBmb2N1cy1yZXN0b3JhdGlvblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLCB7cmVzdG9yZUZvY3VzOiBmYWxzZX0pO1xuXG4gICAgLy8gTWFudWFsbHkgcmVzdG9yZSBmb2N1cyB0byB0aGUgbWVudSB0cmlnZ2VyIHNpbmNlIHRoZSBlbGVtZW50IHRoYXRcbiAgICAvLyBvcGVucyB0aGUgZGlhbG9nIHdvbid0IGJlIGluIHRoZSBET00gYW55IG1vcmUgd2hlbiB0aGUgZGlhbG9nIGNsb3Nlcy5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tZW51VHJpZ2dlci5mb2N1cygpKTtcbiAgICAvLyAjZW5kZG9jcmVnaW9uIGZvY3VzLXJlc3RvcmF0aW9uXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWZyb20tbWVudS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXREaWFsb2dDb250ZW50LCBNYXREaWFsb2dBY3Rpb25zLCBNYXREaWFsb2dDbG9zZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiAjbWVudVRyaWdnZXI+TWVudTwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG48L21hdC1tZW51PlxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cbiAgVGhpcyBpcyBhIGRpYWxvZ1xuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5Pa2F5PC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==