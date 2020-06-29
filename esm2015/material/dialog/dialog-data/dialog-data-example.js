import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
function DialogDataExampleDialog_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DialogDataExampleDialog_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
/**
 * @title Injecting data when opening a dialog
 */
export class DialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    }
}
DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogDataExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogDataExample, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example',
                templateUrl: 'dialog-data-example.html',
                styleUrls: ['dialog-data-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
export class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogDataExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Favorite Animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, " My favorite animal is: ");
        i0.ɵɵelementStart(4, "ul");
        i0.ɵɵelementStart(5, "li");
        i0.ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
        i0.ɵɵtext(7, " Panda ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "li");
        i0.ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
        i0.ɵɵtext(10, " Unicorn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
        i0.ɵɵtext(13, " Lion ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "panda");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.animal === "lion");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i3.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogDataExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-data-example-dialog',
                templateUrl: 'dialog-data-example-dialog.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWRhdGEvZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztJQ0k5RCw0QkFBc0M7SUFBQSxzQkFBUTtJQUFBLGlCQUFPOzs7SUFHckQsNEJBQXdDO0lBQUEsc0JBQVE7SUFBQSxpQkFBTzs7O0lBR3ZELDRCQUFxQztJQUFBLHNCQUFRO0lBQUEsaUJBQU87O0FESjFEOztHQUVHO0FBTUgsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxPQUFPO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0ZBVFUsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUVmOUIsaUNBQTBDO1FBQXZCLDhGQUFTLGdCQUFZLElBQUM7UUFBQywyQkFBVztRQUFBLGlCQUFTOztrREZlakQsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7QUFpQkQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUE0QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7OEZBRHJELHVCQUF1Qix1QkFDZCxlQUFlOzREQUR4Qix1QkFBdUI7UUMvQnBDLDZCQUFxQjtRQUFBLCtCQUFlO1FBQUEsaUJBQUs7UUFDekMsOEJBQ0U7UUFBQSx3Q0FDQTtRQUFBLDBCQUNFO1FBQUEsMEJBQ0U7UUFBQSwwRUFBc0M7UUFBZ0IsdUJBQ3hEO1FBQUEsaUJBQUs7UUFDTCwwQkFDRTtRQUFBLDBFQUF3QztRQUFnQiwwQkFDMUQ7UUFBQSxpQkFBSztRQUNMLDJCQUNFO1FBQUEsNEVBQXFDO1FBQWdCLHVCQUN2RDtRQUFBLGlCQUFLO1FBQ1AsaUJBQUs7UUFDUCxpQkFBTTs7UUFUTSxlQUErQjtRQUEvQixrREFBK0I7UUFHL0IsZUFBaUM7UUFBakMsb0RBQWlDO1FBR2pDLGVBQThCO1FBQTlCLGlEQUE4Qjs7a0REb0I3Qix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0M7O3NCQUVjLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYW5pbWFsOiAncGFuZGEnIHwgJ3VuaWNvcm4nIHwgJ2xpb24nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBJbmplY3RpbmcgZGF0YSB3aGVuIG9wZW5pbmcgYSBkaWFsb2dcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWRhdGEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1kYXRhLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dEYXRhRXhhbXBsZURpYWxvZywge1xuICAgICAgZGF0YToge1xuICAgICAgICBhbmltYWw6ICdwYW5kYSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+RmF2b3JpdGUgQW5pbWFsPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICBNeSBmYXZvcml0ZSBhbmltYWwgaXM6XG4gIDx1bD5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAncGFuZGEnXCI+JiMxMDAwMzs8L3NwYW4+IFBhbmRhXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAndW5pY29ybidcIj4mIzEwMDAzOzwvc3Bhbj4gVW5pY29yblxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ2xpb24nXCI+JiMxMDAwMzs8L3NwYW4+IExpb25cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG4iXX0=