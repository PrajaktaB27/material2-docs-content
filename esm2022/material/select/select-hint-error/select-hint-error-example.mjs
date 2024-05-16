import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/input";
/** @title Select with form field features */
export class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl(null, Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: SelectHintErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-rc.2", type: SelectHintErrorExample, isStandalone: true, selector: "select-hint-error-example", ngImport: i0, template: "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    @for (animal of animals; track animal) {\n      <mat-option [value]=\"animal\">{{animal.name}}</mat-option>\n    }\n  </mat-select>\n  @if (animalControl.hasError('required')) {\n    <mat-error>Please choose an animal</mat-error>\n  }\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  @if (selectFormControl.hasError('required')) {\n    <mat-error>This field is required</mat-error>\n  }\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: SelectHintErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-hint-error-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    @for (animal of animals; track animal) {\n      <mat-option [value]=\"animal\">{{animal.name}}</mat-option>\n    }\n  </mat-select>\n  @if (animalControl.hasError('required')) {\n    <mat-error>Please choose an animal</mat-error>\n  }\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  @if (selectFormControl.hasError('required')) {\n    <mat-error>This field is required</mat-error>\n  }\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFPaEUsNkNBQTZDO0FBTzdDLE1BQU0sT0FBTyxzQkFBc0I7SUFObkM7UUFPRSxrQkFBYSxHQUFHLElBQUksV0FBVyxDQUFnQixJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFFLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsWUFBTyxHQUFhO1lBQ2xCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUM7U0FDL0MsQ0FBQztLQUNIO21IQVRZLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHFGQ2xCbkMsK2hDQThCQSwyQ0RkWSxrQkFBa0IsK2RBQUUsZUFBZSxtckJBQUUsV0FBVyw4dkJBQUUsbUJBQW1CLGlOQUFFLGNBQWM7O2dHQUVwRixzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0UsMkJBQTJCLGNBRXpCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbnRlcmZhY2UgQW5pbWFsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzb3VuZDogc3RyaW5nO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGZvcm0gZmllbGQgZmVhdHVyZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIE1hdElucHV0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SGludEVycm9yRXhhbXBsZSB7XG4gIGFuaW1hbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8QW5pbWFsIHwgbnVsbD4obnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIHNlbGVjdEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgYW5pbWFsczogQW5pbWFsW10gPSBbXG4gICAge25hbWU6ICdEb2cnLCBzb3VuZDogJ1dvb2YhJ30sXG4gICAge25hbWU6ICdDYXQnLCBzb3VuZDogJ01lb3chJ30sXG4gICAge25hbWU6ICdDb3cnLCBzb3VuZDogJ01vbyEnfSxcbiAgICB7bmFtZTogJ0ZveCcsIHNvdW5kOiAnV2EtcGEtcGEtcGEtcGEtcGEtcG93ISd9LFxuICBdO1xufVxuIiwiPGg0Pm1hdCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIGFuaW1hbDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYW5pbWFsQ29udHJvbFwiIHJlcXVpcmVkPlxuICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxuICAgIEBmb3IgKGFuaW1hbCBvZiBhbmltYWxzOyB0cmFjayBhbmltYWwpIHtcbiAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJhbmltYWxcIj57e2FuaW1hbC5uYW1lfX08L21hdC1vcHRpb24+XG4gICAgfVxuICA8L21hdC1zZWxlY3Q+XG4gIEBpZiAoYW5pbWFsQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICAgIDxtYXQtZXJyb3I+UGxlYXNlIGNob29zZSBhbiBhbmltYWw8L21hdC1lcnJvcj5cbiAgfVxuICA8bWF0LWhpbnQ+e3thbmltYWxDb250cm9sLnZhbHVlPy5zb3VuZH19PC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhciAocmVxdWlyZWQpPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0Rm9ybUNvbnRyb2xcIj5cbiAgICA8b3B0aW9uIGxhYmVsPVwiLS1zZWxlY3Qgc29tZXRoaW5nIC0tXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIEBpZiAoc2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcbiAgICA8bWF0LWVycm9yPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L21hdC1lcnJvcj5cbiAgfVxuICA8bWF0LWhpbnQ+WW91IGNhbiBwaWNrIHVwIHlvdXIgZmF2b3JpdGUgY2FyIGhlcmU8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuIl19