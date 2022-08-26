import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/paginator";
import * as i4 from "@angular/material/slide-toggle";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
/**
 * @title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        this.length = 50;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.hidePageSize = false;
        this.showPageSizeOptions = true;
        this.showFirstLastButtons = true;
        this.disabled = false;
    }
    handlePageEvent(e) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
}
PaginatorConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: PaginatorConfigurableExample, selector: "paginator-configurable-example", ngImport: i0, template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "component", type: i3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i6.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFHeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBTUUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBZ0JsQjtJQVpDLGVBQWUsQ0FBQyxDQUFZO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyx1QkFBK0I7UUFDaEQsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7eUhBeEJVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHNFQ1h6QyxnNkRBK0NBOzJGRHBDYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBwYWdpbmF0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBsZW5ndGggPSA1MDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcGFnZUluZGV4ID0gMDtcbiAgcGFnZVNpemVPcHRpb25zID0gWzUsIDEwLCAyNV07XG5cbiAgaGlkZVBhZ2VTaXplID0gZmFsc2U7XG4gIHNob3dQYWdlU2l6ZU9wdGlvbnMgPSB0cnVlO1xuICBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgcGFnZUV2ZW50OiBQYWdlRXZlbnQ7XG5cbiAgaGFuZGxlUGFnZUV2ZW50KGU6IFBhZ2VFdmVudCkge1xuICAgIHRoaXMucGFnZUV2ZW50ID0gZTtcbiAgICB0aGlzLmxlbmd0aCA9IGUubGVuZ3RoO1xuICAgIHRoaXMucGFnZVNpemUgPSBlLnBhZ2VTaXplO1xuICAgIHRoaXMucGFnZUluZGV4ID0gZS5wYWdlSW5kZXg7XG4gIH1cblxuICBzZXRQYWdlU2l6ZU9wdGlvbnMoc2V0UGFnZVNpemVPcHRpb25zSW5wdXQ6IHN0cmluZykge1xuICAgIGlmIChzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dCkge1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dC5zcGxpdCgnLCcpLm1hcChzdHIgPT4gK3N0cik7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGVtby1vcHRpb25zXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkxlbmd0aDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxlbmd0aFwiIHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImxlbmd0aFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlBhZ2UgU2l6ZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhZ2UgU2l6ZVwiIHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+UGFnZSBJbmRleDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBhZ2UgSW5kZXhcIiB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJwYWdlSW5kZXhcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5QYWdlIFNpemUgT3B0aW9uczwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJwYWdlU2l6ZU9wdGlvbnNcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRQYWdlU2l6ZU9wdGlvbnMoJGV2ZW50KVwiXG4gICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7dXBkYXRlT246ICdibHVyJ31cIiBwbGFjZWhvbGRlcj1cIkV4LiAxMCwyNSw1MFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxkaXYgY2xhc3M9XCJkZW1vLXRvZ2dsZXNcIj5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZSBbKG5nTW9kZWwpXT1cImhpZGVQYWdlU2l6ZVwiPkhpZGUgcGFnZSBzaXplPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlIFsobmdNb2RlbCldPVwic2hvd1BhZ2VTaXplT3B0aW9uc1wiPlNob3cgbXVsdGlwbGUgcGFnZSBzaXplIG9wdGlvbnM8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJzaG93Rmlyc3RMYXN0QnV0dG9uc1wiPlNob3cgZmlyc3QvbGFzdCBidXR0b25zPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG1hdC1wYWdpbmF0b3IgI3BhZ2luYXRvclxuICAgICAgICAgICAgICAgY2xhc3M9XCJkZW1vLXBhZ2luYXRvclwiXG4gICAgICAgICAgICAgICAocGFnZSk9XCJoYW5kbGVQYWdlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgIFtzaG93Rmlyc3RMYXN0QnV0dG9uc109XCJzaG93Rmlyc3RMYXN0QnV0dG9uc1wiXG4gICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInNob3dQYWdlU2l6ZU9wdGlvbnMgPyBwYWdlU2l6ZU9wdGlvbnMgOiBbXVwiXG4gICAgICAgICAgICAgICBbaGlkZVBhZ2VTaXplXT1cImhpZGVQYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICBbcGFnZUluZGV4XT1cInBhZ2VJbmRleFwiXG4gICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cbjwvbWF0LXBhZ2luYXRvcj5cblxuPGRpdiBjbGFzcz1cImRlbW8tZGF0YVwiPlxuICA8ZGl2PiBPdXRwdXQgZXZlbnQ6IHt7KHBhZ2VFdmVudCB8IGpzb24pIHx8ICdObyBldmVudHMgZGlzcGF0Y2hlZCB5ZXQnfX0gPC9kaXY+XG4gIDxkaXY+IGdldE51bWJlck9mUGFnZXM6IHt7cGFnaW5hdG9yLmdldE51bWJlck9mUGFnZXMoKX19IDwvZGl2PlxuPC9kaXY+XG4iXX0=