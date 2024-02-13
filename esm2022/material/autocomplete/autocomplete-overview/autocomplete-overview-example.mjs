import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/slide-toggle";
/**
 * @title Autocomplete overview
 */
export class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl('');
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
            },
        ];
        this.filteredStates = this.stateCtrl.valueChanges.pipe(startWith(''), map(state => (state ? this._filterStates(state) : this.states.slice())));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: AutocompleteOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: AutocompleteOverviewExample, isStandalone: true, selector: "autocomplete-overview-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      @for (state of filteredStates | async; track state) {\n        <mat-option [value]=\"state.name\">\n          <img alt=\"\" class=\"example-option-img\" [src]=\"state.flag\" height=\"25\">\n          <span>{{state.name}}</span> |\n          <small>Population: {{state.population}}</small>\n        </mat-option>\n      }\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i6.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "color", "disabled", "disableRipple", "tabIndex", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: AutocompleteOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-overview-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      @for (state of filteredStates | async; track state) {\n        <mat-option [value]=\"state.name\">\n          <img alt=\"\" class=\"example-option-img\" [src]=\"state.flag\" height=\"25\">\n          <span>{{state.name}}</span> |\n          <small>Population: {{state.population}}</small>\n        </mat-option>\n      }\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBUWhFOztHQUVHO0FBZ0JILE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUdoQyxXQUFNLEdBQVk7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiwrREFBK0Q7Z0JBQy9ELElBQUksRUFBRSwwRUFBMEU7YUFDakY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLGlFQUFpRTtnQkFDakUsSUFBSSxFQUFFLDRFQUE0RTthQUNuRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw4REFBOEQ7Z0JBQzlELElBQUksRUFBRSx5RUFBeUU7YUFDaEY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsNERBQTREO2dCQUM1RCxJQUFJLEVBQUUsdUVBQXVFO2FBQzlFO1NBQ0YsQ0FBQztRQUdBLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwRCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO21IQTFDVSwyQkFBMkI7dUdBQTNCLDJCQUEyQix5RkNsQ3hDLDgyQkEwQkEsaVZEREksV0FBVywrMEJBQ1gsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLHFCQUFxQix3MUJBQ3JCLG1CQUFtQixpTkFDbkIsb0JBQW9CLDhWQUNwQixTQUFTOztnR0FHQSwyQkFBMkI7a0JBZnZDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRzdCLElBQUksV0FDUDt3QkFDUCxXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixTQUFTO3FCQUNWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGZsYWc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwb3B1bGF0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIEF1dG9jb21wbGV0ZSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBBc3luY1BpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN0YXRlQ3RybCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGZpbHRlcmVkU3RhdGVzOiBPYnNlcnZhYmxlPFN0YXRlW10+O1xuXG4gIHN0YXRlczogU3RhdGVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQXJrYW5zYXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzIuOTc4TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9BcmthbnNhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvRmxhZ19vZl9BcmthbnNhcy5zdmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NhbGlmb3JuaWEnLFxuICAgICAgcG9wdWxhdGlvbjogJzM5LjE0TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9DYWxpZm9ybmlhLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMC8wMS9GbGFnX29mX0NhbGlmb3JuaWEuc3ZnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGbG9yaWRhJyxcbiAgICAgIHBvcHVsYXRpb246ICcyMC4yN00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfRmxvcmlkYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9GbG9yaWRhLnN2ZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVGV4YXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzI3LjQ3TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9UZXhhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9UZXhhcy5zdmcnLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0YXRlcyA9IHRoaXMuc3RhdGVDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcChzdGF0ZSA9PiAoc3RhdGUgPyB0aGlzLl9maWx0ZXJTdGF0ZXMoc3RhdGUpIDogdGhpcy5zdGF0ZXMuc2xpY2UoKSkpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJTdGF0ZXModmFsdWU6IHN0cmluZyk6IFN0YXRlW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlcy5maWx0ZXIoc3RhdGUgPT4gc3RhdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInN0YXRlQ3RybFwiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICBAZm9yIChzdGF0ZSBvZiBmaWx0ZXJlZFN0YXRlcyB8IGFzeW5jOyB0cmFjayBzdGF0ZSkge1xuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwic3RhdGUubmFtZVwiPlxuICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvbi1pbWdcIiBbc3JjXT1cInN0YXRlLmZsYWdcIiBoZWlnaHQ9XCIyNVwiPlxuICAgICAgICAgIDxzcGFuPnt7c3RhdGUubmFtZX19PC9zcGFuPiB8XG4gICAgICAgICAgPHNtYWxsPlBvcHVsYXRpb246IHt7c3RhdGUucG9wdWxhdGlvbn19PC9zbWFsbD5cbiAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgfVxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8YnI+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICBbY2hlY2tlZF09XCJzdGF0ZUN0cmwuZGlzYWJsZWRcIlxuICAgIChjaGFuZ2UpPVwic3RhdGVDdHJsLmRpc2FibGVkID8gc3RhdGVDdHJsLmVuYWJsZSgpIDogc3RhdGVDdHJsLmRpc2FibGUoKVwiPlxuICAgIERpc2FibGUgSW5wdXQ/XG4gIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbjwvZm9ybT5cbiJdfQ==