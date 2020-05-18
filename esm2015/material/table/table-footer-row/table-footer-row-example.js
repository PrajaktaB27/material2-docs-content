/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-footer-row/table-footer-row-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r9.item, " ");
} }
function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r10.cost), " ");
} }
function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Footer row table
 */
let TableFooterRowExample = /** @class */ (() => {
    /**
     * \@title Footer row table
     */
    class TableFooterRowExample {
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
        /**
         * Gets the total cost of all transactions.
         * @return {?}
         */
        getTotalCost() {
            return this.transactions.map((/**
             * @param {?} t
             * @return {?}
             */
            t => t.cost)).reduce((/**
             * @param {?} acc
             * @param {?} value
             * @return {?}
             */
            (acc, value) => acc + value), 0);
        }
    }
    TableFooterRowExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-footer-row-example',
                    styleUrls: ['table-footer-row-example.css'],
                    templateUrl: 'table-footer-row-example.html',
                },] },
    ];
    /** @nocollapse */ TableFooterRowExample.ɵfac = function TableFooterRowExample_Factory(t) { return new (t || TableFooterRowExample)(); };
    /** @nocollapse */ TableFooterRowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
            i0.ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(5, 5);
            i0.ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
            i0.ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
            i0.ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
            i0.ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.transactions);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
        } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
    return TableFooterRowExample;
})();
export { TableFooterRowExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFooterRowExample, [{
        type: Component,
        args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableFooterRowExample.prototype.displayedColumns;
    /** @type {?} */
    TableFooterRowExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1mb290ZXItcm93L3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHcEMsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixvREFBcUI7OztJQUNqRSw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFLbEQsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQWdDOztJQUFBLGlCQUFLOzs7SUFBckMsZUFBZ0M7SUFBaEMsMkVBQWdDOzs7SUFDNUUsOEJBQXVDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQUs7OztJQUFuQyxlQUE4QjtJQUE5Qiw0RUFBOEI7OztJQUd2RSx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7OztJQUNsRSx5QkFBNEQ7Ozs7O0FEZjlELGlDQUdDOzs7SUFGQywyQkFBYTs7SUFDYiwyQkFBYTs7Ozs7QUFNZjs7OztJQUFBLE1BS2EscUJBQXFCO1FBTGxDO1lBTUUscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsaUJBQVksR0FBa0I7Z0JBQzVCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2dCQUM3QixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztnQkFDeEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7Z0JBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2dCQUM1QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztnQkFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7YUFDOUIsQ0FBQztTQU1IOzs7OztRQUhDLFlBQVk7WUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLE1BQU07Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7OztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUMzQyxXQUFXLEVBQUUsK0JBQStCO2lCQUM3Qzs7aUhBQ1kscUJBQXFCO2lGQUFyQixxQkFBcUI7WUNmbEMsZ0NBQ0U7WUFDQSxnQ0FDRTtZQUFBLG9FQUF1QztZQUN2QyxvRUFBNEM7WUFDNUMsb0VBQXVDO1lBQ3pDLDBCQUFlO1lBR2YsZ0NBQ0U7WUFBQSxvRUFBdUM7WUFDdkMsb0VBQTRDO1lBQzVDLG9FQUF1QztZQUN6QywwQkFBZTtZQUVmLG9FQUF1RDtZQUN2RCxzRUFBNkQ7WUFDN0Qsc0VBQXVEO1lBQ3pELGlCQUFROztZQWxCUyw2Q0FBMkI7WUFldkIsZUFBbUM7WUFBbkMsc0RBQW1DO1lBQzFDLGVBQWdEO1lBQWhELHVEQUFnRDtZQUN6QyxlQUFtQztZQUFuQyxzREFBbUM7O2dDRGpCeEQ7S0E4QkM7U0FmWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFdBQVcsRUFBRSwrQkFBK0I7YUFDN0M7Ozs7SUFFQyxpREFBOEM7O0lBQzlDLDZDQU9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uIHtcbiAgaXRlbTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIEZvb3RlciByb3cgdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZm9vdGVyLXJvdy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1mb290ZXItcm93LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRm9vdGVyUm93RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpdGVtJywgJ2Nvc3QnXTtcbiAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gW1xuICAgIHtpdGVtOiAnQmVhY2ggYmFsbCcsIGNvc3Q6IDR9LFxuICAgIHtpdGVtOiAnVG93ZWwnLCBjb3N0OiA1fSxcbiAgICB7aXRlbTogJ0ZyaXNiZWUnLCBjb3N0OiAyfSxcbiAgICB7aXRlbTogJ1N1bnNjcmVlbicsIGNvc3Q6IDR9LFxuICAgIHtpdGVtOiAnQ29vbGVyJywgY29zdDogMjV9LFxuICAgIHtpdGVtOiAnU3dpbSBzdWl0JywgY29zdDogMTV9LFxuICBdO1xuXG4gIC8qKiBHZXRzIHRoZSB0b3RhbCBjb3N0IG9mIGFsbCB0cmFuc2FjdGlvbnMuICovXG4gIGdldFRvdGFsQ29zdCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvbnMubWFwKHQgPT4gdC5jb3N0KS5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCAwKTtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJ0cmFuc2FjdGlvbnNcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPCEtLSBJdGVtIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpdGVtXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSXRlbSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCB0cmFuc2FjdGlvblwiPiB7e3RyYW5zYWN0aW9uLml0ZW19fSA8L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IFRvdGFsIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29zdCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiY29zdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IENvc3QgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5jb3N0IHwgY3VycmVuY3l9fSA8L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IHt7Z2V0VG90YWxDb3N0KCkgfCBjdXJyZW5jeX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gIDx0ciBtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG48L3RhYmxlPlxuIl19