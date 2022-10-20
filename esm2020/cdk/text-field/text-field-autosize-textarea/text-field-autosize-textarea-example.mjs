import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/text-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
/** @title Auto-resizing textarea */
export class TextFieldAutosizeTextareaExample {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.0", type: TextFieldAutosizeTextareaExample, selector: "text-field-autosize-textarea-example", viewQueries: [{ propertyName: "autosize", first: true, predicate: ["autosize"], descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\" appearance=\"fill\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "component", type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autosize-textarea-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\" appearance=\"fill\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { autosize: [{
                type: ViewChild,
                args: ['autosize']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFFcEMsb0NBQW9DO0FBTXBDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBSXZDLGFBQWE7UUFDWCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7a0lBUlUsZ0NBQWdDO3NIQUFoQyxnQ0FBZ0Msa0xDVjdDLG96QkFvQkE7Z0dEVmEsZ0NBQWdDO2tCQUw1QyxTQUFTOytCQUNFLHNDQUFzQzs2RkFPekIsUUFBUTtzQkFBOUIsU0FBUzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgQXV0by1yZXNpemluZyB0ZXh0YXJlYSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIEBWaWV3Q2hpbGQoJ2F1dG9zaXplJykgYXV0b3NpemU6IENka1RleHRhcmVhQXV0b3NpemU7XG5cbiAgdHJpZ2dlclJlc2l6ZSgpIHtcbiAgICAvLyBXYWl0IGZvciBjaGFuZ2VzIHRvIGJlIGFwcGxpZWQsIHRoZW4gdHJpZ2dlciB0ZXh0YXJlYSByZXNpemUuXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXV0b3NpemUucmVzaXplVG9GaXRDb250ZW50KHRydWUpKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICNmb250U2l6ZSB2YWx1ZT1cIjE2cHhcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJSZXNpemUoKVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTBweFwiPjEwcHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMnB4XCI+MTJweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE0cHhcIj4xNHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTZweFwiPjE2cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxOHB4XCI+MThweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjIwcHhcIj4yMHB4PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgW3N0eWxlLmZvbnRTaXplXT1cImZvbnRTaXplLnZhbHVlXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5BdXRvc2l6ZSB0ZXh0YXJlYTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka1RleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICNhdXRvc2l6ZT1cImNka1RleHRhcmVhQXV0b3NpemVcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNaW5Sb3dzPVwiMVwiXG4gICAgICAgICAgICBjZGtBdXRvc2l6ZU1heFJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=