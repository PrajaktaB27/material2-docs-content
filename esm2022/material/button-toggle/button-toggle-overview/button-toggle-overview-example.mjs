import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Basic button-toggles
 */
export class ButtonToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ButtonToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: ButtonToggleOverviewExample, isStandalone: true, selector: "button-toggle-overview-example", ngImport: i0, template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ButtonToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-overview-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3L2J1dHRvbi10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFdEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sMkJBQTJCOzhHQUEzQiwyQkFBMkI7a0dBQTNCLDJCQUEyQiwwRkNaeEMsOFNBS0EsMkNES1kscUJBQXFCOzsyRkFFcEIsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLGdDQUFnQyxjQUU5QixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgYnV0dG9uLXRvZ2dsZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Ub2dnbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiJdfQ==