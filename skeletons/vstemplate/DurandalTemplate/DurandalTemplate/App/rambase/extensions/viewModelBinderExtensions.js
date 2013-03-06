define(function (require) {
    var viewModelBinder = require('durandal/viewModelBinder');

    var beforeBind = function (obj, view) {
        var kendoElements = $(view).find('[data-mvvm-framework=kendo]');
        $(kendoElements).wrapAll('<div data-bind="stopBinding: true"></div>');
        for (var i = 0; i < kendoElements.length; i++) {
            kendo.bind(kendoElements[i], obj.viewModel);
        }
    }


    return {
        extend: function () {
            //viewModelBinder.beforeBind = function (obj, view) {
            //    var kendoElements = $(view).find('[data-mvvm-framework=kendo]');
            //    $(kendoElements).wrapAll('<div data-bind="stopBinding: true"></div>');
            //    for (var i = 0; i < kendoElements.length; i++) {
            //        kendo.bind(kendoElements[i], obj.viewModel);
            //    }
            //};
            viewModelBinder.beforeBind = function (obj, view) {
                kendo.bind(view, obj.viewModel);
            };
        }

    }
        
});