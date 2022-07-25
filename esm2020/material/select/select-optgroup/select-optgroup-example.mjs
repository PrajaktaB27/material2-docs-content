import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/material/legacy-input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
/** @title Select with option groups */
export class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl('');
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ],
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ],
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ],
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ],
            },
        ];
    }
}
SelectOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SelectOptgroupExample, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i3.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatLegacyInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", exportAs: ["matInput"] }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i6.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQWEzQyx1Q0FBdUM7QUFLdkMsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLG1CQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsa0JBQWEsR0FBbUI7WUFDOUI7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO29CQUM5QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7aUJBQ2pEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUM7b0JBQzVDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDO29CQUMxQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztpQkFDekM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztvQkFDaEQsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7b0JBQ3hDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDO2lCQUMzQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO29CQUNsQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztpQkFDMUM7YUFDRjtTQUNGLENBQUM7S0FDSDs7a0hBcENZLHFCQUFxQjtzR0FBckIscUJBQXFCLCtEQ25CbEMsdzhCQTRCQTsyRkRUYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbnRlcmZhY2UgUG9rZW1vbiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUG9rZW1vbkdyb3VwIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBva2Vtb246IFBva2Vtb25bXTtcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBvcHRpb24gZ3JvdXBzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGdyb3VwRXhhbXBsZSB7XG4gIHBva2Vtb25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0dyYXNzJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnYnVsYmFzYXVyLTAnLCB2aWV3VmFsdWU6ICdCdWxiYXNhdXInfSxcbiAgICAgICAge3ZhbHVlOiAnb2RkaXNoLTEnLCB2aWV3VmFsdWU6ICdPZGRpc2gnfSxcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXYXRlcicsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ3NxdWlydGxlLTMnLCB2aWV3VmFsdWU6ICdTcXVpcnRsZSd9LFxuICAgICAgICB7dmFsdWU6ICdwc3lkdWNrLTQnLCB2aWV3VmFsdWU6ICdQc3lkdWNrJ30sXG4gICAgICAgIHt2YWx1ZTogJ2hvcnNlYS01Jywgdmlld1ZhbHVlOiAnSG9yc2VhJ30sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZpcmUnLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2NoYXJtYW5kZXItNicsIHZpZXdWYWx1ZTogJ0NoYXJtYW5kZXInfSxcbiAgICAgICAge3ZhbHVlOiAndnVscGl4LTcnLCB2aWV3VmFsdWU6ICdWdWxwaXgnfSxcbiAgICAgICAge3ZhbHVlOiAnZmxhcmVvbi04Jywgdmlld1ZhbHVlOiAnRmxhcmVvbid9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnbWV3LTknLCB2aWV3VmFsdWU6ICdNZXcnfSxcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5Qb2tlbW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwb2tlbW9uQ29udHJvbFwiPlxuICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcG9rZW1vbkdyb3Vwc1wiIFtsYWJlbF09XCJncm91cC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJncm91cC5kaXNhYmxlZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBva2Vtb24gb2YgZ3JvdXAucG9rZW1vblwiIFt2YWx1ZV09XCJwb2tlbW9uLnZhbHVlXCI+XG4gICAgICAgIHt7cG9rZW1vbi52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LW9wdGdyb3VwPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkNhcnM8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIlN3ZWRpc2ggQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+dm9sdm88L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiR2VybWFuIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=