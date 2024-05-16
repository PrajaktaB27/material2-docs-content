import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CdkMenuTrigger, CdkMenu, CdkMenuItem, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenuItemRadio, CdkMenuBar, CdkContextMenuTrigger } from '@angular/cdk/menu';

/** @title Menu with Standalone Trigger. */
class CdkMenuStandaloneMenuExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuStandaloneMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkMenuStandaloneMenuExample, isStandalone: true, selector: "cdk-menu-standalone-menu-example", ngImport: i0, template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"], dependencies: [{ kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuStandaloneMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-menu-example', standalone: true, imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem], template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"] }]
        }] });

/** @title Stateful Menu with Standalone Trigger. */
class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = false;
        this.italic = false;
        this.sizes = ['Small', 'Normal', 'Large'];
        this.selectedSize = 'Normal';
    }
    reset() {
        this.bold = false;
        this.italic = false;
        this.selectedSize = 'Normal';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-rc.2", type: CdkMenuStandaloneStatefulMenuExample, isStandalone: true, selector: "cdk-menu-standalone-stateful-menu-example", ngImport: i0, template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      @for (size of sizes; track size) {\n        <button\n            cdkMenuItemRadio\n            class=\"example-menu-item\"\n            [cdkMenuItemChecked]=\"size === selectedSize\"\n            (cdkMenuItemTriggered)=\"selectedSize = size\">\n          {{size}}\n        </button>\n      }\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"], dependencies: [{ kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-stateful-menu-example', standalone: true, imports: [
                        CdkMenuTrigger,
                        CdkMenu,
                        CdkMenuItemCheckbox,
                        CdkMenuGroup,
                        CdkMenuItemRadio,
                        CdkMenuItem,
                    ], template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      @for (size of sizes; track size) {\n        <button\n            cdkMenuItemRadio\n            class=\"example-menu-item\"\n            [cdkMenuItemChecked]=\"size === selectedSize\"\n            (cdkMenuItemTriggered)=\"selectedSize = size\">\n          {{size}}\n        </button>\n      }\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"] }]
        }] });

/** @title Google Docs Menu Bar. */
class CdkMenuMenubarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkMenuMenubarExample, isStandalone: true, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"], dependencies: [{ kind: "directive", type: CdkMenuBar, selector: "[cdkMenuBar]", exportAs: ["cdkMenuBar"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', standalone: true, imports: [
                        CdkMenuBar,
                        CdkMenuItem,
                        CdkMenuTrigger,
                        CdkMenu,
                        CdkMenuGroup,
                        CdkMenuItemCheckbox,
                        CdkMenuItemRadio,
                    ], template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"] }]
        }] });

/** @title Gmail inline menu. */
class CdkMenuInlineExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuInlineExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkMenuInlineExample, isStandalone: true, selector: "cdk-menu-inline-example", exportAs: ["cdkMenuInlineExample"], ngImport: i0, template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuInlineExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', standalone: true, imports: [CdkMenu, CdkMenuItem], template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });

/** @title Context menu. */
class CdkMenuContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkMenuContextExample, isStandalone: true, selector: "cdk-menu-context-example", exportAs: ["cdkMenuContextExample"], ngImport: i0, template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-context-example', exportAs: 'cdkMenuContextExample', standalone: true, imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem], template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });

/** @title Nested context menus. */
class CdkMenuNestedContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuNestedContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: CdkMenuNestedContextExample, isStandalone: true, selector: "cdk-menu-nested-context-example", exportAs: ["cdkMenuNestedContextExample"], ngImport: i0, template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkMenuNestedContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-nested-context-example', exportAs: 'cdkMenuNestedContextExample', standalone: true, imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem], template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkMenuContextExample, CdkMenuInlineExample, CdkMenuMenubarExample, CdkMenuNestedContextExample, CdkMenuStandaloneMenuExample, CdkMenuStandaloneStatefulMenuExample };
//# sourceMappingURL=menu.mjs.map
