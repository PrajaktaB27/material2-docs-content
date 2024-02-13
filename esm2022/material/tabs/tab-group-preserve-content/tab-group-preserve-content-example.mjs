import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
export class TabGroupPreserveContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: TabGroupPreserveContentExample, isStandalone: true, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      style=\"border: 0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', standalone: true, imports: [MatTabsModule], template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      style=\"border: 0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sOEJBQThCO21IQUE5Qiw4QkFBOEI7dUdBQTlCLDhCQUE4Qiw4RkNaM0MsK2lCQWNBLDJDREpZLGFBQWE7O2dHQUVaLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FFbEMsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHRoYXQga2VlcHMgaXRzIGNvbnRlbnQgaW5zaWRlIHRoZSBET00gd2hlbiBpdCdzIG9mZi1zY3JlZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1wcmVzZXJ2ZS1jb250ZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1wcmVzZXJ2ZS1jb250ZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBQcmVzZXJ2ZUNvbnRlbnRFeGFtcGxlIHt9XG4iLCI8cD5TdGFydCB0aGUgdmlkZW8gaW4gdGhlIGZpcnN0IHRhYiBhbmQgbmF2aWdhdGUgdG8gdGhlIHNlY29uZCBvbmUgdG8gc2VlIGhvdyBpdCBrZWVwcyBwbGF5aW5nLjwvcD5cblxuPG1hdC10YWItZ3JvdXAgcHJlc2VydmVDb250ZW50PlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+XG4gICAgPGlmcmFtZVxuICAgICAgd2lkdGg9XCI1NjBcIlxuICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ItbGlwYWlaSUk4XCJcbiAgICAgIHN0eWxlPVwiYm9yZGVyOiAwXCJcbiAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Tm90ZSBob3cgdGhlIHZpZGVvIGZyb20gdGhlIHByZXZpb3VzIHRhYiBpcyBzdGlsbCBwbGF5aW5nLjwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==