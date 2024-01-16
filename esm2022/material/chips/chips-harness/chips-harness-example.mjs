import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/material/icon";
/**
 * @title Testing with MatChipsHarness
 */
export class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: ChipsHarnessExample, isStandalone: true, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', standalone: true, imports: [MatChipsModule, MatIconModule], template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV2RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBZSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELFFBQUcsR0FBZSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2hEO21IQUpZLG1CQUFtQjt1R0FBbkIsbUJBQW1CLGlGQ2JoQyw2Y0FTbUIsMkNERVAsY0FBYyx1bkJBQUUsYUFBYTs7Z0dBRTVCLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FFckIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRDaGlwc0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGlwc01vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzSGFybmVzc0V4YW1wbGUge1xuICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHJlbW92ZTogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdyZW1vdmUgc3B5Jyk7XG4gIGFkZDogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdhZGQgc3B5Jyk7XG59XG4iLCI8bWF0LWNoaXAtbGlzdGJveFxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICBbYXJpYS1vcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIj5cbiAgPG1hdC1jaGlwLW9wdGlvbiAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPkNoaXAgMTwvbWF0LWNoaXAtb3B0aW9uPlxuICA8bWF0LWNoaXAtb3B0aW9uIChyZW1vdmVkKT1cInJlbW92ZSgpXCI+XG4gICAgQ2hpcCAyXG4gICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIGFyaWEtbGFiZWw9XCJyZW1vdmUgQ2hpcCAyXCI+PG1hdC1pY29uPnJlbW92ZV9pY29uPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgPC9tYXQtY2hpcC1vcHRpb24+XG4gIDxtYXQtY2hpcC1vcHRpb24gKHJlbW92ZWQpPVwicmVtb3ZlKClcIj48bWF0LWNoaXAtYXZhdGFyPkM8L21hdC1jaGlwLWF2YXRhcj5DaGlwIDQ8L21hdC1jaGlwLW9wdGlvbj5cbjwvbWF0LWNoaXAtbGlzdGJveD4iXX0=