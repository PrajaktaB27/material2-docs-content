import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export class CdkPopoverEditCellSpanVanillaTableExample {
    constructor() {
        this.preservedValues = new WeakMap();
        this.persons = PERSON_DATA;
    }
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
}
CdkPopoverEditCellSpanVanillaTableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CdkPopoverEditCellSpanVanillaTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkPopoverEditCellSpanVanillaTableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.1", type: CdkPopoverEditCellSpanVanillaTableExample, selector: "cdk-popover-edit-cell-span-vanilla-table-example", ngImport: i0, template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkPopoverEdit, selector: "[cdkPopoverEdit]:not([cdkPopoverEditTabOut])", inputs: ["cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan", "cdkPopoverEditDisabled"] }, { kind: "directive", type: i1.CdkRowHoverContent, selector: "[cdkRowHoverContent]" }, { kind: "directive", type: i1.CdkEditControl, selector: "form[cdkEditControl]", inputs: ["cdkEditControlClickOutBehavior", "cdkEditControlPreservedFormValue", "cdkEditControlIgnoreSubmitUnlessValid"], outputs: ["cdkEditControlPreservedFormValueChange"] }, { kind: "directive", type: i1.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i1.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i1.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "directive", type: i1.CdkEditOpen, selector: "[cdkEditOpen]" }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CdkPopoverEditCellSpanVanillaTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-popover-edit-cell-span-vanilla-table-example', template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXhDLE1BQU0sV0FBVyxHQUFhO0lBQzVCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztJQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7SUFDN0QsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO0lBQ3JFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztJQUNuRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7SUFDbkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0lBQ3hFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztJQUNsRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7SUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO0NBQ2hFLENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTyx5Q0FBeUM7SUFMdEQ7UUFNVyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7UUFFN0MsWUFBTyxHQUFHLFdBQVcsQ0FBQztLQVdoQztJQVRDLFFBQVEsQ0FBQyxNQUFjLEVBQUUsQ0FBUztRQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzJJQWJVLHlDQUF5QzsrSEFBekMseUNBQXlDLHdGQzlCdEQsNDVFQXNFQTtnR0R4Q2EseUNBQXlDO2tCQUxyRCxTQUFTOytCQUNFLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgUEVSU09OX0RBVEE6IFBlcnNvbltdID0gW1xuICB7aWQ6IDEsIGZpcnN0TmFtZTogJ1RlcnJhJywgbWlkZGxlTmFtZTogJ01hZHVpbicsIGxhc3ROYW1lOiAnQnJhbmZvcmQnfSxcbiAge2lkOiAyLCBmaXJzdE5hbWU6ICdMb2NrZScsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0NvbGUnfSxcbiAge2lkOiAzLCBmaXJzdE5hbWU6ICdDZWxlcycsIG1pZGRsZU5hbWU6ICdHZXN0YWhsJywgbGFzdE5hbWU6ICdDaGVyZSd9LFxuICB7aWQ6IDQsIGZpcnN0TmFtZTogJ0VkZ2FyJywgbWlkZGxlTmFtZTogJ1JvbmknLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDUsIGZpcnN0TmFtZTogJ1NhYmluJywgbWlkZGxlTmFtZTogJ1JlbmUnLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDYsIGZpcnN0TmFtZTogJ0NseWRlJywgbWlkZGxlTmFtZTogJ1wiU2hhZG93XCInLCBsYXN0TmFtZTogJ0Fycm93bnknfSxcbiAge2lkOiA3LCBmaXJzdE5hbWU6ICdTZXR6ZXInLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdHYWJiaWFuaSd9LFxuICB7aWQ6IDgsIGZpcnN0TmFtZTogJ0NpZCcsIG1pZGRsZU5hbWU6ICdEZWwgTm9ydGUnLCBsYXN0TmFtZTogJ01hcnF1ZXonfSxcbiAge2lkOiA5LCBmaXJzdE5hbWU6ICdNb2cnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdNY01vb2dsZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCBzcGFubmluZyBtdWx0aXBsZSBjb2x1bW5zIG9uIGFuIEhUTUwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUge1xuICByZWFkb25seSBwcmVzZXJ2ZWRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJzb24sIGFueT4oKTtcblxuICByZWFkb25seSBwZXJzb25zID0gUEVSU09OX0RBVEE7XG5cbiAgb25TdWJtaXQocGVyc29uOiBQZXJzb24sIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnNvbi5maXJzdE5hbWUgPSBmLnZhbHVlWydmaXJzdE5hbWUnXTtcbiAgICBwZXJzb24ubWlkZGxlTmFtZSA9IGYudmFsdWVbJ21pZGRsZU5hbWUnXTtcbiAgICBwZXJzb24ubGFzdE5hbWUgPSBmLnZhbHVlWydsYXN0TmFtZSddO1xuICB9XG59XG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdCBsZXQtY3R4PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB3aWR0aDogMTAwJVwiPlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIGNka0VkaXRDb250cm9sXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0KGN0eC5wZXJzb24sIGYpXCJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkVmFsdWVzLmdldChjdHgucGVyc29uKVwiXG4gICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFZhbHVlcy5zZXQoY3R4LnBlcnNvbiwgJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2ZpcnN0TmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLm1pZGRsZU5hbWVcIiBuYW1lPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdtaWRkbGVOYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24ubGFzdE5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbGFzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgXG4gIDx0cj5cbiAgICA8dGg+IE5vLiA8L3RoPlxuICAgIDx0aD4gRmlyc3QgbmFtZSA8L3RoPlxuICAgIDx0aD4gTWlkZGxlIG5hbWUgPC90aD5cbiAgICA8dGg+IExhc3QgbmFtZSA8L3RoPlxuICA8L3RyPlxuICBcbiAgPHRyICpuZ0Zvcj1cImxldCBwZXJzb24gb2YgcGVyc29uc1wiPlxuICAgIDx0ZD4ge3twZXJzb24uaWR9fSA8L3RkPlxuXG4gICAgPHRkIFtjZGtQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2ZpcnN0TmFtZSd9XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YWZ0ZXI6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5maXJzdE5hbWV9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICAgIFxuICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdtaWRkbGVOYW1lJ31cIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6IDEsIGFmdGVyOiAxfVwiPlxuICAgICAge3twZXJzb24ubWlkZGxlTmFtZX19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gICAgXG4gICAgPHRkIFtjZGtQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2xhc3ROYW1lJ31cIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5sYXN0TmFtZX19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuIl19