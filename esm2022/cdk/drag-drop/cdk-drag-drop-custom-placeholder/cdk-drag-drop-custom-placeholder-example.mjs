import { Component } from '@angular/core';
import { CdkDrag, CdkDragPlaceholder, CdkDropList, moveItemInArray, } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop custom placeholder
 */
export class CdkDragDropCustomPlaceholderExample {
    constructor() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi',
            'Episode IX - The Rise of Skywalker',
        ];
    }
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkDragDropCustomPlaceholderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: CdkDragDropCustomPlaceholderExample, isStandalone: true, selector: "cdk-drag-drop-custom-placeholder-example", ngImport: i0, template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (movie of movies; track movie) {\n    <div class=\"example-box\" cdkDrag>\n      <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n      {{movie}}\n    </div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: CdkDragPlaceholder, selector: "ng-template[cdkDragPlaceholder]", inputs: ["data"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkDragDropCustomPlaceholderExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-custom-placeholder-example', standalone: true, imports: [CdkDropList, CdkDrag, CdkDragPlaceholder], template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (movie of movies; track movie) {\n    <div class=\"example-box\" cdkDrag>\n      <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n      {{movie}}\n    </div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLE9BQU8sRUFFUCxrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGVBQWUsR0FDaEIsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFaEM7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUNBQW1DO0lBUGhEO1FBUUUsV0FBTSxHQUFHO1lBQ1AsZ0NBQWdDO1lBQ2hDLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMseUJBQXlCO1lBQ3pCLHFDQUFxQztZQUNyQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLDhCQUE4QjtZQUM5QixvQ0FBb0M7U0FDckMsQ0FBQztLQUtIO0lBSEMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7bUhBZlUsbUNBQW1DO3VHQUFuQyxtQ0FBbUMsb0dDbkJoRCwwUkFRQSxpc0NEU1ksV0FBVywrZEFBRSxPQUFPLHdiQUFFLGtCQUFrQjs7Z0dBRXZDLG1DQUFtQztrQkFQL0MsU0FBUzsrQkFDRSwwQ0FBMEMsY0FHeEMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0RyYWcsXG4gIENka0RyYWdEcm9wLFxuICBDZGtEcmFnUGxhY2Vob2xkZXIsXG4gIENka0Ryb3BMaXN0LFxuICBtb3ZlSXRlbUluQXJyYXksXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY3VzdG9tIHBsYWNlaG9sZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrRHJvcExpc3QsIENka0RyYWcsIENka0RyYWdQbGFjZWhvbGRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlIHtcbiAgbW92aWVzID0gW1xuICAgICdFcGlzb2RlIEkgLSBUaGUgUGhhbnRvbSBNZW5hY2UnLFxuICAgICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICdFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsXG4gICAgJ0VwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJyxcbiAgICAnRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaScsXG4gICAgJ0VwaXNvZGUgVklJIC0gVGhlIEZvcmNlIEF3YWtlbnMnLFxuICAgICdFcGlzb2RlIFZJSUkgLSBUaGUgTGFzdCBKZWRpJyxcbiAgICAnRXBpc29kZSBJWCAtIFRoZSBSaXNlIG9mIFNreXdhbGtlcicsXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMubW92aWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0IGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgQGZvciAobW92aWUgb2YgbW92aWVzOyB0cmFjayBtb3ZpZSkge1xuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXJcIiAqY2RrRHJhZ1BsYWNlaG9sZGVyPjwvZGl2PlxuICAgICAge3ttb3ZpZX19XG4gICAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19