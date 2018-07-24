"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var icon_picker_service_1 = require("./icon-picker.service");
var icon_picker_component_1 = require("./icon-picker.component");
var icon_picker_directive_1 = require("./icon-picker.directive");
var text_directive_1 = require("./text.directive");
var search_icon_pipe_1 = require("./search-icon.pipe");
var IconPickerModule = (function () {
    function IconPickerModule() {
    }
    return IconPickerModule;
}());
IconPickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                providers: [
                    icon_picker_service_1.IconPickerService
                ],
                declarations: [
                    icon_picker_component_1.IconPickerComponent,
                    icon_picker_directive_1.IconPickerDirective,
                    text_directive_1.TextDirective,
                    search_icon_pipe_1.SearchIconPipe
                ],
                exports: [
                    icon_picker_directive_1.IconPickerDirective
                ],
                entryComponents: [
                    icon_picker_component_1.IconPickerComponent
                ]
            },] },
];
/** @nocollapse */
IconPickerModule.ctorParameters = function () { return []; };
exports.IconPickerModule = IconPickerModule;
//# sourceMappingURL=icon-picker.module.js.map