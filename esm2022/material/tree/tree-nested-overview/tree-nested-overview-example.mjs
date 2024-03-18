import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const TREE_DATA = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with nested nodes
 */
export class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl(node => node.children);
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
        this.dataSource.data = TREE_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: TreeNestedOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: TreeNestedOverviewExample, isStandalone: true, selector: "tree-nested-overview-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'Toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <!-- There is inline padding applied to this div using styles.\n          This padding value depends on the mat-icon-button width.  -->\n      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n          role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatNestedTreeNode, selector: "mat-nested-tree-node", inputs: ["matNestedTreeNode", "disabled", "tabIndex"], exportAs: ["matNestedTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: TreeNestedOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-nested-overview-example', standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'Toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <!-- There is inline padding applied to this div using styles.\n          This padding value depends on the mat-icon-button width.  -->\n      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n          role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBV3pELE1BQU0sU0FBUyxHQUFlO0lBQzVCO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQztLQUNyRTtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQzthQUMzRDtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQ2xEO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRjs7R0FFRztBQVFILE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFIQSxnQkFBVyxHQUFHLElBQUksaUJBQWlCLENBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsZUFBVSxHQUFHLElBQUksdUJBQXVCLEVBQVksQ0FBQztRQU1yRCxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFIcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7cUhBTlUseUJBQXlCO3lHQUF6Qix5QkFBeUIsd0ZDN0N0Qyw2dENBMEJBLGtrQkRpQlksYUFBYSxtdkJBQUUsZUFBZSwySUFBRSxhQUFhOztrR0FFNUMseUJBQXlCO2tCQVByQyxTQUFTOytCQUNFLDhCQUE4QixjQUc1QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmVzdGVkVHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEZvb2QgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYWwgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFt7bmFtZTogJ0FwcGxlJ30sIHtuYW1lOiAnQmFuYW5hJ30sIHtuYW1lOiAnRnJ1aXQgbG9vcHMnfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgICAgY2hpbGRyZW46IFt7bmFtZTogJ0Jyb2Njb2xpJ30sIHtuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cyd9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBjaGlsZHJlbjogW3tuYW1lOiAnUHVtcGtpbnMnfSwge25hbWU6ICdDYXJyb3RzJ31dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxGb29kTm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxGb29kTm9kZT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFRSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRm9vZE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiIGNsYXNzPVwiZXhhbXBsZS10cmVlXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8IS0tIFRoZXJlIGlzIGlubGluZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhpcyBub2RlIHVzaW5nIHN0eWxlcy5cbiAgICBUaGlzIHBhZGRpbmcgdmFsdWUgZGVwZW5kcyBvbiB0aGUgbWF0LWljb24tYnV0dG9uIHdpZHRoLiAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPG1hdC1uZXN0ZWQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC10cmVlLW5vZGVcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gVGhlcmUgaXMgaW5saW5lIHBhZGRpbmcgYXBwbGllZCB0byB0aGlzIGRpdiB1c2luZyBzdHlsZXMuXG4gICAgICAgICAgVGhpcyBwYWRkaW5nIHZhbHVlIGRlcGVuZHMgb24gdGhlIG1hdC1pY29uLWJ1dHRvbiB3aWR0aC4gIC0tPlxuICAgICAgPGRpdiBbY2xhc3MuZXhhbXBsZS10cmVlLWludmlzaWJsZV09XCIhdHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKVwiXG4gICAgICAgICAgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0VHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvbWF0LW5lc3RlZC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19