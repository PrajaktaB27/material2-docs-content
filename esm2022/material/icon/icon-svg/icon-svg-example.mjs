import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
/**
 * @title SVG icons
 */
export class IconSvgExample {
    constructor() {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: IconSvgExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: IconSvgExample, isStandalone: true, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', standalone: true, imports: [MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFdEUsTUFBTSxZQUFZLEdBQ2hCOzs7d0ZBR3NGO0lBQ3RGLGlGQUFpRjtJQUNqRjs7Q0FFRCxDQUFDO0FBRUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sY0FBYztJQUN6QjtRQUNFLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkMscUZBQXFGO1FBQ3JGLHVFQUF1RTtRQUN2RSxnR0FBZ0c7UUFDaEcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOzhHQVRVLGNBQWM7a0dBQWQsY0FBYyw0RUN4QjNCLCtHQUNBLDJDRG9CWSxhQUFhOzsyRkFHWixjQUFjO2tCQVAxQixTQUFTOytCQUNFLGtCQUFrQixjQUVoQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMsbUJBQ1AsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TWF0SWNvblJlZ2lzdHJ5LCBNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuY29uc3QgVEhVTUJVUF9JQ09OID1cbiAgYFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCI+XG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICA8cGF0aCBkPVwiTTEgMjFoNFY5SDF2MTJ6bTIyLTExYzAtMS4xLS45LTItMi0yaC02LjMxbC45NS00LjU3LjAzLS4zMmMwLS40MS0uMTctLjc5LS5gICtcbiAgYDQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjVgICtcbiAgYDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0xLjkxbC0uMDEtLjAxTDIzIDEwelwiLz5cbiAgPC9zdmc+XG5gO1xuXG4vKipcbiAqIEB0aXRsZSBTVkcgaWNvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvbi1zdmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaWNvbi1zdmctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEljb25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSWNvblN2Z0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBpY29uUmVnaXN0cnkgPSBpbmplY3QoTWF0SWNvblJlZ2lzdHJ5KTtcbiAgICBjb25zdCBzYW5pdGl6ZXIgPSBpbmplY3QoRG9tU2FuaXRpemVyKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBwcm92aWRlIHRoZSBpY29uIGhlcmUgYXMgYSBzdHJpbmcgbGl0ZXJhbCBoZXJlIGR1ZSB0byBhIGxpbWl0YXRpb24gaW5cbiAgICAvLyBTdGFja2JsaXR6LiBJZiB5b3Ugd2FudCB0byBwcm92aWRlIHRoZSBpY29uIGZyb20gYSBVUkwsIHlvdSBjYW4gdXNlOlxuICAgIC8vIGBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbigndGh1bWJzLXVwJywgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaWNvbi5zdmcnKSk7YFxuICAgIGljb25SZWdpc3RyeS5hZGRTdmdJY29uTGl0ZXJhbCgndGh1bWJzLXVwJywgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFRIVU1CVVBfSUNPTikpO1xuICB9XG59XG4iLCI8bWF0LWljb24gc3ZnSWNvbj1cInRodW1icy11cFwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB0aHVtYnMgdXAgU1ZHIGljb25cIj48L21hdC1pY29uPlxuIl19