import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Dynamic grid-list
 */
export class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: GridListDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: GridListDynamicExample, isStandalone: true, selector: "grid-list-dynamic-example", ngImport: i0, template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n", dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: GridListDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-dynamic-example', standalone: true, imports: [MatGridListModule, NgFor], template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBUzlEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHNCQUFzQjtJQU5uQztRQU9FLFVBQUssR0FBVztZQUNkLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztTQUNuRCxDQUFDO0tBQ0g7bUhBUFksc0JBQXNCO3VHQUF0QixzQkFBc0IscUZDcEJuQyx5UUFTQSwyQ0RTWSxpQkFBaUIsa1RBQUUsS0FBSzs7Z0dBRXZCLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0R3JpZExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZSB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbHM6IG51bWJlcjtcbiAgcm93czogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIER5bmFtaWMgZ3JpZC1saXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRHcmlkTGlzdE1vZHVsZSwgTmdGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdER5bmFtaWNFeGFtcGxlIHtcbiAgdGlsZXM6IFRpbGVbXSA9IFtcbiAgICB7dGV4dDogJ09uZScsIGNvbHM6IDMsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRibHVlJ30sXG4gICAge3RleHQ6ICdUd28nLCBjb2xzOiAxLCByb3dzOiAyLCBjb2xvcjogJ2xpZ2h0Z3JlZW4nfSxcbiAgICB7dGV4dDogJ1RocmVlJywgY29sczogMSwgcm93czogMSwgY29sb3I6ICdsaWdodHBpbmsnfSxcbiAgICB7dGV4dDogJ0ZvdXInLCBjb2xzOiAyLCByb3dzOiAxLCBjb2xvcjogJyNEREJERjEnfSxcbiAgXTtcbn1cbiIsIjxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cbiAgPG1hdC1ncmlkLXRpbGVcbiAgICAgICpuZ0Zvcj1cImxldCB0aWxlIG9mIHRpbGVzXCJcbiAgICAgIFtjb2xzcGFuXT1cInRpbGUuY29sc1wiXG4gICAgICBbcm93c3Bhbl09XCJ0aWxlLnJvd3NcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwidGlsZS5jb2xvclwiPlxuICAgIHt7dGlsZS50ZXh0fX1cbiAgPC9tYXQtZ3JpZC10aWxlPlxuPC9tYXQtZ3JpZC1saXN0PlxuIl19