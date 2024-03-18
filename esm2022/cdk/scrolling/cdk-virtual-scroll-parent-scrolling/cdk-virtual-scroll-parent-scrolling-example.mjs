import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scrolling viewport parent element */
export class CdkVirtualScrollParentScrollingExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkVirtualScrollParentScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: CdkVirtualScrollParentScrollingExample, isStandalone: true, selector: "cdk-virtual-scroll-parent-scrolling-example", ngImport: i0, template: "<div class=\"example-viewport\" cdkVirtualScrollingElement>\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</div>\n", styles: [".example-viewport {\n  flex: 1;\n  width: 200px;\n  min-height: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1.CdkVirtualScrollableElement, selector: "[cdkVirtualScrollingElement]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkVirtualScrollParentScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-parent-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<div class=\"example-viewport\" cdkVirtualScrollingElement>\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</div>\n", styles: [".example-viewport {\n  flex: 1;\n  width: 200px;\n  min-height: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFdkQsdURBQXVEO0FBU3ZELE1BQU0sT0FBTyxzQ0FBc0M7SUFSbkQ7UUFTRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRTtxSEFGWSxzQ0FBc0M7eUdBQXRDLHNDQUFzQyx1R0NabkQsMFZBT0EsNlJER1ksZUFBZTs7a0dBRWQsc0NBQXNDO2tCQVJsRCxTQUFTOytCQUNFLDZDQUE2QyxtQkFHdEMsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsaW5nIHZpZXdwb3J0IHBhcmVudCBlbGVtZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtcGFyZW50LXNjcm9sbGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtcGFyZW50LXNjcm9sbGluZy1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXBhcmVudC1zY3JvbGxpbmctZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTY3JvbGxpbmdNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsUGFyZW50U2Nyb2xsaW5nRXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiIGNka1ZpcnR1YWxTY3JvbGxpbmdFbGVtZW50PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJcIj5Db250ZW50IGJlZm9yZTwvZGl2PlxuICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGl0ZW1TaXplPVwiNTBcIj5cbiAgICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb290ZXJcIj5Db250ZW50IGFmdGVyPC9kaXY+XG48L2Rpdj5cbiJdfQ==