import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/button";
/** @title Monitoring autofill state with AutofillMonitor */
export class TextFieldAutofillMonitorExample {
    constructor() {
        this._autofill = inject(AutofillMonitor);
    }
    ngAfterViewInit() {
        this._autofill
            .monitor(this.firstName)
            .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));
        this._autofill
            .monitor(this.lastName)
            .subscribe(e => (this.lastNameAutofilled = e.isAutofilled));
    }
    ngOnDestroy() {
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: TextFieldAutofillMonitorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: TextFieldAutofillMonitorExample, isStandalone: true, selector: "text-field-autofill-monitor-example", viewQueries: [{ propertyName: "firstName", first: true, predicate: ["first"], descendants: true, read: ElementRef }, { propertyName: "lastName", first: true, predicate: ["last"], descendants: true, read: ElementRef }], ngImport: i0, template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: TextFieldAutofillMonitorExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autofill-monitor-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule], template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], propDecorators: { firstName: [{
                type: ViewChild,
                args: ['first', { read: ElementRef }]
            }], lastName: [{
                type: ViewChild,
                args: ['last', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFaEUsNERBQTREO0FBUTVELE1BQU0sT0FBTywrQkFBK0I7SUFQNUM7UUFRVSxjQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBb0I3QztJQWJDLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUzthQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTO2FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7cUhBcEJVLCtCQUErQjt5R0FBL0IsK0JBQStCLDhLQUdmLFVBQVUsMkZBQ1gsVUFBVSw2QkNsQnRDLDRkQWlCQSxxR0RMWSxrQkFBa0Isa1lBQUUsY0FBYyxpWUFBRSxlQUFlOztrR0FFbEQsK0JBQStCO2tCQVAzQyxTQUFTOytCQUNFLHFDQUFxQyxjQUduQyxJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDOzhCQUt0QixTQUFTO3NCQUFoRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Z0JBQ0MsUUFBUTtzQkFBOUMsU0FBUzt1QkFBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRvZmlsbE1vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgd2l0aCBBdXRvZmlsbE1vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9hdXRvZmlsbCA9IGluamVjdChBdXRvZmlsbE1vbml0b3IpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpcnN0Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBmaXJzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdsYXN0Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBsYXN0TmFtZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIGZpcnN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG4gIGxhc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGxcbiAgICAgIC5tb25pdG9yKHRoaXMuZmlyc3ROYW1lKVxuICAgICAgLnN1YnNjcmliZShlID0+ICh0aGlzLmZpcnN0TmFtZUF1dG9maWxsZWQgPSBlLmlzQXV0b2ZpbGxlZCkpO1xuICAgIHRoaXMuX2F1dG9maWxsXG4gICAgICAubW9uaXRvcih0aGlzLmxhc3ROYW1lKVxuICAgICAgLnN1YnNjcmliZShlID0+ICh0aGlzLmxhc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmZpcnN0TmFtZSk7XG4gICAgdGhpcy5fYXV0b2ZpbGwuc3RvcE1vbml0b3JpbmcodGhpcy5sYXN0TmFtZSk7XG4gIH1cbn1cbiIsIjxmb3JtIChzdWJtaXQpPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+Rmlyc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjZmlyc3Q+XG4gICAgQGlmIChmaXJzdE5hbWVBdXRvZmlsbGVkKSB7XG4gICAgICA8bWF0LWhpbnQ+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICAgIH1cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+TGFzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNsYXN0PlxuICAgIEBpZiAobGFzdE5hbWVBdXRvZmlsbGVkKSB7XG4gICAgICA8bWF0LWhpbnQ+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICAgIH1cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==