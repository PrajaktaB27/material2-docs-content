import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Basic radios
 */
export class RadioOverviewExample {
}
RadioOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: RadioOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
RadioOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: RadioOverviewExample, selector: "radio-overview-example", ngImport: i0, template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: RadioOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-overview-example', template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjs7eUhBQXBCLG9CQUFvQjs2R0FBcEIsb0JBQW9CLDhEQ1ZqQyxtTUFJQTttR0RNYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyByYWRpb3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuIl19