import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Basic grid-list
 */
export class GridListOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: GridListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: GridListOverviewExample, isStandalone: true, selector: "grid-list-overview-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: GridListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-overview-example', standalone: true, imports: [MatGridListModule], template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1vdmVydmlldy9ncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUU5RDs7R0FFRztBQVFILE1BQU0sT0FBTyx1QkFBdUI7cUhBQXZCLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLHNGQ2JwQyxrTkFNQSx1R0RLWSxpQkFBaUI7O2tHQUVoQix1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRzFCLElBQUksV0FDUCxDQUFDLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRHcmlkTGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgZ3JpZC1saXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0R3JpZExpc3RNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjJcIiByb3dIZWlnaHQ9XCIyOjFcIj5cbiAgPG1hdC1ncmlkLXRpbGU+MTwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+MjwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+MzwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+NDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==