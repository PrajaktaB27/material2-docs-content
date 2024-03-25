import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with aria-activedescendant. */
export class CdkListboxActivedescendantExample {
    constructor() {
        this.features = ['Hydrodynamic', 'Port & Starboard Attachments', 'Turbo Drive'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: CdkListboxActivedescendantExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.1", type: CdkListboxActivedescendantExample, isStandalone: true, selector: "cdk-listbox-activedescendant-example", exportAs: ["cdkListboxActivedescendantExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-spatula-label\">\n    Spatula Features\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      cdkListboxUseActiveDescendant\n      aria-labelledby=\"example-spatula-label\"\n      class=\"example-listbox\">\n    @for (feature of features; track feature) {\n      <li [cdkOption]=\"feature\" class=\"example-option\">{{feature}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-listbox:focus .cdk-option-active {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: CdkListboxActivedescendantExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-activedescendant-example', exportAs: 'cdkListboxActivedescendantExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-spatula-label\">\n    Spatula Features\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      cdkListboxUseActiveDescendant\n      aria-labelledby=\"example-spatula-label\"\n      class=\"example-listbox\">\n    @for (feature of features; track feature) {\n      <li [cdkOption]=\"feature\" class=\"example-option\">{{feature}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-listbox:focus .cdk-option-active {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC9jZGstbGlzdGJveC1hY3RpdmVkZXNjZW5kYW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1hY3RpdmVkZXNjZW5kYW50L2Nkay1saXN0Ym94LWFjdGl2ZWRlc2NlbmRhbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0QsaURBQWlEO0FBU2pELE1BQU0sT0FBTyxpQ0FBaUM7SUFSOUM7UUFTRSxhQUFRLEdBQUcsQ0FBQyxjQUFjLEVBQUUsOEJBQThCLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDNUU7cUhBRlksaUNBQWlDO3lHQUFqQyxpQ0FBaUMsaUpDWjlDLGtoQkFnQkEsKzJCRE5ZLFVBQVUsK1dBQUUsU0FBUzs7a0dBRXBCLGlDQUFpQztrQkFSN0MsU0FBUzsrQkFDRSxzQ0FBc0MsWUFDdEMsbUNBQW1DLGNBR2pDLElBQUksV0FDUCxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1hY3RpdmVkZXNjZW5kYW50LWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hBY3RpdmVkZXNjZW5kYW50RXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1saXN0Ym94LWFjdGl2ZWRlc2NlbmRhbnQtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrTGlzdGJveCwgQ2RrT3B0aW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveEFjdGl2ZWRlc2NlbmRhbnRFeGFtcGxlIHtcbiAgZmVhdHVyZXMgPSBbJ0h5ZHJvZHluYW1pYycsICdQb3J0ICYgU3RhcmJvYXJkIEF0dGFjaG1lbnRzJywgJ1R1cmJvIERyaXZlJ107XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWNvbnRhaW5lclwiPlxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLXNwYXR1bGEtbGFiZWxcIj5cbiAgICBTcGF0dWxhIEZlYXR1cmVzXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBjZGtMaXN0Ym94TXVsdGlwbGVcbiAgICAgIGNka0xpc3Rib3hVc2VBY3RpdmVEZXNjZW5kYW50XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXNwYXR1bGEtbGFiZWxcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICBAZm9yIChmZWF0dXJlIG9mIGZlYXR1cmVzOyB0cmFjayBmZWF0dXJlKSB7XG4gICAgICA8bGkgW2Nka09wdGlvbl09XCJmZWF0dXJlXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPnt7ZmVhdHVyZX19PC9saT5cbiAgICB9XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG4iXX0=