import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/material/icon";
/**
 * @title Testing with MatChipsHarness
 */
export class ChipsHarnessExample {
    constructor() {
        this.isDisabled = signal(false);
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: ChipsHarnessExample, isStandalone: true, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled()\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>\n", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', standalone: true, imports: [MatChipsModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled()\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUUUsZUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixXQUFNLEdBQWUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxRQUFHLEdBQWUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoRDtxSEFKWSxtQkFBbUI7eUdBQW5CLG1CQUFtQixpRkNkaEMsaWRBVUEsMkNEQ1ksY0FBYyx1bkJBQUUsYUFBYTs7a0dBRzVCLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FFckIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxtQkFDdkIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRDaGlwc0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGlwc01vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0hhcm5lc3NFeGFtcGxlIHtcbiAgaXNEaXNhYmxlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHJlbW92ZTogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdyZW1vdmUgc3B5Jyk7XG4gIGFkZDogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdhZGQgc3B5Jyk7XG59XG4iLCI8bWF0LWNoaXAtbGlzdGJveFxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKClcIlxuICAgIFthcmlhLW9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPlxuICA8bWF0LWNoaXAtb3B0aW9uIChyZW1vdmVkKT1cInJlbW92ZSgpXCI+Q2hpcCAxPC9tYXQtY2hpcC1vcHRpb24+XG4gIDxtYXQtY2hpcC1vcHRpb24gKHJlbW92ZWQpPVwicmVtb3ZlKClcIj5cbiAgICBDaGlwIDJcbiAgICA8YnV0dG9uIG1hdENoaXBSZW1vdmUgYXJpYS1sYWJlbD1cInJlbW92ZSBDaGlwIDJcIj48bWF0LWljb24+cmVtb3ZlX2ljb248L21hdC1pY29uPjwvYnV0dG9uPlxuICA8L21hdC1jaGlwLW9wdGlvbj5cbiAgPG1hdC1jaGlwLW9wdGlvbiAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPjxtYXQtY2hpcC1hdmF0YXI+QzwvbWF0LWNoaXAtYXZhdGFyPkNoaXAgNDwvbWF0LWNoaXAtb3B0aW9uPlxuPC9tYXQtY2hpcC1saXN0Ym94PlxuIl19