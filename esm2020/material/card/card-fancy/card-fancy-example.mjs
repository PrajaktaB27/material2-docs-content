import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/card";
/**
 * @title Card with multiple sections
 */
export class CardFancyExample {
}
CardFancyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFancyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.0", type: CardFancyExample, selector: "card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i2.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { kind: "directive", type: i2.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i2.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i2.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { kind: "directive", type: i2.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mYW5jeS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLWZhbmN5L2NhcmQtZmFuY3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7a0hBQWhCLGdCQUFnQjtzR0FBaEIsZ0JBQWdCLDBEQ1Y3QiwweEJBbUJBO2dHRFRhLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBtdWx0aXBsZSBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLWZhbmN5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtZmFuY3ktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhcmQtZmFuY3ktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZhbmN5RXhhbXBsZSB7fVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBtYXQtY2FyZC1hdmF0YXIgY2xhc3M9XCJleGFtcGxlLWhlYWRlci1pbWFnZVwiPjwvZGl2PlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5Eb2cgQnJlZWQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nIGZyb20gSmFwYW4uXG4gICAgICBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhcyBvcmlnaW5hbGx5XG4gICAgICBicmVkIGZvciBodW50aW5nLlxuICAgIDwvcD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuIl19