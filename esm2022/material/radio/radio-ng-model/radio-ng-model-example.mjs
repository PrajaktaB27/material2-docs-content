import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
import * as i2 from "@angular/forms";
/**
 * @title Radios with ngModel
 */
export class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioNgModelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: RadioNgModelExample, isStandalone: true, selector: "radio-ng-model-example", ngImport: i0, template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioNgModelExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-ng-model-example', standalone: true, imports: [MatRadioModule, FormsModule, NgFor], template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV2RDs7R0FFRztBQVFILE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFTRSxZQUFPLEdBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RDttSEFIWSxtQkFBbUI7dUdBQW5CLG1CQUFtQixrRkNmaEMsZ2JBVUEsOE5ER1ksY0FBYyxzaUJBQUUsV0FBVywrVkFBRSxLQUFLOztnR0FFakMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1AsQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbi8qKlxuICogQHRpdGxlIFJhZGlvcyB3aXRoIG5nTW9kZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRSYWRpb01vZHVsZSwgRm9ybXNNb2R1bGUsIE5nRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9OZ01vZGVsRXhhbXBsZSB7XG4gIGZhdm9yaXRlU2Vhc29uOiBzdHJpbmc7XG4gIHNlYXNvbnM6IHN0cmluZ1tdID0gWydXaW50ZXInLCAnU3ByaW5nJywgJ1N1bW1lcicsICdBdXR1bW4nXTtcbn1cbiIsIjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5QaWNrIHlvdXIgZmF2b3JpdGUgc2Vhc29uPC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiZmF2b3JpdGVTZWFzb25cIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiICpuZ0Zvcj1cImxldCBzZWFzb24gb2Ygc2Vhc29uc1wiIFt2YWx1ZV09XCJzZWFzb25cIj5cbiAgICB7e3NlYXNvbn19XG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPGRpdj5Zb3VyIGZhdm9yaXRlIHNlYXNvbiBpczoge3tmYXZvcml0ZVNlYXNvbn19PC9kaXY+XG4iXX0=