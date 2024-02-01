import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
/**
 * @title Table with multiple header and footer rows
 */
export class TableMultipleHeaderFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: TableMultipleHeaderFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: TableMultipleHeaderFooterExample, isStandalone: true, selector: "table-multiple-header-footer-example", ngImport: i0, template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <!-- Item Description Column -->\n  <ng-container matColumnDef=\"item-description\">\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n  </ng-container>\n\n  <!-- Cost Description Column -->\n  <ng-container matColumnDef=\"cost-description\">\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n  </ng-container>\n\n  <!-- Disclaimer column -->\n  <ng-container matColumnDef=\"disclaimer\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n      Please note that the cost of items displayed are completely and totally made up.\n    </td>\n  </ng-container>\n\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n      class=\"example-first-header-row\">\n  </tr>\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n      class=\"example-second-header-row\">\n  </tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  font-style: italic;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "pipe", type: CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: TableMultipleHeaderFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-multiple-header-footer-example', standalone: true, imports: [MatTableModule, CurrencyPipe], template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <!-- Item Description Column -->\n  <ng-container matColumnDef=\"item-description\">\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n  </ng-container>\n\n  <!-- Cost Description Column -->\n  <ng-container matColumnDef=\"cost-description\">\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n  </ng-container>\n\n  <!-- Disclaimer column -->\n  <ng-container matColumnDef=\"disclaimer\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n      Please note that the cost of items displayed are completely and totally made up.\n    </td>\n  </ng-container>\n\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n      class=\"example-first-header-row\">\n  </tr>\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n      class=\"example-second-header-row\">\n  </tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  font-style: italic;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyL3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBT3ZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGdDQUFnQztJQVA3QztRQVFFLHFCQUFnQixHQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLGlCQUFZLEdBQWtCO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1NBQzlCLENBQUM7S0FNSDtJQUpDLCtDQUErQztJQUMvQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OEdBZFUsZ0NBQWdDO2tHQUFoQyxnQ0FBZ0MsZ0dDbkI3QyxrNERBNkNBLGlVRDVCWSxjQUFjLCs3Q0FBRSxZQUFZOzsyRkFFM0IsZ0NBQWdDO2tCQVA1QyxTQUFTOytCQUNFLHNDQUFzQyxjQUdwQyxJQUFJLFdBQ1AsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDdXJyZW5jeVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGl0ZW06IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIG11bHRpcGxlIGhlYWRlciBhbmQgZm9vdGVyIHJvd3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZSwgQ3VycmVuY3lQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaXRlbScsICdjb3N0J107XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtcbiAgICB7aXRlbTogJ0JlYWNoIGJhbGwnLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ1Rvd2VsJywgY29zdDogNX0sXG4gICAge2l0ZW06ICdGcmlzYmVlJywgY29zdDogMn0sXG4gICAge2l0ZW06ICdTdW5zY3JlZW4nLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ0Nvb2xlcicsIGNvc3Q6IDI1fSxcbiAgICB7aXRlbTogJ1N3aW0gc3VpdCcsIGNvc3Q6IDE1fSxcbiAgXTtcblxuICAvKiogR2V0cyB0aGUgdG90YWwgY29zdCBvZiBhbGwgdHJhbnNhY3Rpb25zLiAqL1xuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25zLm1hcCh0ID0+IHQuY29zdCkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwidHJhbnNhY3Rpb25zXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDwhLS0gSXRlbSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaXRlbVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEl0ZW0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5pdGVtfX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBUb3RhbCA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvc3QgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvc3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uY29zdCB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiB7e2dldFRvdGFsQ29zdCgpIHwgY3VycmVuY3l9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEl0ZW0gRGVzY3JpcHRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIml0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIG9mIHRoZSBpdGVtIHB1cmNoYXNlZCA8L3RoPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvc3QgRGVzY3JpcHRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvc3QtZGVzY3JpcHRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IG9mIHRoZSBpdGVtIGluIFVTRCA8L3RoPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIERpc2NsYWltZXIgY29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImRpc2NsYWltZXJcIj5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmIGNvbHNwYW49XCIyXCI+XG4gICAgICBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBjb3N0IG9mIGl0ZW1zIGRpc3BsYXllZCBhcmUgY29tcGxldGVseSBhbmQgdG90YWxseSBtYWRlIHVwLlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVGhlIHRhYmxlIHdpbGwgcmVuZGVyIHR3byBoZWFkZXIgcm93cywgb25lIGRhdGEgcm93IHBlciBkYXRhIG9iamVjdCwgYW5kIHR3byBmb290ZXIgcm93cy4gLS0+XG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtZmlyc3QtaGVhZGVyLXJvd1wiPlxuICA8L3RyPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cIlsnaXRlbS1kZXNjcmlwdGlvbicsICdjb3N0LWRlc2NyaXB0aW9uJ11cIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLXNlY29uZC1oZWFkZXItcm93XCI+XG4gIDwvdHI+XG5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIiBjbGFzcz1cImV4YW1wbGUtZmlyc3QtZm9vdGVyLXJvd1wiPjwvdHI+XG4gIDx0ciBtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiWydkaXNjbGFpbWVyJ11cIiBjbGFzcz1cImV4YW1wbGUtc2Vjb25kLWZvb3Rlci1yb3dcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==