import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with ink bar fit to content
 */
export class TabGroupInkBarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TabGroupInkBarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TabGroupInkBarExample, isStandalone: true, selector: "tab-group-ink-bar-example", ngImport: i0, template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TabGroupInkBarExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-ink-bar-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWluay1iYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWluay1iYXIvdGFiLWdyb3VwLWluay1iYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWluay1iYXIvdGFiLWdyb3VwLWluay1iYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8scUJBQXFCO21IQUFyQixxQkFBcUI7dUdBQXJCLHFCQUFxQixxRkNabEMsbVFBTUEsMkNESVksYUFBYTs7Z0dBRVoscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBpbmsgYmFyIGZpdCB0byBjb250ZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1pbmstYmFyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1pbmstYmFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBJbmtCYXJFeGFtcGxlIHt9XG4iLCI8bWF0LXRhYi1ncm91cCBmaXRJbmtCYXJUb0NvbnRlbnQ+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZvdXJ0aFwiIGRpc2FibGVkPkNvbnRlbnQgNDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==