import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/tabs";
/**
 * @title Tab group with dynamically changing tabs
 */
export class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
        this.selected.setValue(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: TabGroupDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: TabGroupDynamicExample, isStandalone: true, selector: "tab-group-dynamic-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  @for (tab of tabs; track tab; let index = $index) {\n    <mat-tab [label]=\"tab\">\n      Contents for {{tab}} tab\n\n      <button mat-raised-button\n              class=\"example-delete-tab-button\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Delete Tab\n      </button>\n    </mat-tab>\n  }\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i6.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i6.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: TabGroupDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatTabsModule,
                    ], template: "<mat-form-field>\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  @for (tab of tabs; track tab; let index = $index) {\n    <mat-tab [label]=\"tab\">\n      Contents for {{tab}} tab\n\n      <button mat-raised-button\n              class=\"example-delete-tab-button\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Delete Tab\n      </button>\n    </mat-tab>\n  }\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMvdGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFFaEU7O0dBRUc7QUFnQkgsTUFBTSxPQUFPLHNCQUFzQjtJQWZuQztRQWdCRSxTQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWMvQjtJQVpDLE1BQU0sQ0FBQyxpQkFBMEI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7bUhBZlUsc0JBQXNCO3VHQUF0QixzQkFBc0IscUZDMUJuQyxpNEJBNkJBLDJKRFpJLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxXQUFXLHdqQkFDWCxtQkFBbUIsaU5BQ25CLGVBQWUsMk5BQ2YsaUJBQWlCLDZXQUNqQixhQUFhOztnR0FHSixzQkFBc0I7a0JBZmxDLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUDt3QkFDUCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixhQUFhO3FCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pY2FsbHkgY2hhbmdpbmcgdGFic1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNFeGFtcGxlIHtcbiAgdGFicyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKDApO1xuXG4gIGFkZFRhYihzZWxlY3RBZnRlckFkZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMudGFicy5wdXNoKCdOZXcnKTtcblxuICAgIGlmIChzZWxlY3RBZnRlckFkZGluZykge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zZXRWYWx1ZSh0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNlbGVjdGVkLnNldFZhbHVlKGluZGV4KTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdGVkIHRhYiBpbmRleDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJzZWxlY3RlZFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hZGQtdGFiLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZFRhYihzZWxlY3RBZnRlckFkZGluZy5jaGVja2VkKVwiPlxuICAgIEFkZCBuZXcgdGFiXG4gIDwvYnV0dG9uPlxuICA8bWF0LWNoZWNrYm94ICNzZWxlY3RBZnRlckFkZGluZz4gU2VsZWN0IHRhYiBhZnRlciBhZGRpbmcgPC9tYXQtY2hlY2tib3g+XG48L2Rpdj5cblxuPG1hdC10YWItZ3JvdXAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWQudmFsdWVcIlxuICAgICAgICAgICAgICAgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwic2VsZWN0ZWQuc2V0VmFsdWUoJGV2ZW50KVwiPlxuICBAZm9yICh0YWIgb2YgdGFiczsgdHJhY2sgdGFiOyBsZXQgaW5kZXggPSAkaW5kZXgpIHtcbiAgICA8bWF0LXRhYiBbbGFiZWxdPVwidGFiXCI+XG4gICAgICBDb250ZW50cyBmb3Ige3t0YWJ9fSB0YWJcblxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b25cIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidGFicy5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlVGFiKGluZGV4KVwiPlxuICAgICAgICBEZWxldGUgVGFiXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10YWI+XG4gIH1cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==