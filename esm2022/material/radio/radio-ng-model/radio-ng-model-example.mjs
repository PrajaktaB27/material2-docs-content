import { Component } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: RadioNgModelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-rc.0", type: RadioNgModelExample, isStandalone: true, selector: "radio-ng-model-example", ngImport: i0, template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  @for (season of seasons; track season) {\n    <mat-radio-button class=\"example-radio-button\" [value]=\"season\">{{season}}</mat-radio-button>\n  }\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: RadioNgModelExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-ng-model-example', standalone: true, imports: [MatRadioModule, FormsModule], template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  @for (season of seasons; track season) {\n    <mat-radio-button class=\"example-radio-button\" [value]=\"season\">{{season}}</mat-radio-button>\n  }\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRXZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG1CQUFtQjtJQVBoQztRQVNFLFlBQU8sR0FBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO21IQUhZLG1CQUFtQjt1R0FBbkIsbUJBQW1CLGtGQ2RoQyx3YkFVQSw4TkRFWSxjQUFjLHNpQkFBRSxXQUFXOztnR0FFMUIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1AsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuXG4vKipcbiAqIEB0aXRsZSBSYWRpb3Mgd2l0aCBuZ01vZGVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1uZy1tb2RlbC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0UmFkaW9Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9OZ01vZGVsRXhhbXBsZSB7XG4gIGZhdm9yaXRlU2Vhc29uOiBzdHJpbmc7XG4gIHNlYXNvbnM6IHN0cmluZ1tdID0gWydXaW50ZXInLCAnU3ByaW5nJywgJ1N1bW1lcicsICdBdXR1bW4nXTtcbn1cbiIsIjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5QaWNrIHlvdXIgZmF2b3JpdGUgc2Vhc29uPC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiZmF2b3JpdGVTZWFzb25cIj5cbiAgQGZvciAoc2Vhc29uIG9mIHNlYXNvbnM7IHRyYWNrIHNlYXNvbikge1xuICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPVwic2Vhc29uXCI+e3tzZWFzb259fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgfVxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48ZGl2PllvdXIgZmF2b3JpdGUgc2Vhc29uIGlzOiB7e2Zhdm9yaXRlU2Vhc29ufX08L2Rpdj5cbiJdfQ==