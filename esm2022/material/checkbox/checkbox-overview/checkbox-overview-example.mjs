import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
    constructor() {
        this.task = signal({
            name: 'Parent task',
            completed: false,
            subtasks: [
                { name: 'Child task 1', completed: false },
                { name: 'Child task 2', completed: false },
                { name: 'Child task 3', completed: false },
            ],
        });
        this.partiallyComplete = computed(() => {
            const task = this.task();
            if (!task.subtasks) {
                return false;
            }
            return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
        });
    }
    update(completed, index) {
        this.task.update(task => {
            if (index === undefined) {
                task.completed = completed;
                task.subtasks?.forEach(t => (t.completed = completed));
            }
            else {
                task.subtasks[index].completed = completed;
                task.completed = task.subtasks?.every(t => t.completed) ?? true;
            }
            return { ...task };
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: CheckboxOverviewExample, isStandalone: true, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox\n      class=\"example-margin\"\n      [checked]=\"task().completed\"\n      [indeterminate]=\"partiallyComplete()\"\n      (change)=\"update($event.checked)\"\n    >\n      {{task().name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      @for (subtask of task().subtasks; track subtask; let i = $index) {\n        <li>\n          <mat-checkbox [checked]=\"subtask.completed\" (change)=\"update($event.checked, i)\">\n            {{subtask.name}}\n          </mat-checkbox>\n        </li>\n      }\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', standalone: true, imports: [MatCheckboxModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox\n      class=\"example-margin\"\n      [checked]=\"task().completed\"\n      [indeterminate]=\"partiallyComplete()\"\n      (change)=\"update($event.checked)\"\n    >\n      {{task().name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      @for (subtask of task().subtasks; track subtask; let i = $index) {\n        <li>\n          <mat-checkbox [checked]=\"subtask.completed\" (change)=\"update($event.checked, i)\">\n            {{subtask.name}}\n          </mat-checkbox>\n        </li>\n      }\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBUTdEOztHQUVHO0FBU0gsTUFBTSxPQUFPLHVCQUF1QjtJQVJwQztRQVNXLFNBQUksR0FBRyxNQUFNLENBQU87WUFDM0IsSUFBSSxFQUFFLGFBQWE7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO2dCQUN4QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztnQkFDeEMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7YUFDekM7U0FDRixDQUFDLENBQUM7UUFFTSxzQkFBaUIsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7S0FjSjtJQVpDLE1BQU0sQ0FBQyxTQUFrQixFQUFFLEtBQWM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ2xFLENBQUM7WUFDRCxPQUFPLEVBQUMsR0FBRyxJQUFJLEVBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7cUhBOUJVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLHFGQ3JCcEMsNDJCQTRCQSx1TURWWSxpQkFBaUIsb1lBQUUsV0FBVzs7a0dBRzdCLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLG1CQUN4Qix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBjb21wdXRlZCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gIHN1YnRhc2tzPzogVGFza1tdO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2hlY2tib3hNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlIHtcbiAgcmVhZG9ubHkgdGFzayA9IHNpZ25hbDxUYXNrPih7XG4gICAgbmFtZTogJ1BhcmVudCB0YXNrJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIHN1YnRhc2tzOiBbXG4gICAgICB7bmFtZTogJ0NoaWxkIHRhc2sgMScsIGNvbXBsZXRlZDogZmFsc2V9LFxuICAgICAge25hbWU6ICdDaGlsZCB0YXNrIDInLCBjb21wbGV0ZWQ6IGZhbHNlfSxcbiAgICAgIHtuYW1lOiAnQ2hpbGQgdGFzayAzJywgY29tcGxldGVkOiBmYWxzZX0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcmVhZG9ubHkgcGFydGlhbGx5Q29tcGxldGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMudGFzaygpO1xuICAgIGlmICghdGFzay5zdWJ0YXNrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFzay5zdWJ0YXNrcy5zb21lKHQgPT4gdC5jb21wbGV0ZWQpICYmICF0YXNrLnN1YnRhc2tzLmV2ZXJ5KHQgPT4gdC5jb21wbGV0ZWQpO1xuICB9KTtcblxuICB1cGRhdGUoY29tcGxldGVkOiBib29sZWFuLCBpbmRleD86IG51bWJlcikge1xuICAgIHRoaXMudGFzay51cGRhdGUodGFzayA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgdGFzay5zdWJ0YXNrcz8uZm9yRWFjaCh0ID0+ICh0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFzay5zdWJ0YXNrcyFbaW5kZXhdLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0YXNrLnN1YnRhc2tzPy5ldmVyeSh0ID0+IHQuY29tcGxldGVkKSA/PyB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsuLi50YXNrfTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q2hlY2sgbWUhPC9tYXQtY2hlY2tib3g+XG4gIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDxtYXQtY2hlY2tib3hcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgW2NoZWNrZWRdPVwidGFzaygpLmNvbXBsZXRlZFwiXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJwYXJ0aWFsbHlDb21wbGV0ZSgpXCJcbiAgICAgIChjaGFuZ2UpPVwidXBkYXRlKCRldmVudC5jaGVja2VkKVwiXG4gICAgPlxuICAgICAge3t0YXNrKCkubmFtZX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDx1bD5cbiAgICAgIEBmb3IgKHN1YnRhc2sgb2YgdGFzaygpLnN1YnRhc2tzOyB0cmFjayBzdWJ0YXNrOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJzdWJ0YXNrLmNvbXBsZXRlZFwiIChjaGFuZ2UpPVwidXBkYXRlKCRldmVudC5jaGVja2VkLCBpKVwiPlxuICAgICAgICAgICAge3tzdWJ0YXNrLm5hbWV9fVxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8L2xpPlxuICAgICAgfVxuICAgIDwvdWw+XG4gIDwvc3Bhbj5cbjwvc2VjdGlvbj5cbiJdfQ==