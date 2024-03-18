import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/button-toggle";
import * as i3 from "@angular/material/table";
/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
export class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: TableStickyComplexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.0", type: TableStickyComplexExample, isStandalone: true, selector: "table-sticky-complex-example", ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  @for (table of tables; track table) {\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n        <th mat-header-cell *matHeaderCellDef> Position </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n        <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n        <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"filler\">\n        <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n        <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n        <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n    </table>\n  }\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i3.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i3.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i3.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: TableStickyComplexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-example', standalone: true, imports: [MatButtonModule, MatButtonToggleModule, MatTableModule], template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  @for (table of tables; track table) {\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n        <th mat-header-cell *matHeaderCellDef> Position </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n        <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n        <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"filler\">\n        <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n        <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n        <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n    </table>\n  }\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"] }]
        }], ctorParameters: () => [] });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWNvbXBsZXgtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXN0aWNreS1jb21wbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktY29tcGxleC90YWJsZS1zdGlja3ktY29tcGxleC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQXVCLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDNUYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8seUJBQXlCO0lBTXBDO1FBTEEscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFFMUIsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLDBGQUEwRjtRQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsUUFBUSxDQUFDLGlCQUF1QyxFQUFFLEVBQVU7UUFDMUQsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztxSEFwQlUseUJBQXlCO3lHQUF6Qix5QkFBeUIsd0ZDZnRDLDR4SEFnRkEsMnhCRG5FWSxlQUFlLDJOQUFFLHFCQUFxQix3bEJBQUUsY0FBYzs7a0dBRXJELHlCQUF5QjtrQkFQckMsU0FBUzsrQkFDRSw4QkFBOEIsY0FHNUIsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGNBQWMsQ0FBQzs7QUFnQ25FLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlR3JvdXAsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGVzIHdpdGggdG9nZ2xlLWFibGUgc3RpY2t5IGhlYWRlcnMsIGZvb3RlcnMsIGFuZCBjb2x1bW5zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUnLFxuICBzdHlsZVVybDogJ3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUuY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zdGlja3ktY29tcGxleC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE1hdFRhYmxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTdGlja3lDb21wbGV4RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG5cbiAgdGFibGVzID0gWzBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGggPSAyNDtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsbCgnZmlsbGVyJyk7XG5cbiAgICAvLyBUaGUgZmlyc3QgdHdvIGNvbHVtbnMgc2hvdWxkIGJlIHBvc2l0aW9uIGFuZCBuYW1lOyB0aGUgbGFzdCB0d28gY29sdW1uczogd2VpZ2h0LCBzeW1ib2xcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMF0gPSAncG9zaXRpb24nO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1sxXSA9ICduYW1lJztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMjJdID0gJ3dlaWdodCc7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zWzIzXSA9ICdzeW1ib2wnO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGJ1dHRvbiB0b2dnbGUgZ3JvdXAgY29udGFpbnMgdGhlIGlkIGFzIGFuIGFjdGl2ZSB2YWx1ZS4gKi9cbiAgaXNTdGlja3koYnV0dG9uVG9nZ2xlR3JvdXA6IE1hdEJ1dHRvblRvZ2dsZUdyb3VwLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChidXR0b25Ub2dnbGVHcm91cC52YWx1ZSB8fCBbXSkuaW5kZXhPZihpZCkgIT09IC0xO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcbiIsIjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wdXNoKHRhYmxlcy5sZW5ndGgpXCI+QWRkIHRhYmxlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wb3AoKVwiPlJlbW92ZSB0YWJsZTwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBIZWFkZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnaGVhZGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5SGVhZGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaGVhZGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJoZWFkZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBGb290ZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnZm9vdGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5Rm9vdGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZm9vdGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJmb290ZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBDb2x1bW5zOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsncG9zaXRpb24nLCAnc3ltYm9sJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0aWNreUNvbHVtbnM9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RpY2t5LXRvZ2dsZS1ncm91cFwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInBvc2l0aW9uXCI+IFBvc2l0aW9uIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwibmFtZVwiPiBOYW1lIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwid2VpZ2h0XCI+IFdlaWdodCA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInN5bWJvbFwiPiBTeW1ib2wgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiB0YWJpbmRleD1cIjBcIj5cbiAgQGZvciAodGFibGUgb2YgdGFibGVzOyB0cmFjayB0YWJsZSkge1xuICAgIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiIFtzdGlja3ldPVwiaXNTdGlja3koc3RpY2t5Q29sdW1ucywgJ3Bvc2l0aW9uJylcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUG9zaXRpb24gPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gUG9zaXRpb24gRm9vdGVyIDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCIgW3N0aWNreV09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAnbmFtZScpXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICAgICAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBOYW1lIEZvb3RlciA8L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCIgW3N0aWNreUVuZF09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAnd2VpZ2h0JylcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICAgICAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBXZWlnaHQgRm9vdGVyIDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIiBbc3RpY2t5RW5kXT1cImlzU3RpY2t5KHN0aWNreUNvbHVtbnMsICdzeW1ib2wnKVwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gICAgICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IFN5bWJvbCBGb290ZXIgPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZpbGxlclwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBGaWxsZXIgaGVhZGVyIGNlbGwgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4gRmlsbGVyIGRhdGEgY2VsbCA8L3RkPlxuICAgICAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBGaWxsZXIgZm9vdGVyIGNlbGwgPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogaXNTdGlja3koc3RpY2t5SGVhZGVycywgJ2hlYWRlci0xJylcIj48L3RyPlxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IGlzU3RpY2t5KHN0aWNreUhlYWRlcnMsICdoZWFkZXItMicpXCI+PC90cj5cblxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICAgICAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IGlzU3RpY2t5KHN0aWNreUZvb3RlcnMsICdmb290ZXItMScpXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lGb290ZXJzLCAnZm9vdGVyLTInKVwiPjwvdHI+XG4gICAgPC90YWJsZT5cbiAgfVxuPC9zZWN0aW9uPlxuIl19