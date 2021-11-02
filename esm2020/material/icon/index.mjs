import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { IconHarnessExample } from './icon-harness/icon-harness-example';
import * as i0 from "@angular/core";
export { IconHarnessExample, IconOverviewExample, IconSvgExample };
const EXAMPLES = [IconHarnessExample, IconOverviewExample, IconSvgExample];
export class IconExamplesModule {
}
IconExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: IconExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: IconExamplesModule, declarations: [IconHarnessExample, IconOverviewExample, IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample, IconOverviewExample, IconSvgExample] });
IconExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: IconExamplesModule, imports: [[MatIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: IconExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBQyxDQUFDO0FBRWpFLE1BQU0sUUFBUSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFRM0UsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQVJiLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsYUFHN0QsYUFBYSxhQUhQLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWM7cUhBUTVELGtCQUFrQixZQUxwQixDQUFDLGFBQWEsQ0FBQztnR0FLYixrQkFBa0I7a0JBTjlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7SWNvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9pY29uLW92ZXJ2aWV3L2ljb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0ljb25TdmdFeGFtcGxlfSBmcm9tICcuL2ljb24tc3ZnL2ljb24tc3ZnLWV4YW1wbGUnO1xuaW1wb3J0IHtJY29uSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vaWNvbi1oYXJuZXNzL2ljb24taGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtJY29uSGFybmVzc0V4YW1wbGUsIEljb25PdmVydmlld0V4YW1wbGUsIEljb25TdmdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbSWNvbkhhcm5lc3NFeGFtcGxlLCBJY29uT3ZlcnZpZXdFeGFtcGxlLCBJY29uU3ZnRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEljb25FeGFtcGxlc01vZHVsZSB7fVxuIl19