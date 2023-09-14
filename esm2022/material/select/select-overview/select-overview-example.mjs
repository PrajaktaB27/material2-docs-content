import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
/**
 * @title Basic select
 */
export class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: SelectOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: SelectOverviewExample, isStandalone: true, selector: "select-overview-example", ngImport: i0, template: "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: SelectOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-overview-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule], template: "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW92ZXJ2aWV3L3NlbGVjdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vdmVydmlldy9zZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBT2hFOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjtJQU5sQztRQU9FLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7S0FDSDtxSEFOWSxxQkFBcUI7eUdBQXJCLHFCQUFxQixtRkNyQmxDLHVrQkFvQkEsMkNERFksa0JBQWtCLDBTQUFFLGVBQWUsb3JCQUFFLEtBQUssa0hBQUUsY0FBYywwV0FBRSxXQUFXOztrR0FFdEUscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNlbGVjdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTmdGb3IsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ30sXG4gIF07XG59XG4iLCI8aDQ+QmFzaWMgbWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5CYXNpYyBuYXRpdmUgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZD5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==