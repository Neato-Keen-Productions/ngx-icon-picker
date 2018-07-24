"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchIconPipe = (function () {
    function SearchIconPipe() {
    }
    SearchIconPipe.prototype.transform = function (value, search) {
        var _this = this;
        if (!search) {
            return value;
        }
        var searchValue = this.clean(search);
        return value.filter(function (icon) {
            var keep = false;
            if (icon.name) {
                keep = keep || _this.clean(icon.name).includes(searchValue);
            }
            if (icon.id) {
                keep = keep || _this.clean(icon.id).includes(searchValue);
            }
            if (icon.filter) {
                keep = keep || icon.filter.some(function (value) { return _this.clean(value).includes(searchValue); });
            }
            if (icon.aliases) {
                keep = keep || icon.aliases.some(function (value) { return _this.clean(value).includes(searchValue); });
            }
            return keep;
        });
    };
    SearchIconPipe.prototype.clean = function (value) {
        return value.trim().toLowerCase();
    };
    return SearchIconPipe;
}());
SearchIconPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'searchIcon'
            },] },
];
/** @nocollapse */
SearchIconPipe.ctorParameters = function () { return []; };
exports.SearchIconPipe = SearchIconPipe;
//# sourceMappingURL=search-icon.pipe.js.map