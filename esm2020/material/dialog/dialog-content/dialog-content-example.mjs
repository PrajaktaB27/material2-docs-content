import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog with header, scrollable content and actions
 */
export class DialogContentExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogContentExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogContentExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: DialogContentExample, selector: "dialog-content-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example', template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogContentExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
DialogContentExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.14", type: DialogContentExampleDialog, selector: "dialog-content-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogContentExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example-dialog', template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRW5EOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUvRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt5SEFUVSxvQkFBb0I7NkdBQXBCLG9CQUFvQiw4RENWakMsb0VBQ0E7bUdEU2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3Qjs7QUFtQnBDLE1BQU0sT0FBTywwQkFBMEI7OytIQUExQiwwQkFBMEI7bUhBQTFCLDBCQUEwQixxRUUxQnZDLHNxSEFnRUE7bUdGdENhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIHdpdGggaGVhZGVyLCBzY3JvbGxhYmxlIGNvbnRlbnQgYW5kIGFjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGVudEV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nKTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2cge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMiBtYXQtZGlhbG9nLXRpdGxlPkluc3RhbGwgQW5ndWxhcjwvaDI+XG48bWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgPGgzPkRldmVsb3AgYWNyb3NzIGFsbCBwbGF0Zm9ybXM8L2gzPlxuICA8cD5MZWFybiBvbmUgd2F5IHRvIGJ1aWxkIGFwcGxpY2F0aW9ucyB3aXRoIEFuZ3VsYXIgYW5kIHJldXNlIHlvdXIgY29kZSBhbmQgYWJpbGl0aWVzIHRvIGJ1aWxkXG4gICAgYXBwcyBmb3IgYW55IGRlcGxveW1lbnQgdGFyZ2V0LiBGb3Igd2ViLCBtb2JpbGUgd2ViLCBuYXRpdmUgbW9iaWxlIGFuZCBuYXRpdmUgZGVza3RvcC48L3A+XG5cbiAgPGgzPlNwZWVkICZhbXA7IFBlcmZvcm1hbmNlPC9oMz5cbiAgPHA+QWNoaWV2ZSB0aGUgbWF4aW11bSBzcGVlZCBwb3NzaWJsZSBvbiB0aGUgV2ViIFBsYXRmb3JtIHRvZGF5LCBhbmQgdGFrZSBpdCBmdXJ0aGVyLCB2aWEgV2ViXG4gICAgV29ya2VycyBhbmQgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBBbmd1bGFyIHB1dHMgeW91IGluIGNvbnRyb2wgb3ZlciBzY2FsYWJpbGl0eS4gTWVldCBodWdlXG4gICAgZGF0YSByZXF1aXJlbWVudHMgYnkgYnVpbGRpbmcgZGF0YSBtb2RlbHMgb24gUnhKUywgSW1tdXRhYmxlLmpzIG9yIGFub3RoZXIgcHVzaC1tb2RlbC48L3A+XG5cbiAgPGgzPkluY3JlZGlibGUgdG9vbGluZzwvaDM+XG4gIDxwPkJ1aWxkIGZlYXR1cmVzIHF1aWNrbHkgd2l0aCBzaW1wbGUsIGRlY2xhcmF0aXZlIHRlbXBsYXRlcy4gRXh0ZW5kIHRoZSB0ZW1wbGF0ZSBsYW5ndWFnZSB3aXRoXG4gICAgeW91ciBvd24gY29tcG9uZW50cyBhbmQgdXNlIGEgd2lkZSBhcnJheSBvZiBleGlzdGluZyBjb21wb25lbnRzLiBHZXQgaW1tZWRpYXRlIEFuZ3VsYXItc3BlY2lmaWNcbiAgICBoZWxwIGFuZCBmZWVkYmFjayB3aXRoIG5lYXJseSBldmVyeSBJREUgYW5kIGVkaXRvci4gQWxsIHRoaXMgY29tZXMgdG9nZXRoZXIgc28geW91IGNhbiBmb2N1c1xuICAgIG9uIGJ1aWxkaW5nIGFtYXppbmcgYXBwcyByYXRoZXIgdGhhbiB0cnlpbmcgdG8gbWFrZSB0aGUgY29kZSB3b3JrLjwvcD5cblxuICA8aDM+TG92ZWQgYnkgbWlsbGlvbnM8L2gzPlxuICA8cD5Gcm9tIHByb3RvdHlwZSB0aHJvdWdoIGdsb2JhbCBkZXBsb3ltZW50LCBBbmd1bGFyIGRlbGl2ZXJzIHRoZSBwcm9kdWN0aXZpdHkgYW5kIHNjYWxhYmxlXG4gICAgaW5mcmFzdHJ1Y3R1cmUgdGhhdCBzdXBwb3J0cyBHb29nbGUncyBsYXJnZXN0IGFwcGxpY2F0aW9ucy48L3A+XG5cbiAgPGgzPldoYXQgaXMgQW5ndWxhcj88L2gzPlxuXG4gIDxwPkFuZ3VsYXIgaXMgYSBwbGF0Zm9ybSB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gYnVpbGQgYXBwbGljYXRpb25zIHdpdGggdGhlIHdlYi4gQW5ndWxhclxuICAgIGNvbWJpbmVzIGRlY2xhcmF0aXZlIHRlbXBsYXRlcywgZGVwZW5kZW5jeSBpbmplY3Rpb24sIGVuZCB0byBlbmQgdG9vbGluZywgYW5kIGludGVncmF0ZWRcbiAgICBiZXN0IHByYWN0aWNlcyB0byBzb2x2ZSBkZXZlbG9wbWVudCBjaGFsbGVuZ2VzLiBBbmd1bGFyIGVtcG93ZXJzIGRldmVsb3BlcnMgdG8gYnVpbGRcbiAgICBhcHBsaWNhdGlvbnMgdGhhdCBsaXZlIG9uIHRoZSB3ZWIsIG1vYmlsZSwgb3IgdGhlIGRlc2t0b3A8L3A+XG5cbiAgPGgzPkFyY2hpdGVjdHVyZSBvdmVydmlldzwvaDM+XG5cbiAgPHA+QW5ndWxhciBpcyBhIHBsYXRmb3JtIGFuZCBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIGNsaWVudCBhcHBsaWNhdGlvbnMgaW4gSFRNTCBhbmQgVHlwZVNjcmlwdC5cbiAgQW5ndWxhciBpcyBpdHNlbGYgd3JpdHRlbiBpbiBUeXBlU2NyaXB0LiBJdCBpbXBsZW1lbnRzIGNvcmUgYW5kIG9wdGlvbmFsIGZ1bmN0aW9uYWxpdHkgYXMgYVxuICBzZXQgb2YgVHlwZVNjcmlwdCBsaWJyYXJpZXMgdGhhdCB5b3UgaW1wb3J0IGludG8geW91ciBhcHBzLjwvcD5cblxuICA8cD5UaGUgYmFzaWMgYnVpbGRpbmcgYmxvY2tzIG9mIGFuIEFuZ3VsYXIgYXBwbGljYXRpb24gYXJlIE5nTW9kdWxlcywgd2hpY2ggcHJvdmlkZSBhIGNvbXBpbGF0aW9uXG4gIGNvbnRleHQgZm9yIGNvbXBvbmVudHMuIE5nTW9kdWxlcyBjb2xsZWN0IHJlbGF0ZWQgY29kZSBpbnRvIGZ1bmN0aW9uYWwgc2V0czsgYW4gQW5ndWxhciBhcHAgaXNcbiAgZGVmaW5lZCBieSBhIHNldCBvZiBOZ01vZHVsZXMuIEFuIGFwcCBhbHdheXMgaGFzIGF0IGxlYXN0IGEgcm9vdCBtb2R1bGUgdGhhdCBlbmFibGVzXG4gIGJvb3RzdHJhcHBpbmcsIGFuZCB0eXBpY2FsbHkgaGFzIG1hbnkgbW9yZSBmZWF0dXJlIG1vZHVsZXMuPC9wPlxuXG4gIDxwPkNvbXBvbmVudHMgZGVmaW5lIHZpZXdzLCB3aGljaCBhcmUgc2V0cyBvZiBzY3JlZW4gZWxlbWVudHMgdGhhdCBBbmd1bGFyIGNhbiBjaG9vc2UgYW1vbmcgYW5kXG4gIG1vZGlmeSBhY2NvcmRpbmcgdG8geW91ciBwcm9ncmFtIGxvZ2ljIGFuZCBkYXRhLiBFdmVyeSBhcHAgaGFzIGF0IGxlYXN0IGEgcm9vdCBjb21wb25lbnQuPC9wPlxuXG4gIDxwPkNvbXBvbmVudHMgdXNlIHNlcnZpY2VzLCB3aGljaCBwcm92aWRlIHNwZWNpZmljIGZ1bmN0aW9uYWxpdHkgbm90IGRpcmVjdGx5IHJlbGF0ZWQgdG8gdmlld3MuXG4gIFNlcnZpY2UgcHJvdmlkZXJzIGNhbiBiZSBpbmplY3RlZCBpbnRvIGNvbXBvbmVudHMgYXMgZGVwZW5kZW5jaWVzLCBtYWtpbmcgeW91ciBjb2RlIG1vZHVsYXIsXG4gIHJldXNhYmxlLCBhbmQgZWZmaWNpZW50LjwvcD5cblxuICA8cD5Cb3RoIGNvbXBvbmVudHMgYW5kIHNlcnZpY2VzIGFyZSBzaW1wbHkgY2xhc3Nlcywgd2l0aCBkZWNvcmF0b3JzIHRoYXQgbWFyayB0aGVpciB0eXBlIGFuZFxuICBwcm92aWRlIG1ldGFkYXRhIHRoYXQgdGVsbHMgQW5ndWxhciBob3cgdG8gdXNlIHRoZW0uPC9wPlxuXG4gIDxwPlRoZSBtZXRhZGF0YSBmb3IgYSBjb21wb25lbnQgY2xhc3MgYXNzb2NpYXRlcyBpdCB3aXRoIGEgdGVtcGxhdGUgdGhhdCBkZWZpbmVzIGEgdmlldy4gQVxuICB0ZW1wbGF0ZSBjb21iaW5lcyBvcmRpbmFyeSBIVE1MIHdpdGggQW5ndWxhciBkaXJlY3RpdmVzIGFuZCBiaW5kaW5nIG1hcmt1cCB0aGF0IGFsbG93IEFuZ3VsYXJcbiAgdG8gbW9kaWZ5IHRoZSBIVE1MIGJlZm9yZSByZW5kZXJpbmcgaXQgZm9yIGRpc3BsYXkuPC9wPlxuXG4gIDxwPlRoZSBtZXRhZGF0YSBmb3IgYSBzZXJ2aWNlIGNsYXNzIHByb3ZpZGVzIHRoZSBpbmZvcm1hdGlvbiBBbmd1bGFyIG5lZWRzIHRvIG1ha2UgaXQgYXZhaWxhYmxlXG4gIHRvIGNvbXBvbmVudHMgdGhyb3VnaCBEZXBlbmRlbmN5IEluamVjdGlvbiAoREkpLjwvcD5cblxuICA8cD5BbiBhcHAncyBjb21wb25lbnRzIHR5cGljYWxseSBkZWZpbmUgbWFueSB2aWV3cywgYXJyYW5nZWQgaGllcmFyY2hpY2FsbHkuIEFuZ3VsYXIgcHJvdmlkZXNcbiAgdGhlIFJvdXRlciBzZXJ2aWNlIHRvIGhlbHAgeW91IGRlZmluZSBuYXZpZ2F0aW9uIHBhdGhzIGFtb25nIHZpZXdzLiBUaGUgcm91dGVyIHByb3ZpZGVzXG4gIHNvcGhpc3RpY2F0ZWQgaW4tYnJvd3NlciBuYXZpZ2F0aW9uYWwgY2FwYWJpbGl0aWVzLjwvcD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuPG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5DYW5jZWw8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cInRydWVcIiBjZGtGb2N1c0luaXRpYWw+SW5zdGFsbDwvYnV0dG9uPlxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG4iXX0=