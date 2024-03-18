import { Component } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
/**
 * @title CDK Dialog Styling
 */
export class CdkDialogStylingExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(CdkDialogStylingExampleDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkDialogStylingExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: CdkDialogStylingExample, isStandalone: true, selector: "cdk-dialog-styling-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkDialogStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
export class CdkDialogStylingExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkDialogStylingExampleDialog, deps: [{ token: i1.DialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: CdkDialogStylingExampleDialog, isStandalone: true, selector: "cdk-dialog-styling-example-dialog", ngImport: i0, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkDialogStylingExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example-dialog', standalone: true, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.DialogRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctc3R5bGluZy9jZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1zdHlsaW5nL2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctc3R5bGluZy9jZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFFcEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUVyQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQVMsNkJBQTZCLENBQUMsQ0FBQztJQUMxRCxDQUFDO3FIQUxVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLHNGQ1pwQyxnRUFDQSwyQ0RTWSxZQUFZOztrR0FFWCx1QkFBdUI7a0JBTm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRTFCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs7QUFnQnpCLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBbUIsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7cUhBRGhDLDZCQUE2Qjt5R0FBN0IsNkJBQTZCLDZGRTFCMUMsd3pCQVlBOztrR0ZjYSw2QkFBNkI7a0JBTnpDLFNBQVM7K0JBQ0UsbUNBQW1DLGNBR2pDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpYWxvZywgRGlhbG9nTW9kdWxlLCBEaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgRGlhbG9nIFN0eWxpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRGlhbG9nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBEaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuPHN0cmluZz4oQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGVEaWFsb2cpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1kaWFsb2ctc3R5bGluZy1leGFtcGxlLWRpYWxvZy5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IERpYWxvZ1JlZikge31cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gY3VzdG9tIGRpYWxvZzwvYnV0dG9uPlxuIiwiRGlkIHlvdSBldmVyIGhlYXIgdGhlIHRyYWdlZHkgb2YgRGFydGggUGxhZ3VlaXMgVGhlIFdpc2U/IEkgdGhvdWdodCBub3QuIEl0J3Mgbm90IGEgc3RvcnkgdGhlIEplZGlcbndvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBvZiB0aGUgU2l0aCwgc28gcG93ZXJmdWwgYW5kIHNvXG53aXNlIGhlIGNvdWxkIHVzZSB0aGUgRm9yY2UgdG8gaW5mbHVlbmNlIHRoZSBtaWRpY2hsb3JpYW5zIHRvIGNyZWF0ZSBsaWZl4oCmIEhlIGhhZCBzdWNoIGEga25vd2xlZGdlXG5vZiB0aGUgZGFyayBzaWRlIHRoYXQgaGUgY291bGQgZXZlbiBrZWVwIHRoZSBvbmVzIGhlIGNhcmVkIGFib3V0IGZyb20gZHlpbmcuIFRoZSBkYXJrIHNpZGUgb2YgdGhlXG5Gb3JjZSBpcyBhIHBhdGh3YXkgdG8gbWFueSBhYmlsaXRpZXMgc29tZSBjb25zaWRlciB0byBiZSB1bm5hdHVyYWwuIEhlIGJlY2FtZSBzbyBwb3dlcmZ1bOKApiB0aGUgb25seVxudGhpbmcgaGUgd2FzIGFmcmFpZCBvZiB3YXMgbG9zaW5nIGhpcyBwb3dlciwgd2hpY2ggZXZlbnR1YWxseSwgb2YgY291cnNlLCBoZSBkaWQuIFVuZm9ydHVuYXRlbHksXG5oZSB0YXVnaHQgaGlzIGFwcHJlbnRpY2UgZXZlcnl0aGluZyBoZSBrbmV3LCB0aGVuIGhpcyBhcHByZW50aWNlIGtpbGxlZCBoaW0gaW4gaGlzIHNsZWVwLiBJcm9uaWMuXG5IZSBjb3VsZCBzYXZlIG90aGVycyBmcm9tIGRlYXRoLCBidXQgbm90IGhpbXNlbGYuXG5cbjxocj5cblxuPGJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKClcIj5DbG9zZTwvYnV0dG9uPlxuIl19