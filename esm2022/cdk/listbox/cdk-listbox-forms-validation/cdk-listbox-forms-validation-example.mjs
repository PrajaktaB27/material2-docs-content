import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with forms validation. */
export class CdkListboxFormsValidationExample {
    constructor() {
        this.signs = [
            'Rat',
            'Ox',
            'Tiger',
            'Rabbit',
            'Dragon',
            'Snake',
            'Horse',
            'Goat',
            'Monkey',
            'Rooster',
            'Dog',
            'Pig',
        ];
        // #docregion errors
        this.signCtrl = new FormControl([], Validators.required);
        this.invalid = this.signCtrl.valueChanges.pipe(map(() => this.signCtrl.touched && !this.signCtrl.valid));
    }
    getErrors() {
        const errors = [];
        if (this.signCtrl.hasError('required')) {
            errors.push('You must enter your zodiac sign');
        }
        if (this.signCtrl.hasError('cdkListboxUnexpectedMultipleValues')) {
            errors.push('You can only select one zodiac sign');
        }
        if (this.signCtrl.hasError('cdkListboxUnexpectedOptionValues')) {
            const invalidOptions = this.signCtrl.getError('cdkListboxUnexpectedOptionValues').values;
            errors.push(`You entered an invalid zodiac sign: ${invalidOptions[0]}`);
        }
        return errors.length ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: CdkListboxFormsValidationExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.1", type: CdkListboxFormsValidationExample, isStandalone: true, selector: "cdk-listbox-forms-validation-example", exportAs: ["cdkListboxFormsValidationExample"], ngImport: i0, template: "<div class=\"example-listbox-container\" [class.example-listbox-invalid]=\"invalid | async\">\n  <label class=\"example-listbox-label\" id=\"example-zodiac-sign-label\">\n    Zodiac Sign\n  </label>\n  <ul cdkListbox\n      [formControl]=\"signCtrl\"\n      aria-labelledby=\"example-zodiac-sign-label\"\n      class=\"example-listbox\">\n    @for (sign of signs; track sign) {\n      <li [cdkOption]=\"sign\" class=\"example-option\">{{sign}}</li>\n    }\n  </ul>\n</div>\n@if (invalid | async) {\n  <div class=\"example-listbox-errors\">\n    @for (error of getErrors(); track error) {\n      <p>{{error}}</p>\n    }\n  </div>\n}\n<p>\n  Your zodiac sign is: <strong>{{signCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat'])\">Set: Cat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Dragon', 'Snake'])\">Set: Dragon, Snake</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat', 'Rat'])\">Set: Cat, Rat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue([])\">Clear</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-invalid {\n  border-color: red;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox-invalid .example-listbox-label {\n  color: red;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 200px;\n  overflow: auto;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-listbox-errors {\n  color: red;\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: CdkListboxFormsValidationExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-forms-validation-example', exportAs: 'cdkListboxFormsValidationExample', standalone: true, imports: [CdkListbox, FormsModule, ReactiveFormsModule, CdkOption, AsyncPipe, JsonPipe], template: "<div class=\"example-listbox-container\" [class.example-listbox-invalid]=\"invalid | async\">\n  <label class=\"example-listbox-label\" id=\"example-zodiac-sign-label\">\n    Zodiac Sign\n  </label>\n  <ul cdkListbox\n      [formControl]=\"signCtrl\"\n      aria-labelledby=\"example-zodiac-sign-label\"\n      class=\"example-listbox\">\n    @for (sign of signs; track sign) {\n      <li [cdkOption]=\"sign\" class=\"example-option\">{{sign}}</li>\n    }\n  </ul>\n</div>\n@if (invalid | async) {\n  <div class=\"example-listbox-errors\">\n    @for (error of getErrors(); track error) {\n      <p>{{error}}</p>\n    }\n  </div>\n}\n<p>\n  Your zodiac sign is: <strong>{{signCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat'])\">Set: Cat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Dragon', 'Snake'])\">Set: Dragon, Snake</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat', 'Rat'])\">Set: Cat, Rat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue([])\">Clear</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-invalid {\n  border-color: red;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox-invalid .example-listbox-label {\n  color: red;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 200px;\n  overflow: auto;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-listbox-errors {\n  color: red;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi9jZGstbGlzdGJveC1mb3Jtcy12YWxpZGF0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1mb3Jtcy12YWxpZGF0aW9uL2Nkay1saXN0Ym94LWZvcm1zLXZhbGlkYXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRTNELDRDQUE0QztBQVM1QyxNQUFNLE9BQU8sZ0NBQWdDO0lBaUIzQztRQWhCQSxVQUFLLEdBQUc7WUFDTixLQUFLO1lBQ0wsSUFBSTtZQUNKLE9BQU87WUFDUCxRQUFRO1lBQ1IsUUFBUTtZQUNSLE9BQU87WUFDUCxPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7WUFDUixTQUFTO1lBQ1QsS0FBSztZQUNMLEtBQUs7U0FDTixDQUFDO1FBU0Ysb0JBQW9CO1FBQ3BCLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTjVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUtELFNBQVM7UUFDUCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFFLENBQUM7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQztZQUMvRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN6RixNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7cUhBdkNVLGdDQUFnQzt5R0FBaEMsZ0NBQWdDLGdKQ2hCN0MsMmdDQTJCQSw2aUNEYlksVUFBVSw4V0FBRSxXQUFXLHNJQUFFLG1CQUFtQixrTkFBRSxTQUFTLHFLQUFFLFNBQVMseUNBQUUsUUFBUTs7a0dBRTNFLGdDQUFnQztrQkFSNUMsU0FBUzsrQkFDRSxzQ0FBc0MsWUFDdEMsa0NBQWtDLGNBR2hDLElBQUksV0FDUCxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0FzeW5jUGlwZSwgSnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCBmb3JtcyB2YWxpZGF0aW9uLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94Rm9ybXNWYWxpZGF0aW9uRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1saXN0Ym94LWZvcm1zLXZhbGlkYXRpb24tZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrTGlzdGJveCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIENka09wdGlvbiwgQXN5bmNQaXBlLCBKc29uUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hGb3Jtc1ZhbGlkYXRpb25FeGFtcGxlIHtcbiAgc2lnbnMgPSBbXG4gICAgJ1JhdCcsXG4gICAgJ094JyxcbiAgICAnVGlnZXInLFxuICAgICdSYWJiaXQnLFxuICAgICdEcmFnb24nLFxuICAgICdTbmFrZScsXG4gICAgJ0hvcnNlJyxcbiAgICAnR29hdCcsXG4gICAgJ01vbmtleScsXG4gICAgJ1Jvb3N0ZXInLFxuICAgICdEb2cnLFxuICAgICdQaWcnLFxuICBdO1xuICBpbnZhbGlkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuc2lnbkN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5zaWduQ3RybC50b3VjaGVkICYmICF0aGlzLnNpZ25DdHJsLnZhbGlkKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2RvY3JlZ2lvbiBlcnJvcnNcbiAgc2lnbkN0cmwgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nW10+KFtdLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblxuICBnZXRFcnJvcnMoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgaWYgKHRoaXMuc2lnbkN0cmwuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcbiAgICAgIGVycm9ycy5wdXNoKCdZb3UgbXVzdCBlbnRlciB5b3VyIHpvZGlhYyBzaWduJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpZ25DdHJsLmhhc0Vycm9yKCdjZGtMaXN0Ym94VW5leHBlY3RlZE11bHRpcGxlVmFsdWVzJykpIHtcbiAgICAgIGVycm9ycy5wdXNoKCdZb3UgY2FuIG9ubHkgc2VsZWN0IG9uZSB6b2RpYWMgc2lnbicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaWduQ3RybC5oYXNFcnJvcignY2RrTGlzdGJveFVuZXhwZWN0ZWRPcHRpb25WYWx1ZXMnKSkge1xuICAgICAgY29uc3QgaW52YWxpZE9wdGlvbnMgPSB0aGlzLnNpZ25DdHJsLmdldEVycm9yKCdjZGtMaXN0Ym94VW5leHBlY3RlZE9wdGlvblZhbHVlcycpLnZhbHVlcztcbiAgICAgIGVycm9ycy5wdXNoKGBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIHpvZGlhYyBzaWduOiAke2ludmFsaWRPcHRpb25zWzBdfWApO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzLmxlbmd0aCA/IGVycm9ycyA6IG51bGw7XG4gIH1cbiAgLy8gI2VuZGRvY3JlZ2lvbiBlcnJvcnNcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCIgW2NsYXNzLmV4YW1wbGUtbGlzdGJveC1pbnZhbGlkXT1cImludmFsaWQgfCBhc3luY1wiPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtem9kaWFjLXNpZ24tbGFiZWxcIj5cbiAgICBab2RpYWMgU2lnblxuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgW2Zvcm1Db250cm9sXT1cInNpZ25DdHJsXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtem9kaWFjLXNpZ24tbGFiZWxcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICBAZm9yIChzaWduIG9mIHNpZ25zOyB0cmFjayBzaWduKSB7XG4gICAgICA8bGkgW2Nka09wdGlvbl09XCJzaWduXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPnt7c2lnbn19PC9saT5cbiAgICB9XG4gIDwvdWw+XG48L2Rpdj5cbkBpZiAoaW52YWxpZCB8IGFzeW5jKSB7XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtZXJyb3JzXCI+XG4gICAgQGZvciAoZXJyb3Igb2YgZ2V0RXJyb3JzKCk7IHRyYWNrIGVycm9yKSB7XG4gICAgICA8cD57e2Vycm9yfX08L3A+XG4gICAgfVxuICA8L2Rpdj5cbn1cbjxwPlxuICBZb3VyIHpvZGlhYyBzaWduIGlzOiA8c3Ryb25nPnt7c2lnbkN0cmwudmFsdWUgfCBqc29ufX08L3N0cm9uZz4mbmJzcDtcbiAgPGJ1dHRvbiAoY2xpY2spPVwic2lnbkN0cmwuc2V0VmFsdWUoWydDYXQnXSlcIj5TZXQ6IENhdDwvYnV0dG9uPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJzaWduQ3RybC5zZXRWYWx1ZShbJ0RyYWdvbicsICdTbmFrZSddKVwiPlNldDogRHJhZ29uLCBTbmFrZTwvYnV0dG9uPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJzaWduQ3RybC5zZXRWYWx1ZShbJ0NhdCcsICdSYXQnXSlcIj5TZXQ6IENhdCwgUmF0PC9idXR0b24+Jm5ic3A7XG4gIDxidXR0b24gKGNsaWNrKT1cInNpZ25DdHJsLnNldFZhbHVlKFtdKVwiPkNsZWFyPC9idXR0b24+XG48L3A+XG4iXX0=