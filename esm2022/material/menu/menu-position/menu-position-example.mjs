import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Menu positioning
 */
export class MenuPositionExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: MenuPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: MenuPositionExample, isStandalone: true, selector: "menu-position-example", ngImport: i0, template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<!-- #docregion menu-position -->\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n<!-- #enddocregion menu-position -->\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: MenuPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-position-example', standalone: true, imports: [MatButtonModule, MatMenuModule], template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<!-- #docregion menu-position -->\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n<!-- #enddocregion menu-position -->\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sbUJBQW1CO3FIQUFuQixtQkFBbUI7eUdBQW5CLG1CQUFtQixpRkNiaEMsbThCQTBCQSwyQ0RmWSxlQUFlLDJOQUFFLGFBQWE7O2tHQUU3QixtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBRXJCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIE1lbnUgcG9zaXRpb25pbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdE1lbnVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51UG9zaXRpb25FeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFib3ZlTWVudVwiPkFib3ZlPC9idXR0b24+XG48IS0tICNkb2NyZWdpb24gbWVudS1wb3NpdGlvbiAtLT5cbjxtYXQtbWVudSAjYWJvdmVNZW51PVwibWF0TWVudVwiIHlQb3NpdGlvbj1cImFib3ZlXCI+XG48IS0tICNlbmRkb2NyZWdpb24gbWVudS1wb3NpdGlvbiAtLT5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImJlbG93TWVudVwiPkJlbG93PC9idXR0b24+XG48bWF0LW1lbnUgI2JlbG93TWVudT1cIm1hdE1lbnVcIiB5UG9zaXRpb249XCJiZWxvd1wiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYmVmb3JlTWVudVwiPkJlZm9yZTwvYnV0dG9uPlxuPG1hdC1tZW51ICNiZWZvcmVNZW51PVwibWF0TWVudVwiIHhQb3NpdGlvbj1cImJlZm9yZVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhZnRlck1lbnVcIj5BZnRlcjwvYnV0dG9uPlxuPG1hdC1tZW51ICNhZnRlck1lbnU9XCJtYXRNZW51XCIgeFBvc2l0aW9uPVwiYWZ0ZXJcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19