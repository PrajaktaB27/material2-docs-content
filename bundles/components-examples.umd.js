(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples', ['exports'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     ******************************************************************************
     * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
     ******************************************************************************
     */
    var EXAMPLE_COMPONENTS = {
        "cdk-menu-context": {
            "packagePath": "cdk-experimental/menu/cdk-menu-context",
            "title": "Context menu.",
            "componentName": "CdkMenuContextExample",
            "files": [
                "cdk-menu-context-example.ts",
                "cdk-menu-context-example.html",
                "cdk-menu-context-example.css"
            ],
            "selector": "cdk-menu-context-example",
            "additionalComponents": [],
            "primaryFile": "cdk-menu-context-example.ts",
            "module": {
                "name": "CdkMenuExamplesModule",
                "importSpecifier": "cdk-experimental/menu"
            }
        },
        "cdk-menu-inline": {
            "packagePath": "cdk-experimental/menu/cdk-menu-inline",
            "title": "Gmail inline menu.",
            "componentName": "CdkMenuInlineExample",
            "files": [
                "cdk-menu-inline-example.ts",
                "cdk-menu-inline-example.html",
                "cdk-menu-inline-example.css"
            ],
            "selector": "cdk-menu-inline-example",
            "additionalComponents": [],
            "primaryFile": "cdk-menu-inline-example.ts",
            "module": {
                "name": "CdkMenuExamplesModule",
                "importSpecifier": "cdk-experimental/menu"
            }
        },
        "cdk-menu-menubar": {
            "packagePath": "cdk-experimental/menu/cdk-menu-menubar",
            "title": "Google Docs Menu Bar.",
            "componentName": "CdkMenuMenubarExample",
            "files": [
                "cdk-menu-menubar-example.ts",
                "cdk-menu-menubar-example.html",
                "cdk-menu-menubar-example.css"
            ],
            "selector": "cdk-menu-menubar-example",
            "additionalComponents": [],
            "primaryFile": "cdk-menu-menubar-example.ts",
            "module": {
                "name": "CdkMenuExamplesModule",
                "importSpecifier": "cdk-experimental/menu"
            }
        },
        "cdk-menu-standalone-menu": {
            "packagePath": "cdk-experimental/menu/cdk-menu-standalone-menu",
            "title": "Menu with Standalone Trigger.",
            "componentName": "CdkMenuStandaloneMenuExample",
            "files": [
                "cdk-menu-standalone-menu-example.ts",
                "cdk-menu-standalone-menu-example.html",
                "cdk-menu-standalone-menu-example.css"
            ],
            "selector": "cdk-menu-standalone-menu-example",
            "additionalComponents": [],
            "primaryFile": "cdk-menu-standalone-menu-example.ts",
            "module": {
                "name": "CdkMenuExamplesModule",
                "importSpecifier": "cdk-experimental/menu"
            }
        },
        "cdk-menu-standalone-stateful-menu": {
            "packagePath": "cdk-experimental/menu/cdk-menu-standalone-stateful-menu",
            "title": "Stateful Menu with Standalone Trigger.",
            "componentName": "CdkMenuStandaloneStatefulMenuExample",
            "files": [
                "cdk-menu-standalone-stateful-menu-example.ts",
                "cdk-menu-standalone-stateful-menu-example.html",
                "cdk-menu-standalone-stateful-menu-example.css"
            ],
            "selector": "cdk-menu-standalone-stateful-menu-example",
            "additionalComponents": [],
            "primaryFile": "cdk-menu-standalone-stateful-menu-example.ts",
            "module": {
                "name": "CdkMenuExamplesModule",
                "importSpecifier": "cdk-experimental/menu"
            }
        },
        "cdk-popover-edit-cdk-table-flex": {
            "packagePath": "cdk-experimental/popover-edit/cdk-popover-edit-cdk-table-flex",
            "title": "CDK Popover Edit on a flex cdk-table.",
            "componentName": "CdkPopoverEditCdkTableFlexExample",
            "files": [
                "cdk-popover-edit-cdk-table-flex-example.ts",
                "cdk-popover-edit-cdk-table-flex-example.html",
                "cdk-popover-edit-cdk-table-flex-example.css"
            ],
            "selector": "cdk-popover-edit-cdk-table-flex-example",
            "additionalComponents": [],
            "primaryFile": "cdk-popover-edit-cdk-table-flex-example.ts",
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-cdk-table": {
            "packagePath": "cdk-experimental/popover-edit/cdk-popover-edit-cdk-table",
            "title": "CDK Popover Edit on a CDK data-table",
            "componentName": "CdkPopoverEditCdkTableExample",
            "files": [
                "cdk-popover-edit-cdk-table-example.ts",
                "cdk-popover-edit-cdk-table-example.html",
                "cdk-popover-edit-cdk-table-example.css"
            ],
            "selector": "cdk-popover-edit-cdk-table-example",
            "additionalComponents": [],
            "primaryFile": "cdk-popover-edit-cdk-table-example.ts",
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-cell-span-vanilla-table": {
            "packagePath": "cdk-experimental/popover-edit/cdk-popover-edit-cell-span-vanilla-table",
            "title": "CDK Popover Edit spanning multiple columns on an HTML data-table",
            "componentName": "CdkPopoverEditCellSpanVanillaTableExample",
            "files": [
                "cdk-popover-edit-cell-span-vanilla-table-example.ts",
                "cdk-popover-edit-cell-span-vanilla-table-example.html",
                "cdk-popover-edit-cell-span-vanilla-table-example.css"
            ],
            "selector": "cdk-popover-edit-cell-span-vanilla-table-example",
            "additionalComponents": [],
            "primaryFile": "cdk-popover-edit-cell-span-vanilla-table-example.ts",
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-tab-out-vanilla-table": {
            "packagePath": "cdk-experimental/popover-edit/cdk-popover-edit-tab-out-vanilla-table",
            "title": "CDK Popover Edit with spreadsheet-like configuration on an HTML data-table",
            "componentName": "CdkPopoverEditTabOutVanillaTableExample",
            "files": [
                "cdk-popover-edit-tab-out-vanilla-table-example.ts",
                "cdk-popover-edit-tab-out-vanilla-table-example.html",
                "cdk-popover-edit-tab-out-vanilla-table-example.css"
            ],
            "selector": "cdk-popover-edit-tab-out-vanilla-table-example",
            "additionalComponents": [],
            "primaryFile": "cdk-popover-edit-tab-out-vanilla-table-example.ts",
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-vanilla-table": {
            "packagePath": "cdk-experimental/popover-edit/cdk-popover-edit-vanilla-table",
            "title": "CDK Popover Edit on an HTML data-table",
            "componentName": "CdkPopoverEditVanillaTableExample",
            "files": [
                "cdk-popover-edit-vanilla-table-example.ts",
                "cdk-popover-edit-vanilla-table-example.html",
                "cdk-popover-edit-vanilla-table-example.css"
            ],
            "selector": "cdk-popover-edit-vanilla-table-example",
            "additionalComponents": [],
            "primaryFile": "cdk-popover-edit-vanilla-table-example.ts",
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-selection-column": {
            "packagePath": "cdk-experimental/selection/cdk-selection-column",
            "title": "CDK Selection Column on a CDK table.",
            "componentName": "CdkSelectionColumnExample",
            "files": [
                "cdk-selection-column-example.ts",
                "cdk-selection-column-example.html",
                "cdk-selection-column-example.css"
            ],
            "selector": "cdk-selection-column-example",
            "additionalComponents": [],
            "primaryFile": "cdk-selection-column-example.ts",
            "module": {
                "name": "CdkSelectionExamplesModule",
                "importSpecifier": "cdk-experimental/selection"
            }
        },
        "cdk-selection-list": {
            "packagePath": "cdk-experimental/selection/cdk-selection-list",
            "title": "CDK Selection on a simple list.",
            "componentName": "CdkSelectionListExample",
            "files": [
                "cdk-selection-list-example.ts",
                "cdk-selection-list-example.html"
            ],
            "selector": "cdk-selection-list-example",
            "additionalComponents": [],
            "primaryFile": "cdk-selection-list-example.ts",
            "module": {
                "name": "CdkSelectionExamplesModule",
                "importSpecifier": "cdk-experimental/selection"
            }
        },
        "focus-monitor-directives": {
            "packagePath": "cdk/a11y/focus-monitor-directives",
            "title": "Monitoring focus with FocusMonitor",
            "componentName": "FocusMonitorDirectivesExample",
            "files": [
                "focus-monitor-directives-example.ts",
                "focus-monitor-directives-example.html",
                "focus-monitor-directives-example.css"
            ],
            "selector": "focus-monitor-directives-example",
            "additionalComponents": [],
            "primaryFile": "focus-monitor-directives-example.ts",
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "focus-monitor-focus-via": {
            "packagePath": "cdk/a11y/focus-monitor-focus-via",
            "title": "Focusing with a specific FocusOrigin",
            "componentName": "FocusMonitorFocusViaExample",
            "files": [
                "focus-monitor-focus-via-example.ts",
                "focus-monitor-focus-via-example.html",
                "focus-monitor-focus-via-example.css"
            ],
            "selector": "focus-monitor-focus-via-example",
            "additionalComponents": [],
            "primaryFile": "focus-monitor-focus-via-example.ts",
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "focus-monitor-overview": {
            "packagePath": "cdk/a11y/focus-monitor-overview",
            "title": "Monitoring focus with FocusMonitor",
            "componentName": "FocusMonitorOverviewExample",
            "files": [
                "focus-monitor-overview-example.ts",
                "focus-monitor-overview-example.html",
                "focus-monitor-overview-example.css"
            ],
            "selector": "focus-monitor-overview-example",
            "additionalComponents": [],
            "primaryFile": "focus-monitor-overview-example.ts",
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "cdk-clipboard-overview": {
            "packagePath": "cdk/clipboard/cdk-clipboard-overview",
            "title": "Clipboard overview",
            "componentName": "CdkClipboardOverviewExample",
            "files": [
                "cdk-clipboard-overview-example.ts",
                "cdk-clipboard-overview-example.html",
                "cdk-clipboard-overview-example.css"
            ],
            "selector": "cdk-clipboard-overview-example",
            "additionalComponents": [],
            "primaryFile": "cdk-clipboard-overview-example.ts",
            "module": {
                "name": "CdkClipboardExamplesModule",
                "importSpecifier": "cdk/clipboard"
            }
        },
        "cdk-drag-drop-axis-lock": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-axis-lock",
            "title": "Drag&Drop position locking",
            "componentName": "CdkDragDropAxisLockExample",
            "files": [
                "cdk-drag-drop-axis-lock-example.ts",
                "cdk-drag-drop-axis-lock-example.html",
                "cdk-drag-drop-axis-lock-example.css"
            ],
            "selector": "cdk-drag-drop-axis-lock-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-axis-lock-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-boundary": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-boundary",
            "title": "Drag&Drop boundary",
            "componentName": "CdkDragDropBoundaryExample",
            "files": [
                "cdk-drag-drop-boundary-example.ts",
                "cdk-drag-drop-boundary-example.html",
                "cdk-drag-drop-boundary-example.css"
            ],
            "selector": "cdk-drag-drop-boundary-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-boundary-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-connected-sorting-group": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-connected-sorting-group",
            "title": "Drag&Drop connected sorting group",
            "componentName": "CdkDragDropConnectedSortingGroupExample",
            "files": [
                "cdk-drag-drop-connected-sorting-group-example.ts",
                "cdk-drag-drop-connected-sorting-group-example.html",
                "cdk-drag-drop-connected-sorting-group-example.css"
            ],
            "selector": "cdk-drag-drop-connected-sorting-group-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-connected-sorting-group-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-connected-sorting": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-connected-sorting",
            "title": "Drag&Drop connected sorting",
            "componentName": "CdkDragDropConnectedSortingExample",
            "files": [
                "cdk-drag-drop-connected-sorting-example.ts",
                "cdk-drag-drop-connected-sorting-example.html",
                "cdk-drag-drop-connected-sorting-example.css"
            ],
            "selector": "cdk-drag-drop-connected-sorting-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-connected-sorting-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-custom-placeholder": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-custom-placeholder",
            "title": "Drag&Drop custom placeholder",
            "componentName": "CdkDragDropCustomPlaceholderExample",
            "files": [
                "cdk-drag-drop-custom-placeholder-example.ts",
                "cdk-drag-drop-custom-placeholder-example.html",
                "cdk-drag-drop-custom-placeholder-example.css"
            ],
            "selector": "cdk-drag-drop-custom-placeholder-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-custom-placeholder-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-custom-preview": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-custom-preview",
            "title": "Drag&Drop custom preview",
            "componentName": "CdkDragDropCustomPreviewExample",
            "files": [
                "cdk-drag-drop-custom-preview-example.ts",
                "cdk-drag-drop-custom-preview-example.html",
                "cdk-drag-drop-custom-preview-example.css"
            ],
            "selector": "cdk-drag-drop-custom-preview-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-custom-preview-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-delay": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-delay",
            "title": "Delayed dragging",
            "componentName": "CdkDragDropDelayExample",
            "files": [
                "cdk-drag-drop-delay-example.ts",
                "cdk-drag-drop-delay-example.html",
                "cdk-drag-drop-delay-example.css"
            ],
            "selector": "cdk-drag-drop-delay-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-delay-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-disabled-sorting": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-disabled-sorting",
            "title": "Drag&Drop disabled sorting",
            "componentName": "CdkDragDropDisabledSortingExample",
            "files": [
                "cdk-drag-drop-disabled-sorting-example.ts",
                "cdk-drag-drop-disabled-sorting-example.html",
                "cdk-drag-drop-disabled-sorting-example.css"
            ],
            "selector": "cdk-drag-drop-disabled-sorting-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-disabled-sorting-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-disabled": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-disabled",
            "title": "Drag&Drop disabled",
            "componentName": "CdkDragDropDisabledExample",
            "files": [
                "cdk-drag-drop-disabled-example.ts",
                "cdk-drag-drop-disabled-example.html",
                "cdk-drag-drop-disabled-example.css"
            ],
            "selector": "cdk-drag-drop-disabled-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-disabled-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-enter-predicate": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-enter-predicate",
            "title": "Drag&Drop enter predicate",
            "componentName": "CdkDragDropEnterPredicateExample",
            "files": [
                "cdk-drag-drop-enter-predicate-example.ts",
                "cdk-drag-drop-enter-predicate-example.html",
                "cdk-drag-drop-enter-predicate-example.css"
            ],
            "selector": "cdk-drag-drop-enter-predicate-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-enter-predicate-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-free-drag-position": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-free-drag-position",
            "title": "Programmatically setting the free drag position",
            "componentName": "CdkDragDropFreeDragPositionExample",
            "files": [
                "cdk-drag-drop-free-drag-position-example.ts",
                "cdk-drag-drop-free-drag-position-example.html",
                "cdk-drag-drop-free-drag-position-example.css"
            ],
            "selector": "cdk-drag-drop-free-drag-position-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-free-drag-position-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-handle": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-handle",
            "title": "Drag&Drop with a handle",
            "componentName": "CdkDragDropHandleExample",
            "files": [
                "cdk-drag-drop-handle-example.ts",
                "cdk-drag-drop-handle-example.html",
                "cdk-drag-drop-handle-example.css"
            ],
            "selector": "cdk-drag-drop-handle-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-handle-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-horizontal-sorting": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-horizontal-sorting",
            "title": "Drag&Drop horizontal sorting",
            "componentName": "CdkDragDropHorizontalSortingExample",
            "files": [
                "cdk-drag-drop-horizontal-sorting-example.ts",
                "cdk-drag-drop-horizontal-sorting-example.html",
                "cdk-drag-drop-horizontal-sorting-example.css"
            ],
            "selector": "cdk-drag-drop-horizontal-sorting-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-horizontal-sorting-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-overview": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-overview",
            "title": "Basic Drag&Drop",
            "componentName": "CdkDragDropOverviewExample",
            "files": [
                "cdk-drag-drop-overview-example.ts",
                "cdk-drag-drop-overview-example.html",
                "cdk-drag-drop-overview-example.css"
            ],
            "selector": "cdk-drag-drop-overview-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-overview-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-root-element": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-root-element",
            "title": "Drag&Drop with alternate root element",
            "componentName": "CdkDragDropRootElementExample",
            "files": [
                "cdk-drag-drop-root-element-example.ts",
                "cdk-drag-drop-root-element-example.html",
                "cdk-drag-drop-root-element-example.css"
            ],
            "selector": "cdk-drag-drop-root-element-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-root-element-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-sort-predicate": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-sort-predicate",
            "title": "Drag&Drop sort predicate",
            "componentName": "CdkDragDropSortPredicateExample",
            "files": [
                "cdk-drag-drop-sort-predicate-example.ts",
                "cdk-drag-drop-sort-predicate-example.html",
                "cdk-drag-drop-sort-predicate-example.css"
            ],
            "selector": "cdk-drag-drop-sort-predicate-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-sort-predicate-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-sorting": {
            "packagePath": "cdk/drag-drop/cdk-drag-drop-sorting",
            "title": "Drag&Drop sorting",
            "componentName": "CdkDragDropSortingExample",
            "files": [
                "cdk-drag-drop-sorting-example.ts",
                "cdk-drag-drop-sorting-example.html",
                "cdk-drag-drop-sorting-example.css"
            ],
            "selector": "cdk-drag-drop-sorting-example",
            "additionalComponents": [],
            "primaryFile": "cdk-drag-drop-sorting-example.ts",
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-overlay-basic": {
            "packagePath": "cdk/overlay/cdk-overlay-basic",
            "title": "Overlay basic example",
            "componentName": "CdkOverlayBasicExample",
            "files": [
                "cdk-overlay-basic-example.ts",
                "./cdk-overlay-basic-example.html",
                "./cdk-overlay-basic-example.css"
            ],
            "selector": "cdk-overlay-basic-example",
            "additionalComponents": [],
            "primaryFile": "cdk-overlay-basic-example.ts",
            "module": {
                "name": "CdkOverlayExamplesModule",
                "importSpecifier": "cdk/overlay"
            }
        },
        "cdk-platform-overview": {
            "packagePath": "cdk/platform/cdk-platform-overview",
            "title": "Platform overview",
            "componentName": "CdkPlatformOverviewExample",
            "files": [
                "cdk-platform-overview-example.ts",
                "cdk-platform-overview-example.html"
            ],
            "selector": "cdk-platform-overview-example",
            "additionalComponents": [],
            "primaryFile": "cdk-platform-overview-example.ts",
            "module": {
                "name": "CdkPlatformExamplesModule",
                "importSpecifier": "cdk/platform"
            }
        },
        "cdk-portal-overview": {
            "packagePath": "cdk/portal/cdk-portal-overview",
            "title": "Portal overview",
            "componentName": "CdkPortalOverviewExample",
            "files": [
                "cdk-portal-overview-example.ts",
                "cdk-portal-overview-example.html",
                "cdk-portal-overview-example.css"
            ],
            "selector": "cdk-portal-overview-example",
            "additionalComponents": [
                "ComponentPortalExample"
            ],
            "primaryFile": "cdk-portal-overview-example.ts",
            "module": {
                "name": "CdkPortalExamplesModule",
                "importSpecifier": "cdk/portal"
            }
        },
        "cdk-virtual-scroll-context": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-context",
            "title": "Virtual scroll context variables",
            "componentName": "CdkVirtualScrollContextExample",
            "files": [
                "cdk-virtual-scroll-context-example.ts",
                "cdk-virtual-scroll-context-example.html",
                "cdk-virtual-scroll-context-example.css"
            ],
            "selector": "cdk-virtual-scroll-context-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-context-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-custom-strategy": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-custom-strategy",
            "title": "Virtual scroll with a custom strategy",
            "componentName": "CdkVirtualScrollCustomStrategyExample",
            "files": [
                "cdk-virtual-scroll-custom-strategy-example.ts",
                "cdk-virtual-scroll-custom-strategy-example.html",
                "cdk-virtual-scroll-custom-strategy-example.css"
            ],
            "selector": "cdk-virtual-scroll-custom-strategy-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-custom-strategy-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-data-source": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-data-source",
            "title": "Virtual scroll with a custom data source",
            "componentName": "CdkVirtualScrollDataSourceExample",
            "files": [
                "cdk-virtual-scroll-data-source-example.ts",
                "cdk-virtual-scroll-data-source-example.html",
                "cdk-virtual-scroll-data-source-example.css"
            ],
            "selector": "cdk-virtual-scroll-data-source-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-data-source-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-dl": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-dl",
            "title": "Virtual scrolling `<dl>`",
            "componentName": "CdkVirtualScrollDlExample",
            "files": [
                "cdk-virtual-scroll-dl-example.ts",
                "cdk-virtual-scroll-dl-example.html",
                "cdk-virtual-scroll-dl-example.css"
            ],
            "selector": "cdk-virtual-scroll-dl-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-dl-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-fixed-buffer": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-fixed-buffer",
            "title": "Fixed size virtual scroll with custom buffer parameters",
            "componentName": "CdkVirtualScrollFixedBufferExample",
            "files": [
                "cdk-virtual-scroll-fixed-buffer-example.ts",
                "cdk-virtual-scroll-fixed-buffer-example.html",
                "cdk-virtual-scroll-fixed-buffer-example.css"
            ],
            "selector": "cdk-virtual-scroll-fixed-buffer-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-fixed-buffer-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-horizontal": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-horizontal",
            "title": "Horizontal virtual scroll",
            "componentName": "CdkVirtualScrollHorizontalExample",
            "files": [
                "cdk-virtual-scroll-horizontal-example.ts",
                "cdk-virtual-scroll-horizontal-example.html",
                "cdk-virtual-scroll-horizontal-example.css"
            ],
            "selector": "cdk-virtual-scroll-horizontal-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-horizontal-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-overview": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-overview",
            "title": "Basic virtual scroll",
            "componentName": "CdkVirtualScrollOverviewExample",
            "files": [
                "cdk-virtual-scroll-overview-example.ts",
                "cdk-virtual-scroll-overview-example.html",
                "cdk-virtual-scroll-overview-example.css"
            ],
            "selector": "cdk-virtual-scroll-overview-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-overview-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-template-cache": {
            "packagePath": "cdk/scrolling/cdk-virtual-scroll-template-cache",
            "title": "Virtual scroll with no template caching",
            "componentName": "CdkVirtualScrollTemplateCacheExample",
            "files": [
                "cdk-virtual-scroll-template-cache-example.ts",
                "cdk-virtual-scroll-template-cache-example.html",
                "cdk-virtual-scroll-template-cache-example.css"
            ],
            "selector": "cdk-virtual-scroll-template-cache-example",
            "additionalComponents": [],
            "primaryFile": "cdk-virtual-scroll-template-cache-example.ts",
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-custom-stepper-without-form": {
            "packagePath": "cdk/stepper/cdk-custom-stepper-without-form",
            "title": "A custom CDK stepper without a form",
            "componentName": "CdkCustomStepperWithoutFormExample",
            "files": [
                "cdk-custom-stepper-without-form-example.ts",
                "./cdk-custom-stepper-without-form-example.html",
                "./cdk-custom-stepper-without-form-example.css",
                "./example-custom-stepper.html",
                "./example-custom-stepper.css"
            ],
            "selector": "cdk-custom-stepper-without-form-example",
            "additionalComponents": [
                "CustomStepper"
            ],
            "primaryFile": "cdk-custom-stepper-without-form-example.ts",
            "module": {
                "name": "CdkStepperExamplesModule",
                "importSpecifier": "cdk/stepper"
            }
        },
        "cdk-linear-stepper-with-form": {
            "packagePath": "cdk/stepper/cdk-linear-stepper-with-form",
            "title": "A custom CDK linear stepper with forms",
            "componentName": "CdkLinearStepperWithFormExample",
            "files": [
                "cdk-linear-stepper-with-form-example.ts",
                "./cdk-linear-stepper-with-form-example.html",
                "./cdk-linear-stepper-with-form-example.css",
                "./example-custom-linear-stepper.html",
                "./example-custom-linear-stepper.css"
            ],
            "selector": "cdk-linear-stepper-with-form-example",
            "additionalComponents": [
                "CustomLinearStepper"
            ],
            "primaryFile": "cdk-linear-stepper-with-form-example.ts",
            "module": {
                "name": "CdkStepperExamplesModule",
                "importSpecifier": "cdk/stepper"
            }
        },
        "cdk-table-basic": {
            "packagePath": "cdk/table/cdk-table-basic",
            "title": "Basic CDK data-table",
            "componentName": "CdkTableBasicExample",
            "files": [
                "cdk-table-basic-example.ts",
                "cdk-table-basic-example.html",
                "cdk-table-basic-example.css"
            ],
            "selector": "cdk-table-basic-example",
            "additionalComponents": [],
            "primaryFile": "cdk-table-basic-example.ts",
            "module": {
                "name": "CdkTableExamplesModule",
                "importSpecifier": "cdk/table"
            }
        },
        "cdk-table-fixed-layout": {
            "packagePath": "cdk/table/cdk-table-fixed-layout",
            "title": "CDK table with a fixed layout.",
            "componentName": "CdkTableFixedLayoutExample",
            "files": [
                "cdk-table-fixed-layout-example.ts",
                "cdk-table-fixed-layout-example.html",
                "cdk-table-fixed-layout-example.css"
            ],
            "selector": "cdk-table-fixed-layout-example",
            "additionalComponents": [],
            "primaryFile": "cdk-table-fixed-layout-example.ts",
            "module": {
                "name": "CdkTableExamplesModule",
                "importSpecifier": "cdk/table"
            }
        },
        "cdk-table-flex-basic": {
            "packagePath": "cdk/table/cdk-table-flex-basic",
            "title": "Basic use of `<cdk-table>` (uses display flex)",
            "componentName": "CdkTableFlexBasicExample",
            "files": [
                "cdk-table-flex-basic-example.ts",
                "cdk-table-flex-basic-example.html",
                "cdk-table-flex-basic-example.css"
            ],
            "selector": "cdk-table-flex-basic-example",
            "additionalComponents": [],
            "primaryFile": "cdk-table-flex-basic-example.ts",
            "module": {
                "name": "CdkTableExamplesModule",
                "importSpecifier": "cdk/table"
            }
        },
        "text-field-autofill-directive": {
            "packagePath": "cdk/text-field/text-field-autofill-directive",
            "title": "Monitoring autofill state with cdkAutofill",
            "componentName": "TextFieldAutofillDirectiveExample",
            "files": [
                "text-field-autofill-directive-example.ts",
                "./text-field-autofill-directive-example.html",
                "./text-field-autofill-directive-example.css"
            ],
            "selector": "text-field-autofill-directive-example",
            "additionalComponents": [],
            "primaryFile": "text-field-autofill-directive-example.ts",
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "text-field-autofill-monitor": {
            "packagePath": "cdk/text-field/text-field-autofill-monitor",
            "title": "Monitoring autofill state with AutofillMonitor",
            "componentName": "TextFieldAutofillMonitorExample",
            "files": [
                "text-field-autofill-monitor-example.ts",
                "./text-field-autofill-monitor-example.html",
                "./text-field-autofill-monitor-example.css"
            ],
            "selector": "text-field-autofill-monitor-example",
            "additionalComponents": [],
            "primaryFile": "text-field-autofill-monitor-example.ts",
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "text-field-autosize-textarea": {
            "packagePath": "cdk/text-field/text-field-autosize-textarea",
            "title": "Auto-resizing textarea",
            "componentName": "TextFieldAutosizeTextareaExample",
            "files": [
                "text-field-autosize-textarea-example.ts",
                "./text-field-autosize-textarea-example.html",
                "./text-field-autosize-textarea-example.css"
            ],
            "selector": "text-field-autosize-textarea-example",
            "additionalComponents": [],
            "primaryFile": "text-field-autosize-textarea-example.ts",
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "cdk-tree-flat": {
            "packagePath": "cdk/tree/cdk-tree-flat",
            "title": "Tree with flat nodes",
            "componentName": "CdkTreeFlatExample",
            "files": [
                "cdk-tree-flat-example.ts",
                "cdk-tree-flat-example.html",
                "cdk-tree-flat-example.css"
            ],
            "selector": "cdk-tree-flat-example",
            "additionalComponents": [],
            "primaryFile": "cdk-tree-flat-example.ts",
            "module": {
                "name": "CdkTreeExamplesModule",
                "importSpecifier": "cdk/tree"
            }
        },
        "cdk-tree-nested": {
            "packagePath": "cdk/tree/cdk-tree-nested",
            "title": "Tree with nested nodes",
            "componentName": "CdkTreeNestedExample",
            "files": [
                "cdk-tree-nested-example.ts",
                "cdk-tree-nested-example.html",
                "cdk-tree-nested-example.css"
            ],
            "selector": "cdk-tree-nested-example",
            "additionalComponents": [],
            "primaryFile": "cdk-tree-nested-example.ts",
            "module": {
                "name": "CdkTreeExamplesModule",
                "importSpecifier": "cdk/tree"
            }
        },
        "default-enabled-column-resize-flex": {
            "packagePath": "material-experimental/column-resize/default-enabled-column-resize-flex",
            "title": "Default-enabled column resize with a flex-based mat-table.",
            "componentName": "DefaultEnabledColumnResizeFlexExample",
            "files": [
                "default-enabled-column-resize-flex-example.ts",
                "default-enabled-column-resize-flex-example.html",
                "default-enabled-column-resize-flex-example.css"
            ],
            "selector": "default-enabled-column-resize-flex-example",
            "additionalComponents": [],
            "primaryFile": "default-enabled-column-resize-flex-example.ts",
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "default-enabled-column-resize": {
            "packagePath": "material-experimental/column-resize/default-enabled-column-resize",
            "title": "Default-enabled column resize with a table-based mat-table.",
            "componentName": "DefaultEnabledColumnResizeExample",
            "files": [
                "default-enabled-column-resize-example.ts",
                "default-enabled-column-resize-example.html",
                "default-enabled-column-resize-example.css"
            ],
            "selector": "default-enabled-column-resize-example",
            "additionalComponents": [],
            "primaryFile": "default-enabled-column-resize-example.ts",
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "opt-in-column-resize": {
            "packagePath": "material-experimental/column-resize/opt-in-column-resize",
            "title": "Opt-in column resize with a table-based mat-table.",
            "componentName": "OptInColumnResizeExample",
            "files": [
                "opt-in-column-resize-example.ts",
                "opt-in-column-resize-example.html",
                "opt-in-column-resize-example.css"
            ],
            "selector": "opt-in-column-resize-example",
            "additionalComponents": [],
            "primaryFile": "opt-in-column-resize-example.ts",
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "mdc-card-fancy": {
            "packagePath": "material-experimental/mdc-card/mdc-card-fancy",
            "title": "Card with multiple sections",
            "componentName": "MdcCardFancyExample",
            "files": [
                "mdc-card-fancy-example.ts",
                "mdc-card-fancy-example.html",
                "mdc-card-fancy-example.css"
            ],
            "selector": "mdc-card-fancy-example",
            "additionalComponents": [],
            "primaryFile": "mdc-card-fancy-example.ts",
            "module": {
                "name": "MdcCardExamplesModule",
                "importSpecifier": "material-experimental/mdc-card"
            }
        },
        "mdc-form-field-custom-control": {
            "packagePath": "material-experimental/mdc-form-field/mdc-form-field-custom-control",
            "title": "Form field with custom telephone number input control.",
            "componentName": "MdcFormFieldCustomControlExample",
            "files": [
                "form-field-custom-control-example.ts",
                "form-field-custom-control-example.html",
                "example-tel-input-example.html",
                "example-tel-input-example.css"
            ],
            "selector": "mdc-form-field-custom-control-example",
            "additionalComponents": [
                "MyTelInput"
            ],
            "primaryFile": "form-field-custom-control-example.ts",
            "module": {
                "name": "MdcFormFieldExamplesModule",
                "importSpecifier": "material-experimental/mdc-form-field"
            }
        },
        "popover-edit-cell-span-mat-table": {
            "packagePath": "material-experimental/popover-edit/popover-edit-cell-span-mat-table",
            "title": "Material Popover Edit spanning multiple columns on a Material data-table",
            "componentName": "PopoverEditCellSpanMatTableExample",
            "files": [
                "popover-edit-cell-span-mat-table-example.ts",
                "popover-edit-cell-span-mat-table-example.html",
                "popover-edit-cell-span-mat-table-example.css"
            ],
            "selector": "popover-edit-cell-span-mat-table-example",
            "additionalComponents": [],
            "primaryFile": "popover-edit-cell-span-mat-table-example.ts",
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-mat-table-flex": {
            "packagePath": "material-experimental/popover-edit/popover-edit-mat-table-flex",
            "title": "Material Popover Edit on a flex Material data-table",
            "componentName": "PopoverEditMatTableFlexExample",
            "files": [
                "popover-edit-mat-table-flex-example.ts",
                "popover-edit-mat-table-flex-example.html",
                "popover-edit-mat-table-flex-example.css"
            ],
            "selector": "popover-edit-mat-table-flex-example",
            "additionalComponents": [],
            "primaryFile": "popover-edit-mat-table-flex-example.ts",
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-mat-table": {
            "packagePath": "material-experimental/popover-edit/popover-edit-mat-table",
            "title": "Material Popover Edit on a Material data-table",
            "componentName": "PopoverEditMatTableExample",
            "files": [
                "popover-edit-mat-table-example.ts",
                "popover-edit-mat-table-example.html",
                "popover-edit-mat-table-example.css"
            ],
            "selector": "popover-edit-mat-table-example",
            "additionalComponents": [],
            "primaryFile": "popover-edit-mat-table-example.ts",
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-tab-out-mat-table": {
            "packagePath": "material-experimental/popover-edit/popover-edit-tab-out-mat-table",
            "title": "Material Popover Edit with spreadsheet-like configuration on a Material data-table",
            "componentName": "PopoverEditTabOutMatTableExample",
            "files": [
                "popover-edit-tab-out-mat-table-example.ts",
                "popover-edit-tab-out-mat-table-example.html",
                "popover-edit-tab-out-mat-table-example.css"
            ],
            "selector": "popover-edit-tab-out-mat-table-example",
            "additionalComponents": [],
            "primaryFile": "popover-edit-tab-out-mat-table-example.ts",
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "mat-selection-column": {
            "packagePath": "material-experimental/selection/mat-selection-column",
            "title": "Table that uses `matSelectionColumn` which allows users to select rows.",
            "componentName": "MatSelectionColumnExample",
            "files": [
                "mat-selection-column-example.ts",
                "mat-selection-column-example.html",
                "mat-selection-column-example.css"
            ],
            "selector": "mat-selection-column-example",
            "additionalComponents": [],
            "primaryFile": "mat-selection-column-example.ts",
            "module": {
                "name": "MatSelectionExamplesModule",
                "importSpecifier": "material-experimental/selection"
            }
        },
        "mat-selection-list": {
            "packagePath": "material-experimental/selection/mat-selection-list",
            "title": "Mat Selection on a simple list.",
            "componentName": "MatSelectionListExample",
            "files": [
                "mat-selection-list-example.ts",
                "mat-selection-list-example.html"
            ],
            "selector": "mat-selection-list-example",
            "additionalComponents": [],
            "primaryFile": "mat-selection-list-example.ts",
            "module": {
                "name": "MatSelectionExamplesModule",
                "importSpecifier": "material-experimental/selection"
            }
        },
        "autocomplete-auto-active-first-option": {
            "packagePath": "material/autocomplete/autocomplete-auto-active-first-option",
            "title": "Highlight the first autocomplete option",
            "componentName": "AutocompleteAutoActiveFirstOptionExample",
            "files": [
                "autocomplete-auto-active-first-option-example.ts",
                "autocomplete-auto-active-first-option-example.html",
                "autocomplete-auto-active-first-option-example.css"
            ],
            "selector": "autocomplete-auto-active-first-option-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-auto-active-first-option-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-display": {
            "packagePath": "material/autocomplete/autocomplete-display",
            "title": "Display value autocomplete",
            "componentName": "AutocompleteDisplayExample",
            "files": [
                "autocomplete-display-example.ts",
                "autocomplete-display-example.html",
                "autocomplete-display-example.css"
            ],
            "selector": "autocomplete-display-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-display-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-filter": {
            "packagePath": "material/autocomplete/autocomplete-filter",
            "title": "Filter autocomplete",
            "componentName": "AutocompleteFilterExample",
            "files": [
                "autocomplete-filter-example.ts",
                "autocomplete-filter-example.html",
                "autocomplete-filter-example.css"
            ],
            "selector": "autocomplete-filter-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-filter-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-harness": {
            "packagePath": "material/autocomplete/autocomplete-harness",
            "title": "Testing with MatAutocompleteHarness",
            "componentName": "AutocompleteHarnessExample",
            "files": [
                "autocomplete-harness-example.ts",
                "autocomplete-harness-example.html",
                "autocomplete-harness-example.spec.ts"
            ],
            "selector": "autocomplete-harness-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-harness-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-optgroup": {
            "packagePath": "material/autocomplete/autocomplete-optgroup",
            "title": "Option groups autocomplete",
            "componentName": "AutocompleteOptgroupExample",
            "files": [
                "autocomplete-optgroup-example.ts",
                "./autocomplete-optgroup-example.html"
            ],
            "selector": "autocomplete-optgroup-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-optgroup-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-overview": {
            "packagePath": "material/autocomplete/autocomplete-overview",
            "title": "Autocomplete overview",
            "componentName": "AutocompleteOverviewExample",
            "files": [
                "autocomplete-overview-example.ts",
                "autocomplete-overview-example.html",
                "autocomplete-overview-example.css"
            ],
            "selector": "autocomplete-overview-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-overview-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-plain-input": {
            "packagePath": "material/autocomplete/autocomplete-plain-input",
            "title": "Plain input autocomplete",
            "componentName": "AutocompletePlainInputExample",
            "files": [
                "autocomplete-plain-input-example.ts",
                "autocomplete-plain-input-example.html",
                "autocomplete-plain-input-example.css"
            ],
            "selector": "autocomplete-plain-input-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-plain-input-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-simple": {
            "packagePath": "material/autocomplete/autocomplete-simple",
            "title": "Simple autocomplete",
            "componentName": "AutocompleteSimpleExample",
            "files": [
                "autocomplete-simple-example.ts",
                "autocomplete-simple-example.html",
                "autocomplete-simple-example.css"
            ],
            "selector": "autocomplete-simple-example",
            "additionalComponents": [],
            "primaryFile": "autocomplete-simple-example.ts",
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "badge-harness": {
            "packagePath": "material/badge/badge-harness",
            "title": "Testing with MatBadgeHarness",
            "componentName": "BadgeHarnessExample",
            "files": [
                "badge-harness-example.ts",
                "badge-harness-example.html",
                "badge-harness-example.spec.ts"
            ],
            "selector": "badge-harness-example",
            "additionalComponents": [],
            "primaryFile": "badge-harness-example.ts",
            "module": {
                "name": "BadgeExamplesModule",
                "importSpecifier": "material/badge"
            }
        },
        "badge-overview": {
            "packagePath": "material/badge/badge-overview",
            "title": "Badge overview",
            "componentName": "BadgeOverviewExample",
            "files": [
                "badge-overview-example.ts",
                "badge-overview-example.html"
            ],
            "selector": "badge-overview-example",
            "additionalComponents": [],
            "primaryFile": "badge-overview-example.ts",
            "module": {
                "name": "BadgeExamplesModule",
                "importSpecifier": "material/badge"
            }
        },
        "bottom-sheet-overview": {
            "packagePath": "material/bottom-sheet/bottom-sheet-overview",
            "title": "Bottom Sheet Overview",
            "componentName": "BottomSheetOverviewExample",
            "files": [
                "bottom-sheet-overview-example.ts",
                "bottom-sheet-overview-example.html",
                "bottom-sheet-overview-example-sheet.html"
            ],
            "selector": "bottom-sheet-overview-example",
            "additionalComponents": [
                "BottomSheetOverviewExampleSheet"
            ],
            "primaryFile": "bottom-sheet-overview-example.ts",
            "module": {
                "name": "BottomSheetExamplesModule",
                "importSpecifier": "material/bottom-sheet"
            }
        },
        "button-toggle-appearance": {
            "packagePath": "material/button-toggle/button-toggle-appearance",
            "title": "Button toggle appearance",
            "componentName": "ButtonToggleAppearanceExample",
            "files": [
                "button-toggle-appearance-example.ts",
                "button-toggle-appearance-example.html",
                "button-toggle-appearance-example.css"
            ],
            "selector": "button-toggle-appearance-example",
            "additionalComponents": [],
            "primaryFile": "button-toggle-appearance-example.ts",
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-toggle-exclusive": {
            "packagePath": "material/button-toggle/button-toggle-exclusive",
            "title": "Exclusive selection",
            "componentName": "ButtonToggleExclusiveExample",
            "files": [
                "button-toggle-exclusive-example.ts",
                "button-toggle-exclusive-example.html",
                "button-toggle-exclusive-example.css"
            ],
            "selector": "button-toggle-exclusive-example",
            "additionalComponents": [],
            "primaryFile": "button-toggle-exclusive-example.ts",
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-toggle-harness": {
            "packagePath": "material/button-toggle/button-toggle-harness",
            "title": "Testing with MatButtonToggleHarness",
            "componentName": "ButtonToggleHarnessExample",
            "files": [
                "button-toggle-harness-example.ts",
                "button-toggle-harness-example.html",
                "button-toggle-harness-example.spec.ts"
            ],
            "selector": "button-toggle-harness-example",
            "additionalComponents": [],
            "primaryFile": "button-toggle-harness-example.ts",
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-toggle-overview": {
            "packagePath": "material/button-toggle/button-toggle-overview",
            "title": "Basic button-toggles",
            "componentName": "ButtonToggleOverviewExample",
            "files": [
                "button-toggle-overview-example.ts",
                "button-toggle-overview-example.html"
            ],
            "selector": "button-toggle-overview-example",
            "additionalComponents": [],
            "primaryFile": "button-toggle-overview-example.ts",
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-harness": {
            "packagePath": "material/button/button-harness",
            "title": "Testing with MatButtonHarness",
            "componentName": "ButtonHarnessExample",
            "files": [
                "button-harness-example.ts",
                "button-harness-example.html",
                "button-harness-example.spec.ts"
            ],
            "selector": "button-harness-example",
            "additionalComponents": [],
            "primaryFile": "button-harness-example.ts",
            "module": {
                "name": "ButtonExamplesModule",
                "importSpecifier": "material/button"
            }
        },
        "button-overview": {
            "packagePath": "material/button/button-overview",
            "title": "Basic buttons",
            "componentName": "ButtonOverviewExample",
            "files": [
                "button-overview-example.ts",
                "button-overview-example.html",
                "button-overview-example.css"
            ],
            "selector": "button-overview-example",
            "additionalComponents": [],
            "primaryFile": "button-overview-example.ts",
            "module": {
                "name": "ButtonExamplesModule",
                "importSpecifier": "material/button"
            }
        },
        "button-types": {
            "packagePath": "material/button/button-types",
            "title": "Button varieties",
            "componentName": "ButtonTypesExample",
            "files": [
                "button-types-example.ts",
                "button-types-example.html",
                "button-types-example.css"
            ],
            "selector": "button-types-example",
            "additionalComponents": [],
            "primaryFile": "button-types-example.ts",
            "module": {
                "name": "ButtonExamplesModule",
                "importSpecifier": "material/button"
            }
        },
        "card-fancy": {
            "packagePath": "material/card/card-fancy",
            "title": "Card with multiple sections",
            "componentName": "CardFancyExample",
            "files": [
                "card-fancy-example.ts",
                "card-fancy-example.html",
                "card-fancy-example.css"
            ],
            "selector": "card-fancy-example",
            "additionalComponents": [],
            "primaryFile": "card-fancy-example.ts",
            "module": {
                "name": "CardExamplesModule",
                "importSpecifier": "material/card"
            }
        },
        "card-harness": {
            "packagePath": "material/card/card-harness",
            "title": "Testing with MatCardHarness",
            "componentName": "CardHarnessExample",
            "files": [
                "card-harness-example.ts",
                "card-harness-example.html",
                "card-harness-example.spec.ts"
            ],
            "selector": "card-harness-example",
            "additionalComponents": [],
            "primaryFile": "card-harness-example.ts",
            "module": {
                "name": "CardExamplesModule",
                "importSpecifier": "material/card"
            }
        },
        "card-overview": {
            "packagePath": "material/card/card-overview",
            "title": "Basic cards",
            "componentName": "CardOverviewExample",
            "files": [
                "card-overview-example.ts",
                "card-overview-example.html"
            ],
            "selector": "card-overview-example",
            "additionalComponents": [],
            "primaryFile": "card-overview-example.ts",
            "module": {
                "name": "CardExamplesModule",
                "importSpecifier": "material/card"
            }
        },
        "checkbox-configurable": {
            "packagePath": "material/checkbox/checkbox-configurable",
            "title": "Configurable checkbox",
            "componentName": "CheckboxConfigurableExample",
            "files": [
                "checkbox-configurable-example.ts",
                "checkbox-configurable-example.html",
                "checkbox-configurable-example.css"
            ],
            "selector": "checkbox-configurable-example",
            "additionalComponents": [],
            "primaryFile": "checkbox-configurable-example.ts",
            "module": {
                "name": "CheckboxExamplesModule",
                "importSpecifier": "material/checkbox"
            }
        },
        "checkbox-harness": {
            "packagePath": "material/checkbox/checkbox-harness",
            "title": "Testing with MatCheckboxHarness",
            "componentName": "CheckboxHarnessExample",
            "files": [
                "checkbox-harness-example.ts",
                "checkbox-harness-example.html",
                "checkbox-harness-example.spec.ts"
            ],
            "selector": "checkbox-harness-example",
            "additionalComponents": [],
            "primaryFile": "checkbox-harness-example.ts",
            "module": {
                "name": "CheckboxExamplesModule",
                "importSpecifier": "material/checkbox"
            }
        },
        "checkbox-overview": {
            "packagePath": "material/checkbox/checkbox-overview",
            "title": "Basic checkboxes",
            "componentName": "CheckboxOverviewExample",
            "files": [
                "checkbox-overview-example.ts",
                "checkbox-overview-example.html",
                "checkbox-overview-example.css"
            ],
            "selector": "checkbox-overview-example",
            "additionalComponents": [],
            "primaryFile": "checkbox-overview-example.ts",
            "module": {
                "name": "CheckboxExamplesModule",
                "importSpecifier": "material/checkbox"
            }
        },
        "chips-autocomplete": {
            "packagePath": "material/chips/chips-autocomplete",
            "title": "Chips Autocomplete",
            "componentName": "ChipsAutocompleteExample",
            "files": [
                "chips-autocomplete-example.ts",
                "chips-autocomplete-example.html",
                "chips-autocomplete-example.css"
            ],
            "selector": "chips-autocomplete-example",
            "additionalComponents": [],
            "primaryFile": "chips-autocomplete-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-drag-drop": {
            "packagePath": "material/chips/chips-drag-drop",
            "title": "Chips Drag and Drop",
            "componentName": "ChipsDragDropExample",
            "files": [
                "chips-drag-drop-example.ts",
                "chips-drag-drop-example.html",
                "chips-drag-drop-example.css"
            ],
            "selector": "chips-drag-drop-example",
            "additionalComponents": [],
            "primaryFile": "chips-drag-drop-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-harness": {
            "packagePath": "material/chips/chips-harness",
            "title": "Testing with MatChipsHarness",
            "componentName": "ChipsHarnessExample",
            "files": [
                "chips-harness-example.ts",
                "chips-harness-example.html",
                "chips-harness-example.spec.ts"
            ],
            "selector": "chips-harness-example",
            "additionalComponents": [],
            "primaryFile": "chips-harness-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-input": {
            "packagePath": "material/chips/chips-input",
            "title": "Chips with input",
            "componentName": "ChipsInputExample",
            "files": [
                "chips-input-example.ts",
                "chips-input-example.html",
                "chips-input-example.css"
            ],
            "selector": "chips-input-example",
            "additionalComponents": [],
            "primaryFile": "chips-input-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-overview": {
            "packagePath": "material/chips/chips-overview",
            "title": "Basic chips",
            "componentName": "ChipsOverviewExample",
            "files": [
                "chips-overview-example.ts",
                "chips-overview-example.html"
            ],
            "selector": "chips-overview-example",
            "additionalComponents": [],
            "primaryFile": "chips-overview-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-stacked": {
            "packagePath": "material/chips/chips-stacked",
            "title": "Stacked chips",
            "componentName": "ChipsStackedExample",
            "files": [
                "chips-stacked-example.ts",
                "chips-stacked-example.html",
                "chips-stacked-example.css"
            ],
            "selector": "chips-stacked-example",
            "additionalComponents": [],
            "primaryFile": "chips-stacked-example.ts",
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "elevation-overview": {
            "packagePath": "material/core/elevation-overview",
            "title": "Elevation CSS classes",
            "componentName": "ElevationOverviewExample",
            "files": [
                "elevation-overview-example.ts",
                "elevation-overview-example.html",
                "elevation-overview-example.css"
            ],
            "selector": "elevation-overview-example",
            "additionalComponents": [],
            "primaryFile": "elevation-overview-example.ts",
            "module": {
                "name": "CoreExamplesModule",
                "importSpecifier": "material/core"
            }
        },
        "ripple-overview": {
            "packagePath": "material/core/ripple-overview",
            "title": "MatRipple basic usage",
            "componentName": "RippleOverviewExample",
            "files": [
                "ripple-overview-example.ts",
                "ripple-overview-example.html",
                "ripple-overview-example.css"
            ],
            "selector": "ripple-overview-example",
            "additionalComponents": [],
            "primaryFile": "ripple-overview-example.ts",
            "module": {
                "name": "CoreExamplesModule",
                "importSpecifier": "material/core"
            }
        },
        "date-range-picker-comparison": {
            "packagePath": "material/datepicker/date-range-picker-comparison",
            "title": "Date range picker comparison ranges",
            "componentName": "DateRangePickerComparisonExample",
            "files": [
                "date-range-picker-comparison-example.ts",
                "date-range-picker-comparison-example.html",
                "date-range-picker-comparison-example.css"
            ],
            "selector": "date-range-picker-comparison-example",
            "additionalComponents": [],
            "primaryFile": "date-range-picker-comparison-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-forms": {
            "packagePath": "material/datepicker/date-range-picker-forms",
            "title": "Date range picker forms integration",
            "componentName": "DateRangePickerFormsExample",
            "files": [
                "date-range-picker-forms-example.ts",
                "date-range-picker-forms-example.html"
            ],
            "selector": "date-range-picker-forms-example",
            "additionalComponents": [],
            "primaryFile": "date-range-picker-forms-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-overview": {
            "packagePath": "material/datepicker/date-range-picker-overview",
            "title": "Basic date range picker",
            "componentName": "DateRangePickerOverviewExample",
            "files": [
                "date-range-picker-overview-example.ts",
                "date-range-picker-overview-example.html"
            ],
            "selector": "date-range-picker-overview-example",
            "additionalComponents": [],
            "primaryFile": "date-range-picker-overview-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-selection-strategy": {
            "packagePath": "material/datepicker/date-range-picker-selection-strategy",
            "title": "Date range picker with custom a selection strategy",
            "componentName": "DateRangePickerSelectionStrategyExample",
            "files": [
                "date-range-picker-selection-strategy-example.ts",
                "date-range-picker-selection-strategy-example.html"
            ],
            "selector": "date-range-picker-selection-strategy-example",
            "additionalComponents": [],
            "primaryFile": "date-range-picker-selection-strategy-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-api": {
            "packagePath": "material/datepicker/datepicker-api",
            "title": "Datepicker open method",
            "componentName": "DatepickerApiExample",
            "files": [
                "datepicker-api-example.ts",
                "datepicker-api-example.html",
                "datepicker-api-example.css"
            ],
            "selector": "datepicker-api-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-api-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-color": {
            "packagePath": "material/datepicker/datepicker-color",
            "title": "Datepicker palette colors",
            "componentName": "DatepickerColorExample",
            "files": [
                "datepicker-color-example.ts",
                "datepicker-color-example.html",
                "datepicker-color-example.css"
            ],
            "selector": "datepicker-color-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-color-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-custom-header": {
            "packagePath": "material/datepicker/datepicker-custom-header",
            "title": "Datepicker with custom calendar header",
            "componentName": "DatepickerCustomHeaderExample",
            "files": [
                "datepicker-custom-header-example.ts",
                "datepicker-custom-header-example.html"
            ],
            "selector": "datepicker-custom-header-example",
            "additionalComponents": [
                "ExampleHeader"
            ],
            "primaryFile": "datepicker-custom-header-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-custom-icon": {
            "packagePath": "material/datepicker/datepicker-custom-icon",
            "title": "Datepicker with custom icon",
            "componentName": "DatepickerCustomIconExample",
            "files": [
                "datepicker-custom-icon-example.ts",
                "datepicker-custom-icon-example.html"
            ],
            "selector": "datepicker-custom-icon-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-custom-icon-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-date-class": {
            "packagePath": "material/datepicker/datepicker-date-class",
            "title": "Datepicker with custom date classes",
            "componentName": "DatepickerDateClassExample",
            "files": [
                "datepicker-date-class-example.ts",
                "datepicker-date-class-example.html",
                "datepicker-date-class-example.css"
            ],
            "selector": "datepicker-date-class-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-date-class-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-disabled": {
            "packagePath": "material/datepicker/datepicker-disabled",
            "title": "Disabled datepicker",
            "componentName": "DatepickerDisabledExample",
            "files": [
                "datepicker-disabled-example.ts",
                "datepicker-disabled-example.html"
            ],
            "selector": "datepicker-disabled-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-disabled-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-events": {
            "packagePath": "material/datepicker/datepicker-events",
            "title": "Datepicker input and change events",
            "componentName": "DatepickerEventsExample",
            "files": [
                "datepicker-events-example.ts",
                "datepicker-events-example.html",
                "datepicker-events-example.css"
            ],
            "selector": "datepicker-events-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-events-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-filter": {
            "packagePath": "material/datepicker/datepicker-filter",
            "title": "Datepicker with filter validation",
            "componentName": "DatepickerFilterExample",
            "files": [
                "datepicker-filter-example.ts",
                "datepicker-filter-example.html"
            ],
            "selector": "datepicker-filter-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-filter-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-formats": {
            "packagePath": "material/datepicker/datepicker-formats",
            "title": "Datepicker with custom formats",
            "componentName": "DatepickerFormatsExample",
            "files": [
                "datepicker-formats-example.ts",
                "datepicker-formats-example.html"
            ],
            "selector": "datepicker-formats-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-formats-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-locale": {
            "packagePath": "material/datepicker/datepicker-locale",
            "title": "Datepicker with different locale",
            "componentName": "DatepickerLocaleExample",
            "files": [
                "datepicker-locale-example.ts",
                "datepicker-locale-example.html",
                "datepicker-locale-example.css"
            ],
            "selector": "datepicker-locale-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-locale-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-min-max": {
            "packagePath": "material/datepicker/datepicker-min-max",
            "title": "Datepicker with min & max validation",
            "componentName": "DatepickerMinMaxExample",
            "files": [
                "datepicker-min-max-example.ts",
                "datepicker-min-max-example.html"
            ],
            "selector": "datepicker-min-max-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-min-max-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-moment": {
            "packagePath": "material/datepicker/datepicker-moment",
            "title": "Datepicker that uses Moment.js dates",
            "componentName": "DatepickerMomentExample",
            "files": [
                "datepicker-moment-example.ts",
                "datepicker-moment-example.html"
            ],
            "selector": "datepicker-moment-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-moment-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-overview": {
            "packagePath": "material/datepicker/datepicker-overview",
            "title": "Basic datepicker",
            "componentName": "DatepickerOverviewExample",
            "files": [
                "datepicker-overview-example.ts",
                "datepicker-overview-example.html"
            ],
            "selector": "datepicker-overview-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-overview-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-start-view": {
            "packagePath": "material/datepicker/datepicker-start-view",
            "title": "Datepicker start date",
            "componentName": "DatepickerStartViewExample",
            "files": [
                "datepicker-start-view-example.ts",
                "datepicker-start-view-example.html"
            ],
            "selector": "datepicker-start-view-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-start-view-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-touch": {
            "packagePath": "material/datepicker/datepicker-touch",
            "title": "Datepicker touch UI",
            "componentName": "DatepickerTouchExample",
            "files": [
                "datepicker-touch-example.ts",
                "datepicker-touch-example.html"
            ],
            "selector": "datepicker-touch-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-touch-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-value": {
            "packagePath": "material/datepicker/datepicker-value",
            "title": "Datepicker selected value",
            "componentName": "DatepickerValueExample",
            "files": [
                "datepicker-value-example.ts",
                "datepicker-value-example.html",
                "datepicker-value-example.css"
            ],
            "selector": "datepicker-value-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-value-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-views-selection": {
            "packagePath": "material/datepicker/datepicker-views-selection",
            "title": "Datepicker emulating a Year and month picker",
            "componentName": "DatepickerViewsSelectionExample",
            "files": [
                "datepicker-views-selection-example.ts",
                "datepicker-views-selection-example.html",
                "datepicker-views-selection-example.css"
            ],
            "selector": "datepicker-views-selection-example",
            "additionalComponents": [],
            "primaryFile": "datepicker-views-selection-example.ts",
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "dialog-content": {
            "packagePath": "material/dialog/dialog-content",
            "title": "Dialog with header, scrollable content and actions",
            "componentName": "DialogContentExample",
            "files": [
                "dialog-content-example.ts",
                "dialog-content-example.html",
                "dialog-content-example-dialog.html"
            ],
            "selector": "dialog-content-example",
            "additionalComponents": [
                "DialogContentExampleDialog"
            ],
            "primaryFile": "dialog-content-example.ts",
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-data": {
            "packagePath": "material/dialog/dialog-data",
            "title": "Injecting data when opening a dialog",
            "componentName": "DialogDataExample",
            "files": [
                "dialog-data-example.ts",
                "dialog-data-example.html",
                "dialog-data-example-dialog.html"
            ],
            "selector": "dialog-data-example",
            "additionalComponents": [
                "DialogDataExampleDialog"
            ],
            "primaryFile": "dialog-data-example.ts",
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-elements": {
            "packagePath": "material/dialog/dialog-elements",
            "title": "Dialog elements",
            "componentName": "DialogElementsExample",
            "files": [
                "dialog-elements-example.ts",
                "dialog-elements-example.html",
                "dialog-elements-example-dialog.html"
            ],
            "selector": "dialog-elements-example",
            "additionalComponents": [
                "DialogElementsExampleDialog"
            ],
            "primaryFile": "dialog-elements-example.ts",
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-from-menu": {
            "packagePath": "material/dialog/dialog-from-menu",
            "title": "Dialog launched from a menu",
            "componentName": "DialogFromMenuExample",
            "files": [
                "dialog-from-menu-example.ts",
                "dialog-from-menu-example.html",
                "dialog-from-menu-example-dialog.html"
            ],
            "selector": "dialog-from-menu-example",
            "additionalComponents": [
                "DialogFromMenuExampleDialog"
            ],
            "primaryFile": "dialog-from-menu-example.ts",
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-overview": {
            "packagePath": "material/dialog/dialog-overview",
            "title": "Dialog Overview",
            "componentName": "DialogOverviewExample",
            "files": [
                "dialog-overview-example.ts",
                "dialog-overview-example.html",
                "dialog-overview-example-dialog.html"
            ],
            "selector": "dialog-overview-example",
            "additionalComponents": [
                "DialogOverviewExampleDialog"
            ],
            "primaryFile": "dialog-overview-example.ts",
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "divider-overview": {
            "packagePath": "material/divider/divider-overview",
            "title": "Basic divider",
            "componentName": "DividerOverviewExample",
            "files": [
                "divider-overview-example.ts",
                "divider-overview-example.html"
            ],
            "selector": "divider-overview-example",
            "additionalComponents": [],
            "primaryFile": "divider-overview-example.ts",
            "module": {
                "name": "DividerExamplesModule",
                "importSpecifier": "material/divider"
            }
        },
        "expansion-expand-collapse-all": {
            "packagePath": "material/expansion/expansion-expand-collapse-all",
            "title": "Accordion with expand/collapse all toggles",
            "componentName": "ExpansionExpandCollapseAllExample",
            "files": [
                "expansion-expand-collapse-all-example.ts",
                "expansion-expand-collapse-all-example.html",
                "expansion-expand-collapse-all-example.css"
            ],
            "selector": "expansion-expand-collapse-all-example",
            "additionalComponents": [],
            "primaryFile": "expansion-expand-collapse-all-example.ts",
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "expansion-overview": {
            "packagePath": "material/expansion/expansion-overview",
            "title": "Basic expansion panel",
            "componentName": "ExpansionOverviewExample",
            "files": [
                "expansion-overview-example.ts",
                "expansion-overview-example.html",
                "expansion-overview-example.css"
            ],
            "selector": "expansion-overview-example",
            "additionalComponents": [],
            "primaryFile": "expansion-overview-example.ts",
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "expansion-steps": {
            "packagePath": "material/expansion/expansion-steps",
            "title": "Expansion panel as accordion",
            "componentName": "ExpansionStepsExample",
            "files": [
                "expansion-steps-example.ts",
                "expansion-steps-example.html",
                "expansion-steps-example.css"
            ],
            "selector": "expansion-steps-example",
            "additionalComponents": [],
            "primaryFile": "expansion-steps-example.ts",
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "form-field-appearance": {
            "packagePath": "material/form-field/form-field-appearance",
            "title": "Form field appearance variants",
            "componentName": "FormFieldAppearanceExample",
            "files": [
                "form-field-appearance-example.ts",
                "form-field-appearance-example.html"
            ],
            "selector": "form-field-appearance-example",
            "additionalComponents": [],
            "primaryFile": "form-field-appearance-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-custom-control": {
            "packagePath": "material/form-field/form-field-custom-control",
            "title": "Form field with custom telephone number input control.",
            "componentName": "FormFieldCustomControlExample",
            "files": [
                "form-field-custom-control-example.ts",
                "form-field-custom-control-example.html",
                "example-tel-input-example.html",
                "example-tel-input-example.css"
            ],
            "selector": "form-field-custom-control-example",
            "additionalComponents": [
                "MyTelInput"
            ],
            "primaryFile": "form-field-custom-control-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-error": {
            "packagePath": "material/form-field/form-field-error",
            "title": "Form field with error messages",
            "componentName": "FormFieldErrorExample",
            "files": [
                "form-field-error-example.ts",
                "form-field-error-example.html",
                "form-field-error-example.css"
            ],
            "selector": "form-field-error-example",
            "additionalComponents": [],
            "primaryFile": "form-field-error-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-hint": {
            "packagePath": "material/form-field/form-field-hint",
            "title": "Form field with hints",
            "componentName": "FormFieldHintExample",
            "files": [
                "form-field-hint-example.ts",
                "form-field-hint-example.html",
                "form-field-hint-example.css"
            ],
            "selector": "form-field-hint-example",
            "additionalComponents": [],
            "primaryFile": "form-field-hint-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-label": {
            "packagePath": "material/form-field/form-field-label",
            "title": "Form field with label",
            "componentName": "FormFieldLabelExample",
            "files": [
                "form-field-label-example.ts",
                "form-field-label-example.html",
                "form-field-label-example.css"
            ],
            "selector": "form-field-label-example",
            "additionalComponents": [],
            "primaryFile": "form-field-label-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-overview": {
            "packagePath": "material/form-field/form-field-overview",
            "title": "Simple form field",
            "componentName": "FormFieldOverviewExample",
            "files": [
                "form-field-overview-example.ts",
                "form-field-overview-example.html"
            ],
            "selector": "form-field-overview-example",
            "additionalComponents": [],
            "primaryFile": "form-field-overview-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-prefix-suffix": {
            "packagePath": "material/form-field/form-field-prefix-suffix",
            "title": "Form field with prefix & suffix",
            "componentName": "FormFieldPrefixSuffixExample",
            "files": [
                "form-field-prefix-suffix-example.ts",
                "form-field-prefix-suffix-example.html",
                "form-field-prefix-suffix-example.css"
            ],
            "selector": "form-field-prefix-suffix-example",
            "additionalComponents": [],
            "primaryFile": "form-field-prefix-suffix-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-theming": {
            "packagePath": "material/form-field/form-field-theming",
            "title": "Form field theming",
            "componentName": "FormFieldThemingExample",
            "files": [
                "form-field-theming-example.ts",
                "form-field-theming-example.html",
                "form-field-theming-example.css"
            ],
            "selector": "form-field-theming-example",
            "additionalComponents": [],
            "primaryFile": "form-field-theming-example.ts",
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "grid-list-dynamic": {
            "packagePath": "material/grid-list/grid-list-dynamic",
            "title": "Dynamic grid-list",
            "componentName": "GridListDynamicExample",
            "files": [
                "grid-list-dynamic-example.ts",
                "grid-list-dynamic-example.html"
            ],
            "selector": "grid-list-dynamic-example",
            "additionalComponents": [],
            "primaryFile": "grid-list-dynamic-example.ts",
            "module": {
                "name": "GridListExamplesModule",
                "importSpecifier": "material/grid-list"
            }
        },
        "grid-list-overview": {
            "packagePath": "material/grid-list/grid-list-overview",
            "title": "Basic grid-list",
            "componentName": "GridListOverviewExample",
            "files": [
                "grid-list-overview-example.ts",
                "grid-list-overview-example.html",
                "grid-list-overview-example.css"
            ],
            "selector": "grid-list-overview-example",
            "additionalComponents": [],
            "primaryFile": "grid-list-overview-example.ts",
            "module": {
                "name": "GridListExamplesModule",
                "importSpecifier": "material/grid-list"
            }
        },
        "icon-harness": {
            "packagePath": "material/icon/icon-harness",
            "title": "Testing with MatIconHarness",
            "componentName": "IconHarnessExample",
            "files": [
                "icon-harness-example.ts",
                "icon-harness-example.html",
                "icon-harness-example.spec.ts"
            ],
            "selector": "icon-harness-example",
            "additionalComponents": [],
            "primaryFile": "icon-harness-example.ts",
            "module": {
                "name": "IconExamplesModule",
                "importSpecifier": "material/icon"
            }
        },
        "icon-overview": {
            "packagePath": "material/icon/icon-overview",
            "title": "Basic icons",
            "componentName": "IconOverviewExample",
            "files": [
                "icon-overview-example.ts",
                "icon-overview-example.html"
            ],
            "selector": "icon-overview-example",
            "additionalComponents": [],
            "primaryFile": "icon-overview-example.ts",
            "module": {
                "name": "IconExamplesModule",
                "importSpecifier": "material/icon"
            }
        },
        "icon-svg": {
            "packagePath": "material/icon/icon-svg",
            "title": "SVG icons",
            "componentName": "IconSvgExample",
            "files": [
                "icon-svg-example.ts",
                "icon-svg-example.html"
            ],
            "selector": "icon-svg-example",
            "additionalComponents": [],
            "primaryFile": "icon-svg-example.ts",
            "module": {
                "name": "IconExamplesModule",
                "importSpecifier": "material/icon"
            }
        },
        "input-clearable": {
            "packagePath": "material/input/input-clearable",
            "title": "Input with a clear button",
            "componentName": "InputClearableExample",
            "files": [
                "input-clearable-example.ts",
                "./input-clearable-example.html",
                "./input-clearable-example.css"
            ],
            "selector": "input-clearable-example",
            "additionalComponents": [],
            "primaryFile": "input-clearable-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-error-state-matcher": {
            "packagePath": "material/input/input-error-state-matcher",
            "title": "Input with a custom ErrorStateMatcher",
            "componentName": "InputErrorStateMatcherExample",
            "files": [
                "input-error-state-matcher-example.ts",
                "./input-error-state-matcher-example.html",
                "./input-error-state-matcher-example.css"
            ],
            "selector": "input-error-state-matcher-example",
            "additionalComponents": [],
            "primaryFile": "input-error-state-matcher-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-errors": {
            "packagePath": "material/input/input-errors",
            "title": "Input with error messages",
            "componentName": "InputErrorsExample",
            "files": [
                "input-errors-example.ts",
                "input-errors-example.html",
                "input-errors-example.css"
            ],
            "selector": "input-errors-example",
            "additionalComponents": [],
            "primaryFile": "input-errors-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-form": {
            "packagePath": "material/input/input-form",
            "title": "Inputs in a form",
            "componentName": "InputFormExample",
            "files": [
                "input-form-example.ts",
                "input-form-example.html",
                "input-form-example.css"
            ],
            "selector": "input-form-example",
            "additionalComponents": [],
            "primaryFile": "input-form-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-harness": {
            "packagePath": "material/input/input-harness",
            "title": "Testing with MatInputHarness",
            "componentName": "InputHarnessExample",
            "files": [
                "input-harness-example.ts",
                "input-harness-example.html",
                "input-harness-example.spec.ts"
            ],
            "selector": "input-harness-example",
            "additionalComponents": [],
            "primaryFile": "input-harness-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-hint": {
            "packagePath": "material/input/input-hint",
            "title": "Input with hints",
            "componentName": "InputHintExample",
            "files": [
                "input-hint-example.ts",
                "input-hint-example.html",
                "input-hint-example.css"
            ],
            "selector": "input-hint-example",
            "additionalComponents": [],
            "primaryFile": "input-hint-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-overview": {
            "packagePath": "material/input/input-overview",
            "title": "Basic Inputs",
            "componentName": "InputOverviewExample",
            "files": [
                "input-overview-example.ts",
                "input-overview-example.html",
                "input-overview-example.css"
            ],
            "selector": "input-overview-example",
            "additionalComponents": [],
            "primaryFile": "input-overview-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-prefix-suffix": {
            "packagePath": "material/input/input-prefix-suffix",
            "title": "Inputs with prefixes and suffixes",
            "componentName": "InputPrefixSuffixExample",
            "files": [
                "input-prefix-suffix-example.ts",
                "input-prefix-suffix-example.html",
                "input-prefix-suffix-example.css"
            ],
            "selector": "input-prefix-suffix-example",
            "additionalComponents": [],
            "primaryFile": "input-prefix-suffix-example.ts",
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "list-overview": {
            "packagePath": "material/list/list-overview",
            "title": "Basic list",
            "componentName": "ListOverviewExample",
            "files": [
                "list-overview-example.ts",
                "list-overview-example.html"
            ],
            "selector": "list-overview-example",
            "additionalComponents": [],
            "primaryFile": "list-overview-example.ts",
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-sections": {
            "packagePath": "material/list/list-sections",
            "title": "List with sections",
            "componentName": "ListSectionsExample",
            "files": [
                "list-sections-example.ts",
                "list-sections-example.html",
                "list-sections-example.css"
            ],
            "selector": "list-sections-example",
            "additionalComponents": [],
            "primaryFile": "list-sections-example.ts",
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-selection": {
            "packagePath": "material/list/list-selection",
            "title": "List with selection",
            "componentName": "ListSelectionExample",
            "files": [
                "list-selection-example.ts",
                "list-selection-example.html",
                "list-selection-example.css"
            ],
            "selector": "list-selection-example",
            "additionalComponents": [],
            "primaryFile": "list-selection-example.ts",
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-single-selection": {
            "packagePath": "material/list/list-single-selection",
            "title": "List with single selection",
            "componentName": "ListSingleSelectionExample",
            "files": [
                "list-single-selection-example.ts",
                "list-single-selection-example.html",
                "list-single-selection-example.css"
            ],
            "selector": "list-single-selection-example",
            "additionalComponents": [],
            "primaryFile": "list-single-selection-example.ts",
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "menu-icons": {
            "packagePath": "material/menu/menu-icons",
            "title": "Menu with icons",
            "componentName": "MenuIconsExample",
            "files": [
                "menu-icons-example.ts",
                "menu-icons-example.html"
            ],
            "selector": "menu-icons-example",
            "additionalComponents": [],
            "primaryFile": "menu-icons-example.ts",
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-nested": {
            "packagePath": "material/menu/menu-nested",
            "title": "Nested menu",
            "componentName": "MenuNestedExample",
            "files": [
                "menu-nested-example.ts",
                "menu-nested-example.html"
            ],
            "selector": "menu-nested-example",
            "additionalComponents": [],
            "primaryFile": "menu-nested-example.ts",
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-overview": {
            "packagePath": "material/menu/menu-overview",
            "title": "Basic menu",
            "componentName": "MenuOverviewExample",
            "files": [
                "menu-overview-example.ts",
                "menu-overview-example.html"
            ],
            "selector": "menu-overview-example",
            "additionalComponents": [],
            "primaryFile": "menu-overview-example.ts",
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-position": {
            "packagePath": "material/menu/menu-position",
            "title": "Menu positioning",
            "componentName": "MenuPositionExample",
            "files": [
                "menu-position-example.ts",
                "menu-position-example.html"
            ],
            "selector": "menu-position-example",
            "additionalComponents": [],
            "primaryFile": "menu-position-example.ts",
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "paginator-configurable": {
            "packagePath": "material/paginator/paginator-configurable",
            "title": "Configurable paginator",
            "componentName": "PaginatorConfigurableExample",
            "files": [
                "paginator-configurable-example.ts",
                "paginator-configurable-example.html",
                "paginator-configurable-example.css"
            ],
            "selector": "paginator-configurable-example",
            "additionalComponents": [],
            "primaryFile": "paginator-configurable-example.ts",
            "module": {
                "name": "PaginatorExamplesModule",
                "importSpecifier": "material/paginator"
            }
        },
        "paginator-overview": {
            "packagePath": "material/paginator/paginator-overview",
            "title": "Paginator",
            "componentName": "PaginatorOverviewExample",
            "files": [
                "paginator-overview-example.ts",
                "paginator-overview-example.html"
            ],
            "selector": "paginator-overview-example",
            "additionalComponents": [],
            "primaryFile": "paginator-overview-example.ts",
            "module": {
                "name": "PaginatorExamplesModule",
                "importSpecifier": "material/paginator"
            }
        },
        "progress-bar-buffer": {
            "packagePath": "material/progress-bar/progress-bar-buffer",
            "title": "Buffer progress-bar",
            "componentName": "ProgressBarBufferExample",
            "files": [
                "progress-bar-buffer-example.ts",
                "progress-bar-buffer-example.html"
            ],
            "selector": "progress-bar-buffer-example",
            "additionalComponents": [],
            "primaryFile": "progress-bar-buffer-example.ts",
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-configurable": {
            "packagePath": "material/progress-bar/progress-bar-configurable",
            "title": "Configurable progress-bar",
            "componentName": "ProgressBarConfigurableExample",
            "files": [
                "progress-bar-configurable-example.ts",
                "progress-bar-configurable-example.html",
                "progress-bar-configurable-example.css"
            ],
            "selector": "progress-bar-configurable-example",
            "additionalComponents": [],
            "primaryFile": "progress-bar-configurable-example.ts",
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-determinate": {
            "packagePath": "material/progress-bar/progress-bar-determinate",
            "title": "Determinate progress-bar",
            "componentName": "ProgressBarDeterminateExample",
            "files": [
                "progress-bar-determinate-example.ts",
                "progress-bar-determinate-example.html"
            ],
            "selector": "progress-bar-determinate-example",
            "additionalComponents": [],
            "primaryFile": "progress-bar-determinate-example.ts",
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-indeterminate": {
            "packagePath": "material/progress-bar/progress-bar-indeterminate",
            "title": "Indeterminate progress-bar",
            "componentName": "ProgressBarIndeterminateExample",
            "files": [
                "progress-bar-indeterminate-example.ts",
                "progress-bar-indeterminate-example.html"
            ],
            "selector": "progress-bar-indeterminate-example",
            "additionalComponents": [],
            "primaryFile": "progress-bar-indeterminate-example.ts",
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-query": {
            "packagePath": "material/progress-bar/progress-bar-query",
            "title": "Query progress-bar",
            "componentName": "ProgressBarQueryExample",
            "files": [
                "progress-bar-query-example.ts",
                "progress-bar-query-example.html"
            ],
            "selector": "progress-bar-query-example",
            "additionalComponents": [],
            "primaryFile": "progress-bar-query-example.ts",
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-spinner-configurable": {
            "packagePath": "material/progress-spinner/progress-spinner-configurable",
            "title": "Configurable progress spinner",
            "componentName": "ProgressSpinnerConfigurableExample",
            "files": [
                "progress-spinner-configurable-example.ts",
                "progress-spinner-configurable-example.html",
                "progress-spinner-configurable-example.css"
            ],
            "selector": "progress-spinner-configurable-example",
            "additionalComponents": [],
            "primaryFile": "progress-spinner-configurable-example.ts",
            "module": {
                "name": "ProgressSpinnerExamplesModule",
                "importSpecifier": "material/progress-spinner"
            }
        },
        "progress-spinner-overview": {
            "packagePath": "material/progress-spinner/progress-spinner-overview",
            "title": "Basic progress-spinner",
            "componentName": "ProgressSpinnerOverviewExample",
            "files": [
                "progress-spinner-overview-example.ts",
                "progress-spinner-overview-example.html"
            ],
            "selector": "progress-spinner-overview-example",
            "additionalComponents": [],
            "primaryFile": "progress-spinner-overview-example.ts",
            "module": {
                "name": "ProgressSpinnerExamplesModule",
                "importSpecifier": "material/progress-spinner"
            }
        },
        "radio-ng-model": {
            "packagePath": "material/radio/radio-ng-model",
            "title": "Radios with ngModel",
            "componentName": "RadioNgModelExample",
            "files": [
                "radio-ng-model-example.ts",
                "radio-ng-model-example.html",
                "radio-ng-model-example.css"
            ],
            "selector": "radio-ng-model-example",
            "additionalComponents": [],
            "primaryFile": "radio-ng-model-example.ts",
            "module": {
                "name": "RadioExamplesModule",
                "importSpecifier": "material/radio"
            }
        },
        "radio-overview": {
            "packagePath": "material/radio/radio-overview",
            "title": "Basic radios",
            "componentName": "RadioOverviewExample",
            "files": [
                "radio-overview-example.ts",
                "radio-overview-example.html",
                "radio-overview-example.css"
            ],
            "selector": "radio-overview-example",
            "additionalComponents": [],
            "primaryFile": "radio-overview-example.ts",
            "module": {
                "name": "RadioExamplesModule",
                "importSpecifier": "material/radio"
            }
        },
        "select-custom-trigger": {
            "packagePath": "material/select/select-custom-trigger",
            "title": "Select with custom trigger text",
            "componentName": "SelectCustomTriggerExample",
            "files": [
                "select-custom-trigger-example.ts",
                "select-custom-trigger-example.html",
                "select-custom-trigger-example.css"
            ],
            "selector": "select-custom-trigger-example",
            "additionalComponents": [],
            "primaryFile": "select-custom-trigger-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-disabled": {
            "packagePath": "material/select/select-disabled",
            "title": "Disabled select",
            "componentName": "SelectDisabledExample",
            "files": [
                "select-disabled-example.ts",
                "select-disabled-example.html"
            ],
            "selector": "select-disabled-example",
            "additionalComponents": [],
            "primaryFile": "select-disabled-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-error-state-matcher": {
            "packagePath": "material/select/select-error-state-matcher",
            "title": "Select with a custom ErrorStateMatcher",
            "componentName": "SelectErrorStateMatcherExample",
            "files": [
                "select-error-state-matcher-example.ts",
                "select-error-state-matcher-example.html"
            ],
            "selector": "select-error-state-matcher-example",
            "additionalComponents": [],
            "primaryFile": "select-error-state-matcher-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-form": {
            "packagePath": "material/select/select-form",
            "title": "Select in a form",
            "componentName": "SelectFormExample",
            "files": [
                "select-form-example.ts",
                "select-form-example.html"
            ],
            "selector": "select-form-example",
            "additionalComponents": [],
            "primaryFile": "select-form-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-hint-error": {
            "packagePath": "material/select/select-hint-error",
            "title": "Select with form field features",
            "componentName": "SelectHintErrorExample",
            "files": [
                "select-hint-error-example.ts",
                "select-hint-error-example.html"
            ],
            "selector": "select-hint-error-example",
            "additionalComponents": [],
            "primaryFile": "select-hint-error-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-initial-value": {
            "packagePath": "material/select/select-initial-value",
            "title": "Basic select with initial value and no form",
            "componentName": "SelectInitialValueExample",
            "files": [
                "select-initial-value-example.ts",
                "select-initial-value-example.html"
            ],
            "selector": "select-initial-value-example",
            "additionalComponents": [],
            "primaryFile": "select-initial-value-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-multiple": {
            "packagePath": "material/select/select-multiple",
            "title": "Select with multiple selection",
            "componentName": "SelectMultipleExample",
            "files": [
                "select-multiple-example.ts",
                "select-multiple-example.html"
            ],
            "selector": "select-multiple-example",
            "additionalComponents": [],
            "primaryFile": "select-multiple-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-no-ripple": {
            "packagePath": "material/select/select-no-ripple",
            "title": "Select with no option ripple",
            "componentName": "SelectNoRippleExample",
            "files": [
                "select-no-ripple-example.ts",
                "select-no-ripple-example.html"
            ],
            "selector": "select-no-ripple-example",
            "additionalComponents": [],
            "primaryFile": "select-no-ripple-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-optgroup": {
            "packagePath": "material/select/select-optgroup",
            "title": "Select with option groups",
            "componentName": "SelectOptgroupExample",
            "files": [
                "select-optgroup-example.ts",
                "select-optgroup-example.html"
            ],
            "selector": "select-optgroup-example",
            "additionalComponents": [],
            "primaryFile": "select-optgroup-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-overview": {
            "packagePath": "material/select/select-overview",
            "title": "Basic select",
            "componentName": "SelectOverviewExample",
            "files": [
                "select-overview-example.ts",
                "select-overview-example.html"
            ],
            "selector": "select-overview-example",
            "additionalComponents": [],
            "primaryFile": "select-overview-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-panel-class": {
            "packagePath": "material/select/select-panel-class",
            "title": "Select with custom panel styling",
            "componentName": "SelectPanelClassExample",
            "files": [
                "select-panel-class-example.ts",
                "select-panel-class-example.html",
                "select-panel-class-example.css"
            ],
            "selector": "select-panel-class-example",
            "additionalComponents": [],
            "primaryFile": "select-panel-class-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-reactive-form": {
            "packagePath": "material/select/select-reactive-form",
            "title": "Select in a reactive form",
            "componentName": "SelectReactiveFormExample",
            "files": [
                "select-reactive-form-example.ts",
                "select-reactive-form-example.html"
            ],
            "selector": "select-reactive-form-example",
            "additionalComponents": [],
            "primaryFile": "select-reactive-form-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-reset": {
            "packagePath": "material/select/select-reset",
            "title": "Select with reset option",
            "componentName": "SelectResetExample",
            "files": [
                "select-reset-example.ts",
                "select-reset-example.html"
            ],
            "selector": "select-reset-example",
            "additionalComponents": [],
            "primaryFile": "select-reset-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-value-binding": {
            "packagePath": "material/select/select-value-binding",
            "title": "Select with 2-way value binding",
            "componentName": "SelectValueBindingExample",
            "files": [
                "select-value-binding-example.ts",
                "select-value-binding-example.html"
            ],
            "selector": "select-value-binding-example",
            "additionalComponents": [],
            "primaryFile": "select-value-binding-example.ts",
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "sidenav-autosize": {
            "packagePath": "material/sidenav/sidenav-autosize",
            "title": "Autosize sidenav",
            "componentName": "SidenavAutosizeExample",
            "files": [
                "sidenav-autosize-example.ts",
                "sidenav-autosize-example.html",
                "sidenav-autosize-example.css"
            ],
            "selector": "sidenav-autosize-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-autosize-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-backdrop": {
            "packagePath": "material/sidenav/sidenav-backdrop",
            "title": "Drawer with explicit backdrop setting",
            "componentName": "SidenavBackdropExample",
            "files": [
                "sidenav-backdrop-example.ts",
                "sidenav-backdrop-example.html",
                "sidenav-backdrop-example.css"
            ],
            "selector": "sidenav-backdrop-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-backdrop-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-disable-close": {
            "packagePath": "material/sidenav/sidenav-disable-close",
            "title": "Sidenav with custom escape and backdrop click behavior",
            "componentName": "SidenavDisableCloseExample",
            "files": [
                "sidenav-disable-close-example.ts",
                "sidenav-disable-close-example.html",
                "sidenav-disable-close-example.css"
            ],
            "selector": "sidenav-disable-close-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-disable-close-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-drawer-overview": {
            "packagePath": "material/sidenav/sidenav-drawer-overview",
            "title": "Basic drawer",
            "componentName": "SidenavDrawerOverviewExample",
            "files": [
                "sidenav-drawer-overview-example.ts",
                "sidenav-drawer-overview-example.html",
                "sidenav-drawer-overview-example.css"
            ],
            "selector": "sidenav-drawer-overview-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-drawer-overview-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-fixed": {
            "packagePath": "material/sidenav/sidenav-fixed",
            "title": "Fixed sidenav",
            "componentName": "SidenavFixedExample",
            "files": [
                "sidenav-fixed-example.ts",
                "sidenav-fixed-example.html",
                "sidenav-fixed-example.css"
            ],
            "selector": "sidenav-fixed-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-fixed-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-mode": {
            "packagePath": "material/sidenav/sidenav-mode",
            "title": "Sidenav with configurable mode",
            "componentName": "SidenavModeExample",
            "files": [
                "sidenav-mode-example.ts",
                "sidenav-mode-example.html",
                "sidenav-mode-example.css"
            ],
            "selector": "sidenav-mode-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-mode-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-open-close": {
            "packagePath": "material/sidenav/sidenav-open-close",
            "title": "Sidenav open & close behavior",
            "componentName": "SidenavOpenCloseExample",
            "files": [
                "sidenav-open-close-example.ts",
                "sidenav-open-close-example.html",
                "sidenav-open-close-example.css"
            ],
            "selector": "sidenav-open-close-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-open-close-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-overview": {
            "packagePath": "material/sidenav/sidenav-overview",
            "title": "Basic sidenav",
            "componentName": "SidenavOverviewExample",
            "files": [
                "sidenav-overview-example.ts",
                "sidenav-overview-example.html",
                "sidenav-overview-example.css"
            ],
            "selector": "sidenav-overview-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-overview-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-position": {
            "packagePath": "material/sidenav/sidenav-position",
            "title": "Implicit main content with two sidenavs",
            "componentName": "SidenavPositionExample",
            "files": [
                "sidenav-position-example.ts",
                "sidenav-position-example.html",
                "sidenav-position-example.css"
            ],
            "selector": "sidenav-position-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-position-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-responsive": {
            "packagePath": "material/sidenav/sidenav-responsive",
            "title": "Responsive sidenav",
            "componentName": "SidenavResponsiveExample",
            "files": [
                "sidenav-responsive-example.ts",
                "sidenav-responsive-example.html",
                "sidenav-responsive-example.css"
            ],
            "selector": "sidenav-responsive-example",
            "additionalComponents": [],
            "primaryFile": "sidenav-responsive-example.ts",
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "slide-toggle-configurable": {
            "packagePath": "material/slide-toggle/slide-toggle-configurable",
            "title": "Configurable slide-toggle",
            "componentName": "SlideToggleConfigurableExample",
            "files": [
                "slide-toggle-configurable-example.ts",
                "slide-toggle-configurable-example.html",
                "slide-toggle-configurable-example.css"
            ],
            "selector": "slide-toggle-configurable-example",
            "additionalComponents": [],
            "primaryFile": "slide-toggle-configurable-example.ts",
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slide-toggle-forms": {
            "packagePath": "material/slide-toggle/slide-toggle-forms",
            "title": "Slide-toggle with forms",
            "componentName": "SlideToggleFormsExample",
            "files": [
                "slide-toggle-forms-example.ts",
                "./slide-toggle-forms-example.html",
                "./slide-toggle-forms-example.css"
            ],
            "selector": "slide-toggle-forms-example",
            "additionalComponents": [],
            "primaryFile": "slide-toggle-forms-example.ts",
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slide-toggle-overview": {
            "packagePath": "material/slide-toggle/slide-toggle-overview",
            "title": "Basic slide-toggles",
            "componentName": "SlideToggleOverviewExample",
            "files": [
                "slide-toggle-overview-example.ts",
                "slide-toggle-overview-example.html"
            ],
            "selector": "slide-toggle-overview-example",
            "additionalComponents": [],
            "primaryFile": "slide-toggle-overview-example.ts",
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slider-configurable": {
            "packagePath": "material/slider/slider-configurable",
            "title": "Configurable slider",
            "componentName": "SliderConfigurableExample",
            "files": [
                "slider-configurable-example.ts",
                "slider-configurable-example.html",
                "slider-configurable-example.css"
            ],
            "selector": "slider-configurable-example",
            "additionalComponents": [],
            "primaryFile": "slider-configurable-example.ts",
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "slider-formatting": {
            "packagePath": "material/slider/slider-formatting",
            "title": "Slider with custom thumb label formatting.",
            "componentName": "SliderFormattingExample",
            "files": [
                "slider-formatting-example.ts",
                "slider-formatting-example.html",
                "slider-formatting-example.css"
            ],
            "selector": "slider-formatting-example",
            "additionalComponents": [],
            "primaryFile": "slider-formatting-example.ts",
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "slider-overview": {
            "packagePath": "material/slider/slider-overview",
            "title": "Basic slider",
            "componentName": "SliderOverviewExample",
            "files": [
                "slider-overview-example.ts",
                "slider-overview-example.html",
                "slider-overview-example.css"
            ],
            "selector": "slider-overview-example",
            "additionalComponents": [],
            "primaryFile": "slider-overview-example.ts",
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "snack-bar-component": {
            "packagePath": "material/snack-bar/snack-bar-component",
            "title": "Snack-bar with a custom component",
            "componentName": "SnackBarComponentExample",
            "files": [
                "snack-bar-component-example.ts",
                "snack-bar-component-example.html",
                "snack-bar-component-example.css",
                "snack-bar-component-example-snack.html"
            ],
            "selector": "snack-bar-component-example",
            "additionalComponents": [
                "PizzaPartyComponent"
            ],
            "primaryFile": "snack-bar-component-example.ts",
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "snack-bar-overview": {
            "packagePath": "material/snack-bar/snack-bar-overview",
            "title": "Basic snack-bar",
            "componentName": "SnackBarOverviewExample",
            "files": [
                "snack-bar-overview-example.ts",
                "snack-bar-overview-example.html",
                "snack-bar-overview-example.css"
            ],
            "selector": "snack-bar-overview-example",
            "additionalComponents": [],
            "primaryFile": "snack-bar-overview-example.ts",
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "snack-bar-position": {
            "packagePath": "material/snack-bar/snack-bar-position",
            "title": "Snack-bar with configurable position",
            "componentName": "SnackBarPositionExample",
            "files": [
                "snack-bar-position-example.ts",
                "snack-bar-position-example.html",
                "snack-bar-position-example.css"
            ],
            "selector": "snack-bar-position-example",
            "additionalComponents": [],
            "primaryFile": "snack-bar-position-example.ts",
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "sort-overview": {
            "packagePath": "material/sort/sort-overview",
            "title": "Sorting overview",
            "componentName": "SortOverviewExample",
            "files": [
                "sort-overview-example.ts",
                "sort-overview-example.html",
                "sort-overview-example.css"
            ],
            "selector": "sort-overview-example",
            "additionalComponents": [],
            "primaryFile": "sort-overview-example.ts",
            "module": {
                "name": "SortExamplesModule",
                "importSpecifier": "material/sort"
            }
        },
        "stepper-editable": {
            "packagePath": "material/stepper/stepper-editable",
            "title": "Stepper with editable steps",
            "componentName": "StepperEditableExample",
            "files": [
                "stepper-editable-example.ts",
                "stepper-editable-example.html",
                "stepper-editable-example.css"
            ],
            "selector": "stepper-editable-example",
            "additionalComponents": [],
            "primaryFile": "stepper-editable-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-errors": {
            "packagePath": "material/stepper/stepper-errors",
            "title": "Stepper that displays errors in the steps",
            "componentName": "StepperErrorsExample",
            "files": [
                "stepper-errors-example.ts",
                "stepper-errors-example.html",
                "stepper-errors-example.css"
            ],
            "selector": "stepper-errors-example",
            "additionalComponents": [],
            "primaryFile": "stepper-errors-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-label-position-bottom": {
            "packagePath": "material/stepper/stepper-label-position-bottom",
            "title": "Stepper label bottom position",
            "componentName": "StepperLabelPositionBottomExample",
            "files": [
                "stepper-label-position-bottom-example.ts",
                "stepper-label-position-bottom-example.html",
                "stepper-label-position-bottom-example.css"
            ],
            "selector": "stepper-label-position-bottom-example",
            "additionalComponents": [],
            "primaryFile": "stepper-label-position-bottom-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-optional": {
            "packagePath": "material/stepper/stepper-optional",
            "title": "Stepper with optional steps",
            "componentName": "StepperOptionalExample",
            "files": [
                "stepper-optional-example.ts",
                "stepper-optional-example.html",
                "stepper-optional-example.css"
            ],
            "selector": "stepper-optional-example",
            "additionalComponents": [],
            "primaryFile": "stepper-optional-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-overview": {
            "packagePath": "material/stepper/stepper-overview",
            "title": "Stepper overview",
            "componentName": "StepperOverviewExample",
            "files": [
                "stepper-overview-example.ts",
                "stepper-overview-example.html",
                "stepper-overview-example.css"
            ],
            "selector": "stepper-overview-example",
            "additionalComponents": [],
            "primaryFile": "stepper-overview-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-states": {
            "packagePath": "material/stepper/stepper-states",
            "title": "Stepper with customized states",
            "componentName": "StepperStatesExample",
            "files": [
                "stepper-states-example.ts",
                "stepper-states-example.html",
                "stepper-states-example.css"
            ],
            "selector": "stepper-states-example",
            "additionalComponents": [],
            "primaryFile": "stepper-states-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-vertical": {
            "packagePath": "material/stepper/stepper-vertical",
            "title": "Stepper vertical",
            "componentName": "StepperVerticalExample",
            "files": [
                "stepper-vertical-example.ts",
                "stepper-vertical-example.html",
                "stepper-vertical-example.css"
            ],
            "selector": "stepper-vertical-example",
            "additionalComponents": [],
            "primaryFile": "stepper-vertical-example.ts",
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "table-basic": {
            "packagePath": "material/table/table-basic",
            "title": "Basic use of `<table mat-table>`",
            "componentName": "TableBasicExample",
            "files": [
                "table-basic-example.ts",
                "table-basic-example.html",
                "table-basic-example.css"
            ],
            "selector": "table-basic-example",
            "additionalComponents": [],
            "primaryFile": "table-basic-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-dynamic-columns": {
            "packagePath": "material/table/table-dynamic-columns",
            "title": "Table dynamically changing the columns displayed",
            "componentName": "TableDynamicColumnsExample",
            "files": [
                "table-dynamic-columns-example.ts",
                "table-dynamic-columns-example.html",
                "table-dynamic-columns-example.css"
            ],
            "selector": "table-dynamic-columns-example",
            "additionalComponents": [],
            "primaryFile": "table-dynamic-columns-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-expandable-rows": {
            "packagePath": "material/table/table-expandable-rows",
            "title": "Table with expandable rows",
            "componentName": "TableExpandableRowsExample",
            "files": [
                "table-expandable-rows-example.ts",
                "table-expandable-rows-example.html",
                "table-expandable-rows-example.css"
            ],
            "selector": "table-expandable-rows-example",
            "additionalComponents": [],
            "primaryFile": "table-expandable-rows-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-filtering": {
            "packagePath": "material/table/table-filtering",
            "title": "Table with filtering",
            "componentName": "TableFilteringExample",
            "files": [
                "table-filtering-example.ts",
                "table-filtering-example.html",
                "table-filtering-example.css"
            ],
            "selector": "table-filtering-example",
            "additionalComponents": [],
            "primaryFile": "table-filtering-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-flex-basic": {
            "packagePath": "material/table/table-flex-basic",
            "title": "Basic use of `<mat-table>` (uses display flex)",
            "componentName": "TableFlexBasicExample",
            "files": [
                "table-flex-basic-example.ts",
                "table-flex-basic-example.html",
                "table-flex-basic-example.css"
            ],
            "selector": "table-flex-basic-example",
            "additionalComponents": [],
            "primaryFile": "table-flex-basic-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-footer-row": {
            "packagePath": "material/table/table-footer-row",
            "title": "Footer row table",
            "componentName": "TableFooterRowExample",
            "files": [
                "table-footer-row-example.ts",
                "table-footer-row-example.html",
                "table-footer-row-example.css"
            ],
            "selector": "table-footer-row-example",
            "additionalComponents": [],
            "primaryFile": "table-footer-row-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-harness": {
            "packagePath": "material/table/table-harness",
            "title": "Testing with MatTableHarness",
            "componentName": "TableHarnessExample",
            "files": [
                "table-harness-example.ts",
                "table-harness-example.html",
                "table-harness-example.spec.ts"
            ],
            "selector": "table-harness-example",
            "additionalComponents": [],
            "primaryFile": "table-harness-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-http": {
            "packagePath": "material/table/table-http",
            "title": "Table retrieving data through HTTP",
            "componentName": "TableHttpExample",
            "files": [
                "table-http-example.ts",
                "table-http-example.html",
                "table-http-example.css"
            ],
            "selector": "table-http-example",
            "additionalComponents": [],
            "primaryFile": "table-http-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-multiple-header-footer": {
            "packagePath": "material/table/table-multiple-header-footer",
            "title": "Table with multiple header and footer rows",
            "componentName": "TableMultipleHeaderFooterExample",
            "files": [
                "table-multiple-header-footer-example.ts",
                "table-multiple-header-footer-example.html",
                "table-multiple-header-footer-example.css"
            ],
            "selector": "table-multiple-header-footer-example",
            "additionalComponents": [],
            "primaryFile": "table-multiple-header-footer-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-overview": {
            "packagePath": "material/table/table-overview",
            "title": "Data table with sorting, pagination, and filtering.",
            "componentName": "TableOverviewExample",
            "files": [
                "table-overview-example.ts",
                "table-overview-example.html",
                "table-overview-example.css"
            ],
            "selector": "table-overview-example",
            "additionalComponents": [],
            "primaryFile": "table-overview-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-pagination": {
            "packagePath": "material/table/table-pagination",
            "title": "Table with pagination",
            "componentName": "TablePaginationExample",
            "files": [
                "table-pagination-example.ts",
                "table-pagination-example.html",
                "table-pagination-example.css"
            ],
            "selector": "table-pagination-example",
            "additionalComponents": [],
            "primaryFile": "table-pagination-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-reorderable": {
            "packagePath": "material/table/table-reorderable",
            "title": "Table with re-orderable columns",
            "componentName": "TableReorderableExample",
            "files": [
                "table-reorderable-example.ts",
                "./table-reorderable-example.html",
                "./table-reorderable-example.css"
            ],
            "selector": "table-reorderable-example",
            "additionalComponents": [],
            "primaryFile": "table-reorderable-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-row-context": {
            "packagePath": "material/table/table-row-context",
            "title": "Table showing each row context properties.",
            "componentName": "TableRowContextExample",
            "files": [
                "table-row-context-example.ts",
                "table-row-context-example.html",
                "table-row-context-example.css"
            ],
            "selector": "table-row-context-example",
            "additionalComponents": [],
            "primaryFile": "table-row-context-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-selection": {
            "packagePath": "material/table/table-selection",
            "title": "Table with selection",
            "componentName": "TableSelectionExample",
            "files": [
                "table-selection-example.ts",
                "table-selection-example.html",
                "table-selection-example.css"
            ],
            "selector": "table-selection-example",
            "additionalComponents": [],
            "primaryFile": "table-selection-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sorting": {
            "packagePath": "material/table/table-sorting",
            "title": "Table with sorting",
            "componentName": "TableSortingExample",
            "files": [
                "table-sorting-example.ts",
                "table-sorting-example.html",
                "table-sorting-example.css"
            ],
            "selector": "table-sorting-example",
            "additionalComponents": [],
            "primaryFile": "table-sorting-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-columns": {
            "packagePath": "material/table/table-sticky-columns",
            "title": "Table with sticky columns",
            "componentName": "TableStickyColumnsExample",
            "files": [
                "table-sticky-columns-example.ts",
                "table-sticky-columns-example.html",
                "table-sticky-columns-example.css"
            ],
            "selector": "table-sticky-columns-example",
            "additionalComponents": [],
            "primaryFile": "table-sticky-columns-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-complex-flex": {
            "packagePath": "material/table/table-sticky-complex-flex",
            "title": "Flex-layout tables with toggle-able sticky headers, footers, and columns",
            "componentName": "TableStickyComplexFlexExample",
            "files": [
                "table-sticky-complex-flex-example.ts",
                "table-sticky-complex-flex-example.html",
                "table-sticky-complex-flex-example.css"
            ],
            "selector": "table-sticky-complex-flex-example",
            "additionalComponents": [],
            "primaryFile": "table-sticky-complex-flex-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-complex": {
            "packagePath": "material/table/table-sticky-complex",
            "title": "Tables with toggle-able sticky headers, footers, and columns",
            "componentName": "TableStickyComplexExample",
            "files": [
                "table-sticky-complex-example.ts",
                "table-sticky-complex-example.html",
                "table-sticky-complex-example.css"
            ],
            "selector": "table-sticky-complex-example",
            "additionalComponents": [],
            "primaryFile": "table-sticky-complex-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-footer": {
            "packagePath": "material/table/table-sticky-footer",
            "title": "Table with a sticky footer",
            "componentName": "TableStickyFooterExample",
            "files": [
                "table-sticky-footer-example.ts",
                "table-sticky-footer-example.html",
                "table-sticky-footer-example.css"
            ],
            "selector": "table-sticky-footer-example",
            "additionalComponents": [],
            "primaryFile": "table-sticky-footer-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-header": {
            "packagePath": "material/table/table-sticky-header",
            "title": "Table with sticky header",
            "componentName": "TableStickyHeaderExample",
            "files": [
                "table-sticky-header-example.ts",
                "table-sticky-header-example.html",
                "table-sticky-header-example.css"
            ],
            "selector": "table-sticky-header-example",
            "additionalComponents": [],
            "primaryFile": "table-sticky-header-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-text-column-advanced": {
            "packagePath": "material/table/table-text-column-advanced",
            "title": "Use of 'mat-text-column' with various configurations of the interface.",
            "componentName": "TableTextColumnAdvancedExample",
            "files": [
                "table-text-column-advanced-example.ts",
                "table-text-column-advanced-example.html",
                "table-text-column-advanced-example.css"
            ],
            "selector": "table-text-column-advanced-example",
            "additionalComponents": [],
            "primaryFile": "table-text-column-advanced-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-text-column": {
            "packagePath": "material/table/table-text-column",
            "title": "Use of `mat-text-column` which can be used for simple columns that only need to display\na text value for the header and cells.",
            "componentName": "TableTextColumnExample",
            "files": [
                "table-text-column-example.ts",
                "table-text-column-example.html",
                "table-text-column-example.css"
            ],
            "selector": "table-text-column-example",
            "additionalComponents": [],
            "primaryFile": "table-text-column-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-wrapped": {
            "packagePath": "material/table/table-wrapped",
            "title": "Table example that shows how to wrap a table component for definition and behavior reuse.",
            "componentName": "TableWrappedExample",
            "files": [
                "table-wrapped-example.ts",
                "table-wrapped-example.html",
                "table-wrapped-example.css",
                "wrapper-table.html"
            ],
            "selector": "table-wrapped-example",
            "additionalComponents": [
                "WrapperTable"
            ],
            "primaryFile": "table-wrapped-example.ts",
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "tab-group-align": {
            "packagePath": "material/tabs/tab-group-align",
            "title": "Tab group with aligned labels",
            "componentName": "TabGroupAlignExample",
            "files": [
                "tab-group-align-example.ts",
                "tab-group-align-example.html",
                "tab-group-align-example.css"
            ],
            "selector": "tab-group-align-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-align-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-animations": {
            "packagePath": "material/tabs/tab-group-animations",
            "title": "Tab group animations",
            "componentName": "TabGroupAnimationsExample",
            "files": [
                "tab-group-animations-example.ts",
                "tab-group-animations-example.html",
                "tab-group-animations-example.css"
            ],
            "selector": "tab-group-animations-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-animations-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-async": {
            "packagePath": "material/tabs/tab-group-async",
            "title": "Tab group with asynchronously loading tab contents",
            "componentName": "TabGroupAsyncExample",
            "files": [
                "tab-group-async-example.ts",
                "tab-group-async-example.html"
            ],
            "selector": "tab-group-async-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-async-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-basic": {
            "packagePath": "material/tabs/tab-group-basic",
            "title": "Basic use of the tab group",
            "componentName": "TabGroupBasicExample",
            "files": [
                "tab-group-basic-example.ts",
                "tab-group-basic-example.html"
            ],
            "selector": "tab-group-basic-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-basic-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-custom-label": {
            "packagePath": "material/tabs/tab-group-custom-label",
            "title": "Using tabs with a custom label template",
            "componentName": "TabGroupCustomLabelExample",
            "files": [
                "tab-group-custom-label-example.ts",
                "tab-group-custom-label-example.html",
                "tab-group-custom-label-example.css"
            ],
            "selector": "tab-group-custom-label-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-custom-label-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-dynamic-height": {
            "packagePath": "material/tabs/tab-group-dynamic-height",
            "title": "Tab group with dynamic height based on tab contents",
            "componentName": "TabGroupDynamicHeightExample",
            "files": [
                "tab-group-dynamic-height-example.ts",
                "tab-group-dynamic-height-example.html",
                "tab-group-dynamic-height-example.css"
            ],
            "selector": "tab-group-dynamic-height-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-dynamic-height-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-dynamic": {
            "packagePath": "material/tabs/tab-group-dynamic",
            "title": "Tab group with dynamically changing tabs",
            "componentName": "TabGroupDynamicExample",
            "files": [
                "tab-group-dynamic-example.ts",
                "tab-group-dynamic-example.html",
                "tab-group-dynamic-example.css"
            ],
            "selector": "tab-group-dynamic-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-dynamic-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-harness": {
            "packagePath": "material/tabs/tab-group-harness",
            "title": "Testing with MatTabGroupHarness",
            "componentName": "TabGroupHarnessExample",
            "files": [
                "tab-group-harness-example.ts",
                "tab-group-harness-example.html",
                "tab-group-harness-example.spec.ts"
            ],
            "selector": "tab-group-harness-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-harness-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-header-below": {
            "packagePath": "material/tabs/tab-group-header-below",
            "title": "Tab group with the headers on the bottom",
            "componentName": "TabGroupHeaderBelowExample",
            "files": [
                "tab-group-header-below-example.ts",
                "tab-group-header-below-example.html"
            ],
            "selector": "tab-group-header-below-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-header-below-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-lazy-loaded": {
            "packagePath": "material/tabs/tab-group-lazy-loaded",
            "title": "Tab group where the tab content is loaded lazily (when activated)",
            "componentName": "TabGroupLazyLoadedExample",
            "files": [
                "tab-group-lazy-loaded-example.ts",
                "tab-group-lazy-loaded-example.html"
            ],
            "selector": "tab-group-lazy-loaded-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-lazy-loaded-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-stretched": {
            "packagePath": "material/tabs/tab-group-stretched",
            "title": "Tab group with stretched labels",
            "componentName": "TabGroupStretchedExample",
            "files": [
                "tab-group-stretched-example.ts",
                "tab-group-stretched-example.html",
                "tab-group-stretched-example.css"
            ],
            "selector": "tab-group-stretched-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-stretched-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-theme": {
            "packagePath": "material/tabs/tab-group-theme",
            "title": "Customizing the theme options on the tab group",
            "componentName": "TabGroupThemeExample",
            "files": [
                "tab-group-theme-example.ts",
                "tab-group-theme-example.html",
                "tab-group-theme-example.css"
            ],
            "selector": "tab-group-theme-example",
            "additionalComponents": [],
            "primaryFile": "tab-group-theme-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-nav-bar-basic": {
            "packagePath": "material/tabs/tab-nav-bar-basic",
            "title": "Basic use of the tab nav bar",
            "componentName": "TabNavBarBasicExample",
            "files": [
                "tab-nav-bar-basic-example.ts",
                "tab-nav-bar-basic-example.html",
                "tab-nav-bar-basic-example.css"
            ],
            "selector": "tab-nav-bar-basic-example",
            "additionalComponents": [],
            "primaryFile": "tab-nav-bar-basic-example.ts",
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "toolbar-basic": {
            "packagePath": "material/toolbar/toolbar-basic",
            "title": "Basic toolbar",
            "componentName": "ToolbarBasicExample",
            "files": [
                "toolbar-basic-example.ts",
                "toolbar-basic-example.html",
                "toolbar-basic-example.css"
            ],
            "selector": "toolbar-basic-example",
            "additionalComponents": [],
            "primaryFile": "toolbar-basic-example.ts",
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "toolbar-harness": {
            "packagePath": "material/toolbar/toolbar-harness",
            "title": "Testing with MatToolbarHarness",
            "componentName": "ToolbarHarnessExample",
            "files": [
                "toolbar-harness-example.ts",
                "toolbar-harness-example.html",
                "toolbar-harness-example.spec.ts"
            ],
            "selector": "toolbar-harness-example",
            "additionalComponents": [],
            "primaryFile": "toolbar-harness-example.ts",
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "toolbar-multirow": {
            "packagePath": "material/toolbar/toolbar-multirow",
            "title": "Multi-row toolbar",
            "componentName": "ToolbarMultirowExample",
            "files": [
                "toolbar-multirow-example.ts",
                "toolbar-multirow-example.html",
                "toolbar-multirow-example.css"
            ],
            "selector": "toolbar-multirow-example",
            "additionalComponents": [],
            "primaryFile": "toolbar-multirow-example.ts",
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "toolbar-overview": {
            "packagePath": "material/toolbar/toolbar-overview",
            "title": "Toolbar overview",
            "componentName": "ToolbarOverviewExample",
            "files": [
                "toolbar-overview-example.ts",
                "toolbar-overview-example.html",
                "toolbar-overview-example.css"
            ],
            "selector": "toolbar-overview-example",
            "additionalComponents": [],
            "primaryFile": "toolbar-overview-example.ts",
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "tooltip-auto-hide": {
            "packagePath": "material/tooltip/tooltip-auto-hide",
            "title": "Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.",
            "componentName": "TooltipAutoHideExample",
            "files": [
                "tooltip-auto-hide-example.ts",
                "tooltip-auto-hide-example.html",
                "tooltip-auto-hide-example.css"
            ],
            "selector": "tooltip-auto-hide-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-auto-hide-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-custom-class": {
            "packagePath": "material/tooltip/tooltip-custom-class",
            "title": "Tooltip that can have a custom class applied.",
            "componentName": "TooltipCustomClassExample",
            "files": [
                "tooltip-custom-class-example.ts",
                "tooltip-custom-class-example.html",
                "tooltip-custom-class-example.css"
            ],
            "selector": "tooltip-custom-class-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-custom-class-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-delay": {
            "packagePath": "material/tooltip/tooltip-delay",
            "title": "Tooltip with a show and hide delay",
            "componentName": "TooltipDelayExample",
            "files": [
                "tooltip-delay-example.ts",
                "tooltip-delay-example.html",
                "tooltip-delay-example.css"
            ],
            "selector": "tooltip-delay-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-delay-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-disabled": {
            "packagePath": "material/tooltip/tooltip-disabled",
            "title": "Tooltip that can be disabled",
            "componentName": "TooltipDisabledExample",
            "files": [
                "tooltip-disabled-example.ts",
                "tooltip-disabled-example.html",
                "tooltip-disabled-example.css"
            ],
            "selector": "tooltip-disabled-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-disabled-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-harness": {
            "packagePath": "material/tooltip/tooltip-harness",
            "title": "Testing with MatTooltipHarness",
            "componentName": "TooltipHarnessExample",
            "files": [
                "tooltip-harness-example.ts",
                "tooltip-harness-example.html",
                "tooltip-harness-example.spec.ts"
            ],
            "selector": "tooltip-harness-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-harness-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-manual": {
            "packagePath": "material/tooltip/tooltip-manual",
            "title": "Tooltip that can be manually shown/hidden.",
            "componentName": "TooltipManualExample",
            "files": [
                "tooltip-manual-example.ts",
                "tooltip-manual-example.html",
                "tooltip-manual-example.css"
            ],
            "selector": "tooltip-manual-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-manual-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-message": {
            "packagePath": "material/tooltip/tooltip-message",
            "title": "Tooltip with a changing message",
            "componentName": "TooltipMessageExample",
            "files": [
                "tooltip-message-example.ts",
                "tooltip-message-example.html",
                "tooltip-message-example.css"
            ],
            "selector": "tooltip-message-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-message-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-modified-defaults": {
            "packagePath": "material/tooltip/tooltip-modified-defaults",
            "title": "Tooltip with a show and hide delay",
            "componentName": "TooltipModifiedDefaultsExample",
            "files": [
                "tooltip-modified-defaults-example.ts",
                "tooltip-modified-defaults-example.html"
            ],
            "selector": "tooltip-modified-defaults-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-modified-defaults-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-overview": {
            "packagePath": "material/tooltip/tooltip-overview",
            "title": "Basic tooltip",
            "componentName": "TooltipOverviewExample",
            "files": [
                "tooltip-overview-example.ts",
                "tooltip-overview-example.html"
            ],
            "selector": "tooltip-overview-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-overview-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-position": {
            "packagePath": "material/tooltip/tooltip-position",
            "title": "Tooltip with a custom position",
            "componentName": "TooltipPositionExample",
            "files": [
                "tooltip-position-example.ts",
                "tooltip-position-example.html",
                "tooltip-position-example.css"
            ],
            "selector": "tooltip-position-example",
            "additionalComponents": [],
            "primaryFile": "tooltip-position-example.ts",
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tree-checklist": {
            "packagePath": "material/tree/tree-checklist",
            "title": "Tree with checkboxes",
            "componentName": "TreeChecklistExample",
            "files": [
                "tree-checklist-example.ts",
                "tree-checklist-example.html",
                "tree-checklist-example.css"
            ],
            "selector": "tree-checklist-example",
            "additionalComponents": [],
            "primaryFile": "tree-checklist-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-dynamic": {
            "packagePath": "material/tree/tree-dynamic",
            "title": "Tree with dynamic data",
            "componentName": "TreeDynamicExample",
            "files": [
                "tree-dynamic-example.ts",
                "tree-dynamic-example.html",
                "tree-dynamic-example.css"
            ],
            "selector": "tree-dynamic-example",
            "additionalComponents": [],
            "primaryFile": "tree-dynamic-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-flat-overview": {
            "packagePath": "material/tree/tree-flat-overview",
            "title": "Tree with flat nodes",
            "componentName": "TreeFlatOverviewExample",
            "files": [
                "tree-flat-overview-example.ts",
                "tree-flat-overview-example.html",
                "tree-flat-overview-example.css"
            ],
            "selector": "tree-flat-overview-example",
            "additionalComponents": [],
            "primaryFile": "tree-flat-overview-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-harness": {
            "packagePath": "material/tree/tree-harness",
            "title": "Testing with MatTreeHarness",
            "componentName": "TreeHarnessExample",
            "files": [
                "tree-harness-example.ts",
                "tree-harness-example.html",
                "tree-harness-example.spec.ts"
            ],
            "selector": "tree-harness-example",
            "additionalComponents": [],
            "primaryFile": "tree-harness-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-loadmore": {
            "packagePath": "material/tree/tree-loadmore",
            "title": "Tree with partially loaded data",
            "componentName": "TreeLoadmoreExample",
            "files": [
                "tree-loadmore-example.ts",
                "tree-loadmore-example.html",
                "tree-loadmore-example.css"
            ],
            "selector": "tree-loadmore-example",
            "additionalComponents": [],
            "primaryFile": "tree-loadmore-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-nested-overview": {
            "packagePath": "material/tree/tree-nested-overview",
            "title": "Tree with nested nodes",
            "componentName": "TreeNestedOverviewExample",
            "files": [
                "tree-nested-overview-example.ts",
                "tree-nested-overview-example.html",
                "tree-nested-overview-example.css"
            ],
            "selector": "tree-nested-overview-example",
            "additionalComponents": [],
            "primaryFile": "tree-nested-overview-example.ts",
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        }
    };

    /**
     * Example data with information about component name, selector, files used in
     * example, and path to examples.
     */
    var ExampleData = /** @class */ (function () {
        function ExampleData(example) {
            if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
                return;
            }
            var _a = EXAMPLE_COMPONENTS[example], componentName = _a.componentName, files = _a.files, selector = _a.selector, primaryFile = _a.primaryFile, additionalComponents = _a.additionalComponents, title = _a.title;
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            this.exampleFiles = files;
            this.selectorName = selector;
            this.indexFilename = primaryFile;
            this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
            this.componentNames = __spread([componentName], additionalComponents);
        }
        return ExampleData;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.ExampleData = ExampleData;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples.umd.js.map
