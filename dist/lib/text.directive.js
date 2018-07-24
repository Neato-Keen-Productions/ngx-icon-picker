"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new core_1.EventEmitter();
    }
    TextDirective.prototype.changeInput = function (value) {
        this.newValue.emit(value);
    };
    return TextDirective;
}());
TextDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[text]',
                host: {
                    '(input)': 'changeInput($event.target.value)'
                }
            },] },
];
/** @nocollapse */
TextDirective.ctorParameters = function () { return []; };
TextDirective.propDecorators = {
    'newValue': [{ type: core_1.Output, args: ['newValue',] },],
    'text': [{ type: core_1.Input, args: ['text',] },],
};
exports.TextDirective = TextDirective;
//# sourceMappingURL=text.directive.js.map