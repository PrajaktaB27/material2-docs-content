import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with disabled options. */
export class CdkListboxDisabledExample {
    constructor() {
        this.canDrinkCtrl = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkListboxDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: CdkListboxDisabledExample, isStandalone: true, selector: "cdk-listbox-disabled-example", exportAs: ["cdkListboxDisabledExample"], ngImport: i0, template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkListboxDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-disabled-example', exportAs: 'cdkListboxDisabledExample', standalone: true, imports: [FormsModule, ReactiveFormsModule, CdkListbox, CdkOption], template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtZGlzYWJsZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LWRpc2FibGVkL2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1kaXNhYmxlZC9jZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQUUzRCw0Q0FBNEM7QUFTNUMsTUFBTSxPQUFPLHlCQUF5QjtJQVJ0QztRQVNFLGlCQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7cUhBRlkseUJBQXlCO3lHQUF6Qix5QkFBeUIsaUlDYnRDLDRyQ0FxQ0EsMG9DRDFCWSxXQUFXLGd2QkFBRSxtQkFBbUIsa05BQUUsVUFBVSwrV0FBRSxTQUFTOztrR0FFdEQseUJBQXlCO2tCQVJyQyxTQUFTOytCQUNFLDhCQUE4QixZQUM5QiwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDZGtMaXN0Ym94LCBDZGtPcHRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9saXN0Ym94JztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggZGlzYWJsZWQgb3B0aW9ucy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hEaXNhYmxlZEV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIENka0xpc3Rib3gsIENka09wdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hEaXNhYmxlZEV4YW1wbGUge1xuICBjYW5Ecmlua0N0cmwgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPGZvcm0+XG4gIDxwPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNhbi1kcmlua1wiIFtmb3JtQ29udHJvbF09XCJjYW5Ecmlua0N0cmxcIj4mbmJzcDtcbiAgICA8bGFiZWwgZm9yPVwiY2FuLWRyaW5rXCI+SSBhbSAyMSBvciBvbGRlcjwvbGFiZWw+XG4gIDwvcD5cbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIiBbY2xhc3MuZXhhbXBsZS1kaXNhYmxlZF09XCIhY2FuRHJpbmtDdHJsLnZhbHVlXCI+XG4gICAgICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS13aW5lLXR5cGUtbGFiZWxcIj5cbiAgICAgICAgV2luZSBTZWxlY3Rpb25cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dWwgY2RrTGlzdGJveFxuICAgICAgICAgIFtjZGtMaXN0Ym94RGlzYWJsZWRdPVwiIWNhbkRyaW5rQ3RybC52YWx1ZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS13aW5lLXR5cGUtbGFiZWxcIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgICAgIDxsaSBjZGtPcHRpb249XCJjYWJlcm5ldFwiXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICAgICAgQ2FiZXJuZXQgU2F1dmlnbm9uXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjZGtPcHRpb249XCJzeXJhaFwiXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICAgICAgU3lyYWhcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNka09wdGlvbj1cInppbmZhbmRlbFwiXG4gICAgICAgICAgICBjZGtPcHRpb25EaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAgICAgIFppbmZhbmRlbCA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc29sZC1vdXRcIj4oc29sZCBvdXQpPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2RrT3B0aW9uPVwicmllc2xpbmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAgICAgIFJpZXNsaW5nXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvZm9ybT5cbiJdfQ==