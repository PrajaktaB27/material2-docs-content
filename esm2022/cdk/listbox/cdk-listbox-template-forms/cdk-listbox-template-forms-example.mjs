import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with template-driven forms. */
export class CdkListboxTemplateFormsExample {
    constructor() {
        this.toppings = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];
        this.order = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkListboxTemplateFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: CdkListboxTemplateFormsExample, isStandalone: true, selector: "cdk-listbox-template-forms-example", exportAs: ["cdkListboxTemplateFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    @for (topping of toppings; track topping) {\n      <li [cdkOption]=\"topping\" class=\"example-option\">{{topping}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <strong>{{order | json}}</strong>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkListboxTemplateFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-template-forms-example', exportAs: 'cdkListboxTemplateFormsExample', standalone: true, imports: [CdkListbox, FormsModule, CdkOption, JsonPipe], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    @for (topping of toppings; track topping) {\n      <li [cdkOption]=\"topping\" class=\"example-option\">{{topping}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <strong>{{order | json}}</strong>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zL2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQUUzRCxpREFBaUQ7QUFTakQsTUFBTSxPQUFPLDhCQUE4QjtJQVIzQztRQVNFLGFBQVEsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLFVBQUssR0FBc0IsRUFBRSxDQUFDO0tBQy9COzhHQUhZLDhCQUE4QjtrR0FBOUIsOEJBQThCLDRJQ2QzQyw4bkJBb0JBLDIxQkRSWSxVQUFVLDhXQUFFLFdBQVcsK1ZBQUUsU0FBUyxxS0FBRSxRQUFROzsyRkFFM0MsOEJBQThCO2tCQVIxQyxTQUFTOytCQUNFLG9DQUFvQyxZQUNwQyxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKc29uUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrTGlzdGJveCwgQ2RrT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvbGlzdGJveCc7XG5cbi8qKiBAdGl0bGUgTGlzdGJveCB3aXRoIHRlbXBsYXRlLWRyaXZlbiBmb3Jtcy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hUZW1wbGF0ZUZvcm1zRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtMaXN0Ym94LCBGb3Jtc01vZHVsZSwgQ2RrT3B0aW9uLCBKc29uUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hUZW1wbGF0ZUZvcm1zRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gWydFeHRyYSBDaGVlc2UnLCAnTXVzaHJvb21zJywgJ1BlcHBlcm9uaScsICdTYXVzYWdlJ107XG4gIG9yZGVyOiByZWFkb25seSBzdHJpbmdbXSA9IFtdO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS10b3BwaW5ncy1sYWJlbFwiPlxuICAgIENob29zZSBUb3BwaW5nc1xuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgY2RrTGlzdGJveE11bHRpcGxlXG4gICAgICBbKG5nTW9kZWwpXT1cIm9yZGVyXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtdG9wcGluZ3MtbGFiZWxcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICBAZm9yICh0b3BwaW5nIG9mIHRvcHBpbmdzOyB0cmFjayB0b3BwaW5nKSB7XG4gICAgICA8bGkgW2Nka09wdGlvbl09XCJ0b3BwaW5nXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPnt7dG9wcGluZ319PC9saT5cbiAgICB9XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG48cD5cbiAgWW91ciBvcmRlcjogPHN0cm9uZz57e29yZGVyIHwganNvbn19PC9zdHJvbmc+Jm5ic3A7XG4gIDxidXR0b24gKGNsaWNrKT1cIm9yZGVyID0gW11cIj5SZXNldDwvYnV0dG9uPlxuPC9wPlxuIl19