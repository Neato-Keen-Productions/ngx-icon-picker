"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_picker_component_1 = require("./icon-picker.component");
var IconPickerDirective = (function () {
    function IconPickerDirective(vcRef, el, cfr) {
        this.vcRef = vcRef;
        this.el = el;
        this.cfr = cfr;
        this.ipPlaceHolder = 'Search icon...';
        this.ipPosition = 'right';
        this.ipFallbackIcon = 'fa fa-user-plus';
        this.ipHeight = 'auto';
        this.ipMaxHeight = '200px';
        this.ipWidth = '230px';
        this.ipIconPack = 'all';
        this.iconPickerSelect = new core_1.EventEmitter(true);
        this.ignoreChanges = false;
        this.created = false;
    }
    IconPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.iconPicker) {
            this.ignoreChanges = false;
        }
    };
    IconPickerDirective.prototype.ngOnInit = function () {
        this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
        this.iconPickerSelect.emit(this.iconPicker);
    };
    IconPickerDirective.prototype.onClick = function () {
        this.openDialog();
    };
    IconPickerDirective.prototype.openDialog = function () {
        if (!this.created) {
            this.created = true;
            var vcRef = this.vcRef;
            var compFactory = this.cfr.resolveComponentFactory(icon_picker_component_1.IconPickerComponent);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            var cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight, this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack);
            this.dialog = cmpRef.instance;
            if (this.vcRef !== vcRef) {
                cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.iconPicker);
        }
    };
    IconPickerDirective.prototype.iconSelected = function (icon) {
        this.iconPickerSelect.emit(icon);
    };
    return IconPickerDirective;
}());
IconPickerDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[iconPicker]',
                host: {
                    '(click)': 'onClick()'
                }
            },] },
];
/** @nocollapse */
IconPickerDirective.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
    { type: core_1.ElementRef, },
    { type: core_1.ComponentFactoryResolver, },
]; };
IconPickerDirective.propDecorators = {
    'iconPicker': [{ type: core_1.Input, args: ['iconPicker',] },],
    'ipPlaceHolder': [{ type: core_1.Input, args: ['ipPlaceHolder',] },],
    'ipPosition': [{ type: core_1.Input, args: ['ipPosition',] },],
    'ipFallbackIcon': [{ type: core_1.Input, args: ['ipFallbackIcon',] },],
    'ipHeight': [{ type: core_1.Input, args: ['ipHeight',] },],
    'ipMaxHeight': [{ type: core_1.Input, args: ['ipMaxHeight',] },],
    'ipWidth': [{ type: core_1.Input, args: ['ipWidth',] },],
    'ipIconPack': [{ type: core_1.Input, args: ['ipIconPack',] },],
    'iconPickerSelect': [{ type: core_1.Output, args: ['iconPickerSelect',] },],
};
exports.IconPickerDirective = IconPickerDirective;
//# sourceMappingURL=icon-picker.directive.js.map