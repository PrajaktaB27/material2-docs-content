import { Component } from '@angular/core';
import { CdkDropList, CdkDragPreview, CdkDrag, moveItemInArray, } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop custom preview
 */
export class CdkDragDropCustomPreviewExample {
    constructor() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg',
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg',
            },
            {
                title: 'Episode IX – The Rise of Skywalker',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
            },
        ];
    }
    // tslint:enable:max-line-length
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkDragDropCustomPreviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0-next.1", type: CdkDragDropCustomPreviewExample, isStandalone: true, selector: "cdk-drag-drop-custom-preview-example", ngImport: i0, template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (movie of movies; track movie) {\n    <div class=\"example-box\" cdkDrag>\n      {{movie.title}}\n      <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n    </div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep", "cdkDropListElementContainer"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: CdkDragPreview, selector: "ng-template[cdkDragPreview]", inputs: ["data", "matchSize"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkDragDropCustomPreviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-custom-preview-example', standalone: true, imports: [CdkDropList, CdkDrag, CdkDragPreview], template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (movie of movies; track movie) {\n    <div class=\"example-box\" cdkDrag>\n      {{movie.title}}\n      <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n    </div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsY0FBYyxFQUNkLE9BQU8sRUFDUCxlQUFlLEdBQ2hCLE1BQU0sd0JBQXdCLENBQUM7O0FBRWhDOztHQUVHO0FBUUgsTUFBTSxPQUFPLCtCQUErQjtJQVA1QztRQVFFLGlDQUFpQztRQUNqQyxXQUFNLEdBQUc7WUFDUDtnQkFDRSxLQUFLLEVBQUUsZ0NBQWdDO2dCQUN2QyxNQUFNLEVBQUUsb0ZBQW9GO2FBQzdGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsTUFBTSxFQUNKLG1IQUFtSDthQUN0SDtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQ0FBbUM7Z0JBQzFDLE1BQU0sRUFDSixxR0FBcUc7YUFDeEc7WUFDRDtnQkFDRSxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxNQUFNLEVBQUUsNEVBQTRFO2FBQ3JGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsTUFBTSxFQUNKLDRGQUE0RjthQUMvRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE1BQU0sRUFBRSw4RUFBOEU7YUFDdkY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsaUNBQWlDO2dCQUN4QyxNQUFNLEVBQ0osa0dBQWtHO2FBQ3JHO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLDRFQUE0RTthQUNyRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxvQ0FBb0M7Z0JBQzNDLE1BQU0sRUFDSiwyRkFBMkY7YUFDOUY7U0FDRixDQUFDO0tBTUg7SUFMQyxnQ0FBZ0M7SUFFaEMsSUFBSSxDQUFDLEtBQXFEO1FBQ3hELGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7cUhBakRVLCtCQUErQjt5R0FBL0IsK0JBQStCLGdHQ25CNUMsOFJBUUEseWtDRFNZLFdBQVcsOGZBQUUsT0FBTyx3YkFBRSxjQUFjOztrR0FFbkMsK0JBQStCO2tCQVAzQyxTQUFTOytCQUNFLHNDQUFzQyxjQUdwQyxJQUFJLFdBQ1AsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wLFxuICBDZGtEcm9wTGlzdCxcbiAgQ2RrRHJhZ1ByZXZpZXcsXG4gIENka0RyYWcsXG4gIG1vdmVJdGVtSW5BcnJheSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBjdXN0b20gcHJldmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0Ryb3BMaXN0LCBDZGtEcmFnLCBDZGtEcmFnUHJldmlld10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgbW92aWVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJIC0gVGhlIFBoYW50b20gTWVuYWNlJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzQvNDAvU3Rhcl9XYXJzX1BoYW50b21fTWVuYWNlX3Bvc3Rlci5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMy8zMi9TdGFyX1dhcnNfLV9FcGlzb2RlX0lJX0F0dGFja19vZl90aGVfQ2xvbmVzXyUyOG1vdmllX3Bvc3RlciUyOS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOS85My9TdGFyX1dhcnNfRXBpc29kZV9JSUlfUmV2ZW5nZV9vZl90aGVfU2l0aF9wb3N0ZXIuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOC84Ny9TdGFyV2Fyc01vdmllUG9zdGVyMTk3Ny5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsXG4gICAgICBwb3N0ZXI6XG4gICAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi8zLzNmL1RoZV9FbXBpcmVfU3RyaWtlc19CYWNrXyUyODE5ODBfZmlsbSUyOS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2IvYjIvUmV0dXJuT2ZUaGVKZWRpUG9zdGVyMTk4My5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJSSAtIFRoZSBGb3JjZSBBd2FrZW5zJyxcbiAgICAgIHBvc3RlcjpcbiAgICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2EvYTIvU3Rhcl9XYXJzX1RoZV9Gb3JjZV9Bd2FrZW5zX1RoZWF0cmljYWxfUG9zdGVyLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVklJSSAtIFRoZSBMYXN0IEplZGknLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNy83Zi9TdGFyX1dhcnNfVGhlX0xhc3RfSmVkaS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElYIOKAkyBUaGUgUmlzZSBvZiBTa3l3YWxrZXInLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYS9hZi9TdGFyX1dhcnNfVGhlX1Jpc2Vfb2ZfU2t5d2Fsa2VyX3Bvc3Rlci5qcGcnLFxuICAgIH0sXG4gIF07XG4gIC8vIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoXG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8e3RpdGxlOiBzdHJpbmc7IHBvc3Rlcjogc3RyaW5nfVtdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm1vdmllcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdCBjbGFzcz1cImV4YW1wbGUtbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIEBmb3IgKG1vdmllIG9mIG1vdmllczsgdHJhY2sgbW92aWUpIHtcbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBjZGtEcmFnPlxuICAgICAge3ttb3ZpZS50aXRsZX19XG4gICAgICA8aW1nICpjZGtEcmFnUHJldmlldyBbc3JjXT1cIm1vdmllLnBvc3RlclwiIFthbHRdPVwibW92aWUudGl0bGVcIj5cbiAgICA8L2Rpdj5cbiAgfVxuPC9kaXY+XG4iXX0=