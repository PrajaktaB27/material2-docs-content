import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = this._formBuilder.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    getFloatLabelValue() {
        return this.floatLabelControl.value || 'auto';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: FormFieldLabelExample, decorators: [{
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
                    ], template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFGLE9BQU8sRUFBaUIsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7QUFFN0QsbUNBQW1DO0FBaUJuQyxNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUDdDLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQXdCLENBQUMsQ0FBQztRQUM5RCxZQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDaEMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDbkMsQ0FBQyxDQUFDO0lBRTZDLENBQUM7SUFFakQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7SUFDaEQsQ0FBQztxSEFaVSxxQkFBcUI7eUdBQXJCLHFCQUFxQixvRkMxQmxDLDQyQ0FtQ0EsNGJEbkJJLFdBQVcsMllBQ1gsbUJBQW1CLGtXQUNuQixpQkFBaUIsNldBQ2pCLGNBQWMsc2lCQUNkLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxlQUFlLG1yQkFDZixhQUFhOztrR0FHSixxQkFBcUI7a0JBaEJqQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1A7d0JBQ1AsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3FCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Zsb2F0TGFiZWxUeXBlLCBNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBsYWJlbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkTGFiZWxFeGFtcGxlIHtcbiAgaGlkZVJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG4gIGZsb2F0TGFiZWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdhdXRvJyBhcyBGbG9hdExhYmVsVHlwZSk7XG4gIG9wdGlvbnMgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgaGlkZVJlcXVpcmVkOiB0aGlzLmhpZGVSZXF1aXJlZENvbnRyb2wsXG4gICAgZmxvYXRMYWJlbDogdGhpcy5mbG9hdExhYmVsQ29udHJvbCxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIGdldEZsb2F0TGFiZWxWYWx1ZSgpOiBGbG9hdExhYmVsVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvYXRMYWJlbENvbnRyb2wudmFsdWUgfHwgJ2F1dG8nO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiaGlkZVJlcXVpcmVkQ29udHJvbFwiPkhpZGUgcmVxdWlyZWQgbWFya2VyPC9tYXQtY2hlY2tib3g+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5GbG9hdCBsYWJlbDogPC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZsb2F0TGFiZWxDb250cm9sXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYXV0b1wiPkF1dG88L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiYWx3YXlzXCI+QWx3YXlzPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkc1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgICBbZmxvYXRMYWJlbF09XCJnZXRGbG9hdExhYmVsVmFsdWUoKVwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBbZmxvYXRMYWJlbF09XCJnZXRGbG9hdExhYmVsVmFsdWUoKVwiPlxuICAgICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZ2V0RmxvYXRMYWJlbFZhbHVlKClcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICAgICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICA8bWF0LWxhYmVsPjxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+IDxzdHJvbmc+IEZhbmN5PC9zdHJvbmc+IDxlbT4gbGFiZWw8L2VtPjwvbWF0LWxhYmVsPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=