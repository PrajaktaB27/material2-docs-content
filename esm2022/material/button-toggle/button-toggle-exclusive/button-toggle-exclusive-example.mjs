import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/icon";
/**
 * @title Exclusive selection
 */
export class ButtonToggleExclusiveExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ButtonToggleExclusiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: ButtonToggleExclusiveExample, isStandalone: true, selector: "button-toggle-exclusive-example", ngImport: i0, template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: ButtonToggleExclusiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-exclusive-example', standalone: true, imports: [MatButtonToggleModule, MatIconModule], template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRXRFOztHQUVHO0FBUUgsTUFBTSxPQUFPLDRCQUE0QjtxSEFBNUIsNEJBQTRCO3lHQUE1Qiw0QkFBNEIsMkZDZHpDLHF1QkFlQSwwR0RIWSxxQkFBcUIsc2hCQUFFLGFBQWE7O2tHQUVuQyw0QkFBNEI7a0JBUHhDLFNBQVM7K0JBQ0UsaUNBQWlDLGNBRy9CLElBQUksV0FDUCxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4Y2x1c2l2ZSBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlIHt9XG4iLCI8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgI2dyb3VwPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwibGVmdFwiIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGxlZnRcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2xlZnQ8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJjZW50ZXJcIiBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiBjZW50ZXJcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2NlbnRlcjwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInJpZ2h0XCIgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24gcmlnaHRcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX3JpZ2h0PC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwianVzdGlmeVwiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGp1c3RpZnlcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2p1c3RpZnk8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXNlbGVjdGVkLXZhbHVlXCI+U2VsZWN0ZWQgdmFsdWU6IHt7Z3JvdXAudmFsdWV9fTwvZGl2PlxuIl19