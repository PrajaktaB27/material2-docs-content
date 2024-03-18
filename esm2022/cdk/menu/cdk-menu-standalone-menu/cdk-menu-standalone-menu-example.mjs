import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Menu with Standalone Trigger. */
export class CdkMenuStandaloneMenuExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkMenuStandaloneMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: CdkMenuStandaloneMenuExample, isStandalone: true, selector: "cdk-menu-standalone-menu-example", ngImport: i0, template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"], dependencies: [{ kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: CdkMenuStandaloneMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-menu-example', standalone: true, imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem], template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUV2RSwyQ0FBMkM7QUFRM0MsTUFBTSxPQUFPLDRCQUE0QjtxSEFBNUIsNEJBQTRCO3lHQUE1Qiw0QkFBNEIsNEZDWHpDLDZnQkFZQSwwNUJESFksY0FBYyxzTkFBRSxPQUFPLGtHQUFFLFdBQVc7O2tHQUVuQyw0QkFBNEI7a0JBUHhDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBR2hDLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51LCBDZGtNZW51SXRlbSwgQ2RrTWVudVRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcblxuLyoqIEB0aXRsZSBNZW51IHdpdGggU3RhbmRhbG9uZSBUcmlnZ2VyLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUnLFxuICBzdHlsZVVybDogJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtNZW51VHJpZ2dlciwgQ2RrTWVudSwgQ2RrTWVudUl0ZW1dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlIHt9XG4iLCI8IS0tICNkb2NyZWdpb24gdHJpZ2dlciAtLT5cbjxidXR0b24gW2Nka01lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBjbGFzcz1cImV4YW1wbGUtc3RhbmRhbG9uZS10cmlnZ2VyXCI+Q2xpY2sgbWUhPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gdHJpZ2dlciAtLT5cblxuPG5nLXRlbXBsYXRlICNtZW51PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5SZWZyZXNoPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2V0dGluZ3M8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5IZWxwPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19