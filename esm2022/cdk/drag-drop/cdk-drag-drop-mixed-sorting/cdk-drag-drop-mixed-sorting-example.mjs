import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop horizontal wrapping list
 */
export class CdkDragDropMixedSortingExample {
    constructor() {
        this.items = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    }
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkDragDropMixedSortingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0-next.1", type: CdkDragDropMixedSortingExample, isStandalone: true, selector: "cdk-drag-drop-mixed-sorting-example", ngImport: i0, template: "<div cdkDropList cdkDropListOrientation=\"mixed\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (item of items; track item) {\n    <div class=\"example-box\" cdkDrag>{{item}}</div>\n  }\n</div>\n", styles: [".example-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 505px;\n  max-width: 100%;\n  gap: 15px;\n  padding: 15px;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border: solid 1px #ccc;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.87);\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  text-align: center;\n  font-size: 14px;\n  min-width: 115px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkDragDropMixedSortingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-mixed-sorting-example', standalone: true, imports: [CdkDropList, CdkDrag], template: "<div cdkDropList cdkDropListOrientation=\"mixed\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (item of items; track item) {\n    <div class=\"example-box\" cdkDrag>{{item}}</div>\n  }\n</div>\n", styles: [".example-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 505px;\n  max-width: 100%;\n  gap: 15px;\n  padding: 15px;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border: solid 1px #ccc;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.87);\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  text-align: center;\n  font-size: 14px;\n  min-width: 115px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1taXhlZC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtbWl4ZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLW1peGVkLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1taXhlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtbWl4ZWQtc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sOEJBQThCO0lBUDNDO1FBUUUsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FLMUY7SUFIQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQztxSEFMVSw4QkFBOEI7eUdBQTlCLDhCQUE4QiwrRkNiM0MsNk5BS0EsczVCRE1ZLFdBQVcsK2RBQUUsT0FBTzs7a0dBRW5CLDhCQUE4QjtrQkFQMUMsU0FBUzsrQkFDRSxxQ0FBcUMsY0FHbkMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIENka0RyYWcsIENka0Ryb3BMaXN0LCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgaG9yaXpvbnRhbCB3cmFwcGluZyBsaXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtbWl4ZWQtc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLW1peGVkLXNvcnRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjZGstZHJhZy1kcm9wLW1peGVkLXNvcnRpbmctZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrRHJvcExpc3QsIENka0RyYWddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcE1peGVkU29ydGluZ0V4YW1wbGUge1xuICBpdGVtcyA9IFsnWmVybycsICdPbmUnLCAnVHdvJywgJ1RocmVlJywgJ0ZvdXInLCAnRml2ZScsICdTaXgnLCAnU2V2ZW4nLCAnRWlnaHQnLCAnTmluZSddO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLml0ZW1zLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0IGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJtaXhlZFwiIGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgQGZvciAoaXRlbSBvZiBpdGVtczsgdHJhY2sgaXRlbSkge1xuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgfVxuPC9kaXY+XG4iXX0=