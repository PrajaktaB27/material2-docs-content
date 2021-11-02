import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/core";
/**
 * @title Bottom Sheet Overview
 */
export class BottomSheetOverviewExample {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetOverviewExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component });
BottomSheetOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: BottomSheetOverviewExample, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n", components: [{ type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheet }]; } });
export class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [{ token: i1.MatBottomSheetRef }], target: i0.ɵɵFactoryTarget.Component });
BottomSheetOverviewExampleSheet.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: BottomSheetOverviewExampleSheet, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n", components: [{ type: i3.MatNavList, selector: "mat-nav-list", inputs: ["disableRipple", "disabled"], exportAs: ["matNavList"] }, { type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }], directives: [{ type: i4.MatLine, selector: "[mat-line], [matLine]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheetRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFFakY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7NEhBTFUsMEJBQTBCO2dIQUExQiwwQkFBMEIscUVDVnZDLDhJQUdBO2dHRE9hLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSwrQkFBK0I7O0FBZTNDLE1BQU0sT0FBTywrQkFBK0I7SUFDMUMsWUFBb0IsZUFBbUU7UUFBbkUsb0JBQWUsR0FBZixlQUFlLENBQW9EO0lBQUcsQ0FBQztJQUUzRixRQUFRLENBQUMsS0FBaUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7aUlBTlUsK0JBQStCO3FIQUEvQiwrQkFBK0IsMkVFdEI1QywwdkJBcUJBO2dHRkNhLCtCQUErQjtrQkFKM0MsU0FBUzsrQkFDRSxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcblxuLyoqXG4gKiBAdGl0bGUgQm90dG9tIFNoZWV0IE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XG5cbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLXNoZWV0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQ+KSB7fVxuXG4gIG9wZW5MaW5rKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiIsIjxwPllvdSBoYXZlIHJlY2VpdmVkIGEgZmlsZSBjYWxsZWQgXCJjYXQtcGljdHVyZS5qcGVnXCIuPC9wPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuQm90dG9tU2hlZXQoKVwiPk9wZW4gZmlsZTwvYnV0dG9uPlxuIiwiPG1hdC1uYXYtbGlzdD5cbiAgPGEgaHJlZj1cImh0dHBzOi8va2VlcC5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgS2VlcDwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5BZGQgdG8gYSBub3RlPC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgRG9jczwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5FbWJlZCBpbiBhIGRvY3VtZW50PC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vcGx1cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgUGx1czwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5TaGFyZSB3aXRoIHlvdXIgZnJpZW5kczwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL2hhbmdvdXRzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBIYW5nb3V0czwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5TaG93IHRvIHlvdXIgY293b3JrZXJzPC9zcGFuPlxuICA8L2E+XG48L21hdC1uYXYtbGlzdD5cbiJdfQ==