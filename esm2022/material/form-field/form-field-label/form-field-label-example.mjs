import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/icon";
/** @title Form field with label */
export class FormFieldLabelExample {
    constructor() {
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = inject(FormBuilder).group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
        this.hideRequired = toSignal(this.hideRequiredControl.valueChanges);
        this.floatLabel = toSignal(this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')), { initialValue: 'auto' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: FormFieldLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFpQixrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkMsbUNBQW1DO0FBa0JuQyxNQUFNLE9BQU8scUJBQXFCO0lBakJsQztRQWtCVyx3QkFBbUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUF3QixDQUFDLENBQUM7UUFDOUQsWUFBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDM0MsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDbkMsQ0FBQyxDQUFDO1FBQ2dCLGlCQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRCxlQUFVLEdBQUcsUUFBUSxDQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFDL0QsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQ3ZCLENBQUM7S0FDSDs4R0FaWSxxQkFBcUI7a0dBQXJCLHFCQUFxQixvRkM3QmxDLHN4Q0ErQkEsNGJEYkksV0FBVywyWUFDWCxtQkFBbUIsa1dBQ25CLGlCQUFpQixvWUFDakIsY0FBYyxzaUJBQ2Qsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLGVBQWUsbXJCQUNmLGFBQWE7OzJGQUlKLHFCQUFxQjtrQkFqQmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBR3hCLElBQUksV0FDUDt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7cUJBQ2QsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7RmxvYXRMYWJlbFR5cGUsIE1hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIHJlYWRvbmx5IGhpZGVSZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xuICByZWFkb25seSBmbG9hdExhYmVsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnYXV0bycgYXMgRmxvYXRMYWJlbFR5cGUpO1xuICByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KEZvcm1CdWlsZGVyKS5ncm91cCh7XG4gICAgaGlkZVJlcXVpcmVkOiB0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wsXG4gICAgZmxvYXRMYWJlbDogdGhpcy5mbG9hdExhYmVsQ29udHJvbCxcbiAgfSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBoaWRlUmVxdWlyZWQgPSB0b1NpZ25hbCh0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVDaGFuZ2VzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZsb2F0TGFiZWwgPSB0b1NpZ25hbChcbiAgICB0aGlzLmZsb2F0TGFiZWxDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKG1hcCh2ID0+IHYgfHwgJ2F1dG8nKSksXG4gICAge2luaXRpYWxWYWx1ZTogJ2F1dG8nfSxcbiAgKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cbiAgICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJoaWRlUmVxdWlyZWRDb250cm9sXCI+SGlkZSByZXF1aXJlZCBtYXJrZXI8L21hdC1jaGVja2JveD5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPkZsb2F0IGxhYmVsOiA8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiZmxvYXRMYWJlbENvbnRyb2xcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhdXRvXCI+QXV0bzwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhbHdheXNcIj5BbHdheXM8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRzXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWQoKVwiIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWwoKVwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIiByZXF1aXJlZCAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWwoKVwiPlxuICAgICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkKClcIiBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsKClcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxzdHJvbmc+IEZhbmN5PC9zdHJvbmc+IDxlbT4gbGFiZWw8L2VtPjwvbWF0LWxhYmVsPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=