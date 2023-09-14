import { Component, Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/forms";
/**
 * @title CDK Dialog Overview
 */
export class CdkDialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(CdkDialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.closed.subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: CdkDialogOverviewExample, isStandalone: true, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', standalone: true, imports: [FormsModule, NgIf, DialogModule], template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
export class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: CdkDialogOverviewExampleDialog, isStandalone: true, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', standalone: true, imports: [FormsModule], template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RpYWxvZy9jZGstZGlhbG9nLW92ZXJ2aWV3L2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPM0M7O0dBRUc7QUFPSCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVyQyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQVMsOEJBQThCLEVBQUU7WUFDekUsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3FIQWhCVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix1RkNuQnJDLHdTQVlBLDJDREtZLFdBQVcsK21CQUFFLElBQUksNEZBQUUsWUFBWTs7a0dBRTlCLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7O0FBNEI1QyxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFlBQW1CLFNBQTRCLEVBQThCLElBQWdCO1FBQTFFLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQThCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO3FIQUR0Riw4QkFBOEIsMkNBQ2dCLFdBQVc7eUdBRHpELDhCQUE4Qiw4RkU3QzNDLHlWQVNBLDRPRmtDWSxXQUFXOztrR0FFViw4QkFBOEI7a0JBUDFDLFNBQVM7K0JBQ0Usb0NBQW9DLGNBR2xDLElBQUksV0FDUCxDQUFDLFdBQVcsQ0FBQzs7MEJBRzRCLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWFsb2csIERpYWxvZ1JlZiwgRElBTE9HX0RBVEEsIERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RpYWxvZyc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENESyBEaWFsb2cgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTmdJZiwgRGlhbG9nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlIHtcbiAgYW5pbWFsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBEaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuPHN0cmluZz4oQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUsIGFuaW1hbDogdGhpcy5hbmltYWx9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmNsb3NlZC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBEaWFsb2dSZWY8c3RyaW5nPiwgQEluamVjdChESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG59XG4iLCI8b2w+XG4gIDxsaT5cbiAgICA8bGFiZWwgaWQ9XCJkaWFsb2ctdXNlci1uYW1lXCI+V2hhdCdzIHlvdXIgbmFtZT88L2xhYmVsPlxuICAgIDxpbnB1dCBmb3I9XCJkaWFsb2ctdXNlci1uYW1lXCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5QaWNrIG9uZTwvYnV0dG9uPlxuICA8L2xpPlxuICA8bGkgKm5nSWY9XCJhbmltYWxcIj5cbiAgICBZb3UgY2hvc2U6IDxlbT57e2FuaW1hbH19PC9lbT5cbiAgPC9saT5cbjwvb2w+XG4iLCI8aDE+SGkge3tkYXRhLm5hbWV9fTwvaDE+XG48ZGl2PlxuICA8bGFiZWwgaWQ9XCJmYXZvcml0ZS1hbmltYWxcIj5XaGF0J3MgeW91ciBmYXZvcml0ZSBhbmltYWw/PC9sYWJlbD5cbiAgPGlucHV0IGZvcj1cImZhdm9yaXRlLWFuaW1hbFwiIFsobmdNb2RlbCldPVwiZGF0YS5hbmltYWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiPlxuPC9kaXY+XG48ZGl2PlxuICA8YnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoZGF0YS5hbmltYWwpXCI+T0s8L2J1dHRvbj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKClcIj5DYW5jZWw8L2J1dHRvbj5cbjwvZGl2PlxuIl19