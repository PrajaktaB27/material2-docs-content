import { Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
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
export class CdkTreeNestedExample {
    constructor() {
        this.treeControl = new NestedTreeControl(node => node.children);
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: CdkTreeNestedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: CdkTreeNestedExample, isStandalone: true, selector: "cdk-tree-nested-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: CdkTreeNestedExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFXekQsTUFBTSxTQUFTLEdBQWU7SUFDNUI7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQyxDQUFDO0tBQ3JFO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUFDO2FBQzNEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7YUFDbEQ7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLG9CQUFvQjtJQVBqQztRQVFFLGdCQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUMsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZGO21IQUxZLG9CQUFvQjt1R0FBcEIsb0JBQW9CLG1GQzdDakMsKzlCQW9CQSx1VUR1QlksYUFBYSwwbEJBQUUsZUFBZSwySUFBRSxhQUFhOztnR0FFNUMsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLHlCQUF5QixjQUd2QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXJyYXlEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtOZXN0ZWRUcmVlQ29udHJvbCwgQ2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEZvb2QgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYWwgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFt7bmFtZTogJ0FwcGxlJ30sIHtuYW1lOiAnQmFuYW5hJ30sIHtuYW1lOiAnRnJ1aXQgbG9vcHMnfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgICAgY2hpbGRyZW46IFt7bmFtZTogJ0Jyb2Njb2xpJ30sIHtuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cyd9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBjaGlsZHJlbjogW3tuYW1lOiAnUHVtcGtpbnMnfSwge25hbWU6ICdDYXJyb3RzJ31dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka1RyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOZXN0ZWRFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2wgPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Rm9vZE5vZGU+KG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XG4gIGRhdGFTb3VyY2UgPSBuZXcgQXJyYXlEYXRhU291cmNlKFRSRUVfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbn1cbiIsIjxjZGstdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8Y2RrLW5lc3RlZC10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay1uZXN0ZWQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPGNkay1uZXN0ZWQtdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiIGNka1RyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICAgIDxkaXYgW2NsYXNzLmV4YW1wbGUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSlcIj5cbiAgICAgIDxuZy1jb250YWluZXIgY2RrVHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvY2RrLW5lc3RlZC10cmVlLW5vZGU+XG48L2Nkay10cmVlPlxuIl19