import { Component } from '@angular/core';
import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
const today = new Date();
const formatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});
/** @title Listbox with complex object as values. */
export class CdkListboxCompareWithExample {
    constructor() {
        this.slots = [12, 13, 14, 15].map(hour => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hour));
        this.appointment = [
            new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14),
        ];
    }
    compareDate(date1, date2) {
        return date1.getTime() === date2.getTime();
    }
    formatTime(date) {
        return formatter.format(date);
    }
    formatAppointment() {
        return this.appointment.map(a => this.formatTime(a));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkListboxCompareWithExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: CdkListboxCompareWithExample, isStandalone: true, selector: "cdk-listbox-compare-with-example", exportAs: ["cdkListboxCompareWithExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-appointment-label\">\n    Appointment Time\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"appointment\"\n      [cdkListboxCompareWith]=\"compareDate\"\n      (cdkListboxValueChange)=\"appointment = $event.value\"\n      aria-labelledby=\"example-appointment-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let time of slots\"\n        [cdkOption]=\"time\"\n        class=\"example-option\">\n      {{formatTime(time)}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p *ngIf=\"appointment[0]\">\n  Your appointment  is scheduled for <strong>{{formatAppointment() | json}}</strong>&nbsp;\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkListboxCompareWithExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-compare-with-example', exportAs: 'cdkListboxCompareWithExample', standalone: true, imports: [CdkListbox, NgFor, CdkOption, NgIf, JsonPipe], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-appointment-label\">\n    Appointment Time\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"appointment\"\n      [cdkListboxCompareWith]=\"compareDate\"\n      (cdkListboxValueChange)=\"appointment = $event.value\"\n      aria-labelledby=\"example-appointment-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let time of slots\"\n        [cdkOption]=\"time\"\n        class=\"example-option\">\n      {{formatTime(time)}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p *ngIf=\"appointment[0]\">\n  Your appointment  is scheduled for <strong>{{formatAppointment() | json}}</strong>&nbsp;\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jb21wYXJlLXdpdGgvY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jb21wYXJlLXdpdGgvY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFFekIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtJQUNuRCxPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUUsT0FBTztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLENBQUM7QUFFSCxvREFBb0Q7QUFTcEQsTUFBTSxPQUFPLDRCQUE0QjtJQVJ6QztRQVNFLFVBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQ25GLENBQUM7UUFFRixnQkFBVyxHQUFvQjtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3pFLENBQUM7S0FhSDtJQVhDLFdBQVcsQ0FBQyxLQUFXLEVBQUUsS0FBVztRQUNsQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO21IQW5CVSw0QkFBNEI7dUdBQTVCLDRCQUE0Qix3SUN2QnpDLDB2QkFzQkEsMjFCRERZLFVBQVUsK1dBQUUsS0FBSyxtSEFBRSxTQUFTLDBLQUFFLElBQUksd0ZBQUUsUUFBUTs7Z0dBRTNDLDRCQUE0QjtrQkFSeEMsU0FBUzsrQkFDRSxrQ0FBa0MsWUFDbEMsOEJBQThCLGNBRzVCLElBQUksV0FDUCxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9yLCBOZ0lmLCBKc29uUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2RrTGlzdGJveCwgQ2RrT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvbGlzdGJveCc7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodW5kZWZpbmVkLCB7XG4gIHdlZWtkYXk6ICdzaG9ydCcsXG4gIG1vbnRoOiAnc2hvcnQnLFxuICBkYXk6ICdudW1lcmljJyxcbiAgaG91cjogJ251bWVyaWMnLFxuICBtaW51dGU6ICdudW1lcmljJyxcbn0pO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCBjb21wbGV4IG9iamVjdCBhcyB2YWx1ZXMuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1jb21wYXJlLXdpdGgtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveENvbXBhcmVXaXRoRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1jb21wYXJlLXdpdGgtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0xpc3Rib3gsIE5nRm9yLCBDZGtPcHRpb24sIE5nSWYsIEpzb25QaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveENvbXBhcmVXaXRoRXhhbXBsZSB7XG4gIHNsb3RzID0gWzEyLCAxMywgMTQsIDE1XS5tYXAoXG4gICAgaG91ciA9PiBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKyAxLCBob3VyKSxcbiAgKTtcblxuICBhcHBvaW50bWVudDogcmVhZG9ubHkgRGF0ZVtdID0gW1xuICAgIG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSArIDEsIDE0KSxcbiAgXTtcblxuICBjb21wYXJlRGF0ZShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpID09PSBkYXRlMi5nZXRUaW1lKCk7XG4gIH1cblxuICBmb3JtYXRUaW1lKGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGZvcm1hdEFwcG9pbnRtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFwcG9pbnRtZW50Lm1hcChhID0+IHRoaXMuZm9ybWF0VGltZShhKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtYXBwb2ludG1lbnQtbGFiZWxcIj5cbiAgICBBcHBvaW50bWVudCBUaW1lXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBbY2RrTGlzdGJveFZhbHVlXT1cImFwcG9pbnRtZW50XCJcbiAgICAgIFtjZGtMaXN0Ym94Q29tcGFyZVdpdGhdPVwiY29tcGFyZURhdGVcIlxuICAgICAgKGNka0xpc3Rib3hWYWx1ZUNoYW5nZSk9XCJhcHBvaW50bWVudCA9ICRldmVudC52YWx1ZVwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWFwcG9pbnRtZW50LWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCB0aW1lIG9mIHNsb3RzXCJcbiAgICAgICAgW2Nka09wdGlvbl09XCJ0aW1lXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAge3tmb3JtYXRUaW1lKHRpbWUpfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbjwvZGl2PlxuPHAgKm5nSWY9XCJhcHBvaW50bWVudFswXVwiPlxuICBZb3VyIGFwcG9pbnRtZW50ICBpcyBzY2hlZHVsZWQgZm9yIDxzdHJvbmc+e3tmb3JtYXRBcHBvaW50bWVudCgpIHwganNvbn19PC9zdHJvbmc+Jm5ic3A7XG48L3A+XG4iXX0=