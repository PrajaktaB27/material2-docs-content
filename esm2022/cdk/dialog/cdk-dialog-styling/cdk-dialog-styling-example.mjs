import { Component, inject } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
/**
 * @title CDK Dialog Styling
 */
export class CdkDialogStylingExample {
    constructor() {
        this.dialog = inject(Dialog);
    }
    openDialog() {
        this.dialog.open(CdkDialogStylingExampleDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogStylingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkDialogStylingExample, isStandalone: true, selector: "cdk-dialog-styling-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n" }]
        }] });
export class CdkDialogStylingExampleDialog {
    constructor() {
        this.dialogRef = inject(DialogRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogStylingExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkDialogStylingExampleDialog, isStandalone: true, selector: "cdk-dialog-styling-example-dialog", ngImport: i0, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogStylingExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example-dialog', standalone: true, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctc3R5bGluZy9jZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1zdHlsaW5nL2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctc3R5bGluZy9jZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFcEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUt6QjtJQUhDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBUyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzFELENBQUM7cUhBTFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsc0ZDWnBDLGdFQUNBLDJDRFNZLFlBQVk7O2tHQUVYLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDOztBQWdCekIsTUFBTSxPQUFPLDZCQUE2QjtJQU4xQztRQU9FLGNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDL0I7cUhBRlksNkJBQTZCO3lHQUE3Qiw2QkFBNkIsNkZFMUIxQyx3ekJBWUE7O2tHRmNhLDZCQUE2QjtrQkFOekMsU0FBUzsrQkFDRSxtQ0FBbUMsY0FHakMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWFsb2csIERpYWxvZ01vZHVsZSwgRGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9jZGsvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgQ0RLIERpYWxvZyBTdHlsaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0RpYWxvZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ1N0eWxpbmdFeGFtcGxlIHtcbiAgZGlhbG9nID0gaW5qZWN0KERpYWxvZyk7XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuPHN0cmluZz4oQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGVEaWFsb2cpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLWRpYWxvZy5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZURpYWxvZyB7XG4gIGRpYWxvZ1JlZiA9IGluamVjdChEaWFsb2dSZWYpO1xufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBjdXN0b20gZGlhbG9nPC9idXR0b24+XG4iLCJEaWQgeW91IGV2ZXIgaGVhciB0aGUgdHJhZ2VkeSBvZiBEYXJ0aCBQbGFndWVpcyBUaGUgV2lzZT8gSSB0aG91Z2h0IG5vdC4gSXQncyBub3QgYSBzdG9yeSB0aGUgSmVkaVxud291bGQgdGVsbCB5b3UuIEl0J3MgYSBTaXRoIGxlZ2VuZC4gRGFydGggUGxhZ3VlaXMgd2FzIGEgRGFyayBMb3JkIG9mIHRoZSBTaXRoLCBzbyBwb3dlcmZ1bCBhbmQgc29cbndpc2UgaGUgY291bGQgdXNlIHRoZSBGb3JjZSB0byBpbmZsdWVuY2UgdGhlIG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2Vcbm9mIHRoZSBkYXJrIHNpZGUgdGhhdCBoZSBjb3VsZCBldmVuIGtlZXAgdGhlIG9uZXMgaGUgY2FyZWQgYWJvdXQgZnJvbSBkeWluZy4gVGhlIGRhcmsgc2lkZSBvZiB0aGVcbkZvcmNlIGlzIGEgcGF0aHdheSB0byBtYW55IGFiaWxpdGllcyBzb21lIGNvbnNpZGVyIHRvIGJlIHVubmF0dXJhbC4gSGUgYmVjYW1lIHNvIHBvd2VyZnVs4oCmIHRoZSBvbmx5XG50aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC4gVW5mb3J0dW5hdGVseSxcbmhlIHRhdWdodCBoaXMgYXBwcmVudGljZSBldmVyeXRoaW5nIGhlIGtuZXcsIHRoZW4gaGlzIGFwcHJlbnRpY2Uga2lsbGVkIGhpbSBpbiBoaXMgc2xlZXAuIElyb25pYy5cbkhlIGNvdWxkIHNhdmUgb3RoZXJzIGZyb20gZGVhdGgsIGJ1dCBub3QgaGltc2VsZi5cblxuPGhyPlxuXG48YnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoKVwiPkNsb3NlPC9idXR0b24+XG4iXX0=