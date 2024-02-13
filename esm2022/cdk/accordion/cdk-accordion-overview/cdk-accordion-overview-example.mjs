import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/accordion";
/**
 * @title Accordion overview
 */
export class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkAccordionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: CdkAccordionOverviewExample, isStandalone: true, selector: "cdk-accordion-overview-example", ngImport: i0, template: "<cdk-accordion class=\"example-accordion\">\n  @for (item of items; track item; let index = $index) {\n    <cdk-accordion-item\n\n      #accordionItem=\"cdkAccordionItem\"\n      class=\"example-accordion-item\"\n      role=\"button\"\n      tabindex=\"0\"\n      [attr.id]=\"'accordion-header-' + index\"\n      [attr.aria-expanded]=\"accordionItem.expanded\"\n      [attr.aria-controls]=\"'accordion-body-' + index\">\n      <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n        {{ item }}\n        <span class=\"example-accordion-item-description\">\n          Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n        </span>\n      </div>\n      <div\n        class=\"example-accordion-item-body\"\n        role=\"region\"\n        [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n        [attr.id]=\"'accordion-body-' + index\"\n        [attr.aria-labelledby]=\"'accordion-header-' + index\">\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n        excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n        veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n      </div>\n    </cdk-accordion-item>\n  }\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkAccordionModule }, { kind: "directive", type: i1.CdkAccordion, selector: "cdk-accordion, [cdkAccordion]", inputs: ["multi"], exportAs: ["cdkAccordion"] }, { kind: "directive", type: i1.CdkAccordionItem, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: ["expanded", "disabled"], outputs: ["closed", "opened", "destroyed", "expandedChange"], exportAs: ["cdkAccordionItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkAccordionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-accordion-overview-example', standalone: true, imports: [CdkAccordionModule], template: "<cdk-accordion class=\"example-accordion\">\n  @for (item of items; track item; let index = $index) {\n    <cdk-accordion-item\n\n      #accordionItem=\"cdkAccordionItem\"\n      class=\"example-accordion-item\"\n      role=\"button\"\n      tabindex=\"0\"\n      [attr.id]=\"'accordion-header-' + index\"\n      [attr.aria-expanded]=\"accordionItem.expanded\"\n      [attr.aria-controls]=\"'accordion-body-' + index\">\n      <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n        {{ item }}\n        <span class=\"example-accordion-item-description\">\n          Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n        </span>\n      </div>\n      <div\n        class=\"example-accordion-item-body\"\n        role=\"region\"\n        [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n        [attr.id]=\"'accordion-body-' + index\"\n        [attr.aria-labelledby]=\"'accordion-header-' + index\">\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n        excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n        veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n      </div>\n    </cdk-accordion-item>\n  }\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2FjY29yZGlvbi9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3L2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hY2NvcmRpb24vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFMUQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBUUUsVUFBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO21IQUhZLDJCQUEyQjt1R0FBM0IsMkJBQTJCLDBGQ2J4Qyx1dkNBK0JBLGszQkRwQlksa0JBQWtCOztnR0FFakIsMkJBQTJCO2tCQVB2QyxTQUFTOytCQUNFLGdDQUFnQyxjQUc5QixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrQWNjb3JkaW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYWNjb3JkaW9uJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrQWNjb3JkaW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaXRlbXMgPSBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJywgJ0l0ZW0gNCcsICdJdGVtIDUnXTtcbiAgZXhwYW5kZWRJbmRleCA9IDA7XG59XG4iLCI8Y2RrLWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uXCI+XG4gIEBmb3IgKGl0ZW0gb2YgaXRlbXM7IHRyYWNrIGl0ZW07IGxldCBpbmRleCA9ICRpbmRleCkge1xuICAgIDxjZGstYWNjb3JkaW9uLWl0ZW1cblxuICAgICAgI2FjY29yZGlvbkl0ZW09XCJjZGtBY2NvcmRpb25JdGVtXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbVwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICBbYXR0ci5pZF09XCInYWNjb3JkaW9uLWhlYWRlci0nICsgaW5kZXhcIlxuICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJhY2NvcmRpb25JdGVtLmV4cGFuZGVkXCJcbiAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiJ2FjY29yZGlvbi1ib2R5LScgKyBpbmRleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0taGVhZGVyXCIgKGNsaWNrKT1cImFjY29yZGlvbkl0ZW0udG9nZ2xlKClcIj5cbiAgICAgICAge3sgaXRlbSB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBDbGljayB0byB7eyBhY2NvcmRpb25JdGVtLmV4cGFuZGVkID8gJ2Nsb3NlJyA6ICdvcGVuJyB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtLWJvZHlcIlxuICAgICAgICByb2xlPVwicmVnaW9uXCJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiYWNjb3JkaW9uSXRlbS5leHBhbmRlZCA/ICcnIDogJ25vbmUnXCJcbiAgICAgICAgW2F0dHIuaWRdPVwiJ2FjY29yZGlvbi1ib2R5LScgKyBpbmRleFwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCInYWNjb3JkaW9uLWhlYWRlci0nICsgaW5kZXhcIj5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcmZlcmVuZGlzXG4gICAgICAgIGV4Y2VwdHVyaSBpbmNpZHVudCBpcHN1bSBkZWxlbml0aSBsYWJvcmUsIHRlbXBvcmUgbm9uIG5hbSBkb2xvcmlidXMgYmxhbmRpdGlpc1xuICAgICAgICB2ZXJpdGF0aXMgaWxsbyBhdXRlbSBpdXJlIGFsaXF1aWQgdWxsYW0gcmVtIHRlbmV0dXIgZGVzZXJ1bnQgdmVsaXQgY3VscGE/XG4gICAgICA8L2Rpdj5cbiAgICA8L2Nkay1hY2NvcmRpb24taXRlbT5cbiAgfVxuPC9jZGstYWNjb3JkaW9uPlxuXG4iXX0=